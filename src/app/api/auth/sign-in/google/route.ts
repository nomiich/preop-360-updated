import { NextResponse } from "next/server";
import { supabaseBrowserClient } from "@/lib/supabaseClient";
import { syncUserFromSupabase } from "@/lib/syncUserFromSupabase";

export async function POST(request: Request) {
  const body = await request.json();
  const { idToken, accessToken } = body as {
    idToken?: string;
    accessToken?: string;
  };

  if (!idToken && !accessToken) {
    return NextResponse.json(
      { error: "Google idToken or accessToken is required." },
      { status: 400 },
    );
  }

  const supabase = supabaseBrowserClient();

  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "google",
    token: idToken ?? accessToken ?? "",
  });

  if (error || !data.user || !data.session) {
    return NextResponse.json(
      { error: error?.message ?? "Unable to sign in with Google." },
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

