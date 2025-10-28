// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-topo-gray ${
        scrolled ? "bg-white backdrop-blur-md py-2 shadow-md" : "bg-white py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-300">
        {/* LOGO + NOMBRE */}
        <a
          href="#home"
          className="flex items-center gap-3 font-extrabold text-topo-navy"
        >
          <img
            src={logo}
            alt="TopoAtlantico"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "w-10 h-10" : "w-16 h-16"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl font-bold text-topo-navy">
              TopoAtlántico
            </span>
            <span className="text-xs sm:text-sm italic font-medium text-[#1B7F8C] tracking-wide mt-0.5">
              Servicios Topográficos
            </span>
          </div>
        </a>

        {/* MENÚ DESKTOP */}
        <nav className="hidden lg:flex gap-10 items-center text-topo-navy text-lg font-semibold">
          <a href="#services" className="hover:text-topo-ocean transition-colors">
            Servicios
          </a>
          <a href="#projects" className="hover:text-topo-ocean transition-colors">
            Proyectos
          </a>
          <a href="#about" className="hover:text-topo-ocean transition-colors">
            Nosotros
          </a>
          <a href="#contact" className="hover:text-topo-ocean transition-colors">
            Contacto
          </a>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="lg:hidden text-topo-navy focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* CAPA OSCURA AL ABRIR MENÚ MÓVIL */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MENÚ MÓVIL DESLIZABLE */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-2xl transition-transform duration-500 lg:hidden flex flex-col items-center gap-6 text-topo-navy font-semibold text-lg ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
