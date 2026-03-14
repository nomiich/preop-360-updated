import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  GaugeIcon,
  ShieldCheckIcon,
  MedicationIcon,
} from "@/components/dashboard/DashboardCardIcons";

export const metadata: Metadata = {
  title: "Dashboard | Preop 360",
  description: "Preop 360 Dashboard - Preoperative Risk Assessment, Labs to get, Medication Management",
};

const cards = [
  {
    title: "Preoperative Risk Assessment",
    href: "/preoperative-assessment",
    icon: GaugeIcon,
  },
  {
    title: "Labs to get",
    href: "/labs-to-get",
    icon: ShieldCheckIcon,
  },
  {
    title: "Medication Management",
    subtitle: "(Beta)",
    href: "/medication-management",
    icon: MedicationIcon,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100/80 p-6 dark:from-gray-900/50 dark:to-gray-800/30">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, subtitle, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-blue-900/50"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white transition-transform group-hover:scale-105 [&_svg]:text-white">
              <Icon className="size-8 shrink-0" />
            </div>
            <h3 className="mt-5 max-w-[200px] text-center text-base font-medium leading-snug text-gray-800 dark:text-white/90">
              {title}
            </h3>
            {subtitle && (
              <span className="mt-0.5 text-center text-sm text-gray-500 dark:text-gray-400">
                {subtitle}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
