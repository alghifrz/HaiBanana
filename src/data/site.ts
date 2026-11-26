import type {
  ContactChannel,
  HeadlineLine,
  NavItem,
  PartnershipBenefit,
  ProcessStep,
  ValueItem,
} from "@/types/content";

/**
 * Central content source for the landing page.
 *
 * Set NEXT_PUBLIC_SITE_URL to the real production domain before launch so
 * canonical tags, Open Graph URLs, sitemap, and JSON-LD stay consistent.
 */
export const site = {
  name: "Haibanana",
  tagline: "Rantai Pasok Pisang Cavendish dari Kebun ke Pasar",
  title: "Rantai Pasok Pisang Cavendish Terintegrasi",
  description:
    "Haibanana membangun rantai pasok pisang Cavendish terintegrasi dari petani lokal ke ritel, F&B, dan UMKM. Kualitas seragam, pasokan stabil, dan distribusi yang andal.",
  url: "https://haibanana.com",
  locale: "id_ID",
  keywords: [
    "Haibanana",
    "pisang Cavendish",
    "supply chain pisang",
    "rantai pasok pisang",
    "supplier pisang Jombang",
    "distributor pisang Jawa Timur",
    "pisang Grade A",
    "pisang Grade B",
    "pisang Grade C",
    "frozen banana",
    "pisang beku",
    "pisang supermarket",
    "pisang HORECA",
    "pisang F&B",
    "petani pisang Jombang",
  ],
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? site.url).replace(/\/$/, "");
}

export const location = {
  streetAddress: "RT.02/RW.01, Wedani, Badang, Kec. Ngoro, Kabupaten Jombang, Jawa Timur 61473",
  addressLocality: "",
  addressRegion: "Jawa Timur",
  addressCountry: "ID",
  formatted:
    "RT.02/RW.01, Wedani, Badang, Kec. Ngoro, Kabupaten Jombang, Jawa Timur 61473",
  mapUrl: "https://maps.app.goo.gl/hfkoVrb8vWNj8Cb27?g_st=ic",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.115803406096!2d112.25533480000001!3d-7.670697799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7869d2cfd59ac5%3A0x4f3dcf1afe431ddb!2sHaibanana%20house%20of%20cavendish!5e0!3m2!1sid!2sid!4v1794902484693!5m2!1sid!2sid",
} as const;

/** Placeholder number — replace with the real one in international format. */
export const whatsapp = {
  label: "Hubungi Kami",
  number: "+62 823-3880-1414",
  href: "https://wa.me/6282338801414",
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
    { text: "Cavendish dari kebun", tone: "primary" },
    { text: "ke pasar yang tepat", tone: "accent" },
  ] satisfies HeadlineLine[],
  description:
    "Integrated Cavendish Banana Supply Chain from Farm to Market",
  image: {
    src: "/images/bahan/bglanding.webp",
    alt: "Petani memegang setandan pisang Cavendish segar di kebun Haibanana",
  },
} as const;

export const about = {
  title: "Dari kebun Cavendish ke pasar yang tepat.",
  lead: "Berawal di pandemi 2021, kami menanam Cavendish untuk bertahan — lalu menjualnya sendiri, bahkan di pinggir jalan.",
  description:
    "Dari situ lahir Haibanana: menghadirkan pisang berkualitas dari petani lokal ke pasar yang lebih luas, dan tumbuh bersama mereka.",
} as const;

export const aboutValues: ValueItem[] = [
  { title: "Petani mitra", image: "/images/about/mitra.webp", stat: "35+" },
  { title: "Ton per tahun", image: "/images/about/pasokan.webp", stat: "400" },
  { title: "Buyer partner", image: "/images/about/bisnis.webp", stat: "20+" },
];

export const processSection = {
  title: "Dari kebun hingga ke mitra bisnis Anda",
  description:
    "Sistem end-to-end menjaga mutu Cavendish: panen, grading, pematangan terkontrol, hingga distribusi ke ritel dan F&B.",
} as const;

