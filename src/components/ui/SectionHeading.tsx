import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Renders light-on-dark for sections with a dark background. */
  tone?: "light" | "dark";
  align?: "left" | "center";
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  headingId,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto flex max-w-2xl flex-col items-center text-center"
          : "flex max-w-2xl flex-col"
      }
    >
      <Reveal>
        <p
          className={`text-sm font-medium tracking-[-0.01em] ${
            isDark ? "text-secondary" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={70}>
        <h2
          id={headingId}
          className={`display-title mt-3 font-display text-[1.875rem] text-balance sm:mt-4 sm:text-4xl lg:text-[2.75rem] ${
            isDark ? "text-cream" : "text-primary"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={120}>
          <p
            className={`mt-4 max-w-xl text-[0.9375rem] leading-[1.65] text-pretty sm:mt-5 sm:text-lg ${
              isDark ? "text-cream/70" : "text-stone"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
