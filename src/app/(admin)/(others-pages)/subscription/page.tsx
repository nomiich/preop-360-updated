import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Subscription | Preop 360",
  description: "Manage subscription options and plans for the preop platform.",
};

export default function SubscriptionPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Subscription" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[720px]">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">
            Subscription
          </h3>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            This page will contain pricing, plan details, and subscription
            management for your users. You can extend it with billing history,
            upgrade/downgrade controls, and payment integrations.
          </p>
        </div>
      </div>
    </div>
  );
}

