import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

export default function ReplanteoObra() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

const isSpanish = i18n.language === "es";

const seoTitle = isSpanish
  ? "Replanteo de Obra en Canarias| TOPOATLANTICO"
    : "Construction Setting Out in the Canary Islands | TOPOATLANTICO";

  const seoDescription = isSpanish
    ? "Servicios de replanteo topográfico de alta precisión en Gran Canaria, Tenerife y Fuerteventura para obras de construcción, edificación, infraestructuras y urbanización. Replanteo de estructuras, cimentaciones, movimientos de tierras y servicios."
    : "High-precision construction setting-out services throughout in Gran Canaria, Tenerife y Fuerteventura for building, civil engineering, infrastructure and urban development projects. Setting out of structures, foundations, earthworks and utility networks."


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

const settingOutLink =
  i18n.language === "es"
    ? "/blog/replanteo-de-obra"
    : "/blog/construction-setting-out";

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
    href="https://www.topoatlantico.com/servicios/replanteo-obra"
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
    content="https://www.topoatlantico.com/images/servicios/ReplanteoDeObraTopografico.webp"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://www.topoatlantico.com/servicios/replanteo-obra"
  />

  <meta
    property="og:site_name"
    content="TOPOATLANTICO"
  />
</Helmet>

<ServiceTemplate>

              {/* CONTENIDO PRINCIPAL */}
        <section className="min-h-screen bg-white p-6 pt-30">

          <div className="max-w-4xl mx-auto">

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-6 text-center">
              {t("services.replanteo.title")}
            </h1>

            {/* IMAGE */}
            <img
              src="/images/servicios/ReplanteoDeObraTopografico.webp"
              alt={t("services.replanteo.title")}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mb-6"
            />

            {/* DESCRIPTION */}
            <p className="text-lg text-topo-dark mb-8 leading-relaxed">
              {t("services.replanteo.description")}
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
              ? "Preguntas Frecuentes"
              : "Frequently asked questions"}
          </h2>

          <ul className="space-y-2">
            <li><a href="#s1" className="hover:underline">{t("services.replanteo.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("services.replanteo.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("services.replanteo.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("services.replanteo.section4")}</a></li> 
            <li><a href="#s5" className="hover:underline">{t("services.replanteo.section5")}</a></li>
            <li><a href="#s6" className="hover:underline">{t("services.replanteo.section6")}</a></li>
          </ul>
        </div>

            {/* INFORMATION SECTIONS */}

            <div className="space-y-10">

              {/* SECTION 1 */}
              <div id="s1" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.replanteo.section1")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.replanteo.section1Text")}
                </p>
              </div>

              {/* SECTION 2 */}
              <div id="s2" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.replanteo.section2")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.replanteo.section2Text")}
                </p>
              </div>

              {/* SECTION 3 */}
              <div id="s3" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.replanteo.section3")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.replanteo.section3Text")}
                </p>
              </div>

              {/* SECTION 4 */}
              <div id="s4" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.replanteo.section4")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.replanteo.section4Text")}
                </p>
              </div>

              {/* SECTION 5 */}
              <div id="s5" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.replanteo.section5")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.replanteo.section5Text")}
                </p>
              </div>

              {/* SECTION 6 */}
              <div id="s6" className="mb-10">
                <h2 className="text-2xl font-bold text-topo-navy mb-3">
                  {t("services.replanteo.section6")}
                </h2>

                <p className="text-topo-dark leading-relaxed">
                  {t("services.replanteo.section6Text")}
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

          {/* RELATED ARTICLE */}
          <div className="max-w-6xl mx-auto mt-12 border-t pt-10">

            <h3 className="text-2xl font-bold text-topo-navy mb-6 text-center">
              {i18n.language === "es"
                ? "¿Quieres saber cómo se lleva a cabo un replanteo?"
                : "Would you like to know how setting out works?"}
            </h3>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

              <BlogCard
                title={t("blog.settingOut.title")}
                excerpt={t("blogCard.settingOutExcerpt")}
                image="/images/blog/Replanteo_Edificacion.webp"
                link={settingOutLink}
              />

            </div>

          </div>

        </section>

      </ServiceTemplate>
    </>
  )
}
