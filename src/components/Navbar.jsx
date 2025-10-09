// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import Button from "./Button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
  }, [menuOpen])

  return (
    <header
      className={`fixed top-1 left-1 w-full z-50 transition-all duration-300 border-b border-topo-gray ${
        scrolled ? "bg-white backdrop-blur-md py-1 shadow-md" : "bg-white py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 transition-all duration-300">
        {/* LOGO + NOMBRE */}
        <a
          href="#home"
          className={`flex items-center gap-3 font-extrabold transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          } text-topo-navy`}
        >
          <img
            src={logo}
            alt="TopoAtlántico"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "w-12 h-12" : "w-36 h-36"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-topo-navy">TopoAtlántico</span>
            <span className="text-sm italic font-medium text-[#1B7F8C] tracking-wide mt-0.2">
  Servicios Topográficos
            </span>
          </div>
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-topo-navy transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-topo-navy my-1 transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-topo-navy transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

{/* MENÚ DESKTOP */}
<nav className="flex gap-10 items-center text-black text-2xl">
  <a href="#services">Servicios</a>
  <a href="#projects">Proyectos</a>
  <a href="#about">Nosotros</a>
  <a href="#contact">Contacto</a>
</nav>
      </div>

      {/* CAPA FONDO */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MENÚ MÓVIL (deslizable) */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-2xl transition-transform duration-500 md:hidden flex flex-col items-center gap-6 text-topo-navy font-semibold text-lg ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="w-full flex items-center gap-3 px-6 py-4 border-b border-topo-gray">
          <img src={logo} alt="TopoAtlántico" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl text-topo-navy">TopoAtlántico</span>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <a href="#services" className="hover:text-topo-ocean" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#projects" className="hover:text-topo-ocean" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#about" className="hover:text-topo-ocean" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#contact" className="hover:text-topo-ocean" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      </div>
    </header>
  )
}
