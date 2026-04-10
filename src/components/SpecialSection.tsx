import { useScrollReveal } from "@/hooks/useScrollReveal";

const SpecialSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="especial" className="section-padding bg-cream-dark">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center order-last lg:order-first">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Destaque
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Ovos de Colher
            </h2>
            <div className="w-12 h-px bg-accent mb-8" />
           <p className="body-elegant text-muted-foreground mb-4">
  Nossos ovos de colher são pensados nos mínimos detalhes, unindo textura, sabor e apresentação impecável.
</p>
<p className="body-elegant text-muted-foreground">
  Combinações selecionadas que equilibram intensidade e delicadeza em cada camada.
</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="image-zoom aspect-[5/6]">
              <img
                src="/doces/ovo.jpeg"
                alt="Ovo de colher com camadas de chocolate e ganache"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="image-zoom aspect-[5/6]">
              <img
                src="/doces/ovo02.jpeg"
                alt="Ovo de colher em embalagem elegante"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="image-zoom aspect-[5/6]">
              <img
                src="/doces/ovo03.jpeg"
                alt="Ovo de colher com detalhes dourados"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="image-zoom aspect-[5/6]">
              <img
                src="/doces/ovo04.jpeg"
                alt="Ovo de colher servido em mesa sofisticada"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
