import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnchorButton } from "@/components/ui/AnchorButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { partnershipBenefits } from "@/data/site";

export function Partnership() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="py-20 md:py-28 lg:py-32"
    >
      <Container>
        <SectionHeading
          headingId="partnership-heading"
          eyebrow="Partnership"
          align="center"
          title="Ways we work with buyers and brands"
          description="Whether you need pallets of fresh fruit every week or an ingredient supplier for your production line, we can shape the arrangement around it."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {partnershipBenefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={(index % 2) * 90} className="h-full">
              <div className="group h-full rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/8">
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-2xl bg-banana-soft text-leaf transition-colors duration-300 group-hover:bg-banana group-hover:text-ink"
                >
                  <CheckIcon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-xl tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-pretty text-stone">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-leaf text-cream">
            <div className="grid items-center gap-0 md:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <h3 className="font-display text-2xl leading-tight tracking-tight text-balance sm:text-3xl">
                  Tell us what you need and we will put a supply plan together
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-cream/75">
                  Share your volumes, specification and delivery schedule, and we will come back
                  with what we can commit to.
                </p>
                <AnchorButton href="/#contact" variant="secondary" className="mt-8">
                  Start a conversation
                  <ArrowRightIcon />
                </AnchorButton>
              </div>

              <div className="relative aspect-7/5 md:h-full md:min-h-[22rem]">
                <Image
                  src="/images/partnership/partnership-collaboration.png"
                  alt="Banana team meeting with a supply partner"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
