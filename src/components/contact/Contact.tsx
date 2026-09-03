import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactChannels } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-cream-deep/80 backdrop-blur-sm py-20 md:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              headingId="contact-heading"
              eyebrow="Kontak"
              title="Hubungi Kami"
              description="Tertarik bekerja sama atau ingin informasi lebih lanjut? Tim kami siap membantu Anda."
            />

            <dl className="mt-12 space-y-6">
              {contactChannels.map((channel, index) => (
                <Reveal key={channel.label} delay={index * 80}>
                  <div className="border-t border-ink/10 pt-5">
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
                      {channel.label}
                    </dt>
                    <dd className="mt-2">
                      {channel.href.startsWith("#") ? (
                        <span className="font-display text-lg tracking-tight text-ink sm:text-xl">
                          {channel.value}
                        </span>
                      ) : (
                        <a
                          href={channel.href}
                          className="font-display text-lg tracking-tight text-ink underline-offset-4 transition-colors duration-200 hover:text-leaf hover:underline sm:text-xl"
                        >
                          {channel.value}
                        </a>
                      )}
                    </dd>
                  </div>
                </Reveal>
              ))}

 
            </dl>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
