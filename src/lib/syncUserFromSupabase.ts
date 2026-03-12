import type { User } from "@supabase/supabase-js";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function syncUserFromSupabase(authUser: User) {
  const authUserId = authUser.id;

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.id, authUserId));

  if (existing) {
    return existing;
  }

  const [created] = await db
    .insert(users)
    .values({
      id: authUserId,
      email: authUser.email ?? "",
      firstName: authUser.user_metadata?.first_name ?? null,
      lastName: authUser.user_metadata?.last_name ?? null,
      avatarUrl: authUser.user_metadata?.avatar_url ?? null,
    })
    .returning();

  return created;
}

