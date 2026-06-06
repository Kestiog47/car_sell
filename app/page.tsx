import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import Inventory from "@/components/Inventory/Inventory";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <Inventory />
        <Showcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
