"use client";

import React, { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";

export default function UserInfoCard() {
  const { user, loading, error, refetch } = useCurrentUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (saving || !user) return;
    setSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          firstName: firstName.trim() || null,
          lastName: lastName.trim() || null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSaveMessage({ type: "error", text: data.error ?? "Failed to update profile." });
        return;
      }
      setSaveMessage({ type: "success", text: "Profile updated." });
      await refetch();
    } catch {
      setSaveMessage({ type: "error", text: "Failed to update profile." });
    } finally {
      setSaving(false);
    }
  }

  if (loading && !user) {
    return (
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <Label htmlFor="profile-first-name">First Name</Label>
              <Input
                id="profile-first-name"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={saving}
              />
            </div>

            <div>
              <Label htmlFor="profile-last-name">Last Name</Label>
              <Input
                id="profile-last-name"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={saving}
              />
            </div>

            <div className="lg:col-span-2">
              <Label htmlFor="profile-email">Email address</Label>
              <Input
                id="profile-email"
                type="email"
                value={user?.email ?? ""}
                disabled
              />
              <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                Email cannot be changed here.
              </p>
            </div>

            {error ? (
              <div className="lg:col-span-2">
                <p className="text-xs text-red-500">{error}</p>
              </div>
            ) : null}

            {saveMessage ? (
              <div className="lg:col-span-2">
                <p
                  className={
                    saveMessage.type === "success"
                      ? "text-sm text-green-600 dark:text-green-400"
                      : "text-sm text-red-600 dark:text-red-400"
                  }
                >
                  {saveMessage.text}
                </p>
              </div>
            ) : null}

            <div className="lg:col-span-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow transition hover:bg-blue-600 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                {saving ? "Saving..." : "Save changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

