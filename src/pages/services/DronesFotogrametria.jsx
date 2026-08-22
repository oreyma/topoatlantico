import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import Navbar from "../../components/Navbar"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

export default function DronesFotogrametria() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

const isSpanish = i18n.language === "es";

const seoTitle = isSpanish
  ? "Drones y Fotogrametría | segumiento de obra, Ortofotos y Modelos 3D en Canarias | TOPOATLANTICO"
  : "Drone Photogrammetry | Orthophotos & 3D Models in the Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Servicios de fotogrametría con drones en Canarias. Ortofotos, nubes de puntos, modelos 3D, levantamientos y cartografía, videos seguimiento de obra, inspección de edificios y estructuras, ingeniería y proyectos técnicos."
  : "Drone photogrammetry services in the Canary Islands. Orthophotos, point clouds, 3D models, surveying and mapping for construction, engineering and technical projects.";

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
    href="https://www.topoatlantico.com/servicios/drones-fotogrametria"
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
    content="https://www.topoatlantico.com/images/servicios/Modelo3dLasCurvasNivelOrtofoto.webp"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://www.topoatlantico.com/servicios/drones-fotogrametria"
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
            {t("services.drones.title")}
          </h1>

          <img
            src="/images/servicios/Modelo3dLasCurvasNivelOrtofoto.webp"
            alt={t("services.drones.title")}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

          <p className="whitespace-pre-line text-topo-dark mb-6">
            {t("services.drones.desc")}
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
      ? "¿Quieres saber cómo se realiza la fotogrametría con drones?"
      : "Would you like to know how drone photogrammetry works?"}
  </h3>

  <div className="max-w-3xl grid md:grid-cols-2 gap-6">

<BlogCard
  title={t("blog.FotogrametriaDrones.title")}
  excerpt={t("blogCard.FotogrametriaDronesExcerpt")}
  image="/images/blog/FotogrametriaDrones.webp"
  link={
    i18n.language === "es"
      ? "/blog/Fotogrametria-drones"
      : "/blog/Drone-Photogrammetry"
  }
/>

<BlogCard
  title={t("blog.FotogrametriaDronesPlanificarVuelo.title")}
  excerpt={t("blog.FotogrametriaDronesPlanificarVuelo.intro")}
  image="/images/blog/FotogrametriaDronPlanVuelo.webp"
  link={
    i18n.language === "es"
      ? "/blog/Fotogrametria-drones-Planificar-vuelo"
      : "/blog/Drone-Photogrammetry-Plan-your-flight"
  }
/>


  </div>
</div>



      </section>

      </ServiceTemplate>
    </>
  )
}
