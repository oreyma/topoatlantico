import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

export default function Levantamientos() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const isSpanish = i18n.language === "es"

  const seoTitle = isSpanish
    ? "Levantamientos Topográficos en Canarias | TOPOATLANTICO"
    : "Topographic Surveys in the Canary Islands | TOPOATLANTICO"

  const seoDescription = isSpanish
    ? "Levantamientos topográficos en Canarias para construcción, ingeniería, urbanismo y medición de terrenos. Planos topográficos, cotas, curvas de nivel y modelos digitales del terreno."
    : "Topographic surveys in the Canary Islands for construction, engineering, urban development and land measurement. Plans, elevations, contour lines and digital terrain models."

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

  const articleLink =
    isSpanish
      ? "/blog/que-es-un-levantamiento-topografico"
      : "/blog/what-is-a-topographic-survey"

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
          href="https://www.topoatlantico.com/servicios/levantamientos"
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
          content="https://www.topoatlantico.com/images/servicios/PlanoLevantamientoAutocad.webp"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.topoatlantico.com/servicios/levantamientos"
        />

        <meta
          property="og:site_name"
          content="TOPOATLANTICO"
        />
      </Helmet>

      <ServiceTemplate>

        {/* CONTENIDO PRINCIPAL */}
        <section className="min-h-screen bg-white p-6 pt-30">

          <div className="w-full max-w-4xl mx-auto">

            {/* TÍTULO */}
            <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-6 text-center">
              {t("services.levantamientos.title")}
            </h1>

            {/* IMAGEN */}
            <div className="w-full bg-white p-3 rounded-xl shadow-md mb-8">
              <img
                src="/images/servicios/PlanoLevantamientoAutocad.webp"
                alt={t("services.levantamientos.title")}
                className="w-full aspect-[1.414/1] object-contain"
              />
            </div>

            {/* INTRODUCCIÓN */}
            <p className="text-lg leading-relaxed text-topo-dark mb-10">
              {t("services.levantamientos.description")}
            </p>

{/* BOTONES */}
            <div className="flex justify-center gap-4 mb-12">
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
              ? "Preguntas Frecuentes"
              : "Frequently asked questions"}
          </h2>

          <ul className="space-y-2">
            <li><a href="#s1" className="hover:underline">{t("services.levantamientos.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("services.levantamientos.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("services.levantamientos.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("services.levantamientos.section4")}</a></li> 
            <li><a href="#s5" className="hover:underline">{t("services.levantamientos.section5")}</a></li>
          </ul>
        </div>

            {/* SECTION 1 */}
            <div id="s1" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.levantamientos.section1")}
              </h2>
              <p className="text-topo-dark leading-relaxed">
                {t("services.levantamientos.section1Text")}
              </p>
             </div>

            {/* SECTION 2 */}
            <div id="s2" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.levantamientos.section2")}
              </h2>
              <p className="text-topo-dark leading-relaxed">
                {t("services.levantamientos.section2Text")}
              </p>
            </div>

            {/* SECTION 3 */}
            <div id="s3" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.levantamientos.section3")}
              </h2>
              <p className="text-topo-dark leading-relaxed">
                {t("services.levantamientos.section3Text")}
              </p>
            </div>

            {/* SECTION 4 */}
            <div id="s4" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.levantamientos.section4")}
              </h2>
              <p className="text-topo-dark leading-relaxed">
                {t("services.levantamientos.section4Text")}
              </p>
            </div>

            {/* SECTION 5 */}
            <div id="s5" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.levantamientos.section5")}
              </h2>
              <p className="text-topo-dark leading-relaxed">
                {t("services.levantamientos.section5Text")}
              </p>
            </div>

            {/* BOTONES */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant="accent"
                onClick={handleContactClick}
                className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
              >
                {t("buttons.quote")}
              </Button>

            </div>

          </div>

          {/* RELATED ARTICLE */}
          <div className="max-w-4xl mx-auto mt-12 border-t pt-10">

            <h3 className="text-2xl font-bold text-topo-navy mb-6 text-center">
              {isSpanish
                ? "¿Quieres saber más sobre los levantamientos topográficos?"
                : "Would you like to learn more about topographic surveys?"}
            </h3>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

              <BlogCard
                title={t("blog.topographicSurvey.title")}
                excerpt={t("blogCard.surveyExcerpt")}
                image="/images/blog/Levantamiento_Topográfico_Carretera.webp"
                link={articleLink}
              />

            </div>

          </div>

        </section>

      </ServiceTemplate>
    </>
  )
}
