import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";

/**
 * Feedback submissions from users.
 * user_id references users.id (which is the auth user id from Supabase auth.users).
 */
export const feedback = pgTable("feedback", {
  id: uuid("id").primaryKey().defaultRandom(),
  /** References users.id (auth user id). users.id = auth.users.id in Supabase. */
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  feedback: text("feedback").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
