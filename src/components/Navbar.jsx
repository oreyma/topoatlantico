// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-topo-gray transition-all duration-300 ${
        scrolled ? "shadow-md py-2 bg-white" : "py-3 bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between transition-all duration-300">
        
        {/* LOGO + TEXTO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="TopoAtlantico"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "w-12 h-12" : "w-24 h-24"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-topo-navy">TopoAtlantico</span>
            <span className="text-sm italic font-medium text-[#1B7F8C] tracking-wide">
              Servicios Topográficos
            </span>
          </div>
        </a>

        {/* MENÚ (horizontal en escritorio, debajo en móvil) */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 mt-3 md:mt-0 text-topo-navy text-lg font-semibold">
          <a href="#services" className="hover:text-topo-ocean transition-colors">Servicios</a>
          <a href="#projects" className="hover:text-topo-ocean transition-colors">Proyectos</a>
          <a href="#about" className="hover:text-topo-ocean transition-colors">Nosotros</a>
          <a href="#contact" className="hover:text-topo-ocean transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
