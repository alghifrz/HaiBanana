import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Products } from "@/components/products/Products";
import { OurProcess } from "@/components/process/OurProcess";
import { Partnership } from "@/components/partnership/Partnership";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { hero } from "@/data/site";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[70%_center] md:object-[72%_center] lg:object-right"
        />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="relative z-10 flex-1">
        <Hero />
        <About />
        <Products />
        <OurProcess />
        <Partnership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
