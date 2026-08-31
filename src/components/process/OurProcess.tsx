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
      className="bg-ink py-20 text-cream md:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              headingId="our-process-heading"
              eyebrow="Our Process"
              tone="dark"
              title="Five steps from the field to your loading bay"
              description="Each stage has the same aim: keep the fruit in good condition and keep our partners informed about what is coming and when."
            />

            <Reveal delay={200}>
              <div className="relative mt-10 aspect-8/5 overflow-hidden rounded-[2rem] bg-bark">
                <Image
                  src="/images/process/process-overview.png"
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
              className="absolute top-2 bottom-2 left-[1.4375rem] w-px bg-cream/15"
            />

            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.id} delay={index * 80} className="relative pb-10 last:pb-0">
                <div className="flex gap-6">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-cream/15 bg-ink font-mono text-sm text-banana"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
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
