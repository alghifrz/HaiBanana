"use client";

import { Container } from "@/components/ui/Container";
import { SectionLink } from "@/components/ui/SectionLink";
import { WhatsAppIcon } from "@/components/ui/icons";
import { contactChannels, navItems, whatsapp } from "@/data/site";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string | null;
  onNavigate: () => void;
}

export function MobileMenu({ isOpen, activeSection, onNavigate }: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      inert={!isOpen}
      className={`fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-ink/8 bg-cream transition-[opacity,transform] duration-320 ease-spring-out md:top-[calc(5rem+env(safe-area-inset-top))] lg:hidden ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <Container className="flex min-h-full flex-col justify-between py-8 sm:py-10">
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {navItems.map((item, index) => {
              const isActive = item.sectionId === activeSection;
              return (
                <li key={item.href} className="border-b border-ink/8 last:border-b-0">
                  <SectionLink
                    href={item.href}
                    onNavigate={onNavigate}
                    aria-current={isActive ? "true" : undefined}
                    className={`pressable flex items-baseline gap-4 rounded-xl py-4 font-display text-[1.625rem] tracking-[-0.02em] sm:text-3xl ${
                      isActive ? "text-primary" : "text-ink"
                    }`}
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateY(0)" : "translateY(0.5rem)",
                      transition: isOpen
                        ? `opacity 320ms cubic-bezier(0.32, 0.72, 0, 1) ${35 + index * 30}ms, transform 320ms cubic-bezier(0.32, 0.72, 0, 1) ${35 + index * 30}ms`
                        : "opacity 160ms ease, transform 160ms ease",
                    }}
                  >
                    <span className="font-sans text-[0.6875rem] tabular-nums tracking-[0.08em] text-stone">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </SectionLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`mt-10 transition-[opacity,transform] duration-320 ease-spring-out ${
            isOpen ? "translate-y-0 opacity-100 delay-150" : "translate-y-2 opacity-0 delay-0"
          }`}
        >
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-cream hover:bg-ink"
          >
            <WhatsAppIcon />
            {whatsapp.label}
          </a>

          <ul className="mt-6 space-y-2.5">
            {contactChannels.slice(0, 2).map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="text-sm text-stone underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline"
                >
                  {channel.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
