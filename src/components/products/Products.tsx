import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCatalog } from "@/components/products/ProductCatalog";

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
        <ProductCatalog />
      </Container>
    </section>
  );
}
