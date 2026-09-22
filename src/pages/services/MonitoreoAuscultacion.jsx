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
? "Auscultación Topográfica y Monitoreo de Estructuras en Canarias | TOPOATLANTICO" : "Topographic Monitoring & Structural Surveying in the Canary Islands | TOPOATLANTICO"

const seoDescription = isSpanish
? "Auscultación topográfica y monitoreo de estructuras, edificios, excavaciones, taludes, presas e infraestructuras en Canarias. Control de desplazamientos, asentamientos y deformaciones mediante mediciones de precisión." 
: "Topographic monitoring and structural surveying of buildings, structures, excavations, slopes, dams and infrastructure in the Canary Islands. Monitoring of displacement, settlement and deformation using high-precision surveying."

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
        <section className="min-h-screen bg-white p-6 pt-30">
          <div className="max-w-3xl mx-auto">

            {/* TITLE */}

            <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-6 text-center">
              {t("services.monitoreo.title")}
            </h1>

            {/* IMAGE */}

            <img
              src="/images/servicios/MonitoreoEstructuras.webp"
              alt={t("services.monitoreo.title")}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mb-6"
            />

            {/* DESCRIPTION */}

            <p className="text-lg text-topo-dark mb-8 leading-relaxed">
              {t("services.monitoreo.description")}
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
              ? "Preguntas Frecuentes | Información destacada"
              : "Frequently asked questions | key information"}
          </h2>

          <ul className="space-y-2">
            <li><a href="#s1" className="hover:underline">{t("services.monitoreo.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("services.monitoreo.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("services.monitoreo.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("services.monitoreo.section4")}</a></li> 
            <li><a href="#s5" className="hover:underline">{t("services.monitoreo.section5")}</a></li>
            <li><a href="#s6" className="hover:underline">{t("services.monitoreo.section6")}</a></li>
            <li><a href="#s7" className="hover:underline">{t("services.monitoreo.section7")}</a></li>
          </ul>
        </div>

            {/* CONTENT SECTIONS */}

            <div className="space-y-10">

              {/* SECTION 1 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section1")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section1Text")}
                </p>
              </section>

              {/* SECTION 2 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section2")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section2Text")}
                </p>
              </section>

              {/* SECTION 3 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section3")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section3Text")}
                </p>
              </section>

              {/* SECTION 4 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section4")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section4Text")}
                </p>
              </section>

              {/* SECTION 5 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section5")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section5Text")}
                </p>
              </section>

              {/* SECTION 6 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section6")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section6Text")}
                </p>
              </section>

              {/* SECTION 7 */}

              <section>
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.monitoreo.section7")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.monitoreo.section7Text")}
                </p>
              </section>

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

          {/* RELATED ARTICLE */}

          <div className="max-w-6xl mx-auto mt-12 border-t pt-10">

            <h3 className="text-2xl font-bold text-topo-navy mb-6 text-center">
              {i18n.language === "es"
                ? "¿Quieres saber en qué consiste el monitoreo de estructuras?"
                : "Would you like to know how structural monitoring is carried out?"}
            </h3>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

              <BlogCard
                title={t("blog.monitoring.title")}
                excerpt={t("blogCard.monitoringExcerpt")}
                image="/images/blog/MonitoreoTunelDeformacion.webp"
                link={
                  i18n.language === "es"
                    ? "/blog/monitoreo-estructuras"
                    : "/blog/monitoring-structures"
                }
              />

            </div>

          </div>

        </section>
      </ServiceTemplate>
    </>
  )
}