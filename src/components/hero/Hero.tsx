import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnchorButton } from "@/components/ui/AnchorButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { hero, site, whatsapp } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative z-0 isolate min-h-dvh overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-media object-cover object-[62%_center] sm:object-[68%_center] lg:object-[72%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/30"
        />
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-cream to-transparent lg:h-40"
        /> */}
      </div>

      <Container className="relative flex min-h-dvh w-full flex-col items-center justify-center pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <Reveal delay={50}>
            <Image
              src="/images/brand/logoPutih.webp"
              alt={`${site.name} logo`}
              width={1765}
              height={373}
              priority
              sizes="(min-width: 1024px) 64rem, (min-width: 640px) 88vw, 94vw"
              quality={95}
              className="h-auto w-[min(94vw,64rem)]"
            />
          </Reveal>

          <div className="w-full">
            <Reveal delay={280}>
              <p className="text-white text-xs md:text-[1.8rem]">
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-4">
                <AnchorButton
                  href="/#product"
                  className="px-5 py-2.5 text-sm sm:min-w-52 sm:px-10 sm:py-4.5 sm:text-lg"
                >
                  Lihat Produk
                  <ArrowRightIcon className="size-3.5 sm:size-4.5" />
                </AnchorButton>

                <AnchorButton
                  href={whatsapp.href}
                  variant="outline"
                  className="px-5 py-2.5 text-sm sm:min-w-52 sm:px-10 sm:py-4.5 sm:text-lg"
                >
                  <WhatsAppIcon className="size-4 sm:size-5.5" />
                  {whatsapp.label}
                </AnchorButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
