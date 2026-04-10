import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#FAF9F6]">
      {/* FUNDO COM GRADIENTE SUAVE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F3EFEA] to-[#EDE6DD]" />

      {/* DETALHE SUTIL (TEXTURA / GLOW) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:40px_40px]" />

      {/* CONTEÚDO COM SCROLL REVEAL */}
      <div
        ref={ref}
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="heading-display text-[#1A1A1A] max-w-3xl">
          Sabor que encanta, qualidade que conquista
        </h1>

        <div className="w-12 h-px bg-[#C6A96B] mt-8 mb-8" />

        <a
          href="#sobre"
          className="font-sans text-sm tracking-[0.2em] uppercase text-[#1A1A1A]/80 border border-[#1A1A1A]/30 px-8 py-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
        >
          Ver mais
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
