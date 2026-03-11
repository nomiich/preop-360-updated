import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";

import { ThemeProvider } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-1 bg-bg-slate-soft p-6 sm:p-0">
      <ThemeProvider>
        <div className="relative flex h-screen w-full flex-col justify-center lg:flex-row sm:p-0">
          {children}
          <div className="hidden h-full w-full items-center bg-gradient-to-br from-bg-primary-soft to-bg-deep lg:grid lg:w-1/2">
            <div className="z-1 relative flex items-center justify-center">
              <GridShape />
              <div className="flex max-w-xs flex-col items-center">
                <Link href="/" className="mb-4 block">
                  <Image
                    width={231}
                    height={48}
                    src="/images/logo.png"
                    alt="Preop360"
                  />
                </Link>
                <p className="text-center text-text-light">
                  Guideline-based preoperative cardiac assessment in one place.
                </p>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
