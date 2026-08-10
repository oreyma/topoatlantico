import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import Navbar from "../../components/Navbar"
import ServiceTemplate from "../../components/ServiceTemplate";


export default function MedicionParcelas() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

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
<ServiceTemplate>
      {/* CONTENIDO PRINCIPAL */}
      <section
  className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6 pt-30"
>

<div className="w-full max-w-5xl">
  <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-4 text-center">
    {t("services.parcelas.title")}
  </h1>

  <div className="w-full bg-white p-3 rounded-xl shadow-md">
    <img
      src="/images/servicios/PlanoDeslindeGeorreferenciacionCatastro-Registro.jpg"
      alt={t("services.parcelas.title")}
      className="w-full aspect-[1.414/1] object-contain"
    />
  </div>

          <p className="whitespace-pre-line text-topo-dark mb-6">
            {t("services.parcelas.desc")}
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
      </ServiceTemplate>
    </>
  )
}
