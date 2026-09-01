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
    details:
      "Grade A adalah pilihan utama untuk tampilan di etalase. Buahnya utuh, warna merata, dan teksturnya padat — cocok jika Anda butuh pisang yang terlihat rapi dan siap dijual atau dihidangkan langsung.",
    suitableFor: ["Ritel & pasar modern", "Hampers & hadiah", "Konsumsi langsung"],
    image: "/images/products/A.webp",
  },
  {
    id: "grade-b",
    name: "Grade B",
    description: "Kualitas baik dengan sedikit bercak, tetap lezat dan segar.",
    details:
      "Grade B tetap segar dan enak, dengan sedikit bercak pada kulit. Grade ini pas untuk kebutuhan harian, warung, atau dapur yang lebih mengutamakan rasa daripada penampilan sempurna.",
    suitableFor: ["Warung & pasar tradisional", "Konsumsi harian", "Dapur & katering"],
    image: "/images/products/B.webp",
  },
  {
    id: "grade-c",
    name: "Grade C",
    description: "Kualitas ekonomis untuk kebutuhan olahan dan industri.",
    details:
      "Grade C dipilih untuk olahan. Bentuk dan warna tidak menjadi prioritas, sehingga harganya lebih hemat untuk produksi makanan, minuman, atau bahan industri.",
    suitableFor: ["Olahan makanan", "Bahan industri", "Produksi skala besar"],
    image: "/images/products/C.webp",
  },
];
