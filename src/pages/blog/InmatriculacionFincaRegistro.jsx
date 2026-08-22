import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function InmatriculacionFincaRegistro() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

  const canonicalUrl = isSpanish
  ? "https://www.topoatlantico.com/blog/inmatriculacion-finca-registro"
  : "https://www.topoatlantico.com/blog/property-registration-spain";

  const seoTitle = isSpanish
    ? "Inmatriculación de una finca: Registro, Catastro y georreferenciación | TOPOATLANTICO"
    : "Registering a Property in Spain: Land Registry, Cadastre & Georeferencing | TOPOATLANTICO";


  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={t("blog.InmatriculacionFincaRegistro.seoDescription")}
        />

        <meta
          name="keywords"
          content={
            isSpanish
              ? "inmatriculación de finca, inmatricular una finca, inmatriculación Registro de la Propiedad, inmatriculación de terrenos, representación gráfica georreferenciada, Catastro y Registro de la Propiedad, coordinación Catastro Registro, levantamiento topográfico para inmatriculación, finca georreferenciada, plano georreferenciado de finca, GML de finca, coordenadas georreferenciadas, inmatriculación finca rústica, inmatricular terreno rústico, representación gráfica alternativa, inmatriculación de fincas Canarias, levantamiento topográfico para inmatriculación Canarias, georreferenciación de fincas Canarias, inmatriculación finca rústica Canarias"
              : "property registration Spain, register property for the first time Spain, Spanish Land Registry, Spanish Cadastre, Cadastre and Land Registry Spain, georeferenced property plan Spain, georeferenced property boundaries Spain, property boundary survey Spain, land survey Spain, property survey Spain, cadastral survey Spain, georeferenced property survey, property registration requirements Spain, land survey for property registration Spain, georeferenced land survey Spain, property boundary survey Spain, land surveyor Spain, topographic survey Spain"
          }
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />

        <meta
          property="og:description"
          content={t("blog.InmatriculacionFincaRegistro.intro")}
        />

        <meta
          property="og:image"
          content="https://www.topoatlantico.com/images/blog/InmatriculacionParcelaRegistro.webp"
        />

        <meta property="og:type" content="article" />
      </Helmet>

      <ArticleTemplate
        title={t("blog.InmatriculacionFincaRegistro.title")}
        image="/images/blog/InmatriculacionGeorreferenciacionCatastroRegistro.webp"
        video="/videos/InmatriculacionFincaRegistro.mp4"
      >

        {/* Publication date */}

        <p className="text-sm text-gray-500 mb-6">
          {isSpanish
            ? "Publicado: Agosto 2026"
            : "Published: August 2026"}
        </p>

        {/* INTRO */}

        <div className="bg-topo-gray/10 border-l-4 border-topo-ocean p-6 rounded-lg mb-10">

          <p className="text-lg leading-8">
            {t("blog.InmatriculacionFincaRegistro.intro")}
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
                {t("blog.InmatriculacionFincaRegistro.section1")}
              </a>
            </li> 

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.InmatriculacionFincaRegistro.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.InmatriculacionFincaRegistro.section3")}
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
            {t("blog.InmatriculacionFincaRegistro.section1")}
          </h2>

          <p className="leading-8">
            {t("blog.InmatriculacionFincaRegistro.section1Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/PlanoDeslindeGeorreferenciacionCatastroRegistro.webp"
            alt="Inmatriculacion de finca en el registor"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 2 */}

        <div
          id="s2"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.InmatriculacionFincaRegistro.section2")}
          </h2>

          <p className="leading-8">
            {t("blog.InmatriculacionFincaRegistro.section2Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/InformeGraficoGeorreferenciacion.webp"
            alt="Informe grafico georreferenciado para inmatriculacion en registro de la propiedad y coordinacion con catastro"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 3 */}

        <div
          id="s3"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.InmatriculacionFincaRegistro.section3")}
          </h2>

          <p className="leading-8">
            {t("blog.InmatriculacionFincaRegistro.section3Text")}
          </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/RepresentacionGraficaCatastro.webp"
            alt="comprobar que la finca, su superficie, sus linderos y su representación gráfica son coherentes con la cartografía catastral"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

        </figure>

        {/* CTA */}

        <div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

          <h3 className="text-2xl font-bold mb-3 text-slate-800">

            {isSpanish
              ? "¿Necesita un informe gráfico de georreferenciacion en Canarias?"
              : "Need a Georeferenced Graphical Representation in the Canaries?"}

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
              image="/images/blog/Levantamiento_Topográfico_Carretera.webp"
              link={
                isSpanish
                  ? "/blog/que-es-un-levantamiento-topografico"
                  : "/blog/what-is-a-topographic-survey"
              }
            />

<BlogCard
  title={t("blog.FotogrametriaDronesPlanificarVuelo.title")}
  excerpt={t("blog.FotogrametriaDronesPlanificarVuelo.intro")}
  image="/images/blog/FotogrametriaDronPlanVuelo.webp"
  link={
    i18n.language === "es"
      ? "/blog/Fotogrametria-drones-Planificar-vuelo"
      : "/blog/Drone-Photogrammetry-Plan-your-flight"
  }
/>

          </div>

        </div>

      </ArticleTemplate>

    </>

  );

}