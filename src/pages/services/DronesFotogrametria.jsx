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
  ? "Fotogrametría con Drones en Canarias | TOPOATLANTICO"
  : "Drone Photogrammetry in the Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Fotogrametría con drones en Canarias para topografía, ingeniería y construcción. Ortofotos, nubes de puntos, modelos 3D, levantamientos y cartografía, seguimiento de obra e inspección de edificios y estructuras."
  : "Drone photogrammetry services in the Canary Islands for surveying, engineering and construction. Orthophotos, point clouds, 3D models, surveying and mapping for construction, engineering and technical projects.";

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
        <section className="min-h-screen bg-white p-6 pt-30">

          <div className="w-full max-w-4xl mx-auto">

            {/* TÍTULO */}
            <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-6 text-center">
              {t("services.drones.title")}
            </h1>

            {/* IMAGEN */}
            <div className="w-full bg-white p-3 rounded-xl shadow-md mb-8">
              <img
                src="/images/servicios/Modelo3dLasCurvasNivelOrtofoto.webp"
                alt={t("services.drones.title")}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* INTRODUCCIÓN */}
            <p className="text-lg leading-relaxed text-topo-dark mb-10">
              {t("services.drones.description")}
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
            <li><a href="#s1" className="hover:underline">{t("services.drones.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("services.drones.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("services.drones.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("services.drones.section4")}</a></li> 
            <li><a href="#s5" className="hover:underline">{t("services.drones.section5")}</a></li>
          </ul>
        </div>


            {/* SECTION 1 */}
            <div id="s1" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.drones.section1")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.drones.section1Text")}
              </p>
            </div>

            {/* SECTION 2 */}
            <div id="s2" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.drones.section2")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.drones.section2Text")}
              </p>
            </div>

            {/* SECTION 3 */}
            <div id="s3" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.drones.section3")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.drones.section3Text")}
              </p>
            </div>

            {/* SECTION 4 */}
            <div id="s4" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.drones.section4")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.drones.section4Text")}
              </p>
            </div>

            {/* SECTION 5 */}
            <div id="s5" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.drones.section5")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.drones.section5Text")}
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

          {/* RELATED ARTICLES */}
          <div className="max-w-4xl mx-auto mt-12 border-t pt-10">

            <h3 className="text-2xl font-bold text-topo-navy mb-6 text-center">
              {isSpanish
                ? "¿Quieres saber más sobre la fotogrametría con drones?"
                : "Would you like to learn more about drone photogrammetry?"}
            </h3>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

              {/* ARTICLE 1 */}
              <BlogCard
                title={t("blog.FotogrametriaDrones.title")}
                excerpt={t("blogCard.FotogrametriaDronesExcerpt")}
                image="/images/blog/FotogrametriaDrones.webp"
                link={
                  isSpanish
                    ? "/blog/Fotogrametria-drones"
                    : "/blog/Drone-Photogrammetry"
                }
              />

              {/* ARTICLE 2 */}
              <BlogCard
                title={t("blog.FotogrametriaDronesPlanificarVuelo.title")}
                excerpt={t("blog.FotogrametriaDronesPlanificarVuelo.intro")}
                image="/images/blog/FotogrametriaDronPlanVuelo.webp"
                link={
                  isSpanish
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