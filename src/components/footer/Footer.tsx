import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SectionLink } from "@/components/ui/SectionLink";
import { contactChannels, location, navItems, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-ink text-cream">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          <div className="md:col-span-1">
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-[1.65] text-pretty text-cream/60">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-1">
            <h2 className="text-sm font-medium tracking-[-0.01em] text-cream/55">
              Navigasi
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SectionLink
                    href={item.href}
                    className="text-sm text-cream/75 underline-offset-4 transition-colors duration-200 hover:text-secondary hover:underline"
                  >
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-1">
            <h2 className="text-sm font-medium tracking-[-0.01em] text-cream/55">
              Kontak
            </h2>
            <ul className="mt-5 space-y-3">
              {contactChannels.map((channel) => {
                const isExternal = channel.href.startsWith("http");
                const linkClassName =
                  "text-sm text-cream/75 underline-offset-4 transition-colors duration-200 hover:text-secondary hover:underline";

                if (channel.href.startsWith("#")) {
                  return (
                    <li key={channel.label}>
                      <span className="text-sm text-cream/75">{channel.value}</span>
                    </li>
                  );
                }

                const link = (
                  <a
                    href={channel.href}
                    className={linkClassName}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {channel.value}
                  </a>
                );

                return (
                  <li key={channel.label}>
                    {channel.label === "Alamat" ? (
                      <address className="not-italic">{link}</address>
                    ) : (
                      link
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-cream/10">
          <iframe
            title={`Lokasi ${site.name}`}
            src={location.mapEmbedUrl}
            className="h-56 w-full grayscale-[20%] contrast-[1.05] md:h-72"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-[-0.01em] text-cream/45">
            © {year} {site.name}. Hak cipta dilindungi.
          </p>
          <SectionLink
            href="/"
            className="text-xs text-cream/45 underline-offset-4 transition-colors duration-200 hover:text-secondary hover:underline"
          >
            Kembali ke atas
          </SectionLink>
        </div>
      </Container>
    </footer>
  );
}
