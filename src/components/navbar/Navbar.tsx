"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SectionLink } from "@/components/ui/SectionLink";
import { WhatsAppIcon } from "@/components/ui/icons";
import { MobileMenu } from "@/components/navbar/MobileMenu";
import { navItems, site, whatsapp } from "@/data/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

function unlockPageScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.sectionId).filter((id): id is string => Boolean(id)),
    [],
  );
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    unlockPageScroll();
    setIsMenuOpen(false);
  }, []);

  const chromeClass = isMenuOpen
    ? "border-b border-ink/8 bg-cream"
    : isScrolled
      ? "border-b border-ink/8 bg-cream/95"
      : "border-b border-transparent bg-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-320 ease-soft-out ${chromeClass}`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 md:h-20">
            <SectionLink
              href="/"
              onNavigate={closeMenu}
              aria-label={`${site.name} — kembali ke atas`}
              className="pressable shrink-0 rounded-lg"
            >
              <Logo priority />
            </SectionLink>

            <nav aria-label="Utama" className="hidden lg:block">
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => {
                  const isActive = item.sectionId === activeSection;
                  return (
                    <li key={item.href}>
                      <SectionLink
                        href={item.href}
                        aria-current={isActive ? "true" : undefined}
                        className={`group relative inline-flex rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-stone hover:text-primary"
                        }`}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute inset-x-3.5 bottom-1 h-px origin-center bg-primary transition-transform duration-320 ease-spring-out ${
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
              className="pressable hidden items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-medium text-cream hover:bg-ink lg:inline-flex"
            >
              <WhatsAppIcon />
              {whatsapp.label}
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="pressable flex size-10 items-center justify-center rounded-xl border border-ink/10 text-ink hover:bg-ink/5 lg:hidden"
            >
              <span className="sr-only">{isMenuOpen ? "Tutup menu" : "Buka menu"}</span>
              <span aria-hidden="true" className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-320 ease-spring-out ${
                    isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-320 ease-spring-out ${
                    isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} activeSection={activeSection} onNavigate={closeMenu} />
    </>
  );
}
