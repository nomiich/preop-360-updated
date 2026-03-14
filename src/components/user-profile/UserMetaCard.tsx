"use client";

import Image from "next/image";
import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function UserMetaCard() {
  const { user, loading, error } = useCurrentUser();

  const fullName =
    (user?.firstName || user?.lastName) && user
      ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
      : user?.email ?? "User";

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
          <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
            <Image
              width={80}
              height={80}
              src={user?.avatarUrl || "/images/user/owner.jpg"}
              alt="user"
            />
          </div>
          <div className="order-3 xl:order-2">
            <h4 className="mb-1 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
              {loading ? "Loading..." : fullName}
            </h4>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 xl:text-left">
              {user?.email ?? "No email available"}
            </p>
            <p className="mt-1 text-xs text-center text-gray-400 dark:text-gray-500 xl:text-left">
              {user ? (user.isAdmin ? "Administrator" : "Standard user") : null}
            </p>
            {error ? (
              <p className="mt-2 text-xs text-red-500">{error}</p>
            ) : null}
          </div>
          {/* Social links and edit modal were static and not backed by the users table,
              so they are commented out / removed for now. */}
        </div>
      </div>
    </div>
  );
}

