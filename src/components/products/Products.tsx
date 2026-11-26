import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCatalog } from "@/components/products/ProductCatalog";

export function Products() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-sm font-medium text-primary">Produk Kami</p>
              <h2 id="about-heading" className="display-title mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-balance text-primary">
                Grade dan olahan sesuai kebutuhan Anda
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:self-end">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-pretty text-primary">Empat kategori Cavendish — Grade A, B, C, dan Frozen — untuk ritel premium, F&amp;B,
              cafe, dan industri olahan.</p>
            </Reveal>
          </div>
        </div>

        <ProductCatalog />
      </Container>
    </section>
  );
}