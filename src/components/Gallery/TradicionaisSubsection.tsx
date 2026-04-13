import { useScrollReveal } from "@/hooks/useScrollReveal";

const TradicionaisSubsection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      id="tradicionais"
      ref={ref}
      className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-2 gap-1 order-last lg:order-none">
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/tradicional1.jpeg"
              alt="Doce tradicional artesanal"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/tradicional2.jpeg"
              alt="Doce tradicional com acabamento"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/tradicional3.jpeg"
              alt="Doce tradicional especial"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/tradicional4.jpeg"
              alt="Doce tradicional apresentação"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center order-first lg:order-none">
          <h3 className="heading-section text-foreground mb-6">
            Doces Tradicionais
          </h3>
          <div className="w-12 h-px bg-accent mb-8" />
          <p className="body-elegant text-muted-foreground mb-4">
            Receitas que atravessam gerações, preservando o autêntico sabor da confeitaria tradicional.
          </p>
          <p className="body-elegant text-muted-foreground">
            Cada doce carrega consigo a história e a dedicação ao ofício, feito com ingredientes selecionados e técnicas atemporais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradicionaisSubsection;
