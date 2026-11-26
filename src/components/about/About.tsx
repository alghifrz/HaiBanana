import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { about, aboutValues } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream-deep py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-sm font-medium text-primary">Tentang Kami</p>
              <h2 id="about-heading" className="display-title mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-balance text-primary">
                {about.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:self-end">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-pretty text-primary">{about.lead}</p>
              <p className="mt-3 leading-[1.7] text-pretty text-stone">{about.description}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-12 md:gap-4">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl md:col-span-8 md:aspect-auto md:h-[28rem]">
              <Image src="/images/bahan/erert.webp" alt="Barisan tanaman pisang di kebun Haibanana" fill sizes="(min-width: 768px) 66vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl md:col-span-4 md:aspect-auto md:h-[28rem]">
              <Image src="/images/bahan/qwe.webp" alt="Pisang hasil panen Haibanana yang siap disortir" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <ul aria-label="Pencapaian Haibanana" className="mt-10 grid grid-cols-3 divide-x divide-primary/15 border-y border-primary/15 py-8">
          {aboutValues.map((value, index) => (
            <Reveal as="li" key={value.title} delay={160 + index * 50}>
              <div className="px-2 text-center md:px-6">
                <p className="font-display text-[clamp(1.6rem,4vw,3rem)] leading-none font-semibold text-primary">{value.stat}</p>
                <p className="mt-2 text-xs text-stone sm:text-sm">{value.title}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}