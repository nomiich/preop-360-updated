"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const navItems = [
  { href: "/dashboard", label: "Home" },
  { href: "/dashboard/preop-assessment", label: "Preoperative Assessment" },
  { href: "/dashboard/medication-management", label: "Medication Management" },
  { href: "/dashboard/labs-to-get", label: "Labs to get" },
  { href: "/dashboard/subscription", label: "Subscription" },
  { href: "/dashboard/profile", label: "Profile" },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-bg-slate-soft text-text">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-border bg-white/80 px-4 py-6 shadow-sm backdrop-blur-md md:flex">
          <div className="mb-8 flex items-center gap-2 px-2">
            <div className="h-8 w-8 rounded-full gradient-primary" />
            <div>
              <p className="text-sm font-semibold tracking-tight">Preop360</p>
              <p className="text-xs text-text-light">
                Guideline-based preop assessments
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center rounded-xl px-3 py-2 text-sm transition-ui ${
                    isActive
                      ? "bg-primary/10 text-primary-dark"
                      : "text-text-light hover:bg-surface-50 hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6">
            <form action="/auth/sign-out" method="post">
              <button
                type="submit"
                className="w-full rounded-xl border border-border bg-white px-3 py-2 text-left text-sm text-text-light hover:bg-surface-50"
              >
                Log out
              </button>
            </form>
          </div>
        </aside>

        <main className="flex-1">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md md:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <div className="h-7 w-7 rounded-full gradient-primary" />
              <span className="text-sm font-semibold">Preop360</span>
            </div>
            <p className="text-xs text-text-lighter">
              Evidence-based guidance for safer surgeries.
            </p>
          </header>

          <div className="px-4 py-6 md:px-8 md:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

