import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Medication Management | Preop 360",
  description: "Manage preoperative medications and related tasks.",
};

export default function MedicationManagementPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Medication Management" />
      <div className="rounded-2xl border border-gray-200 bg-white px-0 py-0 dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden h-[calc(100vh-140px)]">
        <iframe
          src="https://gtools.involve.me/med-management-7-19-7b418542ea82-copy-3b3a2d597182"
          className="h-full w-full"
          title="Medication Management Tool"
        />
      </div>
    </div>
  );
}

