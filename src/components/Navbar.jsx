import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import flagES from "../assets/flag-es.png";
import flagEN from "../assets/flag-en.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-topo-gray transition-all duration-300 ${
        scrolled ? "shadow-md py-2 bg-white" : "py-3 bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between transition-all duration-300">
        
        {/* LOGO CENTRADO */}
        <div className="flex-1 flex justify-center items-center">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="TopoAtlantico"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "w-20 h-20" : "w-24 h-24"
              }`}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-topo-navy text-base sm:text-lg lg:text-xl">TopoAtlantico</span>
              <span className="text-sm italic font-medium text-[#1B7F8C] tracking-wide">
                Servicios Topográficos
              </span>
            </div>
          </a>

          {/* SELECTOR DE IDIOMA - A la derecha del logo */}
          <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 ml-2 sm:ml-4 md:ml-6">
            <button
              onClick={() => changeLanguage("es")}
              className={`p-1 rounded-full border-2 transition-all ${
                i18n.language === "es" ? "border-topo-navy" : "border-transparent"
              }`}
            >
              <img src={flagES} alt="Español" className="w-6 h-6 rounded-full" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`p-1 rounded-full border-2 transition-all ${
                i18n.language === "en" ? "border-topo-navy" : "border-transparent"
              }`}
            >
              <img src={flagEN} alt="English" className="w-6 h-6 rounded-full" />
            </button>
          </div>
        </div>

        {/* MENÚ */}
<nav className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4 md:gap-6 lg:gap-10 mt-3 md:mt-0 text-topo-navy text-base sm:text-lg lg:text-xl font-semibold">
          <a href="#services" className="hover:text-topo-ocean transition-colors">{t("navbar.services")}</a>
          <a href="#projects" className="hover:text-topo-ocean transition-colors">{t("navbar.projects")}</a>
          <a href="#about" className="hover:text-topo-ocean transition-colors">{t("navbar.about")}</a>
          <a href="#contact" className="hover:text-topo-ocean transition-colors">{t("navbar.contact")}</a>
        </nav>
      </div>
    </header>
  );
}
