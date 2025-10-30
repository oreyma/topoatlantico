// src/components/Layout.jsx

export default function Layout({ children }) {
  return (
    <div className="font-sans text-topo-dark bg-white flex flex-col min-h-screen">
      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
