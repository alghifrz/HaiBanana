import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7ef",
    theme_color: "#28592f",
    lang: "id",
    icons: [
      {
        src: "/images/brand/icon.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
  };
}
