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
        <span
          className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] ${
            isDark ? "text-banana" : "text-leaf"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-6 ${isDark ? "bg-banana/60" : "bg-leaf/40"}`}
          />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2
          id={headingId}
          className={`mt-5 font-display text-3xl leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
            isDark ? "text-cream" : "text-leaf"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
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
