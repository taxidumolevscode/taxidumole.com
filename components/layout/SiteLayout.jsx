import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Navigation from "./Navigation";
import ScrollProgress from "./ScrollProgress";
import SiteFooter from "./SiteFooter";

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navigation onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
      <SiteFooter />
      <ScrollProgress progress={scrollProgress} />
    </div>
  );
}
