import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Labs to get | Preop 360",
  description: "Preoperative laboratory tests and investigation list.",
};

export default function LabsToGetPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Labs to get" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[720px]">
          <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">
            Labs to get
          </h3>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Use this page to document which labs, imaging, and other
            investigations are required before surgery. You can later expand
            this with dynamic tables and status indicators.
          </p>
        </div>
      </div>
    </div>
  );
}

