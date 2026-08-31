"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SectionLink } from "@/components/ui/SectionLink";
import { WhatsAppIcon } from "@/components/ui/icons";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { navItems, site, whatsapp } from "@/data/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.sectionId).filter((id): id is string => Boolean(id)),
    [],
  );
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header
    className={`fixed inset-x-0 top-0 z-50
      transition-[background-color,box-shadow]
      duration-300 ease-out backdrop-blur-[2px]
      ${
        isScrolled && !isMenuOpen
          ? "bg-cream/80 shadow-sm shadow-ink/5"
          : "bg-cream/10 shadow-none"
      }
    `}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <SectionLink
            href="/"
            onNavigate={closeMenu}
            aria-label={`${site.name} — kembali ke atas`}
            className="shrink-0"
          >
            <Logo priority />
          </SectionLink>

          <nav aria-label="Utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = item.sectionId === activeSection;
                return (
                  <li key={item.href}>
                    <SectionLink
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`font-semibold group relative inline-flex rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                        isActive ? "text-leaf" : "text-stone hover:text-leaf"
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3.5 bottom-1 h-px origin-left bg-banana transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </SectionLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-leaf px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 ease-out hover:bg-ink hover:shadow-lg hover:shadow-leaf/25 active:scale-[0.98] lg:inline-flex"
          >
            <WhatsAppIcon />
            {whatsapp.label}
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors duration-200 hover:bg-ink/5 lg:hidden"
          >
            <span className="sr-only">{isMenuOpen ? "Tutup menu" : "Buka menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isMenuOpen} activeSection={activeSection} onNavigate={closeMenu} />
    </header>
  );
}
