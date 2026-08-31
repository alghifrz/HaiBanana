"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently occupying the middle of the viewport,
 * so the navbar can mark the matching link as current.
 */
export function useScrollSpy(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActiveId(sectionIds.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
