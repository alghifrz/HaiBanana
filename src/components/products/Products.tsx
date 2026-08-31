import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export function Products() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="bg-white py-20 md:py-28 lg:py-32"
    >
      <Container>
        <SectionHeading
          headingId="product-heading"
          eyebrow="Produk Kami"
          title="Grade pisang sesuai kebutuhan Anda"
          description="Tiga grade untuk pasar ritel, konsumsi harian, dan kebutuhan olahan industri."
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal as="li" key={product.id} delay={(index % 3) * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
