import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnchorButton } from "@/components/ui/AnchorButton";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";
import { hero, heroHighlights, whatsapp } from "@/data/site";

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="relative z-0">
      <div className="relative pb-10 sm:pb-14 md:pb-20 lg:pb-28">
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-linear-to-r
            from-cream
            via-cream/90
            to-cream/20
            sm:via-cream/85
            sm:to-transparent
            lg:max-w-3/4
          "
        />

        <Container className="relative">
          <div
            className="
              flex
              min-h-[34rem]
              max-w-xl
              flex-col
              justify-center
              pt-24
              pb-20

              sm:min-h-[36rem]
              sm:max-w-2xl
              sm:pt-28
              sm:pb-24

              md:min-h-[38rem]
              md:pt-32
              md:pb-28

              lg:min-h-[42rem]
              lg:max-w-2xl
              lg:pt-32
              lg:pb-32
            "
          >
            <Reveal>
              <h1
                id="home-heading"
                className="
                  max-w-[20rem]
                  text-[2.15rem]
                  leading-[1.08]
                  font-bold
                  tracking-tight
                  uppercase

                  sm:max-w-xl
                  sm:text-4xl
                  sm:leading-[1.12]

                  md:text-5xl
                  md:leading-[1.08]

                  lg:text-[3rem]
                  lg:leading-[1.1]
                "
              >
                {hero.headline.map((line) => (
                  <span
                    key={line.text}
                    className={`block ${
                      line.tone === "accent" ? "text-banana" : "text-leaf"
                    }`}
                  >
                    {line.text}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p
                className="
                  mt-5
                  max-w-[20rem]
                  text-sm
                  leading-relaxed
                  text-pretty
                  text-black

                  sm:mt-6
                  sm:max-w-md
                  sm:text-base

                  md:text-lg
                "
              >
                {hero.description}
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-2.5

                  sm:mt-9
                  sm:flex-row
                  sm:items-center
                  sm:gap-3
                "
              >
                <AnchorButton href="/#product">
                  Lihat Produk
                  <ArrowRightIcon />
                </AnchorButton>

                <AnchorButton href={whatsapp.href} variant="outline">
                  {whatsapp.label}
                  <WhatsAppIcon />
                </AnchorButton>
              </div>
            </Reveal>
          </div>
        </Container>

        <div className="">
          <Container className="relative z-10 -mt-8 pb-10 sm:-mt-10 md:-mt-22 flex justify-center">
            <Reveal>
              <ul
                className="
                  grid
                  max-w-5xl
                  grid-cols-2
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/40
                  shadow-sm
                  shadow-ink/10
                  backdrop-blur-md
                  
                  sm:rounded-full

                  lg:grid-cols-4
                "
              >
                {heroHighlights.map((item) => (
                  <li
                    key={`${item.kicker}-${item.title}`}
                    className="
                      group
                      flex
                      items-center
                      gap-2.5
                      px-3.5
                      py-3.5

                      sm:gap-3
                      sm:px-5
                      sm:py-4

                      md:px-6
                      md:py-5

                      lg:justify-center
                      lg:px-7
                    "
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={70}
                      height={70}
                      sizes="70px"
                      className="
                        size-12
                        object-contain
                        sm:size-12
                        md:size-14
                      "
                    />

                    <p className="min-w-0 leading-tight text-leaf">
                      <span
                        className="
                          block
                          truncate
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.08em]
                          text-leaf/60

                          sm:text-[10px]
                          md:text-xs
                        "
                      >
                        {item.kicker}
                      </span>

                      <span
                        className="
                          mt-0.5
                          block
                          truncate
                          text-[11px]
                          font-semibold

                          sm:text-sm
                          md:text-base
                        "
                      >
                        {item.title}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-10
            w-full
            text-cream

            sm:h-14
            md:h-20
            lg:h-28
          "
        >
          <path
            d="M0 80 Q720 0 1440 80 V120 H0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

 
    </section>
  );
}
