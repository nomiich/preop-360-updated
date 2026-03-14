import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

function getUserIdFromAuthToken(token: string): string | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = JSON.parse(
      Buffer.from(parts[1], "base64url").toString("utf8")
    );
    return typeof payload.sub === "string" ? payload.sub : null;
  } catch {
    return null;
  }
}

async function getAuthenticatedUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (authToken) {
    const userId = getUserIdFromAuthToken(authToken);
    if (userId) return userId;
  }

  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (!error && user) return user.id;
  return null;
}

export async function PATCH(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { firstName?: string; lastName?: string; avatarUrl?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const updates: {
    firstName?: string | null;
    lastName?: string | null;
    avatarUrl?: string | null;
    updatedAt: Date;
  } = {
    updatedAt: new Date(),
  };

  if (typeof body.firstName === "string") {
    updates.firstName = body.firstName.trim() || null;
  }
  if (typeof body.lastName === "string") {
    updates.lastName = body.lastName.trim() || null;
  }
  if (typeof body.avatarUrl === "string") {
    updates.avatarUrl = body.avatarUrl.trim() || null;
  }

  const [updated] = await db
    .update(users)
    .set(updates)
    .where(eq(users.id, userId))
    .returning();

  if (!updated) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      id: updated.id,
      email: updated.email,
      firstName: updated.firstName,
      lastName: updated.lastName,
      avatarUrl: updated.avatarUrl,
      isAdmin: updated.isAdmin,
    },
  });
}
