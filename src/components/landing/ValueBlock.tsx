const highlights = [
  "ACC/AHA guideline logic built into every step",
  "DASI, RCRI, and ASA risk scores calculated automatically",
  "Evidence-based medication management recommendations",
];

export default function ValueBlock() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bg-primary-soft via-bg-primary-tint to-bg-slate-light px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-dark/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Why Preop360</p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Making Preop Evaluation{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Easier Than Ever
          </span>
        </h2>
        <p className="mt-6 text-lg text-text-muted sm:text-xl">
          One tool that replaces scattered calculators, PDFs, and guesswork. Everything you need for a thorough preoperative cardiac assessment, in one place.
        </p>
        <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left text-text-muted">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary-dark">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href="https://gs-team-59.adalo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-12 inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-10 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40"
        >
          <span className="relative z-10">Start calculation</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      </div>
    </section>
  );
}
