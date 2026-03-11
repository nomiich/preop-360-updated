const problems = [
  { text: "Flipping between MDCalc, UpToDate, and PDFs", icon: "🔄" },
  { text: "Fuzzy recall of guideline logic", icon: "🧠" },
  { text: "Confusion about perioperative meds", icon: "💊" },
  { text: "Inconsistent documentation", icon: "📝" },
  { text: "Wasted time and uncertainty", icon: "⏱️" },
];

export default function WhatItSolves() {
  return (
    <section className="bg-gradient-to-b from-bg-warm via-bg-slate-light to-bg-warm px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="section-label text-center">What it solves</p>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Built to{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Eliminate Preop Confusion
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-text-muted">
          Preop consults don’t have to mean juggling multiple tools and guessing at guidelines. Preop360 brings the logic into one place so you can focus on the patient.
        </p>
        <ul className="mx-auto mt-16 flex max-w-3xl flex-col gap-4">
          {problems.map((item) => (
            <li
              key={item.text}
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-white/90 px-6 py-4 shadow-sm transition-ui card-hover"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-error/10 text-xl transition-ui group-hover:bg-error/15">
                {item.icon}
              </div>
              <span className="text-base font-semibold text-text-muted lg:text-lg">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
