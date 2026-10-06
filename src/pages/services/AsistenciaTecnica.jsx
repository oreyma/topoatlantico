import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate"
import { Helmet } from "react-helmet-async"

export default function AsistenciaTecnica() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const isSpanish = i18n.language === "es"

  const seoTitle = isSpanish
    ? "Asistencia Técnica Topográfica en Obra | TOPOATLANTICO"
    : "Surveying Support & Construction Control | TOPOATLANTICO"

  const seoDescription = isSpanish
    ? "Asistencia técnica y control topográfico en en Gran Canaria, Tenerife y Fuerteventura para obras de construcción, edificación e infraestructuras. Control de replanteos, cubicaciones, nivelaciones y control geométrico."
  : "Surveying support in Gran Canaria, Tenerife and Fuerteventura for construction and infrastructure projects. Setting-out checks, volume calculations, levelling and geometric control.";

  const handleContactClick = () => {
    navigate("/#contact")
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }, 100)
  }

  const handleServicesClick = () => {
    navigate("/#services")
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      })
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
        <section className="min-h-screen bg-white p-6 pt-30">

          <div className="max-w-3xl mx-auto">

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-6 text-center">
              {t("services.asistencia.title")}
            </h1>

            {/* IMAGE */}
            <img
              src="/images/servicios/AsistenciaTecnica.webp"
              alt={t("services.asistencia.title")}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mb-6"
            />

            {/* DESCRIPTION */}
            <p className="text-lg text-topo-dark mb-8 leading-relaxed">
              {t("services.asistencia.description")}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">

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

{/* Table of contents */}
        <div className="bg-topo-gray/5 rounded-xl mb-10">
          <h2 className="text-xl font-bold text-topo-navy mb-4">
            {isSpanish
              ? "Preguntas frecuentes"
              : "Frequently asked questions"}
          </h2>

          <ul className="space-y-2">
            <li><a href="#s1" className="hover:underline">{t("services.asistencia.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("services.asistencia.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("services.asistencia.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("services.asistencia.section4")}</a></li> 
            <li><a href="#s5" className="hover:underline">{t("services.asistencia.section5")}</a></li>
            <li><a href="#s6" className="hover:underline">{t("services.asistencia.section6")}</a></li>
            <li><a href="#s7" className="hover:underline">{t("services.asistencia.section7")}</a></li>
          </ul>
        </div>

            {/* INFORMATION SECTIONS */}

            <div className="space-y-10">

              {/* SECTION 1 */}
              <div id="s1" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section1")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section1Text")}
                </p>
              </div>

              {/* SECTION 2 */}
              <div id="s2" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section2")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section2Text")}
                </p>
              </div>

              {/* SECTION 3 */}
              <div id="s3" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section3")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section3Text")}
                </p>
              </div>

              {/* SECTION 4 */}
              <div id="s4" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section4")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section4Text")}
                </p>
              </div>

              {/* SECTION 5 */}
              <div id="s5" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section5")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section5Text")}
                </p>
              </div>

              {/* SECTION 6 */}
              <div id="s6" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section6")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section6Text")}
                </p>
              </div>

              {/* SECTION 7 */}
              <div id="s7" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.asistencia.section7")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.asistencia.section7Text")}
                </p>
              </div>

            </div>

            {/* FINAL CTA */}
            <div className="flex justify-center mt-12 mb-8">

              <Button
                variant="accent"
                onClick={handleContactClick}
                className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
              >
                {t("buttons.quote")}
              </Button>

            </div>

          </div>

        </section>

      </ServiceTemplate>
    </>
  )
}