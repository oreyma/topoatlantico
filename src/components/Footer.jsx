import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="font-semibold mb-2 text-topo-navy">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} TopoAtlantico. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/politica-privacidad" className="hover:underline">
            Política de Privacidad
          </Link>
          <Link to="/aviso-legal" className="hover:underline">
            Aviso Legal
          </Link>
        </div>
      </div>
  )
}
