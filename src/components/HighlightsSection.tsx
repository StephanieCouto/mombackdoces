import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { title: "Ingredientes", desc: "Escolhas que fazem diferença no resultado" },
  { title: "Apresentação", desc: "Visual pensado com cuidado" },
  { title: "Detalhes", desc: "Acabamento feito com atenção" },
  { title: "Experiência", desc: "Equilíbrio entre sabor e estética" },
];

const HighlightsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
      </div>
    </section>
  );
};

export default HighlightsSection;
