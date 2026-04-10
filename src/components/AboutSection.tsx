import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="section-padding">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Nossa Essência
        </p>
        <h2 className="heading-section text-foreground mb-8">
          Uma experiência que vai além do sabor
        </h2>
        <div className="gold-divider mb-8" />
        <p className="body-elegant text-muted-foreground max-w-lg mx-auto">
          Cada doce é preparado com atenção aos detalhes, unindo estética e sabor na medida certa.
Ingredientes selecionados, combinações equilibradas e um cuidado que faz a diferença em cada criação.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
