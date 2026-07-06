import Header from './components/Header';
import Hero from './components/Hero';
import BenefitBar from './components/BenefitBar';
import Services from './components/Services';
import PriceSection from './components/PriceSection';
import SpecialHairstyles from './components/SpecialHairstyles';
import NailsSection from './components/NailsSection';
import GallerySection from './components/GallerySection';
import WhyChooseUs from './components/WhyChooseUs';
import BookingSteps from './components/BookingSteps';
import LocationContact from './components/LocationContact';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <BenefitBar />
        <Services />
        <PriceSection />
        <SpecialHairstyles />
        <NailsSection />
        <GallerySection />
        <WhyChooseUs />
        <BookingSteps />
        <LocationContact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
