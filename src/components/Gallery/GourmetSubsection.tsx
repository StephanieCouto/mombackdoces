import { useScrollReveal } from "@/hooks/useScrollReveal";

const GourmetSubsection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      id="gourmet"
      ref={ref}
      className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-2 gap-1 order-last lg:order-none">
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/doce01.jpeg"
              alt="Doce gourmet sofisticado"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/doce02.jpeg"
              alt="Doce gourmet com detalhes"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/doces4.jpeg"
              alt="Doce gourmet apresentação"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="image-zoom aspect-[5/6]">
            <img
              src="/doces/doce03.jpeg"
              alt="Doce gourmet seleção"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>

        <div className="flex flex-col order-first lg:order-none">
          <h3 className="heading-section text-foreground mb-6">
            Doces Gourmet
          </h3>
          <div className="w-12 h-px bg-accent mb-8" />
          <p className="body-elegant text-muted-foreground mb-4">
            Doces criados para encantar em cada detalhe.
          </p>
          <p className="body-elegant text-muted-foreground">
            Combinações refinadas de sabores, com apresentação elegante e delicada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GourmetSubsection;
