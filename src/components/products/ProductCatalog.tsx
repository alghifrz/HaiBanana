"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductModal } from "@/components/products/ProductModal";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

export function ProductCatalog() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
        {products.map((product, index) => (
          <Reveal as="li" key={product.id} delay={(index % 4) * 70} className="h-full">
            <ProductCard product={product} index={index} onDetails={setSelected} />
          </Reveal>
        ))}
      </ul>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}