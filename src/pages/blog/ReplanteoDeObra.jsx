import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function ReplanteoDeObra() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

  const canonicalUrl = isSpanish
    ? "https://topoatlantico.com/blog/replanteo-de-obra-canarias"
    : "https://topoatlantico.com/blog/construction-setting-out-canary-islands";

  const seoTitle = isSpanish
    ? "Replanteo de Obra en Canarias | Guía Completa | TOPOATLANTICO"
    : "Construction Setting Out in the Canary Islands | Complete Guide | TOPOATLANTICO";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={t("blog.settingOut.intro")}
        />

        <meta
          name="keywords"
          content={
            isSpanish
              ? "replanteo de obra, replanteo topográfico, topógrafo Canarias, obra civil Canarias, replanteos de construcción"
              : "construction setting out, setting out survey, surveyor Canary Islands, engineering surveying, construction survey"
          }
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />

        <meta
          property="og:description"
          content={t("blog.settingOut.intro")}
        />

        <meta
          property="og:image"
          content="https://topoatlantico.com/images/blog/Replanteo_Edificacion.webp"
        />

        <meta property="og:type" content="article" />
      </Helmet>

      <ArticleTemplate
        title={t("blog.settingOut.title")}
        image="/images/blog/Replanteo_Edificacion.webp"
      >

        {/* Publication date */}
        <p className="text-sm text-gray-500 mb-6">
          {isSpanish
            ? "Publicado: Julio 2026"
            : "Published: July 2026"}
        </p>

        {/* Intro */}
        <div className="bg-topo-gray/10 border-l-4 border-topo-ocean p-6 rounded-lg mb-10">
          <p className="text-lg leading-8">
            {t("blog.settingOut.intro")}
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
        {/*    <li>
              <a href="#s1" className="hover:underline">
                {t("blog.settingOut.section1")}
              </a>
            </li> */}

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.settingOut.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.settingOut.section3")}
              </a>
            </li>

            <li>
              <a href="#s4" className="hover:underline">
                {t("blog.settingOut.section4")}
              </a>
            </li>

            <li>
              <a href="#s5" className="hover:underline">
                {t("blog.settingOut.section5")}
              </a>
            </li>

            <li>
              <a href="#s6" className="hover:underline">
                {t("blog.settingOut.section6")}
              </a>
            </li>

            <li>
              <a href="#s7" className="hover:underline">
                {t("blog.settingOut.section7")}
              </a>
            </li>

          </ul>

        </div>

        {/* SECTION 1 */}

            {/*    <div
          id="s1"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section1")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section1Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/QueEsUnReplanteo.webp"
            alt="Construction setting out using robotic total station"
            className="w-full rounded-xl shadow-md"
          />

        </figure>*/}

        {/* SECTION 2 */}

        <div
          id="s2"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section2")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section2Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/Replanteo_Urbanizacion.webp"
            alt="Replanteo estrucutras edificación y obra civil"
            className="w-full h-64 md:h-106 object-cover rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 3 */}

        <div
          id="s3"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section3")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section3Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/Replanteo_ObraCivil_Carretera.webp"
            alt="Replanteo carretera con estación total y gps"
            className="w-full h-64 md:h-106 object-cover rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 4 */}

        <div
          id="s4"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section4")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section4Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/ReplanteoPrecision.webp"
            alt="Precision en replanteo, evitar costes elevados"
            className="w-full h-64 md:h-106 object-cover rounded-xl shadow-md"
          />

        </figure>


        {/* SECTION 5 */}
        <div id="s5" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section5")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section5Text")}
          </p>
        </div>

        <figure className="mb-10">
          <img
            src="/images/blog/ReplanteoObra_Carretera.webp"
            alt="Replanteo carretera en las Islas Canarias"
            className="w-full h-64 md:h-106 object-cover rounded-xl shadow-md"
          />
        </figure>

        {/* SECTION 6 */}
        <div id="s6" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section6")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section6Text")}
          </p>
        </div>

        <figure className="mb-10">
          <img
            src="/images/blog/ReplanteoCanarias.webp"
            alt="Replanteo infraestructuras, Canarias"
            className="w-full h-64 md:h-106 object-cover rounded-xl shadow-md"
          />
        </figure>

        {/* SECTION 7 */}
        <div id="s7" className="mb-10 p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.settingOut.section7")}
          </h2>

          <p className="leading-8">
            {t("blog.settingOut.section7Text")}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

          <h3 className="text-2xl font-bold mb-3 text-slate-800">
            {isSpanish
              ? "¿Necesita un replanteo de obra en Canarias?"
              : "Need Construction Setting Out in the Canary Islands?"}
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

{/* Related Articles */}

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
      image="/images/blog/Levantamiento_Topográfico_Carretera.webp"
      link={
        isSpanish
          ? "/blog/que-es-un-levantamiento-topografico"
          : "/blog/what-is-a-topographic-survey"

      }
    />


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

  </div>

</div>

      </ArticleTemplate>
    </>
  );
}