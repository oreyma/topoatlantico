import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function MonitoreoEstructuras() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

  const canonicalUrl = isSpanish
  ? "https://topoatlantico.com/blog/monitoreo-estructuras"
  : "https://topoatlantico.com/blog/monitoring-structures";

  const seoTitle = isSpanish
    ? "Monitoreo y Auscultación de Estructuras en Canarias | TopoAtlantico"
    : "Structural Monitoring in the Canary Islands | TopoAtlantico";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={t("blog.monitoring.intro")}
        />

        <meta
          name="keywords"
          content={
            isSpanish
              ? "monitoreo estructural, auscultación de estructuras, control de deformaciones, topografía de precisión, topógrafo Canarias"
              : "structural monitoring, deformation monitoring, engineering surveying, structural survey, Canary Islands surveyor"
          }
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />

        <meta
          property="og:description"
          content={t("blog.monitoring.intro")}
        />

        <meta
          property="og:image"
          content="https://topoatlantico.com/images/blog/monitoring.jpg"
        />

        <meta property="og:type" content="article" />
      </Helmet>

      <ArticleTemplate
        title={t("blog.monitoring.title")}
        image="/images/blog/monitoreo.jpg"
      >

        {/* Publication date */}

        <p className="text-sm text-gray-500 mb-6">
          {isSpanish
            ? "Publicado: Julio 2026"
            : "Published: July 2026"}
        </p>

        {/* INTRO */}

        <div className="bg-topo-gray/10 border-l-4 border-topo-ocean p-6 rounded-lg mb-10">

          <p className="text-lg leading-8">
            {t("blog.monitoring.intro")}
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
                {t("blog.monitoring.section1")}
              </a>
            </li>

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.monitoring.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.monitoring.section3")}
              </a>
            </li>

            <li>
              <a href="#s4" className="hover:underline">
                {t("blog.monitoring.section4")}
              </a>
            </li>

            <li>
              <a href="#s5" className="hover:underline">
                {t("blog.monitoring.section5")}
              </a>
            </li>

            <li>
              <a href="#s6" className="hover:underline">
                {t("blog.monitoring.section6")}
              </a>
            </li>

            <li>
              <a href="#s7" className="hover:underline">
                {t("blog.monitoring.section7")}
              </a>
            </li>

          </ul>

        </div>

        {/* SECTION 1 */}

      {/*  <div
          id="s1"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section1")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section1Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/WhatIsMonitoring.jpg"
            alt="Structural monitoring using robotic total stations"
            className="w-full rounded-xl shadow-md"
          />

        </figure> */}

        {/* SECTION 2 */}

        <div
          id="s2"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section2")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section2Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/AuscultacionEstructuras.jpg"
            alt="Bridge and building deformation monitoring"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 3 */}

        <div
          id="s3"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section3")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section3Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/MonitoreoCanarias.jpg"
            alt="Surveyor carrying out structural monitoring"
            className="w-full rounded-xl shadow-md"
          />

        </figure>
        {/* SECTION 4 */}

        <div
          id="s4"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section4")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section4Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/MonitoreoEquipos.jpg"
            alt="Surveying equipment used for structural monitoring"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 5 */}

       {/*  <div
          id="s5"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section5")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section5Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/BenefitsMonitoring.jpg"
            alt="Benefits of structural monitoring"
            className="w-full rounded-xl shadow-md"
          />

        </figure> */}

        {/* SECTION 6 */}

        <div
          id="s6"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section6")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section6Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/MonitoreoNivelacion.jpg"
            alt="Structural monitoring in the Canary Islands"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 7 */}

        <div
          id="s7"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.monitoring.section7")}
          </h2>

          <p className="leading-8">
            {t("blog.monitoring.section7Text")}
          </p>

        </div>

        {/* CTA */}

        <div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

          <h3 className="text-2xl font-bold mb-3 text-slate-800">

            {isSpanish
              ? "¿Necesita monitoreo o auscultación de estructuras en Canarias?"
              : "Need Structural Monitoring in the Canary Islands?"}

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

          <div className="grid md:grid-cols-2 gap-6">

            <BlogCard
              compact
              title={t("blog.topographicSurvey.title")}
              excerpt={t("blogCard.surveyExcerpt")}
              image="/images/blog/topographic-survey.jpg"
              link={
                isSpanish
                  ? "/blog/que-es-un-levantamiento-topografico"
                  : "/blog/what-is-a-topographic-survey"
              }
            />

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