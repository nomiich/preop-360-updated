"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const APP_STORE_URL = "https://apps.apple.com/us/app/preop360/id6746079405"; // Replace with your iOS app URL
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gaitham.preopproweb&hl=en"; // Replace with your Android app URL

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-white/95 shadow-md shadow-black/[0.06] backdrop-blur-lg"
          : "border-b border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          prefetch={false}
          className="flex shrink-0 items-center focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 rounded-lg"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Preop360"
            width={180}
            height={48}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors duration-200 hover:bg-primary/10 hover:text-primary-dark"
            >
              {label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <Link
              href="/signin"
              className="rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-primary/25 transition-all duration-200 hover:opacity-95 hover:shadow-md hover:shadow-primary/30"
            >
              Start free
            </Link>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-text shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
              aria-label="Download on the App Store"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.02-1.2 2.74-.77.68-1.93 1.35-3.12 1.2-.15-1.15.49-1.85 1.26-2.44z" />
              </svg>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-text shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
              aria-label="Get it on Google Play"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-slate text-text transition-colors hover:bg-border md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-text-muted transition-colors hover:bg-primary/10 hover:text-primary-dark"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              href="/signin"
              className="mt-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-center text-sm font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Start free
            </Link>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-text shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
                aria-label="Download on the App Store"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.02-1.2 2.74-.77.68-1.93 1.35-3.12 1.2-.15-1.15.49-1.85 1.26-2.44z" />
                </svg>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-text shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
                aria-label="Get it on Google Play"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
