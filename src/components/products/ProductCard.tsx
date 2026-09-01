"use client";

import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onDetails: (product: Product) => void;
}

export function ProductCard({ product, onDetails }: ProductCardProps) {
  return (
    <article className="flex h-full items-center gap-4 rounded-3xl border border-leaf/10 bg-white p-5 shadow-sm shadow-ink/5 transition-shadow duration-300 ease-out hover:shadow-md hover:shadow-ink/8 sm:gap-5 sm:p-6">
      <div className="relative size-32 shrink-0 sm:size-32 lg:size-32 xl:size-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 8rem, 7rem"
          className="object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold tracking-tight text-leaf">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-stone">{product.description}</p>
        <button
          type="button"
          onClick={() => onDetails(product)}
          className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-leaf px-5 py-2 text-xs font-medium text-cream transition-all duration-300 ease-out hover:bg-ink hover:shadow-lg hover:shadow-leaf/25 active:scale-[0.98] sm:text-sm"
        >
          Selengkapnya
        </button>
      </div>
    </article>
  );
}
