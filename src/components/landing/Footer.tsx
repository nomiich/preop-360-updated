import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const socialLinks = [
  {
    label: "App Store",
    href: "https://apps.apple.com/us/app/preop360/id6746079405",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Preop360/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/preop360/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-bg-footer to-bg-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <Link href="/" prefetch={false} className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Preop360"
                width={180}
                height={54}
                className="h-12 w-auto object-contain opacity-95 sm:h-14"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              Guideline-based preoperative cardiac assessment in one place.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-text-muted transition-colors hover:text-primary-dark"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 border-t border-border/80 pt-10">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary/10 hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border/80 pt-10 text-center">
          <p className="text-base font-bold text-text-muted">Care Decisions, LLC</p>
          <p className="max-w-2xl text-xs leading-relaxed text-text-lighter sm:text-sm">
            The medical information on this site is provided as an information resource only and is not to be used or relied on for any diagnostic or treatment purposes.
          </p>
          <p className="text-xs text-text-lighter">© {new Date().getFullYear()} Preop360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
