import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

export default function Levantamientos() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

const isSpanish = i18n.language === "es";

const seoTitle = isSpanish
  ? "Levantamientos Topográficos | Planos y Modelos 3D en Canarias | TOPOATLANTICO"
  : "Topographic Surveys | Plans & 3D Terrain Models in the Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Levantamientos topográficos precisos en Canarias para ingeniería, edificación y cartografía. Planos topográficos, curvas de nivel, modelos 3D y mediciones del terreno."
  : "Accurate topographic surveys in the Canary Islands for engineering, construction and mapping. Topographic plans, contour lines, 3D terrain models and land measurements.";

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
    i18n.language === "es"
      ? "/blog/que-es-un-levantamiento-topografico"
      : "/blog/what-is-a-topographic-survey";

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
      <section
  className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6 pt-30"
>
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-4 text-center">
            {t("services.levantamientos.title")}
          </h1>

          <div className="w-full bg-white p-3 rounded-xl shadow-md">
    <img
      src="/images/servicios/PlanoLevantamientoAutocad.webp"
      alt={t("services.levantamientos.title")}
      className="w-full aspect-[1.414/1] object-contain"
    />
  </div>

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

{/* RELATED ARTICLE */}

<div className="mt-12 border-t pt-10">
  <h3 className="text-2xl font-bold text-topo-navy mb-6">
    {i18n.language === "es"
      ? "¿Quieres saber cómo se realiza un levantamiento?"
      : "Would you like to know how a land survey is carried out?"}
  </h3>

  <div className="max-w-3xl grid md:grid-cols-2 gap-6">


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
