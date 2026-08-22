import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate";
import { Helmet } from "react-helmet-async";

export default function AsistenciaTecnica() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const isSpanish = i18n.language === "es";

  const seoTitle = isSpanish
    ? "Asistencia Técnica en Obra | Topografía en Canarias | TOPOATLANTICO"
    : "Technical Site Support & Land Surveying | Canary Islands | TOPOATLANTICO";

  const seoDescription = isSpanish
    ? "Asistencia técnica en obra, control de replanteos, cubicaciones, nivelaciones y verificación geométrica de estructuras en Canarias."
    : "Technical site support, setting-out control, earthwork quantity calculations, levelling and geometric verification services in the Canary Islands.";

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
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={seoDescription}
        />

        <link
          rel="canonical"
          href="https://www.topoatlantico.com/servicios/asistencia-tecnica"
        />

        <meta
          property="og:title"
          content={seoTitle}
        />

        <meta
          property="og:description"
          content={seoDescription}
        />

        <meta
          property="og:image"
          content="https://www.topoatlantico.com/images/servicios/AsistenciaTecnica.webp"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.topoatlantico.com/servicios/asistencia-tecnica"
        />

        <meta
          property="og:site_name"
          content="TOPOATLANTICO"
        />
      </Helmet>

<ServiceTemplate>
      {/* CONTENIDO PRINCIPAL */}
      <section
  className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6 pt-30"
>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-4 text-center">
            {t("services.asistencia.title")}
          </h1>

          <img
            src="/images/servicios/AsistenciaTecnica.webp"
            alt={t("services.asistencia.title")}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

          <p className="text-lg text-topo-dark mb-6">
            {t("services.asistencia.desc")}
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
