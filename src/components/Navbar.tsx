import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainMenuItems = [
    { label: 'Sobre', href: '#sobre' },
    {
      label: 'Galeria',
      submenu: [
        { label: 'Gourmet', href: '#gourmet' },
        { label: 'Especiais', href: '#especiais' },
        { label: 'Tradicionais', href: '#tradicionais' },
      ],
    },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setExpandedMenu(null);
  };

  const toggleSubmenu = (menuLabel: string) => {
    setExpandedMenu(expandedMenu === menuLabel ? null : menuLabel);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Image priority src="/logo.png" alt="Momback Doces" width={1696} height={610} className="w-[150px] h-[50px]" />

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {mainMenuItems.map((item) =>
              'submenu' in item ? (
                <div key={item.label} className="relative group">
                  <span className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300 cursor-pointer">
                    {item.label}
                  </span>
                  <div className="absolute left-0 pt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-background/95 backdrop-blur-md shadow-lg rounded">
                      {(item as { label: string; submenu: Array<{ label: string; href: string }> }).submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm font-sans tracking-[0.1em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300 first:rounded-t last:rounded-b"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          {/* Botão Hamburger Mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menu Lateral Mobile */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Lateral */}
          <div className="fixed top-0 right-0 h-screen w-64 bg-background/95 backdrop-blur-md z-40 md:hidden flex flex-col pt-24 px-6 gap-4 shadow-lg overflow-y-auto">
            {mainMenuItems.map((item) =>
              'submenu' in item ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full text-left text-base font-sans tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300 py-3 border-b border-border/30 flex items-center justify-between"
                  >
                    {item.label}
                    <span
                      className={`transform transition-transform duration-300 ${
                        expandedMenu === item.label ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedMenu === item.label && (
                    <div className="bg-background/50 rounded py-2 mt-2">
                      {(item as { label: string; submenu: Array<{ label: string; href: string }> }).submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm font-sans tracking-[0.1em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-base font-sans tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300 py-3 border-b border-border/30"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
