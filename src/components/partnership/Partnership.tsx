import { Container } from "@/components/ui/Container";
import { AnchorButton } from "@/components/ui/AnchorButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PartnerCard } from "@/components/partnership/PartnerCard";
import { partnership, partnershipBenefits } from "@/data/site";

export function Partnership() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="relative overflow-hidden bg-cream py-20 md:py-28 lg:py-32"
    >
      {/* Tekstur halus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container className="relative">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 text-primary">
            <span className="text-sm font-medium tracking-wide">Kemitraan</span>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <Reveal delay={80}>
            <h2
              id="partnership-heading"
              className="display-title mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-balance text-primary"
            >
              {partnership.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="max-w-md text-base leading-[1.7] text-pretty text-stone lg:justify-self-end">
              {partnership.description}
            </p>
          </Reveal>
        </div>

        {/* Benefit */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {partnershipBenefits.map((partner, index) => (
            <Reveal as="li" key={partner.id} delay={(index % 3) * 60} className={partner.layout}>
              <PartnerCard partner={partner} />
            </Reveal>
          ))}
        </ul>

        {/* CTA */}
        <Reveal delay={80}>
          <div className="relative isolate mt-6 overflow-hidden rounded-[2rem] bg-primary px-7 py-10 text-cream sm:mt-8 sm:px-12 sm:py-12 lg:px-14 lg:py-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-24 -right-16 size-72 rounded-full bg-secondary/25 blur-3xl" />
              <div className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-cream/10 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="text-sm font-medium tracking-wide text-secondary uppercase">
                  Mulai kerja sama
                </p>
                <p className="mt-3 font-display text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.025em] text-balance">
                  Siap jadi mitra pasokan pisang?
                </p>
                <p className="mt-3 text-sm leading-[1.65] text-cream/70 sm:text-base">
                  Ceritakan kebutuhan volume dan grade Anda, tim kami siap membantu.
                </p>
              </div>

              <AnchorButton href="/#contact" variant="secondary" className="shrink-0">
                Hubungi Kami
                <ArrowRightIcon />
              </AnchorButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}