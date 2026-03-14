import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Feedback | Preop 360",
  description: "Submit your feedback for Preop 360.",
};

export default function FeedbackPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Feedback" />
      <FeedbackForm />
    </div>
  );
}
