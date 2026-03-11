import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Adam",
    role: "Clinician",
    quote:
      "A solid and updated resource in preoperative medicine, enables you to make a confident preoperative decision in seconds at your fingertips.",
  },
  {
    name: "Dr. Keith",
    role: "Clinician",
    quote:
      "I like it, it's very easy to use and not complicated at all. Great job. I will show it to other doctors in the practice.",
  },
];

const creatorMessage = {
  name: "Ghaith Ibrahim, MD",
  photo: "/images/owner.webp",
  message:
    "During residency, I found that preoperative evaluation was often complex, unclear, and fragmented across multiple risk scores and lengthy guidelines. To create a straightforward and reliable approach, I studied and summarized the relevant recommendations and, with guidance from cardiologist colleagues and preoperative experts, built Preop360. Preop360 helps clinicians safely risk-stratify patients, manage preoperative medications and testing, and minimize liability, all in one place, in under one minute from input to recommendation, and in accordance with the most up-to-date guidelines.",
  affiliation:
    "Dr. Ibrahim is a member of the Society for Perioperative Assessment and Quality Improvement",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-bg-slate-soft px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="section-label text-center">Testimonials</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Clinician Approved
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-text-muted">
          Clean interface, mobile optimized — built with feedback from clinicians like you.
        </p>

        {/* Testimonial cards — horizontal side by side */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-white px-6 py-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-8 sm:py-8"
            >
              <p className="text-lg leading-relaxed text-text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary-dark">
                  {t.name.replace(/^Dr\.\s*/, "").charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text">{t.name}</p>
                  <p className="text-sm text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message from the creator — full width below testimonials */}
        <div className="mt-16 rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-primary-dark">
            Message from the creator
          </p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 shadow-md sm:h-32 sm:w-32">
              <Image
                src={creatorMessage.photo}
                alt={creatorMessage.name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="text-xl font-bold text-text">{creatorMessage.name}</p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{creatorMessage.message}</p>
              <p className="mt-5 text-sm font-medium text-primary-dark">
                {creatorMessage.affiliation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
