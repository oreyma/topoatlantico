import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import logo from "../../assets/logo.png"

export default function PoliticaPrivacidad() {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* CABECERA SIMPLE */}
      <header className="w-full py-4 flex justify-center items-center border-b border-topo-gray bg-white shadow-sm">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
          onClick={handleHomeClick}
        >
          <img
            src={logo}
            alt="TopoAtlántico"
            className="w-20 h-20 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-topo-navy">TopoAtlántico</span>
            <span className="text-sm italic text-[#2DD4BF]">
              Servicios Topográficos
            </span>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className="flex flex-col items-center justify-start text-center bg-white px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-topo-navy mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-topo-dark leading-relaxed mb-6">
            En <strong>TopoAtlántico</strong> respetamos su privacidad y
            garantizamos la protección de sus datos personales conforme al
            Reglamento General de Protección de Datos (RGPD). Los datos que nos
            proporcione serán utilizados exclusivamente para atender sus
            consultas o solicitudes de presupuesto.
          </p>

          <p className="text-sm text-gray-600 mt-6 mb-8">
            Última actualización: Octubre 2025
          </p>

          {/* BOTÓN VOLVER AL INICIO */}
          <button
            onClick={handleHomeClick}
            className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
