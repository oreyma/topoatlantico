// src/components/Layout.jsx

export default function Layout({ children }) {
  return (
    <div className="font-sans text-topo-dark bg-white">
      {/* WRAPPER */}
      <div className="flex flex-col min-h-screen">
        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1">{children}</main>

        {/* FOOTER GLOBAL */}
        <footer className="bg-topo-navy text-white text-center p-4">
          <p>© 2025 TopoAtlántico · Servicios de topografía en Canarias</p>
        </footer>
      </div>
    </div>
  )
}
