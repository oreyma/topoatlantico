import { useTranslation, Trans } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";


export default function FotogrametriaDronesPlanificarVuelo() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

const canonicalUrl = isSpanish
  ? "https://topoatlantico.com/blog/fotogrametria-drones-planificar-vuelo"
  : "https://topoatlantico.com/blog/drone-photogrammetry-plan-your-flight";

  const seoTitle = isSpanish
    ? "Fotogrametría con drones: cómo planificar un vuelo | TOPOATLANTICO"
    : "Drone Photogrammetry: How to Plan a Flight | TOPOATLANTICO";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={t("blog.FotogrametriaDronesPlanificarVuelo.intro")}
        />

        <meta
          name="keywords"
          content={
            isSpanish
              ? "fotogrametría con drones, levantamiento fotogramétrico, ortofotos, ortofotografía, nube de puntos, MDT, MDS, cartografía con drones, planificar vuelo, way points, solapes, vuelo dron dji, fotogrametría Canarias, topógrafo Canarias, ingeniería civil, movimiento de tierras, cálculo de volúmenes"
              : "drone photogrammetry, drone surveying, UAV photogrammetry, drone mapping, orthophoto, orthomosaic, point cloud, Digital Terrain Model, DTM, Digital Surface Model, DSM, engineering survey, land survey, Canary Islands surveyor, drone photogrammetry Canary Islands, plan your flight, dji dron flight plan"
          }
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />

        <meta
          property="og:description"
          content={t("blog.FotogrametriaDronesPlanificarVuelo.intro")}
        />

        <meta
          property="og:image"
       content="https://topoatlantico.com/images/blog/FotogrametriaDrones.jpg"  />

        <meta property="og:type" content="article" />
      </Helmet>

      <ArticleTemplate
        title={t("blog.FotogrametriaDronesPlanificarVuelo.title")}
        image="/images/blog/FotogrametriaDronPlanVuelo.jpg"
        video="/videos/FotogrametriaDronesORTOFOTO_.mp4"
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
            {t("blog.FotogrametriaDronesPlanificarVuelo.intro")}
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
                {t("blog.FotogrametriaDronesPlanificarVuelo.section1")}
              </a>
            </li>

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.FotogrametriaDronesPlanificarVuelo.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.FotogrametriaDronesPlanificarVuelo.section3")}
              </a>
            </li>

            <li>
              <a href="#s4" className="hover:underline">
                {t("blog.FotogrametriaDronesPlanificarVuelo.section4")}
              </a>
            </li>

       {/*     <li>
              <a href="#s5" className="hover:underline">
                {t("blog.FotogrametriaDronesPlanificarVuelo.section5")}
              </a>
            </li> */}

            <li>
              <a href="#s6" className="hover:underline">
                {t("blog.FotogrametriaDronesPlanificarVuelo.section6")}
              </a>
            </li>

            <li>
              <a href="#s7" className="hover:underline">
                {t("blog.FotogrametriaDronesPlanificarVuelo.section7")}
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
            {t("blog.FotogrametriaDronesPlanificarVuelo.section1")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section1Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section1Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section1Text3")}
  </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/HuellaAlturaVueloDron.webp"
            alt="Relacion entre la altura de vuelo y la cobertura o huella"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 2 */}

        <div
          id="s2"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDronesPlanificarVuelo.section2")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section2Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section2Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section2Text3")}
  </p>
        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/ResolucionGSDTamañoPixel.webp"
            alt="Planificar vuelo fotogrametrico GSD Resolucion Pixel"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 3 */}

        <div
          id="s3"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDronesPlanificarVuelo.section3")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section3Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section3Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section3Text3")}
  </p>


        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/FotgrametriaSolapesPasadas.webp"
            alt="Vuelo dron recubrimiento transversal y longitudinal, solapes"
            className="w-full rounded-xl shadow-md"
          />

        </figure>
        {/* SECTION 4 */}

        <div
          id="s4"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDronesPlanificarVuelo.section4")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section4Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section4Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section4Text3")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section4Text4")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section4Text5")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section4Text6")}
  </p>
        </div>


        <figure className="mb-10">

          <img
            src="/images/blog/RecubrimientoVelocidadDroneIntervaloFoto.webp"
            alt="Relacion entre altura de vuelo, velocidad e intarvalo de fotografía para recubrimiento desy"
            className="w-full rounded-xl shadow-md"
          />

        </figure>
       

        {/* SECTION 5 

         <div
          id="s5"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDronesPlanificarVuelo.section5")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section5Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section5Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section5Text3")}
  </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/Introducir5.jpg"
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
            {t("blog.FotogrametriaDronesPlanificarVuelo.section6")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section6Text1")}
  </p>

<p className="leading-8 mb-6">
  <Trans
    i18nKey="blog.FotogrametriaDronesPlanificarVuelo.section6Text2"
    components={{
      litchi: (
        <a
          href={t("blog.FotogrametriaDronesPlanificarVuelo.section6LitchiLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        />
      ),
    }}
  />
</p>

<p className="leading-8 mb-6">
  <Trans
    i18nKey="blog.FotogrametriaDronesPlanificarVuelo.section6Text3"
    components={{
      waypointmap: (
        <a
          href={t("blog.FotogrametriaDronesPlanificarVuelo.section6WaypointMapLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        />
      ),
    }}
  />
</p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section6Text4")}
  </p>

        </div>

 <figure className="mb-10">

          <img
            src="/images/blog/PlanVueloMisionWaypointMap.webp"
            alt="Plan vuelo dron con WaypointMap"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 7 */}

        <div
          id="s7"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDronesPlanificarVuelo.section7")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section7Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section7Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDronesPlanificarVuelo.section7Text3")}
  </p>

        </div>

        {/* CTA */}

        <div className="mt-4 p-8 rounded-2xl text-center shadow-lg border border-gray-200 bg-gray-100">

          <h3 className="text-2xl font-bold mb-3 text-slate-800">

            {isSpanish
              ? "¿Necesita un levantamiento mediante fotogrametría con drones?"
              : "Need a Professional Drone Photogrammetry Survey?"}

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
  title={t("blog.FotogrametriaDrones.title")}
  excerpt={t("blogCard.FotogrametriaDronesExcerpt")}
  image="/images/blog/FotogrametriaDrones.jpg"
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