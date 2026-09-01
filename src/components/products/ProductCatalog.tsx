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
      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal as="li" key={product.id} delay={(index % 3) * 90} className="h-full">
            <ProductCard product={product} onDetails={setSelected} />
          </Reveal>
        ))}
      </ul>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
