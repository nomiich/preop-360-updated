"use client";

const APP_STORE_URL = "https://apps.apple.com/us/app/preop360/id6746079405";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gaitham.preopproweb&hl=en";

export default function AppLinksBar() {
  return (
    <section className="border-y border-primary/10 bg-bg-primary-tint px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 sm:gap-6">
        <span className="text-sm font-semibold text-text-muted">Get the app:</span>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-text shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.02-1.2 2.74-.77.68-1.93 1.35-3.12 1.2-.15-1.15.49-1.85 1.26-2.44z" />
          </svg>
          App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-text shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
          </svg>
          Google Play
        </a>
      </div>
    </section>
  );
}
