import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import HighlightsSection from "@/components/HighlightsSection";
import SpecialSection from "@/components/SpecialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <HighlightsSection />
      <SpecialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
