const features = [
  { text: "All major risk scores (DASI, RCRI, ASA)", icon: "📊" },
  { text: "ACC/AHA guideline logic built-in", icon: "📚" },
  { text: "Medication management based on evidence", icon: "💊" },
  { text: "Copy/paste note export", icon: "📋" },
  { text: "Mobile + web access", icon: "📱" },
  { text: "No EMR integration needed", icon: "🔒" },
];

export default function WhyPreop360() {
  return (
    <section className="bg-bg-slate-soft px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="section-label text-center">Why Preop360</p>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Everything You Need.{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            All in One Place.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-text-muted">
          Built for clinicians who want guideline-based decisions without the hassle. No more flipping between tools or second-guessing.
        </p>
        <ul className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2 lg:gap-5">
          {features.map((item) => (
            <li
              key={item.text}
              className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-ui card-hover"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl transition-ui group-hover:bg-primary/20">
                {item.icon}
              </div>
              <span className="pt-1.5 text-base font-semibold text-text-muted lg:text-lg">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
