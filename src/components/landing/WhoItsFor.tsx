const audiences = [
  "Surgical Preop Clinics",
  "Family Medicine Physicians",
  "Internal Medicine Physicians",
  "Residents",
  "NPs & PAs",
  "Hospitalists",
  "Anaesthesia Pre-Surgical Teams",
];

export default function WhoItsFor() {
  return (
    <section className="bg-bg-slate px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-center">Who it’s for</p>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Designed for{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Busy Clinicians
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-text-muted">
          Anyone who does preoperative cardiac assessment — from preop clinics to hospitalists and anesthesia teams. If you need fast, guideline-based risk stratification, Preop360 is built for you.
        </p>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {audiences.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/60 bg-white px-6 py-4 text-center font-semibold text-text-muted shadow-sm transition-ui card-hover hover:border-primary/30 hover:text-primary-dark"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
