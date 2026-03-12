import { NextResponse } from "next/server";
import { supabaseBrowserClient } from "@/lib/supabaseClient";
import { syncUserFromSupabase } from "@/lib/syncUserFromSupabase";

export async function POST(request: Request) {
  const body = await request.json();
  const { idToken } = body as {
    idToken?: string;
  };

  if (!idToken) {
    return NextResponse.json(
      { error: "Apple idToken is required." },
      { status: 400 },
    );
  }

  const supabase = supabaseBrowserClient();

  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "apple",
    token: idToken,
  });

  if (error || !data.user || !data.session) {
    return NextResponse.json(
      { error: error?.message ?? "Unable to sign in with Apple." },
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

