import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"
import flagES from "../../assets/flag-es.png"
import flagEN from "../../assets/flag-en.png"


export default function Levantamientos() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
{/* LOGO CENTRADO */}
      <header className="w-full py-4 flex justify-center items-center border-b border-topo-gray bg-white shadow-sm">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="TopoAtlantico" className="w-24 h-24 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-topo-navy">TopoAtlantico</span>
              <span className="text-sm italic font-medium text-[#1B7F8C] tracking-wide">
                Servicios Topográficos
              </span>
          </div>
        </div>
 {/* SELECTOR DE IDIOMA */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => changeLanguage("es")}
            className={`p-1 rounded-full border-2 transition-all ${
              i18n.language === "es" ? "border-topo-navy" : "border-transparent"
            }`}
          >
            <img src={flagES} alt="Español" className="w-6 h-6 rounded-full" />
          </button>

          <button
            onClick={() => changeLanguage("en")}
            className={`p-1 rounded-full border-2 transition-all ${
              i18n.language === "en" ? "border-topo-navy" : "border-transparent"
            }`}
          >
            <img src={flagEN} alt="English" className="w-6 h-6 rounded-full" />
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-4 text-center">
            {t("services.levantamientos.title")}
          </h1>

          <img
            src="/images/servicios/levantamiento.jpg"
            alt={t("services.levantamientos.title")}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

          <p className="text-lg text-topo-dark mb-6">
            {t("services.levantamientos.desc")}
          </p>

          <div className="flex justify-center gap-4">
            <Button
              variant="accent"
              onClick={handleContactClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              {t("buttons.quote")}
            </Button>

            <button
              onClick={handleServicesClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              {t("buttons.other")}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
