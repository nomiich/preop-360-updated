export default function TaglineRepeat() {
  return (
    <section className="bg-gradient-to-b from-bg-slate-light to-bg-primary-tint px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-text sm:text-3xl lg:text-4xl">
          Making Preop Evaluation{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Easier Than Ever
          </span>
        </h2>
        <p className="mt-4 text-lg text-text-muted sm:text-xl">
          Get risk assessment in under one minute. Start with a free trial — no credit card required.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex w-full items-center justify-center rounded-xl border-2 border-primary bg-white px-8 py-3.5 text-base font-bold text-primary shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-lg hover:shadow-primary/30 sm:w-auto"
          >
            See plans
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-border bg-white px-8 py-3.5 text-base font-semibold text-text-muted transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:bg-primary/5 hover:text-primary-dark sm:w-auto"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
