import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SectionLink } from "@/components/ui/SectionLink";
import { contactChannels, navItems, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-ink text-cream">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          <div className="md:col-span-1">
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-pretty text-cream/60">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-1">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-cream/60">
              Sections
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SectionLink
                    href={item.href}
                    className="text-sm text-cream/75 underline-offset-4 transition-colors duration-200 hover:text-banana hover:underline"
                  >
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-1">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-cream/60">
              Contact
            </h2>
            <ul className="mt-5 space-y-3">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  {channel.href.startsWith("#") ? (
                    <span className="text-sm text-cream/75">{channel.value}</span>
                  ) : (
                    <a
                      href={channel.href}
                      className="text-sm text-cream/75 underline-offset-4 transition-colors duration-200 hover:text-banana hover:underline"
                    >
                      {channel.value}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <SectionLink
            href="/"
            className="text-xs text-cream/50 underline-offset-4 transition-colors duration-200 hover:text-banana hover:underline"
          >
            Back to top
          </SectionLink>
        </div>
      </Container>
    </footer>
  );
}
