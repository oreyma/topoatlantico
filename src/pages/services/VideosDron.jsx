import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import Navbar from "../../components/Navbar"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

export default function VideosDron() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const isSpanish = i18n.language === "es";

  const seoTitle = isSpanish
    ? "Vídeos con Drones en Canarias | TOPOATLANTICO"
    : "Drone Video Services in the Canary Islands | TOPOATLANTICO";

  const seoDescription = isSpanish
    ? "Servicios de vídeo con drones en Canarias para promoción de proyectos de construcción y obra civil, seguimiento de obra e inspección visual de edificios, estructuras e infraestructuras."
    : "Professional drone video services in the Canary Islands for promotional videos, construction progress monitoring and visual inspections of buildings, structures and infrastructure.";

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
          href="https://www.topoatlantico.com/servicios/videos-dron"
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
          content="https://www.topoatlantico.com/images/servicios/VideoDron.webp"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.topoatlantico.com/servicios/videos-dron"
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
              {t("services.videos.title")}
            </h1>


            {/* IMAGEN / VÍDEO */}

<video
  className="w-full h-64 md:h-96 object-cover object-[center_bottom] rounded-lg"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
>
  <source
    src="/videos/VideosDronPromocional_ObraCivil.mp4"
    type="video/mp4"
  />
</video>


            {/* INTRODUCCIÓN */}
            <p className="text-lg leading-relaxed text-topo-dark mb-10">
              {t("services.videos.description")}
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

            {/* TABLE OF CONTENTS */}
            <div className="bg-topo-gray/5 rounded-xl mb-10">
              <h2 className="text-xl font-bold text-topo-navy mb-4">
                {isSpanish
                  ? "Preguntas Frecuentes"
                  : "Frequently asked questions"}
              </h2>

              <ul className="space-y-2">
                <li>
                  <a href="#s1" className="hover:underline">
                    {t("services.videos.section1")}
                  </a>
                </li>

                <li>
                  <a href="#s2" className="hover:underline">
                    {t("services.videos.section2")}
                  </a>
                </li>

                <li>
                  <a href="#s3" className="hover:underline">
                    {t("services.videos.section3")}
                  </a>
                </li>

                <li>
                  <a href="#s4" className="hover:underline">
                    {t("services.videos.section4")}
                  </a>
                </li>

                <li>
                  <a href="#s5" className="hover:underline">
                    {t("services.videos.section5")}
                  </a>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <div id="s1" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.videos.section1")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.videos.section1Text")}
              </p>
            </div>

            {/* SECTION 2 */}
            <div id="s2" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.videos.section2")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.videos.section2Text")}
              </p>
            </div>

            {/* SECTION 3 */}
            <div id="s3" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.videos.section3")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.videos.section3Text")}
              </p>
            </div>

            {/* SECTION 4 */}
            <div id="s4" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.videos.section4")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.videos.section4Text")}
              </p>
            </div>

            {/* SECTION 5 */}
            <div id="s5" className="mb-10">
              <h2 className="text-2xl font-bold text-topo-navy mb-3">
                {t("services.videos.section5")}
              </h2>

              <p className="text-topo-dark leading-relaxed">
                {t("services.videos.section5Text")}
              </p>
            </div>

            {/* BOTÓN FINAL */}
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

        </section>

      </ServiceTemplate>
    </>
  )
}