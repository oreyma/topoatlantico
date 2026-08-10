	import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function WhatIsTopographicSurvey() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

  const canonicalUrl = isSpanish
    ? "https://topoatlantico.com/blog/que-es-un-levantamiento-topografico"
    : "https://topoatlantico.com/blog/what-is-a-topographic-survey";

  const seoTitle = isSpanish
    ? "¿Qué es un Levantamiento Topográfico en Canarias? | TOPOATLANTICO"
    : "What Is a Topographic Survey in the Canary Islands? | TOPOATLANTICO";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={t("blog.topographicSurvey.intro")}
        />

        <meta
          name="keywords"
          content={
            isSpanish
              ? "levantamiento topográfico, topografía canarias, topógrafo canarias, medición de parcelas, drones fotogrametría"
              : "topographic survey, canary islands surveyor, land surveying, drone surveying, photogrammetry"
          }
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />

        <meta
          property="og:description"
          content={t("blog.topographicSurvey.intro")}
        />

        <meta
          property="og:image"
          content="https://topoatlantico.com/images/blog/topographic-survey.jpg"
        />

        <meta property="og:type" content="article" />
      </Helmet>

      <ArticleTemplate
        title={t("blog.topographicSurvey.title")}
        image="/images/blog/topographic-survey.jpg"
      >
        {/* Publication date */}
        <p className="text-sm text-gray-500 mb-6">
          {isSpanish
            ? "Publicado: Junio 2026"
            : "Published: June 2026"}
        </p>

        {/* Intro Box */}
        <div className="bg-topo-gray/10 border-l-4 border-topo-ocean p-6 rounded-lg mb-10">
          <p className="text-lg leading-8">
            {t("blog.topographicSurvey.intro")}
          </p>
        </div>

        {/* Table of contents */}
        <div className="bg-topo-gray/5 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-topo-navy mb-4">
            {isSpanish
              ? "Contenido del artículo"
              : "Article Contents"}
          </h2>

          <ul className="space-y-2">
            <li><a href="#s1" className="hover:underline">{t("blog.topographicSurvey.section1")}</a></li>
            <li><a href="#s2" className="hover:underline">{t("blog.topographicSurvey.section2")}</a></li>
            <li><a href="#s3" className="hover:underline">{t("blog.topographicSurvey.section3")}</a></li>
            <li><a href="#s4" className="hover:underline">{t("blog.topographicSurvey.section4")}</a></li>
            <li><a href="#s5" className="hover:underline">{t("blog.topographicSurvey.section5")}</a></li>
            <li><a href="#s6" className="hover:underline">{t("blog.topographicSurvey.section6")}</a></li>
            <li><a href="#s7" className="hover:underline">{t("blog.topographicSurvey.section7")}</a></li>
            <li><a href="#s8" className="hover:underline">{t("blog.topographicSurvey.section8")}</a></li>
          </ul>
        </div>

        {/* SECTION 1 */}
        <div id="s1" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section1")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section1Text")}

          </p>
        </div>

<figure className="mb-10">
  <img
    src="/images/blog/LevantamientoTopograficoIntro.jpg"
    alt="Topographic survey project in Gran Canaria"
    className="w-full rounded-xl shadow-md"
  />
</figure>

        {/* SECTION 2 */}
        <div id="s2" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section2")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section2Text")}
          </p>
        </div>

<figure className="mb-10">
  <img
    src="/images/blog/UtilidadLevantamiento.jpg"
    alt="Levantamiento topográfico, proyectos Canarias"
    className="w-full rounded-xl shadow-md"
  />
</figure>

        {/* SECTION 3 */}
        <div id="s3" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section3")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section3Text")}
          </p>
        </div>

<figure className="mb-10">
  <img
    src="/images/blog/InstrumentosLevantamiento.jpg"
    alt="Estacion total y receptores gps gns, Topografía en Gran Canaria"
    className="w-full rounded-xl shadow-md"
  />
</figure>

        {/* SECTION 4 */}
        {/*<div id="s4" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section4")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section4Text")}
          </p>
        </div>*/}


        {/* SECTION 5 */}
        <div id="s5" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section5")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section5Text")}
          </p>
        </div>

<figure className="mb-10">
  <img
    src="/images/blog/BeneficiosLevantamiento.jpg"
    alt="Beneficios medición topográfica en Gran Canaria"
    className="w-full rounded-xl shadow-md"
  />
</figure>

        {/* SECTION 6 */}
        <div id="s6" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section6")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section6Text")}
          </p>
        </div>

<figure className="mb-10">
  <img
    src="/images/blog/CanariasLevantamiento.jpg"
    alt="Topographic survey project in Gran Canaria"
    className="w-full rounded-xl shadow-md"
  />
</figure>

        {/* SECTION 7 */}
        <div id="s7" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.topographicSurvey.section7")}
          </h2>
          <p className="leading-8">
            {t("blog.topographicSurvey.section7Text")}
          </p>
        </div>


        {/* CTA SECTION */}
<div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

  <h3 className="text-2xl font-bold mb-3 text-slate-800">
    {i18n.language === "es"
      ? "¿Necesita un levantamiento topográfico en Canarias?"
      : "Need a Topographic Survey in the Canary Islands?"}
  </h3>

  <p className="mb-6 text-slate-700">
    {i18n.language === "es"
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

{/* Related Articles */}

<div className="mt-12 border-t pt-10">

  <h3 className="text-2xl font-bold text-topo-navy mb-6">
    {isSpanish
      ? "Artículos relacionados"
      : "Related Articles"}
  </h3>

  <div className="max-w-md">

    <BlogCard
      compact
      title={t("blog.settingOut.title")}
      excerpt={t("blogCard.settingOutExcerpt")}
      image="/images/blog/replanteo.jpg"
      link={
        isSpanish
          ? "/blog/replanteo-de-obra"
          : "/blog/construction-setting-out"
      }
    />

  </div>

</div>

      </ArticleTemplate>
    </>
  );
}