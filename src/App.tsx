import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BenefitBar from "./components/BenefitBar";
import ServicesSection from "./components/ServicesSection";
import PriceSection from "./components/PriceSection";
import SpecialHairstylesSection from "./components/SpecialHairstylesSection";
import NailsSection from "./components/NailsSection";
import GallerySection from "./components/GallerySection";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingSteps from "./components/BookingSteps";
import LocationContact from "./components/LocationContact";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { WHATSAPP } from "./lib/wa";
import { IconWhatsapp, IconArrow } from "./components/Icons";

function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.8)] sm:bottom-7 sm:right-7 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <IconWhatsapp className="h-5 w-5" />
      <span className="hidden sm:inline">Reservar</span>
    </a>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-forest/90 text-gold ring-1 ring-gold/30 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-forest sm:bottom-7 sm:left-7 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <IconArrow className="h-5 w-5 rotate-[-90deg]" />
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <BenefitBar />
        <ServicesSection />
        <PriceSection />
        <SpecialHairstylesSection />
        <NailsSection />
        <GallerySection />
        <WhyChooseUs />
        <BookingSteps />
        <LocationContact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
