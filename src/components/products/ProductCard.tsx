"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index: number;
  onDetails: (product: Product) => void;
}

export function ProductCard({ product, index, onDetails }: ProductCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-primary/10 transition-all duration-500 ease-spring-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/25">
      {/* Area gambar */}
      <div className="relative m-2 aspect-4/3 overflow-hidden rounded-2xl bg-cream-deep">
        <span
          aria-hidden="true"
          className="absolute top-3 left-4 z-10 font-display text-sm font-semibold tabular-nums text-primary/60"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Lingkaran dekoratif di belakang produk */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/25 transition-transform duration-700 ease-spring-out group-hover:scale-125"
        />

        <Image
          src={product.image}
          alt={`${product.name} dari Haibanana`}
          fill
          sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-5 transition-transform duration-500 ease-spring-out group-hover:scale-105 group-hover:-rotate-2"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-1 flex-col px-5 pt-3 pb-5">
        <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-primary">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-[1.6] text-pretty text-stone">
          {product.description}
        </p>

        <button
          type="button"
          onClick={() => onDetails(product)}
          aria-label={`Lihat detail ${product.name}`}
          className="pressable mt-auto flex w-full items-center justify-between pt-5 text-sm font-medium text-primary after:absolute after:inset-0 after:content-['']"
        >
          <span className="underline decoration-primary/0 underline-offset-4 transition-colors group-hover:decoration-primary/60">
            Selengkapnya
          </span>
          <span className="grid size-9 place-items-center rounded-full bg-primary text-cream transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-ink">
            <ArrowRightIcon />
          </span>
        </button>
      </div>
    </article>
  );
}