import Image from "next/image";
import { AnchorButton } from "@/components/ui/AnchorButton";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-sm shadow-ink/5 transition-shadow duration-300 ease-out hover:shadow-md hover:shadow-ink/8 sm:gap-5 sm:p-6 border border-leaf/10">
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
        <h3 className="font-display text-xl font-semibold tracking-tight text-leaf">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-stone">{product.description}</p>
        <AnchorButton
          href={product.href ?? "/#contact"}
          className="mt-4 w-fit px-5 py-2 text-xs sm:text-sm"
        >
          Selengkapnya
        </AnchorButton>
      </div>
    </article>
  );
}
