import { products } from "@/data/products";
import { contactChannels, getSiteUrl, location, site } from "@/data/site";

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

const email = contactChannels.find((channel) => channel.label === "Email")?.value;
const telephone = contactChannels.find((channel) => channel.label === "Telepon")?.value;

export function getJsonLd() {
  const url = getSiteUrl();
  const logo = absoluteUrl("/images/brand/logo-haibanana.webp");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${url}/#organization`,
        name: site.name,
        url,
        logo,
        image: logo,
        description: site.description,
        email,
        telephone,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.streetAddress,
          addressLocality: location.addressLocality,
          addressRegion: location.addressRegion,
          addressCountry: location.addressCountry,
        },
        areaServed: ["Jombang", "Jawa Timur", "Indonesia"],
        knowsAbout: [
          "Rantai pasok pisang Cavendish",
          "Supplier pisang Jombang",
          "Pisang Grade A, B, dan C",
          "Frozen banana",
          "Pisang untuk ritel, F&B, dan UMKM",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        description: site.description,
        inLanguage: "id-ID",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: `${site.name} | ${site.title}`,
        description: site.description,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        primaryImageOfPage: absoluteUrl("/images/hero/hero-banner.webp"),
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#products`,
        name: "Produk Pisang Haibanana",
        url: `${url}/#product`,
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.name,
            description: product.details,
            image: absoluteUrl(product.image),
            brand: { "@type": "Brand", name: site.name },
            category: product.category ?? "Pisang Cavendish",
          },
        })),
      },
    ],
  };
}
