import { whatsapp } from "@/data/site";
import type { Product } from "@/types/product";

export function getWhatsAppOrderUrl(product: Product): string {
  const message = [
    `Halo Haibanana, saya ingin memesan pisang ${product.name}.`,
    "",
    "Mohon informasi ketersediaan, harga, dan cara pemesanannya.",
    "",
    "Terima kasih.",
  ].join("\n");

  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}
