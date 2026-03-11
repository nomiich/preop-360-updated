const APP_STORE_URL = "https://apps.apple.com/us/app/preop360/id6746079405";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gaitham.preopproweb&hl=en";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bg-primary-tint via-bg-slate-soft to-bg-slate-light px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32 lg:pb-16">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary-dark/12 blur-3xl" />
        <div className="absolute right-1/2 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-light/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* <span className="mb-6 inline-block rounded-full border border-primary/30 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-dark shadow-sm backdrop-blur-sm">
          ✨ 3-month free trial · No credit card required
        </span> */}
        <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
          Complete PreOp evals in{" "}
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
            seconds
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted sm:text-xl">
          The guideline-based tool for preoperative cardiac assessment.
        </p>
        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-light">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ACC/AHA guidelines built-in
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Risk scores: DASI, RCRI, ASA
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Web & mobile
          </span>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://gs-team-59.adalo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-10 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 sm:w-auto"
          >
            <span className="relative z-10">Start Your Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-text-muted/20 bg-white px-10 py-4 text-base font-semibold text-text shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:bg-primary/5 hover:text-primary-dark hover:shadow-md sm:w-auto"
          >
            View pricing
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/90 px-4 py-2.5 text-sm font-semibold text-text shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
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
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/90 px-4 py-2.5 text-sm font-semibold text-text shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary/40 hover:bg-primary/5 hover:text-primary-dark"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
