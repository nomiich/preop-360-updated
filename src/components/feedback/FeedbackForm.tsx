"use client";

import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import React, { useEffect, useState } from "react";

export default function FeedbackForm() {
  const { user } = useCurrentUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setName([user.firstName, user.lastName].filter(Boolean).join(" ") || user.email || "");
      setEmail(user.email ?? "");
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedFeedback = feedbackText.trim();

    if (!trimmedName || !trimmedEmail || !trimmedFeedback) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          feedback: trimmedFeedback,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Failed to submit feedback.");
        return;
      }

      setStatus("success");
      setFeedbackText("");
    } catch {
      setStatus("error");
      setErrorMessage("Failed to submit feedback.");
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
        Send your feedback
      </h3>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
        <div>
          <Label htmlFor="feedback-name">Name</Label>
          <Input
            id="feedback-name"
            name="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <Label htmlFor="feedback-email">Email</Label>
          <Input
            id="feedback-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <Label htmlFor="feedback-message">Feedback</Label>
          <TextArea
            id="feedback-message"
            placeholder="Share your feedback, suggestions, or issues..."
            rows={5}
            value={feedbackText}
            onChange={setFeedbackText}
            disabled={status === "submitting"}
          />
        </div>
        {status === "error" && errorMessage && (
          <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
        )}
        {status === "success" && (
          <p className="text-sm text-green-600 dark:text-green-400">
            Thank you! Your feedback has been submitted.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow transition hover:bg-blue-600 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {status === "submitting" ? "Submitting…" : "Submit feedback"}
        </button>
      </form>
    </div>
  );
}
