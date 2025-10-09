import React from "react"
import { Link } from "react-router-dom"

export default function MedicionParcelas() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-topo-gray text-topo-navy px-6">
      <div className="max-w-3xl text-center bg-white rounded-xl p-8 shadow">
        <h1 className="text-4xl font-bold mb-4">Medición de Parcelas</h1>
        <p className="mb-8 text-topo-dark">
          Realizamos mediciones precisas de terrenos rústicos y urbanos, cálculo de superficies y
          pendientes, así como delimitación exacta de linderos. Utilizamos tecnología GNSS y estación
          total para garantizar la máxima exactitud.
        </p>

        <Link
          to="/#contact"
          className="inline-block bg-topo-turquoise text-navy font-semibold px-6 py-3 rounded-lg shadow hover:bg-topo-navy transition-colors"
        >
          Contacto
        </Link>
      </div>
    </section>
  )
}
