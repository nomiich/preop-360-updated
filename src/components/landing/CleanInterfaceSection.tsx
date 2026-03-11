import Image from "next/image";

const images = [
  {
    src: "/images/app-screen-1.png",
    alt: "Preop360 home screen showing Preoperative Risk Assessment, Labs to Order, and Medication Management options",
  },
  {
    src: "/images/app-screen-4.png",
    alt: "Preop360 screen asking to select all applicable medical history conditions",
  },
  {
    src: "/images/app-screen-7.png",
    alt: "Preop360 flow asking about acute cardiopulmonary disease and showing medication selection tiles",
  },
  {
    src: "/images/app-screen-8.png",
    alt: "Preop360 recommendation screen for Active Cardiac Condition with documentation guidance",
  },
];

export default function CleanInterfaceSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-center">Experience</p>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Clean Interface,{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Easy to Use
          </span>
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map(({ src, alt }, index) => (
            <div
              key={index}
              className="card-hover relative overflow-hidden rounded-2xl border border-border/60 bg-white p-4 shadow-md transition-ui"
            >
              <div className="relative aspect-[9/19] w-full max-w-[260px] mx-auto">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
