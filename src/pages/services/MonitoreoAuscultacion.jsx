import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";


export default function MonitoreoAuscultacion() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

const isSpanish = i18n.language === "es";

const seoTitle = isSpanish
  ? "Monitoreo de Estructuras | Control de Deformaciones en Canarias | TOPOATLANTICO"
  : "Structural Monitoring | Deformation & Displacement Monitoring in the Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Monitoreo y auscultación de estructuras, taludes, túneles, presas y edificaciones en Canarias. Control de deformaciones y desplazamientos mediante instrumentación de alta precisión."
  : "Structural monitoring and surveying of slopes, tunnels, dams and buildings in the Canary Islands. High-precision monitoring of deformations and displacements.";

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
    href="https://www.topoatlantico.com/servicios/monitoreo-auscultacion"
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
    content="https://www.topoatlantico.com/images/servicios/MonitoreoEstructuras.webp"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://www.topoatlantico.com/servicios/monitoreo-auscultacion"
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
            {t("services.monitoreo.title")}
          </h1>

          <img
            src="/images/servicios/MonitoreoEstructuras.webp"
            alt={t("services.monitoreo.title")}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

          <p className="text-lg text-topo-dark mb-6">
            {t("services.monitoreo.desc")}
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
      ? "¿Quieres saber en qué consite el monitoreo de estructuras?"
      : "Would you like to know how structural monitoring is carried out?"}
  </h3>

  <div className="max-w-3xl grid md:grid-cols-2 gap-6">


<BlogCard
  title={t("blog.monitoring.title")}
  excerpt={t("blogCard.monitoringExcerpt")}
  image="/images/blog/MonitoreoTunelDeformacion.webp"
  link={
    i18n.language === "es"
      ? "/blog/monitoreo-estructuras"
      : "/blog/monitoring-structures"}
/>


  </div>
</div>

      </section>
      </ServiceTemplate>
    </>
  )
}
