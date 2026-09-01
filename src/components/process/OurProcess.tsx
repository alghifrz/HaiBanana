import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";

export function OurProcess() {
  return (
    <section
      id="our-process"
      aria-labelledby="our-process-heading"
      className="bg-leaf/80 py-20 backdrop-blur-xs text-cream md:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              headingId="our-process-heading"
              eyebrow="Proses Kami"
              tone="dark"
              title="Proses dari Kebun hingga ke Tangan Anda"
              description="Setiap tahap bertujuan menjaga mutu buah dan memastikan pasokan sampai tepat waktu."
            />

            <Reveal delay={200}>
              <div className="relative mt-10 aspect-8/5 overflow-hidden rounded-[2rem] bg-bark">
                <Image
                  src="/images/process/gbr.webp"
                  alt="Bananas moving through the sorting and packing facility"
                  fill
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-12 left-6 w-px bg-cream"
            />

            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.id} delay={index * 80} className="relative pb-10 last:pb-0">
                <div className="flex gap-5 sm:gap-6">
                  <div className="relative z-10 flex shrink-0 items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-full border border-cream bg-leaf font-mono text-sm text-banana">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-16 items-center justify-center rounded-full bg-white sm:size-20">
                      <Image
                        src={step.image}
                        alt=""
                        width={80}
                        height={80}
                        sizes="56px"
                        className="size-10 object-contain sm:size-12"
                      />
                    </span>
                  </div>

                  <div className="pt-1.5 sm:pt-2.5">
                    <h3 className="font-display text-xl tracking-tight text-cream sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-base leading-relaxed text-pretty text-cream/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
