import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { title: "Ingredientes", desc: "Escolhas que fazem diferença no resultado" },
  { title: "Apresentação", desc: "Visual pensado com cuidado" },
  { title: "Detalhes", desc: "Acabamento feito com atenção" },
  { title: "Experiência", desc: "Equilíbrio entre sabor e estética" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();
    const { ref: refHighlights, isVisible: isVisibleHighlights } = useScrollReveal();

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

      {/* Highlights 
      <div
        ref={refHighlights}
        className={`max-w-5xl mx-auto mb-24 transition-all duration-1000 ${
          isVisibleHighlights ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="text-center transition-all duration-700"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="gold-divider mb-6" />
              <h3 className="font-serif text-lg md:text-xl font-normal text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>*/}

    </section>
  );
};

export default AboutSection;
