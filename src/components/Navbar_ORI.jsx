import logo from '../assets/logo.png'
import Button from './Button'

function Navbar() {
  return (
    <header className="bg-white border-b border-topo-gray sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* LOGO + NOMBRE */}
        <a href="#home" className="flex items-center gap-2 font-bold text-lg text-topo-navy">
          <img src={logo} alt="TopoAtlántico" className="w-10 h-10 object-contain" />
          <span>TopoAtlántico</span>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="hover:text-topo-ocean">Servicios</a>
          <a href="#projects" className="hover:text-topo-ocean">Proyectos</a>
          <a href="#about" className="hover:text-topo-ocean">Nosotros</a>
          <Button variant="accent">Contacto</Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
