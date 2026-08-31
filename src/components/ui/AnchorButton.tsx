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
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-leaf text-cream hover:bg-ink hover:shadow-lg hover:shadow-leaf/25",
  secondary: "bg-banana text-ink hover:bg-banana/85 hover:shadow-lg hover:shadow-banana/30",
  outline:
    "border border-leaf bg-cream/80 text-leaf backdrop-blur-sm hover:border-leaf hover:bg-leaf hover:text-cream",
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
