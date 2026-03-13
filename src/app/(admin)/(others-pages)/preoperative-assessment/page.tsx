import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Preoperative Assessment | Preop 360",
  description: "Overall preoperative assessment workflow.",
};

export default function PreoperativeAssessmentPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Preoperative Assessment" />
      <div className="rounded-2xl border border-gray-200 bg-white px-0 py-0 dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden h-[calc(100vh-140px)]">
        <iframe
          src="https://gtools.involve.me/mashup-v11-7-10-d8903686184d-copy-735a9209c22f"
          className="h-full w-full"
          title="Preoperative Assessment Tool"
        />
      </div>
    </div>
  );
}

