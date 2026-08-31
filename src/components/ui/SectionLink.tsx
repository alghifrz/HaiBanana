"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { scrollToTarget } from "@/lib/navigation";

interface SectionLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "onClick"> {
  href: string;
  /** Runs before scrolling — used to close the mobile menu. */
  onNavigate?: () => void;
}

/**
 * In-page link. The href stays a real URL so the page works without JavaScript
 * and remains copyable, while the click handler keeps scrolling smooth instead
 * of letting the router jump instantly.
 */
export function SectionLink({ href, onNavigate, children, ...props }: SectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    onNavigate?.();

    // Two frames, so a closing overlay can unmount and release the scroll lock.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToTarget(href));
    });
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
