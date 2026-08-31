import type {
  ContactChannel,
  HeadlineLine,
  HeroHighlight,
  NavItem,
  PartnershipBenefit,
  ProcessStep,
  ValueItem,
} from "@/types/content";

/**
 * Central content source for the landing page.
 *
 * Every value below is placeholder copy. Nothing here is a verified fact about
 * the business — replace it with client-supplied content before launch.
 */
export const site = {
  name: "Haibanana",
  tagline: "Quality Banana for Better Life",
  description:
    "Haibanana menyediakan pisang segar pilihan dengan kualitas terbaik dari petani terpercaya untuk pasar Indonesia.",
  url: "https://www.example.com",
} as const;

/** Placeholder number — replace with the real one in international format. */
export const whatsapp = {
  label: "Hubungi Kami",
  number: "620000000000",
  href: "https://wa.me/620000000000",
} as const;

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/", sectionId: "home" },
  { label: "Tentang Kami", href: "/#about", sectionId: "about" },
  { label: "Produk", href: "/#product", sectionId: "product" },
  { label: "Proses", href: "/#our-process", sectionId: "our-process" },
  { label: "Kemitraan", href: "/#partnership", sectionId: "partnership" },
  { label: "Kontak", href: "/#contact", sectionId: "contact" },
];

export const hero = {
  headline: [
    { text: "Pisang berkualitas,", tone: "primary" },
    { text: "siap tumbuh bersama", tone: "accent" },
    { text: "bisnis Anda", tone: "accent" },
  ] satisfies HeadlineLine[],
  description: site.description,
  image: {
    src: "/images/hero/hero-banner.webp",
    alt: "Petani memegang setandan pisang segar di kebun Haibanana",
  },
} as const;

export const heroHighlights: HeroHighlight[] = [
  { kicker: "Dari Petani", title: "Terpercaya", image: "/images/hero/1.webp" },
  { kicker: "Kualitas", title: "Terjamin", image: "/images/hero/2.webp" },
  { kicker: "Distribusi", title: "Tepat Waktu", image: "/images/hero/3.webp" },
  { kicker: "Kemitraan", title: "Berkelanjutan", image: "/images/hero/4.webp" },
];

export const aboutValues: ValueItem[] = [
  { title: "Petani Mitra", image: "/images/about/mitra.webp", stat: "50+" },
  { title: "Pasokan per Bulan", image: "/images/about/pasokan.webp", stat: "10+ ton" },
  { title: "Mitra Bisnis", image: "/images/about/bisnis.webp", stat: "100+" },
];

export const processSteps: ProcessStep[] = [
  {
    id: "cultivation",
    title: "Cultivation",
    description:
      "Plants are grown and monitored through the season with attention to soil health and fruit development.",
  },
  {
    id: "harvest",
    title: "Harvest",
    description:
      "Bunches are cut at the right maturity and moved out of the field quickly to protect quality.",
  },
  {
    id: "sorting",
    title: "Sorting & grading",
    description:
      "Fruit is washed, inspected and separated by size and grade so each order is consistent.",
  },
  {
    id: "processing",
    title: "Packing & processing",
    description:
      "Produce is packed for shipment, or processed into chips, dried fruit, puree and flour.",
  },
  {
    id: "delivery",
    title: "Delivery",
    description:
      "Orders are dispatched with the handling and documentation each destination requires.",
  },
];

export const partnershipBenefits: PartnershipBenefit[] = [
  {
    title: "Retail & wholesale",
    description:
      "Regular volumes of graded fresh fruit, packed to your specification and delivery schedule.",
  },
  {
    title: "Food service",
    description:
      "Reliable supply for kitchens and caterers who need the same product quality every week.",
  },
  {
    title: "Manufacturing",
    description:
      "Puree, flour and dried fruit supplied as ingredients for beverage, bakery and dairy production.",
  },
  {
    title: "Private label",
    description:
      "Processed products packed under your own brand, from packaging design through to delivery.",
  },
];

/** Placeholder contact details — swap in real channels before launch. */
export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "hello@banana.example",
    href: "mailto:hello@banana.example",
  },
  {
    label: "Phone",
    value: "+00 000 0000 0000",
    href: "tel:+000000000000",
  },
  {
    label: "Office",
    value: "Address line 1, City, Country",
    href: "#contact",
  },
];

export const officeHours = "Monday – Friday, 09:00 – 17:00";
