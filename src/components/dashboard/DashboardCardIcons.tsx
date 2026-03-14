import React from "react";

const iconClass = "size-8 shrink-0";

/** Gauge / speedometer icon for Preoperative Risk Assessment */
export function GaugeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? iconClass}
      aria-hidden
    >
      <path d="M4 14a8 8 0 0 1 16 0" />
      <circle cx="12" cy="14" r="2" fill="currentColor" stroke="none" />
      <path d="M12 14 14 10" strokeWidth="2" />
    </svg>
  );
}

/** Shield with checkmark for Labs to get */
export function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? iconClass}
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" strokeWidth="2.2" />
    </svg>
  );
}

/** Medication / pharmacy (circle with plus) for Medication Management */
export function MedicationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? iconClass}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" strokeWidth="2.25" />
    </svg>
  );
}
