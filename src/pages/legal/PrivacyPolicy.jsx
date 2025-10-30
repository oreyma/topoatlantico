import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"
import flagES from "../../assets/flag-es.png"
import flagEN from "../../assets/flag-en.png"

export default function PrivacyPolicy() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const handleHomeClick = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
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
            <span className="text-2xl font-bold text-topo-navy">TopoAtlántico</span>
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
      <section className="flex flex-col items-center justify-start text-center bg-white px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-topo-navy mb-4">
            {t("privacy.title")}
          </h1>
          <p className="text-lg text-topo-dark leading-relaxed mb-6">
            {t("privacy.content")}
          </p>

          <p className="text-sm text-gray-600 mt-6 mb-8">
            {t("privacy.updated")}
          </p>

          <button
            onClick={handleHomeClick}
            className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
          >
            {t("privacy.back")}
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
