import type { User } from "@supabase/supabase-js";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function syncUserFromSupabase(authUser: User) {
  const authUserId = authUser.id;
  const meta = authUser.user_metadata ?? {};
  const firstName = meta.first_name ?? null;
  const lastName = meta.last_name ?? null;
  const avatarUrl = meta.avatar_url ?? null;

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.id, authUserId));

  if (existing) {
    if (
      firstName !== null ||
      lastName !== null ||
      (avatarUrl !== null && existing.avatarUrl !== avatarUrl)
    ) {
      const [updated] = await db
        .update(users)
        .set({
          firstName: firstName ?? existing.firstName,
          lastName: lastName ?? existing.lastName,
          avatarUrl: avatarUrl ?? existing.avatarUrl,
          updatedAt: new Date(),
        })
        .where(eq(users.id, authUserId))
        .returning();
      return updated ?? existing;
    }
    return existing;
  }

  const [created] = await db
    .insert(users)
    .values({
      id: authUserId,
      email: authUser.email ?? "",
      firstName,
      lastName,
      avatarUrl,
    })
    .returning();

  return created;
}

