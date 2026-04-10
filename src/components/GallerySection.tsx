import { useScrollReveal } from "@/hooks/useScrollReveal";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="galeria" className="section-padding bg-cream-dark">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Galeria
          </p>
          <h2 className="heading-section text-foreground">
            Estética & Sabor
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-5 image-zoom aspect-[3/4]">
            <img
              src="/doces/doce01.jpeg"
              alt="doces"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1080}
              height={1920}
            />
          </div>

          <div className="md:col-span-7 flex flex-col gap-4 md:gap-6">
            <div className="image-zoom aspect-[16/9]">
              <img
                src="/doces/doce02.jpeg"
                alt="Ovo de colher com detalhes dourados"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width={1920}
                height={1280}
              />
            </div>
            <div className="image-zoom aspect-[16/10]">
              <img
                src="/doces/doce03.jpeg"
                alt="Trufas de chocolate com pó dourado"
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

export default GallerySection;
