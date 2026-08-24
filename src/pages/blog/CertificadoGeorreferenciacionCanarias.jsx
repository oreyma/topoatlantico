import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function CertificadoGeorreferenciacionCanarias() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

const canonicalUrl = isSpanish
  ? "https://www.topoatlantico.com/blog/certificado-georreferenciacion-canarias"
  : "https://www.topoatlantico.com/blog/georeferencing-certificate-canary-islands";

const seoTitle = isSpanish
  ? "Certificado de Georreferenciación: qué es y cuándo se necesita | Canarias | TOPOATLANTICO"
  : "Georeferencing Certificate: what it is and when it is required | Canary Islands | TOPOATLANTICO";

const seoDescription = isSpanish
  ? "¿Qué es un certificado de georreferenciación y cuándo se necesita? Conoce su contenido, utilidad y relación con Catastro y Registro de la Propiedad en Canarias."
  : "What is a georeferencing certificate and when is it required? Learn what it contains and how it relates to the Spanish Cadastre and Land Registry in the Canary Islands.";


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
    content="https://www.topoatlantico.com/images/blog/CertificadoGeorreferenciacionCanarias.webp"
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
    content="certificado de georreferenciación"
  />

</Helmet>

      <ArticleTemplate
        title={t("blog.CertificadoGeorreferenciacionCanarias.title")}
        image="/images/blog/CertificadoGeorreferenciacionCanarias.webp"
        video="/videos/CertificadoGeorreferenciacionCanarias.mp4"
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
            {t("blog.CertificadoGeorreferenciacionCanarias.intro")}
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
                {t("blog.CertificadoGeorreferenciacionCanarias.section1")}
              </a>
            </li> 

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.CertificadoGeorreferenciacionCanarias.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.CertificadoGeorreferenciacionCanarias.section3")}
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
            {t("blog.CertificadoGeorreferenciacionCanarias.section1")}
          </h2>

          <p className="leading-8">
            {t("blog.CertificadoGeorreferenciacionCanarias.section1Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/RepresentacionGraficaCatastro.webp"
            alt="La georreferenciación puede ser necesaria para inmatriculaciones, segregaciones, agrupaciones, divisiones y deslindes de fincas"
            className="w-full h-64 md:h-96 object-contain rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 2 */}

        <div
          id="s2"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.CertificadoGeorreferenciacionCanarias.section2")}
          </h2>

          <p className="leading-8">
            {t("blog.CertificadoGeorreferenciacionCanarias.section2Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/ContenidoInformeGraficoGeorreferenciacion.webp"
            alt="Contenido certificado de georreferenciación: identificación de la finca, superficie, sistema de referencia, geometría y coordenadas de los vértices, entre otros"
            className="w-full h-64 md:h-96 object-contain rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 3 */}

        <div
          id="s3"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.CertificadoGeorreferenciacionCanarias.section3")}
          </h2>

          <p className="leading-8">
            {t("blog.CertificadoGeorreferenciacionCanarias.section3Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/InformeGraficoGeorreferenciacion.webp"
            alt="Determinar la geometría real de la finca a través de la documentación disponible y, si fuese necesario, mediante un levantamiento topográfico con equipos GNSS y estación total."
            className="w-full h-64 md:h-96 object-contain rounded-xl shadow-md"
          />

        </figure>

        {/* CTA */}

        <div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

          <h3 className="text-2xl font-bold mb-3 text-slate-800">

            {isSpanish
              ? "¿Necesita un certificado de georreferenciación en Canarias?"
              : "Need a Georeferencing Certificate in the Canary Islands?"}

          </h3>

          <p className="mb-6 text-slate-700">

            {isSpanish
              ? "Solicite presupuesto sin compromiso para su proyecto."
              : "Request a free quotation for your project."}

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
  title={t("blog.GmlCatastro.title")}
  excerpt={t("blog.GmlCatastro.intro")}
  image="/images/blog/GmlCatastro.webp"
  link={
    i18n.language === "es"
      ? "/blog/gml-catastro-canarias"
      : "/blog/gml-cadastre-canary-islands"
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