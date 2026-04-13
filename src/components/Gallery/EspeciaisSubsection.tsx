import { useScrollReveal } from "@/hooks/useScrollReveal";

const EspeciaisSubsection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      id="especiais"
      ref={ref}
      className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col justify-center order-first lg:order-none">
          <h3 className="heading-section text-foreground mb-6">
            Ovos de Colher
          </h3>
          <div className="w-12 h-px bg-accent mb-8" />
          <p className="body-elegant text-muted-foreground mb-4">
            Nossos ovos de colher são pensados nos mínimos detalhes, unindo textura, sabor e apresentação impecável.
          </p>
          <p className="body-elegant text-muted-foreground">
            Combinações selecionadas que equilibram intensidade e delicadeza em cada camada.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1 order-last lg:order-none">
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/ovo.jpeg"
              alt="Ovo de colher com camadas de chocolate"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/ovo02.jpeg"
              alt="Ovo de colher elegante"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/ovo03.jpeg"
              alt="Ovo de colher detalhes"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/ovo04.jpeg"
              alt="Ovo de colher apresentação"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspeciaisSubsection;
