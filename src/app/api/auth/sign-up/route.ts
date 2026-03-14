import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { syncUserFromSupabase } from "@/lib/syncUserFromSupabase";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, firstName, lastName } = body as {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
  };

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseKey = serviceRoleKey ?? anonKey;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase environment variables are not set correctly.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });

  if (error || !data.user) {
    console.error("Supabase signUp error:", error);
    return NextResponse.json(
      { error: error?.message ?? "Unable to sign up." },
      { status: 400 },
    );
  }

  let session = data.session;

  // Auto-confirm email when no session (email confirmation was required) and we have service role.
  if (!session && data.user.id && serviceRoleKey) {
    const { error: confirmError } = await supabase.auth.admin.updateUserById(
      data.user.id,
      { email_confirm: true }
    );
    if (!confirmError) {
      const { data: signInData } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      session = signInData?.session ?? null;
    }
  }

  const userRecord = await syncUserFromSupabase(data.user);

  const response = NextResponse.json({
    user: {
      id: userRecord.id,
      email: userRecord.email,
      firstName: userRecord.firstName,
      lastName: userRecord.lastName,
      avatarUrl: userRecord.avatarUrl,
      isAdmin: userRecord.isAdmin,
    },
    accessToken: session?.access_token ?? null,
    refreshToken: session?.refresh_token ?? null,
  });

  if (session?.access_token) {
    response.cookies.set("auth_token", session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

