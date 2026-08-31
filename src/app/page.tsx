import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Products } from "@/components/products/Products";
import { OurProcess } from "@/components/process/OurProcess";
import { Partnership } from "@/components/partnership/Partnership";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
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
