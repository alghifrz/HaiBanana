import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="order-last lg:order-first">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-19/20 overflow-hidden rounded-[2rem] bg-cream-deep">
                <Image
                  src="/images/about/Fotoabout.webp"
                  alt="Rows of banana plants across the orchard"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -right-4 -bottom-10 w-44 overflow-hidden rounded-2xl border-4 border-cream bg-cream-deep shadow-xl shadow-ink/10 sm:-right-8 sm:w-56">
                <Image
                  src="/images/about/Fotopisang.webp"
                  alt="Harvested bananas being prepared for sorting"
                  width={900}
                  height={700}
                  sizes="(min-width: 640px) 14rem, 11rem"
                  className="aspect-9/7 object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              headingId="about-heading"
              eyebrow="Tentang Kami"
              title="Dari Kebun Berkualitas ke Pasar Modern."
              description="Haibanana adalah jembatan antara petani pisang berkualitas dengan kebutuhan pasar modern. Kami berkomitmen menghadirkan produk terbaik melalui proses yang terintegrasi, berkelanjutan, dan memberikan dampak positif bagi petani serta mitra bisnis."
            />

            <ul
              aria-label="Fokus kemitraan Haibanana"
              className="mt-12 grid grid-cols-3 divide-x divide-leaf/20"
            >
              {aboutValues.map((value, index) => (
                <Reveal as="li" key={value.title} delay={index * 90}>
                  <div className="flex flex-col items-center px-2 text-center sm:px-4">
                    <Image
                      src={value.image}
                      alt=""
                      width={128}
                      height={128}
                      sizes="64px 96px"
                      className="size-16 object-contain sm:size-24"
                    />
                    <h3 className="mt-3 font-display text-sm leading-snug tracking-tight text-leaf sm:text-lg">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-xl font-semibold tracking-tight text-gold sm:text-3xl">
                      {value.stat}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