export const processSteps: ProcessStep[] = [
  {
    id: "harvest",
    title: "Panen & Pencucian",
    description:
      "Dipanen dari petani mitra pada umur yang tepat, lalu dicuci untuk menjaga kebersihan dan kualitas awal.",
    image: "/images/process/1.webp",
  },
  {
    id: "sorting",
    title: "Sortasi & Grading",
    description:
      "Disortir menjadi Grade A, B, dan C agar setiap buah masuk ke segmen pasar dengan nilai jual optimal. Grade lebih rendah dialihkan ke pengolahan frozen.",
    image: "/images/process/2.webp",
  },
  {
    id: "ripening",
    title: "Pematangan Terkontrol",
    description:
      "Proses pematangan dikontrol agar ukuran, warna, dan tingkat kematangan konsisten untuk ritel dan F&B.",
    image: "/images/process/3.webp",
  },
  {
    id: "packing",
    title: "Pengemasan",
    description:
      "Dikemas rapi (termasuk unit box 13 kg untuk grade segar) agar mutu terjaga selama pengiriman.",
    image: "/images/process/4.webp",
  },
  {
    id: "distribution",
    title: "Distribusi",
    description:
      "Disalurkan efisien ke supermarket, toko buah, hotel, cafe, dan UMKM agar pasokan tetap stabil.",
    image: "/images/process/5.webp",
  },
];

export const partnership = {
  title: "Bermitra bersama Haibanana",
  description:
    "Kami memasok dengan kualitas seragam, volume yang bisa diandalkan, dan jadwal rutin — sesuai kebutuhan ritel premium, F&B, dan UMKM.",
} as const;

export const partnershipBenefits: PartnershipBenefit[] = [
  {
    id: "supermarket",
    title: "Supermarket & Toko Buah",
    description:
      "Pasokan rutin dengan kualitas seragam untuk rak ritel modern dan toko buah premium.",
    image: "/images/partnership/1new.webp",
    imageAlt: "Pisang Haibanana di rak supermarket dan pasar modern",
    layout: "min-h-[18rem] sm:col-span-2",
  },
  {
    id: "horeca",
    title: "HORECA & F&B",
    description:
      "Hotel, restoran, bakery, dan juice bar yang butuh ukuran serta kematangan konsisten.",
    image: "/images/partnership/2.webp",
    imageAlt: "Pasokan pisang Haibanana untuk hotel, restoran, dan katering",
    layout: "min-h-[18rem]",
  },
  {
    id: "distributor",
    title: "Distributor",
    description:
      "Volume besar dengan kualitas terstandar untuk jaringan distribusi antarwilayah.",
    image: "/images/partnership/3.webp",
    imageAlt: "Distribusi pisang Haibanana dalam volume besar ke berbagai wilayah",
    layout: "min-h-[18rem]",
  },
  {
    id: "reseller",
    title: "Cafe & UMKM",
    description:
      "Volume fleksibel dan akses pasokan mudah untuk cafe, kedai jus, dan UMKM olahan buah.",
    image: "/images/partnership/4.webp",
    imageAlt: "Cafe dan UMKM memasarkan pisang Haibanana",
    layout: "min-h-[18rem]",
  },
  {
    id: "industri",
    title: "Industri Olahan",
    description:
      "Grade C dan frozen banana sebagai bahan baku makanan serta minuman yang efisien.",
    image: "/images/about/Fotopisang.webp",
    imageAlt: "Pisang Haibanana sebagai bahan baku industri makanan dan minuman",
    layout: "min-h-[18rem] sm:col-span-2 lg:col-span-1",
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
    value: "+62 823-3880-1414",
    href: "https://wa.me/6282338801414",
  },
  {
    label: "Alamat",
    value: location.formatted,
    href: location.mapUrl,
  },
];
