const steps = [
  {
    number: 1,
    title: "Enter patient info",
    detail: "Add history, functional capacity (METs), and current medications. The tool guides you through only what’s needed.",
    icon: "📋",
  },
  {
    number: 2,
    title: "Preop360 runs the algorithm",
    detail: "DASI, RCRI, and ACC/AHA guideline logic run automatically. Get risk stratification and medication recommendations in seconds.",
    icon: "⚡",
  },
  {
    number: 3,
    title: "Copy your recommendation",
    detail: "Paste the generated summary into your note.",
    icon: "📝",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold uppercase tracking-tight text-text sm:text-5xl lg:text-6xl">
          How it works
        </h2>
        <p className="mt-4 text-center text-xl font-semibold text-text-muted sm:text-2xl">
          Three steps to a complete preop assessment
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-text-muted">
          From patient data to a note-ready recommendation in under a minute. No EMR integration required.
        </p>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              <div className="flex flex-col items-center text-center transition-ui lg:items-start lg:text-left">
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-text text-2xl font-bold text-text shadow-sm transition-ui group-hover:border-primary group-hover:text-primary">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-primary/30 lg:block" aria-hidden>→</span>
                  )}
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-text lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-muted">
                    {step.detail}
                  </p>
                  {/* {step.number === 3 && (
                    <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-semibold text-primary-dark">
                      <span>→</span> Paste into your note
                    </p>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What the app covers */}
        <div className="mt-16 rounded-2xl border border-border bg-bg-slate/50 px-4 py-6 sm:mt-20 sm:px-6 sm:py-8 lg:mt-24 lg:px-8 lg:py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-text-muted sm:text-sm">
            What Preop360 Helps You Manage
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4 lg:gap-6">
            <span className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-text shadow-sm ring-1 ring-border/50 sm:flex-col sm:gap-2 sm:px-5 sm:py-4 sm:text-center sm:text-base">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              Preop cardiac evaluation
            </span>
            <span className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-text shadow-sm ring-1 ring-border/50 sm:flex-col sm:gap-2 sm:px-5 sm:py-4 sm:text-center sm:text-base">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Preoperative medication management
            </span>
            <span className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-text shadow-sm ring-1 ring-border/50 sm:flex-col sm:gap-2 sm:px-5 sm:py-4 sm:text-center sm:text-base">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Preoperative Labs & Testing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
