import type { Product } from "@/types/product";

/**
 * Product catalog. The UI reads only from this module, so the data source can
 * later move to a CMS without rewriting the cards.
 */
export const products: Product[] = [
  {
    id: "grade-a",
    name: "Pisang Grade A",
    description:
      "Cavendish terbaik untuk etalase: bentuk utuh, warna merata, dan tampilan premium.",
    details:
      "Grade A adalah pilihan utama untuk ritel modern dan toko buah premium. Buahnya utuh, warna merata, dan teksturnya padat — siap dijual di etalase atau dihidangkan langsung. Unit kemasan: 1 box / 13 kg.",
    suitableFor: ["Supermarket & toko buah", "Hampers & hadiah", "Konsumsi langsung"],
    image: "/images/bahan/a.webp",
  },
  {
    id: "grade-b",
    name: "Pisang Grade B",
    description:
      "Kualitas baik dengan sedikit bercak — ideal untuk F&B dan kebutuhan dapur rutin.",
    details:
      "Grade B tetap segar dan enak, dengan sedikit variasi pada kulit. Cocok untuk hotel, restoran, bakery, juice bar, dan dapur yang mengutamakan rasa serta kematangan konsisten. Unit kemasan: 1 box / 13 kg.",
    suitableFor: ["HORECA & F&B", "Cafe & kedai jus", "Dapur & katering"],
    image: "/images/bahan/b.webp",
  },
  {
    id: "grade-c",
    name: "Pisang Grade C",
    description:
      "Grade ekonomis untuk olahan — fokus rasa dan volume, bukan tampilan etalase.",
    details:
      "Grade C dipilih untuk produksi makanan dan minuman. Bentuk dan warna tidak menjadi prioritas, sehingga lebih efisien untuk UMKM olahan dan industri. Unit kemasan: 1 box / 13 kg.",
    suitableFor: ["UMKM olahan buah", "Bahan industri", "Produksi skala besar"],
    image: "/images/bahan/c.webp",
  },
  {
    id: "frozen",
    name: "Frozen Banana",
    description:
      "Pisang beku bernilai tambah dari grade lebih rendah — kurangi limbah, siap olahan.",
    details:
      "Frozen Banana mengolah pisang berkualitas lebih rendah menjadi produk beku yang praktis untuk smoothie, bakery, dan industri olahan. Setiap buah mendapat jalur pasar yang tepat sekaligus mengurangi food waste.",
    suitableFor: ["Smoothie & juice bar", "Bakery & F&B", "Industri olahan"],
    image: "/images/bahan/frozen.webp",
    category: "Olahan",
  },
];
