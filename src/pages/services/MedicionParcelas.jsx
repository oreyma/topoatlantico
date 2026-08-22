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
  ? "Medición y Regularización de Fincas | Georreferenciación en Canarias | TOPOATLANTICO"
  : "Property Surveys & Land Regularization | Georeferencing in the Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Medición y regularización de fincas rústicas y urbanas en Canarias. Linderos, georreferenciación, Catastro-Registro, segregaciones, agrupaciones, GML, inmatriculaciones y superficies."
  : "Property surveying and land regularization services in the Canary Islands. Boundaries, georeferencing, Cadastre-Land Registry coordination, subdivisions, GML files, first property registration and area calculations.";

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
      <section
  className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6 pt-30"
>

<div className="w-full max-w-2xl">
  <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-4 text-center">
    {t("services.parcelas.title")}
  </h1>

  <div className="w-full bg-white p-3 rounded-xl shadow-md">
    <img
      src="/images/servicios/PlanoDeslindeGeorreferenciacionCatastro-Registro.webp"
      alt={t("services.parcelas.title")}
      className="w-full aspect-[1.414/1] object-contain"
    />
  </div>

          <p className="whitespace-pre-line text-topo-dark mb-6">
            {t("services.parcelas.desc")}
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
      ? "¿Quieres saber cómo se realiza una inmatriculación?"
      : "Would you like to know how to register a property in Spain?"}
  </h3>

  <div className="max-w-3xl grid md:grid-cols-2 gap-6">


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


  </div>
</div>


      </section>
      </ServiceTemplate>
    </>
  )
}
