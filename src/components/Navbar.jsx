// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
import Button from "./Button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="TopoAtlántico"
            className="w-28 sm:w-32 object-contain"
          />
        </a>

        {/* BOTÓN HAMBURGUESA (solo visible en móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-topo-navy focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* LINKS — versión escritorio */}
        <div className="hidden md:flex space-x-6 text-topo-navy font-semibold">
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
        </div>
      </div>

      {/* MENÚ MÓVIL desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md text-topo-navy font-medium flex flex-col items-center space-y-4 py-4">
          <a href="#services" onClick={() => setIsOpen(false)}>
            Servicios
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Proyectos
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Nosotros
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
