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
  tagline: "Pisang Berkualitas untuk Kehidupan yang Lebih Baik",
  description:
    "Haibanana menyediakan pisang segar pilihan dengan kualitas terbaik dari petani terpercaya untuk pasar Indonesia.",
  url: "https://www.example.com",
} as const;

/** Placeholder number — replace with the real one in international format. */
export const whatsapp = {
  label: "Hubungi Kami",
  number: "62",
  href: "https://wa.me/62",
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
    id: "harvest",
    title: "Panen",
    description: "Dipanen dari kebun pilihan pada umur yang tepat.",
    image: "/images/process/1.webp",
  },
  {
    id: "sorting",
    title: "Sortasi & Grading",
    description: "Disortir dan dikelompokkan sesuai ukuran dan mutu.",
    image: "/images/process/2.webp",
  },
  {
    id: "post-harvest",
    title: "Pascapanen",
    description: "Diproses dengan standar kebersihan dan kualitas.",
    image: "/images/process/3.webp",
  },
  {
    id: "packing",
    title: "Pengemasan",
    description: "Dikemas rapi untuk menjaga kualitas selama pengiriman.",
    image: "/images/process/4.webp",
  },
  {
    id: "distribution",
    title: "Distribusi",
    description: "Dikirim tepat waktu ke berbagai wilayah.",
    image: "/images/process/5.webp",
  },
];

export const partnershipBenefits: PartnershipBenefit[] = [
  {
    id: "supermarket",
    title: "Supermarket",
    description: "Pasokan rutin untuk rak ritel dan pasar modern.",
    image: "/images/partnership/1new.webp",
    layout: "min-h-[20rem] lg:col-span-4 lg:row-span-2 lg:min-h-0",
  },
  {
    id: "horeca",
    title: "HORECA",
    description: "Hotel, restoran, dan katering yang butuh pasokan stabil.",
    image: "/images/partnership/2.webp",
    layout: "min-h-[18rem] lg:col-span-4",
  },
  {
    id: "distributor",
    title: "Distributor",
    description: "Volume besar untuk jaringan distribusi di berbagai wilayah.",
    image: "/images/partnership/3.webp",
    layout: "min-h-[18rem] lg:col-span-4",
  },
  {
    id: "reseller",
    title: "Reseller",
    description: "Stok untuk dijual kembali ke pasar lokal.",
    image: "/images/partnership/4.webp",
    layout: "min-h-[16rem] lg:col-span-5",
  },
  {
    id: "industri",
    title: "Industri Olahan",
    description: "Bahan baku untuk produksi makanan dan minuman.",
    image: "/images/about/Fotopisang.webp",
    layout: "min-h-[16rem] lg:col-span-3",
  },
];

/** Placeholder contact details — swap in real channels before launch. */
export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "sbillaa@gmail.com",
    href: "mailto:sbillaa@gmail.com",
  },
  {
    label: "Telepon",
    value: "+62 812 3456 7890",
    href: "tel:+62 812 3456 7890",
  },
  {
    label: "Alamat",
    value: "Dusun Wedani, Desa Badang, Kecamatan Ngoro Kab Jombang4",
    href: "#contact",
  },
];

