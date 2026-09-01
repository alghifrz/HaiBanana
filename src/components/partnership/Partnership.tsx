import { Container } from "@/components/ui/Container";
import { AnchorButton } from "@/components/ui/AnchorButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PartnerCard } from "@/components/partnership/PartnerCard";
import { partnershipBenefits } from "@/data/site";

export function Partnership() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="bg-cream py-20 md:py-28 lg:py-32"
    >
      <Container>
        <SectionHeading
          headingId="partnership-heading"
          eyebrow="Kemitraan"
          title="Bermitra bersama Haibanana"
          description="Kami terbuka untuk berbagai peluang kerjasama jangka panjang dengan berbagai jenis bisnis."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(16rem,1fr)_minmax(16rem,1fr)]">
          {partnershipBenefits.map((partner, index) => (
            <Reveal as="li" key={partner.id} delay={(index % 3) * 80} className={partner.layout}>
              <PartnerCard partner={partner} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] bg-leaf px-8 py-8 text-cream sm:flex-row sm:items-center sm:px-10">
            <p className="max-w-xl font-display text-2xl leading-tight tracking-tight text-balance">
              Siap jadi mitra pasokan pisang?
            </p>
            <AnchorButton href="/#contact" variant="secondary" className="shrink-0">
              Hubungi Kami
              <ArrowRightIcon />
            </AnchorButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
