import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

export default function MedicionParcelas() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

const isSpanish = i18n.language === "es";

const seoTitle = isSpanish
  ? "Medición de Parcelas y Fincas en Canarias | TOPOATLANTICO"
  : "Property and Land Surveys in the Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Medición de parcelas y fincas rústicas y urbanas en Gran Canaria, Tenerife y Fuerteventura. Delimitación de linderos, superficies, certificados de georreferenciación y antigüedad, comprobaciones con Catastro y Registro de la Propiedad, inmatriculaciones y GML."
  : "Land surveying services for rural and urban properties in Gran Canaria, Tenerife and Fuerteventura. Surveys, boundary definition, areas, georeferencing certificates, building age certificates amd Land Registry and Cadastre coordination and detailed area and volume calculations.";

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
    href="https://www.topoatlantico.com/servicios/medicion-parcelas"
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
    content="https://www.topoatlantico.com/images/servicios/PlanoDeslindeGeorreferenciacionCatastro-Registro.webp"
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://www.topoatlantico.com/servicios/medicion-parcelas"
  />

  <meta
    property="og:site_name"
    content="TOPOATLANTICO"
  />
</Helmet>

<ServiceTemplate>

{/* CONTENIDO PRINCIPAL */}
<section className="min-h-screen flex flex-col items-center bg-white p-6 pt-30">

  <div className="w-full max-w-4xl">

    <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-6 text-center">
      {t("services.parcelas.title")}
    </h1>

    <div className="w-full bg-white p-3 rounded-xl shadow-md mb-8">
      <img
        src="/images/servicios/PlanoDeslindeGeorreferenciacionCatastro-Registro.webp"
        alt={t("services.parcelas.title")}
        className="w-full aspect-[1.414/1] object-contain"
      />
    </div>

    {/* INTRO */}
    <p className="whitespace-pre-line text-topo-dark mb-10 text-lg leading-relaxed">
      {t("services.parcelas.description")}
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
            <li><a href="#s1" className="hover:underline">{t("services.parcelas.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("services.parcelas.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("services.parcelas.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("services.parcelas.section4")}</a></li> 
            <li><a href="#s5" className="hover:underline">{t("services.parcelas.section5")}</a></li>
            <li><a href="#s6" className="hover:underline">{t("services.parcelas.section6")}</a></li>
          </ul>
        </div>

    {/* SECTION 1 */}
    <div id="s1" className="mb-10">
      <h2 className="text-2xl font-bold text-topo-navy mb-3">
        {t("services.parcelas.section1")}
      </h2>
      <p className="text-topo-dark leading-relaxed">
        {t("services.parcelas.section1Text")}
      </p>
    </div>

    {/* SECTION 2 */}
    <div id="s2" className="mb-10">
      <h2 className="text-2xl font-bold text-topo-navy mb-3">
        {t("services.parcelas.section2")}
      </h2>
      <p className="text-topo-dark leading-relaxed">
        {t("services.parcelas.section2Text")}
      </p>
    </div>

    {/* SECTION 3 */}
    <div id="s3" className="mb-10">
      <h2 className="text-2xl font-bold text-topo-navy mb-3">
        {t("services.parcelas.section3")}
      </h2>
      <p className="text-topo-dark leading-relaxed">
        {t("services.parcelas.section3Text")}
      </p>
    </div>

    {/* SECTION 4 */}
    <div id="s4" className="mb-10">
      <h2 className="text-2xl font-bold text-topo-navy mb-3">
        {t("services.parcelas.section4")}
      </h2>
      <p className="text-topo-dark leading-relaxed">
        {t("services.parcelas.section4Text")}
      </p>
    </div>

    {/* SECTION 5 */}
    <div id="s5" className="mb-10">
      <h2 className="text-2xl font-bold text-topo-navy mb-3">
        {t("services.parcelas.section5")}
      </h2>
      <p className="text-topo-dark leading-relaxed">
        {t("services.parcelas.section5Text")}
      </p>
    </div>

    {/* SECTION 6 */}
    <div id="s6" className="mb-10">
      <h2 className="text-2xl font-bold text-topo-navy mb-3">
        {t("services.parcelas.section6")}
      </h2>
      <p className="text-topo-dark leading-relaxed">
        {t("services.parcelas.section6Text")}
      </p>
    </div>

    {/* CTA */}
    <div className="flex justify-center gap-4 mb-12">
      <Button
        variant="accent"
        onClick={handleContactClick}
        className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
      >
        {t("buttons.quote")}
      </Button>
    </div>

    {/* RELATED ARTICLE */}
    <div className="border-t pt-10">
      <h3 className="text-2xl font-bold text-topo-navy mb-6 text-center">
        {i18n.language === "es"
          ? "Artículos relacionados con la medición de parcelas y regularización de fincas"
          : "Related articles on property surveys and land regularization"}
      </h3>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

        <BlogCard
          title={t("blog.InmatriculacionFincaRegistro.title")}
          excerpt={t("blog.InmatriculacionFincaRegistro.intro")}
          image="/images/blog/InmatriculacionGeorreferenciacionCatastroRegistro.webp"
          link={
            i18n.language === "es"
              ? "/blog/inmatriculacion-finca-registro"
              : "/blog/property-registration-spain"
          }
        />

        <BlogCard
          title={t("blog.CertificadoGeorreferenciacionCanarias.title")}
          excerpt={t("blog.CertificadoGeorreferenciacionCanarias.intro")}
          image="/images/blog/CertificadoGeorreferenciacionCanarias.webp"
          link={
            i18n.language === "es"
              ? "/blog/certificado-georreferenciacion-canarias"
              : "/blog/georeferencing-certificate-canary-islands"
          }
        />

        <BlogCard
          title={t("blog.DiferenciaCatastroRegistro.title")}
          excerpt={t("blog.DiferenciaCatastroRegistro.intro")}
          image="/images/blog/DiferenciaCatastroRegistro.webp"
          link={
            i18n.language === "es"
              ? "/blog/diferencia-catastro-registro"
              : "/blog/difference-cadastre-registry"
          }
        />

        <BlogCard
          title={t("blog.GmlCatastro.title")}
          excerpt={t("blog.GmlCatastro.intro")}
          image="/images/blog/GmlCatastro.webp"
          link={
            i18n.language === "es"
              ? "/blog/gml-catastro-canarias"
              : "/blog/gml-cadastre-canary-islands"
          }
        />

      </div>
    </div>

  </div>
</section>
      </ServiceTemplate>
    </>
  )
}

