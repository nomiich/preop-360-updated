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
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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
  // Note: depending on your Supabase email confirmation settings, `data.session`
  // can be null here. We only require that the user record was created.
  const userRecord = await syncUserFromSupabase(data.user);

  return NextResponse.json({
    user: {
      id: userRecord.id,
      email: userRecord.email,
      firstName: userRecord.firstName,
      lastName: userRecord.lastName,
      avatarUrl: userRecord.avatarUrl,
      isAdmin: userRecord.isAdmin,
    },
    accessToken: data.session?.access_token ?? null,
    refreshToken: data.session?.refresh_token ?? null,
  });
}

