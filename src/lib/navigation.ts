function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Moves the viewport to a same-page target.
 *
 * Hash targets are handed to the browser by assigning `location.hash`, which
 * keeps native history behaviour and lets the CSS `scroll-behavior: smooth`
 * rule (plus each section's `scroll-margin-top`) do the work.
 */
export function scrollToTarget(href: string): void {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    window.history.pushState(null, "", href);
    return;
  }

  const hash = href.slice(hashIndex);
  const target = document.getElementById(hash.slice(1));
  if (!target) return;

  if (window.location.hash === hash) {
    target.scrollIntoView();
    return;
  }

  window.location.hash = hash;
}
