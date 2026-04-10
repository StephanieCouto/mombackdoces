const HeroSection = () => {
  return (
 <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#FAF9F6]">

  {/* FUNDO COM GRADIENTE SUAVE */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#F3EFEA] to-[#EDE6DD]" />

  {/* DETALHE SUTIL (TEXTURA / GLOW) */}
  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:40px_40px]" />

  {/* CONTEÚDO (INALTERADO) */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
    

    <h1 className="heading-display text-[#1A1A1A] max-w-3xl animate-fade-up">
      Sabor que encanta, qualidade que conquista
    </h1>

    <div
      className="w-12 h-px bg-[#C6A96B] mt-8 mb-8 animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    />

    <a
      href="#sobre"
      className="font-sans text-sm tracking-[0.2em] uppercase text-[#1A1A1A]/80 border border-[#1A1A1A]/30 px-8 py-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 animate-fade-up"
      style={{ animationDelay: "0.6s" }}
    >
      Ver mais
    </a>

  </div>

</section>
  );
};

export default HeroSection;
