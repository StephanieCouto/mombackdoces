import { useScrollReveal } from "@/hooks/useScrollReveal";
import GourmetSubsection from "./GourmetSubsection";
import EspeciaisSubsection from "./EspeciaisSubsection";
import TradicionaisSubsection from "./TradicionaisSubsection";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="galeria" className="section-padding bg-cream-dark">
      {/* Título Principal */}
      <div
        ref={ref}
        className={`max-w-6xl mx-auto text-center mb-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className=" ">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Galeria
        </p>
        
        </div>
        
        {/* Divisor na Página */}
        <div className="w-14 h-px items-center mx-auto bg-accent mb-8" />
        
        
        <p className="body-elegant text-muted-foreground mb-10 max-w-md mx-auto">Uma seleção dos nossos doces preparados com cuidado e qualidade</p>
         {/*<h2 className="heading-section text-foreground">
          Estética & Sabor
        </h2>*/}
      </div>

      

      {/* Subseções da Galeria */}
      <div className="max-w-6xl mx-auto">
        <GourmetSubsection />
        <EspeciaisSubsection />
        <TradicionaisSubsection />
      </div>
    </section>
  );
};

export default GallerySection;
