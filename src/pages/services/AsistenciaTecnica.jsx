import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import logo from "../../assets/logo.png"

export default function AsistenciaTecnica() {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleContactClick = () => {
    navigate("/#contact")
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleServicesClick = () => {
    navigate("/#services")
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <>
      {/* CABECERA SIMPLE */}
      <header className="w-full py-4 flex justify-center items-center border-b border-topo-gray bg-white shadow-sm">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="TopoAtlántico" className="w-24 h-24 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-topo-navy">TopoAtlántico</span>
            <span className="text-sm italic text-[#2DD4BF]">Servicios Topográficos</span>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-topo-navy mb-4">Asistencia Técnica</h1>
          <img
            src="/images/servicios/ATecnica.jpg"
            alt="Asistencia técnica"
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
          <p className="text-lg text-topo-dark mb-6">
            Ofrecemos asistencia técnica en obra, control de replanteos, cubicaciones, nivelaciones y verificación de estructuras. 
            Aseguramos la precisión geométrica en todas las fases del proyecto.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              variant="accent"
              onClick={handleContactClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              Solicita presupuesto
            </Button>

            <button
              onClick={handleServicesClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              Otros servicios
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
