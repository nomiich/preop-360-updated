const plans = [
  {
    name: "Basic",
    price: "$4.99",
    period: "/month",
    description: "Monthly subscription with partial access to the app features. Ideal for trying out the workflow.",
    bullets: ["Core risk calculators", "Guideline summaries", "Note export"],
    cta: "Get Basic",
    featured: false,
  },
  {
    name: "Premium",
    price: "$7.99",
    period: "/month",
    description: "Full access to all app content and features. Best for regular preop assessments.",
    bullets: ["Everything in Basic", "Full algorithm & recommendations", "Priority support", "All future updates"],
    cta: "Get Premium",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-gradient-to-b from-bg-deep via-bg-slate to-bg-deep px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-center">Pricing</p>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-text-muted">
          Start with a 3-month free trial. No credit card required. Cancel anytime.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-lg transition-ui card-hover ${
                plan.featured
                  ? "border-primary/40 shadow-primary/15 lg:-mt-2 lg:mb-2 lg:ring-2 lg:ring-primary/20"
                  : "border-border/60"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl bg-gradient-to-r from-primary to-primary-dark px-4 py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Popular</span>
                </div>
              )}
              <div className="relative">
                <h3 className={`text-2xl font-extrabold ${plan.featured ? "text-primary-dark" : "text-text"}`}>
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-text">{plan.price}</span>
                  <span className="text-base text-text-muted">{plan.period}</span>
                </p>
                <p className="mt-5 text-base leading-relaxed text-text-muted">{plan.description}</p>
                <ul className="mt-6 space-y-2">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm font-medium text-text-muted">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://gs-team-59.adalo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex w-full items-center justify-center rounded-xl px-8 py-4 text-base font-bold transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                      : "border-2 border-primary bg-white text-primary hover:bg-primary/5 hover:scale-[1.02]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
