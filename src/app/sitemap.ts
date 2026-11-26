import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${base}/images/hero/hero-banner.webp`,
        `${base}/images/brand/logo-haibanana.webp`,
        ...products.map((product) => `${base}${product.image}`),
      ],
    },
  ];
}
