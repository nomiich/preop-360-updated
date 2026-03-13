import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { syncUserFromSupabase } from "@/lib/syncUserFromSupabase";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body as {
    email?: string;
    password?: string;
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

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user || !data.session) {
    console.error("Supabase signIn error:", error);
    return NextResponse.json(
      { error: error?.message ?? "Unable to sign in." },
      { status: 400 },
    );
  }

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
    accessToken: data.session.access_token,
    refreshToken: data.session.refresh_token,
  });
}

