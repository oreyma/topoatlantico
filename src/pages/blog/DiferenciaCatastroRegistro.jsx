import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function DiferenciaCatastroRegistro() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

const canonicalUrl = isSpanish
  ? "https://www.topoatlantico.com/blog/diferencia-catastro-registro"
  : "https://www.topoatlantico.com/blog/difference-cadastre-registry";

const seoTitle = isSpanish
  ? "¿Cuál es la diferencia entre Catastro y Registro de la Propiedad? | Canarias | TOPOATLANTICO"
  : "What is the difference between the Cadastre and the Land Registry? | Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "Conoce las diferencias entre Catastro y Registro de la Propiedad en España, qué información contiene cada uno y por qué pueden existir discrepancias entre ambos."
  : "Learn about the differences between the Spanish Cadastre and Land Registry, what information each contains and why discrepancies may exist between them.";

  return (
    <>
     <Helmet>
  <title>{seoTitle}</title>

  <meta
    name="description"
    content={seoDescription}
  />

<meta
  name="keywords"
  content={
    isSpanish
      ? "diferencia Catastro Registro, Catastro y Registro de la Propiedad, discrepancias Catastro Registro, coordinación Catastro Registro, Catastro Canarias, Registro de la Propiedad Canarias, superficie catastral y registral, linderos Catastro Registro, finca georreferenciada, representación gráfica georreferenciada, regularización de fincas Canarias"
      : "Cadastre and Land Registry Spain, difference between Cadastre and Land Registry, Cadastre Land Registry discrepancies, cadastral and registry information, Cadastre Canary Islands, Land Registry Canary Islands, cadastral property boundaries, cadastral property area, georeferenced property Spain, property regularization Canary Islands"
  }
/>


  <link
    rel="canonical"
    href={canonicalUrl}
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
    content="https://www.topoatlantico.com/images/blog/DiferenciaCatastroRegistro.webp"
  />

  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:url"
    content={canonicalUrl}
  />

  <meta
    property="og:site_name"
    content="TOPOATLANTICO"
  />

  <meta
    property="og:locale"
    content={isSpanish ? "es_ES" : "en_GB"}
  />

  <meta
    property="og:locale:alternate"
    content={isSpanish ? "en_GB" : "es_ES"}
  />

  <meta
    property="article:section"
    content="Catastro y Registro"
  />
</Helmet>

      <ArticleTemplate
        title={t("blog.DiferenciaCatastroRegistro.title")}
        image="/images/blog/DiferenciaCatastroRegistro.webp"
        video="/videos/DiferenciaCatastroRegistro.mp4"
      >

        {/* Publication date */}

        <p className="text-sm text-gray-500 mb-6">
          {isSpanish
            ? "Publicado: Septiembre 2026"
            : "Published: September 2026"}
        </p>

        {/* INTRO */}

        <div className="bg-topo-gray/10 border-l-4 border-topo-ocean p-6 rounded-lg mb-10">

          <p className="text-lg leading-8">
            {t("blog.DiferenciaCatastroRegistro.intro")}
          </p>

        </div>

        {/* TABLE OF CONTENTS */}

        <div className="bg-topo-gray/5 rounded-xl p-6 mb-10">

          <h2 className="text-xl font-bold text-topo-navy mb-4">

            {isSpanish
              ? "Contenido del artículo"
              : "Article Contents"}

          </h2>

          <ul className="space-y-2">

             <li>
              <a href="#s1" className="hover:underline">
                {t("blog.DiferenciaCatastroRegistro.section1")}
              </a>
            </li> 

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.DiferenciaCatastroRegistro.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.DiferenciaCatastroRegistro.section3")}
              </a>
            </li>

          </ul>

        </div>

        {/* SECTION 1 */}

        <div
          id="s1"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.DiferenciaCatastroRegistro.section1")}
          </h2>

          <p className="leading-8">
            {t("blog.DiferenciaCatastroRegistro.section1Text")}
          </p>
<p className="mt-4">
  <a
    href="https://www1.sedecatastro.gob.es/Cartografia/mapa.aspx"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
  >
    {t("blog.DiferenciaCatastroRegistro.catastroLinkText")}
  </a>
</p>
        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/RepresentacionGraficaCatastro.webp"
            alt="El Catastro es un registro administrativo que contiene información sobre los bienes inmuebles, como su ubicación, superficie, referencia catastral, uso y representación gráfica"
            className="w-full h-64 md:h-96 object-contain rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 2 */}

        <div
          id="s2"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.DiferenciaCatastroRegistro.section2")}
          </h2>

          <p className="leading-8">
            {t("blog.DiferenciaCatastroRegistro.section2Text")}
          </p>
<p className="mt-4">
  <a
    href="https://geoportal.registradores.org/geoportal"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-blue-900 hover:underline font-medium"
  >
    {t("blog.DiferenciaCatastroRegistro.registroLinkText")}
  </a>
</p>
        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/GeoportalRegistroPropiedad.webp"
            alt="El Registro de la Propiedad describe situación jurídica de los inmuebles. En él se inscriben, entre otros, los derechos de propiedad, hipotecas, servidumbres y otras cargas o derechos que afectan a una finca"
            className="w-full h-64 md:h-96 object-contain rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 3 */}

        <div
          id="s3"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.DiferenciaCatastroRegistro.section3")}
          </h2>

          <p className="leading-8">
            {t("blog.DiferenciaCatastroRegistro.section3Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/GMLCatastroIVG.webp"
            alt="El gml debe compararse con la cartografía catastral y puede ser necesario justificar las diferencias existentes mediante documentación técnica, IVG"
            className="w-full h-64 md:h-96 object-contain rounded-xl shadow-md"
          />

        </figure>

        {/* CTA */}

        <div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

          <h3 className="text-2xl font-bold mb-3 text-slate-800">

            {isSpanish
    ? "¿Necesita comprobar la correspondencia entre Catastro y Registro?"
    : "Need to check the correspondence between the Cadastre and Land Registry?"}
          </h3>

          <p className="mb-6 text-slate-700">

            {isSpanish
    ? "Analizamos la situación de su finca y elaboramos la documentación técnica necesaria."
    : "We can analyse your property and prepare the technical documentation required."}

          </p>

          <Link
            to="/#contact"
            className="
              inline-block
              bg-blue-700
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              shadow-lg
              hover:bg-blue-800
              transition-all
            "
          >
            {t("buttons.quote")}
          </Link>

        </div>

        {/* RELATED ARTICLES */}

        <div className="mt-12 border-t pt-10">

          <h3 className="text-2xl font-bold text-topo-navy mb-6">

            {isSpanish
              ? "Artículos relacionados"
              : "Related Articles"}

          </h3>

          <div className="grid md:grid-cols-4 gap-6">


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
      ? "/blog/certificado-georreferenciación-canarias"
      : "/blog/georeferencing-certificate-canary-islands"
  }
/>

            <BlogCard
              compact
              title={t("blog.topographicSurvey.title")}
              excerpt={t("blogCard.surveyExcerpt")}
              image="/images/blog/Levantamiento_Topográfico_Carretera.webp"
              link={
                isSpanish
                  ? "/blog/que-es-un-levantamiento-topografico"
                  : "/blog/what-is-a-topographic-survey"
              }
            />

          </div>

        </div>

      </ArticleTemplate>

    </>

  );

}