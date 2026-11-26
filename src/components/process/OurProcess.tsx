import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { processSection, processSteps } from "@/data/site";

const processPhotos = [
  { src: "/images/process/gbr.webp", label: "Sortasi", alt: "Proses sortasi pisang Haibanana" },
  { src: "/images/bahan/kemasan.webp", label: "Pengemasan", alt: "Proses pengemasan pisang Haibanana" },
  { src: "/images/bahan/truk.webp", label: "Distribusi", alt: "Proses pengiriman pisang Haibanana" },
];

export function OurProcess() {
  return (
    <section
      id="our-process"
      aria-labelledby="our-process-heading"
      className="relative isolate overflow-hidden bg-primary py-20 text-cream md:py-28 lg:py-32"
    >
      {/* Dekorasi background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 size-[32rem] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-cream/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          {/* Kiri: sticky */}
          <div className="">
            <Reveal>
              <div className="flex items-center gap-4 text-secondary">
                <span className="text-sm font-medium tracking-wide">Proses Kami</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="our-process-heading"
                className="display-title mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-balance text-cream"
              >
                {processSection.title}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-base leading-[1.7] text-pretty text-cream/70">
                {processSection.description}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {processPhotos.map((photo, index) => (
                  <div
                    key={photo.src}
                    className={`group relative overflow-hidden rounded-2xl bg-primary-light/30 ring-1 ring-cream/15 ${
                      index === 0 ? "col-span-2 h-64 sm:h-80 lg:h-80" : "h-44 sm:h-56 lg:h-52"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={index === 0 ? "(min-width: 1024px) 55vw, 90vw" : "(min-width: 1024px) 28vw, 45vw"}
                      className="object-cover transition-transform duration-700 ease-spring-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-primary">
                      {photo.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Kanan: timeline */}
          <ol className="border-t border-cream/20">
            {processSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.id}
                delay={index * 50}
                className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-3 border-b border-cream/20 py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-5 sm:py-9"
              >
                <span aria-hidden="true" className="font-display text-xl leading-tight text-secondary tabular-nums sm:text-2xl">
                  {index + 1}.
                </span>

                <div>
                  <h3 className="font-display text-xl leading-tight font-semibold text-cream sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-[1.7] text-pretty text-cream/70 sm:text-base">
                    {step.description}
                  </p>
                </div>

                <div className="relative size-12 sm:size-16 bg-white rounded-full">
                  <Image src={step.image} alt="" fill sizes="64px" className="object-contain p-2" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}