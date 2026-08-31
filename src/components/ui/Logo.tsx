import Image from "next/image";
import { site } from "@/data/site";

interface LogoProps {
  /** "dark" renders a white knockout for use on dark backgrounds. */
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
}

export function Logo({ tone = "light", priority = false, className = "" }: LogoProps) {
  return (
    <Image
      src="/images/brand/logo-haibanana.webp"
      alt={`${site.name} — ${site.tagline}`}
      // Declared at display scale (source is 1853x415) so the optimizer serves
      // a small file instead of the full-size asset.
      width={371}
      height={83}
      priority={priority}
      className={`h-8 w-auto md:h-10 ${tone === "dark" ? "brightness-0 invert" : ""} ${className}`.trim()}
    />
  );
}
