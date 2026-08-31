import type { Product } from "@/types/product";

/**
 * Product catalog. The UI reads only from this module, so the data source can
 * later move to a CMS without rewriting the cards.
 */
export const products: Product[] = [
  {
    id: "grade-a",
    name: "Grade A",
    description:
      "Kualitas terbaik dengan bentuk sempurna, warna menarik, dan tekstur ideal.",
    image: "/images/products/A.webp",
    href: "/#contact",
  },
  {
    id: "grade-b",
    name: "Grade B",
    description: "Kualitas baik dengan sedikit bercak, tetap lezat dan segar.",
    image: "/images/products/B.webp",
    href: "/#contact",
  },
  {
    id: "grade-c",
    name: "Grade C",
    description: "Kualitas ekonomis untuk kebutuhan olahan dan industri.",
    image: "/images/products/C.webp",
    href: "/#contact",
  },
];
