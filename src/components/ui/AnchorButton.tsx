import type { ReactNode } from "react";
import { SectionLink } from "@/components/ui/SectionLink";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface AnchorButtonProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

const base =
  "pressable inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-cream hover:bg-ink",
  secondary: "bg-secondary text-ink hover:bg-secondary/90",
  outline: "border border-primary/30 bg-cream/90 text-primary hover:border-primary hover:bg-primary hover:text-cream",
  ghost: "border border-current/20 hover:border-current/50 hover:bg-current/5",
};

export function AnchorButton({
  href,
  variant = "primary",
  className = "",
  children,
}: AnchorButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();
  const isHttp = href.startsWith("http");

  // Anything with a scheme leaves the page, so it cannot use the in-page
  // smooth-scroll link.
  if (isHttp || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <SectionLink href={href} className={classes}>
      {children}
    </SectionLink>
  );
}
