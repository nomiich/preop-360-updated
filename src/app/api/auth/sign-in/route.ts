import { NextResponse } from "next/server";
import { supabaseBrowserClient } from "@/lib/supabaseClient";
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

  const supabase = supabaseBrowserClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user || !data.session) {
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

