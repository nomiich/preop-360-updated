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
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[720px]">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">
            Medication Management
          </h3>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            This page will show the patient&apos;s current medications, which
            ones to stop before surgery, and any special perioperative
            instructions. You can extend this section with tables, forms, or
            checklists as needed.
          </p>
        </div>
      </div>
    </div>
  );
}

