import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactChannels } from "@/data/site";
import type { ContactChannel } from "@/types/content";

const valueClassName =
  "font-display text-lg font-medium tracking-[-0.02em] text-ink underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline sm:text-xl";

function ContactValue({ channel }: { channel: ContactChannel }) {
  const isMaps = channel.href.startsWith("http");
  const link = (
    <a
      href={channel.href}
      className={valueClassName}
      {...(isMaps ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {channel.value}
    </a>
  );

  if (channel.label === "Alamat") {
    return <address className="not-italic">{link}</address>;
  }

  return link;
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-cream-deep py-20 md:py-28 lg:py-32"
    >
      {/* Dekorasi background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[30rem] rounded-full bg-secondary/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Info kontak */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4 text-primary">
                <span className="text-sm font-medium tracking-wide">Kontak</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="contact-heading"
                className="display-title mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-balance text-primary"
              >
                Hubungi Kami
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-base leading-[1.7] text-pretty text-stone">
                Tertarik bekerja sama atau ingin informasi lebih lanjut? Tim kami siap membantu
                Anda.
              </p>
            </Reveal>

            <dl className="mt-10 space-y-3 sm:mt-12">
              {contactChannels.map((channel, index) => {
                const isLink = !channel.href.startsWith("#");

                return (
                  <Reveal key={channel.label} delay={index * 50}>
                    <div className="group flex items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-white/60 px-5 py-4 transition-all duration-300 ease-spring-out hover:border-primary/25 hover:bg-white hover:shadow-lg hover:shadow-primary/5 sm:px-6 sm:py-5">
                      <div className="min-w-0">
                        <dt className="text-xs font-medium tracking-wide text-stone uppercase">
                          {channel.label}
                        </dt>
                        <dd className="mt-1.5 break-words">
                          {isLink ? (
                            <ContactValue channel={channel} />
                          ) : (
                            <span className="font-display text-lg font-medium tracking-[-0.02em] text-ink sm:text-xl">
                              {channel.value}
                            </span>
                          )}
                        </dd>
                      </div>

                      {isLink ? (
                        <span
                          aria-hidden="true"
                          className="grid size-9 shrink-0 -rotate-45 place-items-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-0 group-hover:bg-primary group-hover:text-cream"
                        > 
                        <a href={channel.href} target="_blank" rel="noopener noreferrer">
                          <ArrowRightIcon />
                        </a>
                        </span>
                      ) : null}
                    </div>
                  </Reveal>
                );
              })}
            </dl>
          </div>

          {/* Form */}
          <Reveal delay={80}>
            <div className="relative rounded-[2rem] bg-white p-6 shadow-2xl ring-1 shadow-primary/10 ring-primary/10 sm:p-8 lg:p-10">
              <div className="mb-6 sm:mb-8">
                <p className="font-display text-xl font-semibold tracking-[-0.02em] text-primary sm:text-2xl">
                  Kirim pesan
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone">
                  Isi form di bawah, kami akan segera menghubungi Anda.
                </p>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}