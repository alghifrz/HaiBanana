export interface NavItem {
  label: string;
  href: string;
  /** Section element id used by the scroll spy. Absent for the top-of-page link. */
  sectionId?: string;
}

export interface HeadlineLine {
  text: string;
  /** "accent" renders the line in secondary, matching the brand headline treatment. */
  tone: "primary" | "accent";
}

export interface ValueItem {
  title: string;
  image: string;
  /** Short statistic shown under the title, e.g. "50+". */
  stat: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PartnershipBenefit {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Tailwind grid placement classes for the partnership grid. */
  layout: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}
