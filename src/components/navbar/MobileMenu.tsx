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
      className={`fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto overscroll-contain border-t border-ink/8 bg-cream transition-all duration-300 ease-out md:top-[calc(5rem+env(safe-area-inset-top))] lg:hidden ${
        isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <Container className="flex min-h-full flex-col justify-between py-8">
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
                    className="flex items-baseline gap-4 py-4 font-display text-2xl tracking-tight transition-colors duration-200 sm:text-3xl"
                  >
                    <span className="font-sans text-xs tabular-nums text-stone">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={isActive ? "text-leaf" : "text-ink"}>{item.label}</span>
                  </SectionLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10">
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-ink"
          >
            <WhatsAppIcon />
            {whatsapp.label}
          </a>

          <ul className="mt-6 space-y-2">
            {contactChannels.slice(0, 2).map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="text-sm text-stone underline-offset-4 hover:text-leaf hover:underline"
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
