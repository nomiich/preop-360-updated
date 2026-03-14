import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function requireAdmin() {
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [userRecord] = await db
    .select()
    .from(users)
    .where(eq(users.id, user.id));

  if (!userRecord || !userRecord.isAdmin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return { user: userRecord };
}

