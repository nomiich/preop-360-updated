import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { db } from "@/lib/db";
import { feedback } from "@/db/schema";

export async function POST(request: Request) {
  const supabase = getSupabaseServerClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { name?: string; email?: string; feedback?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const feedbackText = typeof body.feedback === "string" ? body.feedback.trim() : "";

  if (!name || !email || !feedbackText) {
    return NextResponse.json(
      { error: "Name, email, and feedback are required." },
      { status: 400 }
    );
  }

  try {
    await db.insert(feedback).values({
      userId: user.id,
      name,
      email,
      feedback: feedbackText,
    });
  } catch (err) {
    console.error("Feedback insert error:", err);
    return NextResponse.json(
      { error: "Failed to save feedback." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
