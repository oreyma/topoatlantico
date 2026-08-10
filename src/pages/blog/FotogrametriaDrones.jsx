import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ArticleTemplate from "../../components/ArticleTemplate";
import BlogCard from "../../components/BlogCard";

export default function FotogrametriaDrones() {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language === "es";

  const canonicalUrl = isSpanish
  ? "https://topoatlantico.com/blog/Fotogrametria-drones"
  : "https://topoatlantico.com/blog/Drone-Photogrammetry";

  const seoTitle = isSpanish
    ? "Fotogrametría con Drones en Canarias | TOPOATLANTICO"
    : "Drone Photogrammetry in the Canary Islands | TOPOATLANTICO";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={t("blog.FotogrametriaDrones.intro")}
        />

        <meta
          name="keywords"
          content={
            isSpanish
              ? "fotogrametría con drones, levantamiento fotogramétrico, ortofotos, ortofotografía, nube de puntos, MDT, MDS, cartografía con drones, topografía aérea, topografía Canarias, fotogrametría Canarias, topógrafo Canarias, ingeniería civil, movimiento de tierras, cálculo de volúmenes"
              : "drone photogrammetry, drone surveying, UAV photogrammetry, drone mapping, orthophoto, orthomosaic, point cloud, Digital Terrain Model, DTM, Digital Surface Model, DSM, engineering survey, land survey, Canary Islands surveyor, drone photogrammetry Canary Islands"
          }
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />

        <meta
          property="og:description"
          content={t("blog.FotogrametriaDrones.intro")}
        />

        <meta
          property="og:image"
          content="https://topoatlantico.com/images/blog/FotogrametriaDrones.jpg"
        />

        <meta property="og:type" content="article" />
      </Helmet>

      <ArticleTemplate
        title={t("blog.FotogrametriaDrones.title")}
        image="/images/blog/FotogrametriaDrones.jpg"
        video="/videos/FotogrametriaDronesORTOFOTO.mp4"
      >

        {/* Publication date */}

        <p className="text-sm text-gray-500 mb-6">
          {isSpanish
            ? "Publicado: Agosto 2026"
            : "Published: Augost 2026"}
        </p>

        {/* INTRO */}

        <div className="bg-topo-gray/10 border-l-4 border-topo-ocean p-6 rounded-lg mb-10">

          <p className="text-lg leading-8">
            {t("blog.FotogrametriaDrones.intro")}
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
                {t("blog.FotogrametriaDrones.section1")}
              </a>
            </li>

            <li>
              <a href="#s2" className="hover:underline">
                {t("blog.FotogrametriaDrones.section2")}
              </a>
            </li>

            <li>
              <a href="#s3" className="hover:underline">
                {t("blog.FotogrametriaDrones.section3")}
              </a>
            </li>

            <li>
              <a href="#s4" className="hover:underline">
                {t("blog.FotogrametriaDrones.section4")}
              </a>
            </li>

            <li>
              <a href="#s5" className="hover:underline">
                {t("blog.FotogrametriaDrones.section5")}
              </a>
            </li>

            <li>
              <a href="#s6" className="hover:underline">
                {t("blog.FotogrametriaDrones.section6")}
              </a>
            </li>

            <li>
              <a href="#s7" className="hover:underline">
                {t("blog.FotogrametriaDrones.section7")}
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
            {t("blog.FotogrametriaDrones.section1")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section1Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section1Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section1Text3")}
  </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/FotogrametriaDrones.jpg"
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
            {t("blog.FotogrametriaDrones.section2")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section2Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section2Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section2Text3")}
  </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/FotogrametriaDronPlanVuelo_.jpg"
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
            {t("blog.FotogrametriaDrones.section3")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section3Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section3Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section3Text3")}
  </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/Modelo3dLasCurvasNivelOrtofoto.jpg"
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
            {t("blog.FotogrametriaDrones.section4")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section4Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section4Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section4Text3")}
  </p>

        </div>

        <figure className="mb-10">

          <img
            src="/images/blog/PrecisionFotogrametriaModelo3D.jpg"
            alt="Precision centimetrica en nube de puntos, modeolos 3d y ortofotos"
            className="w-full rounded-xl shadow-md"
          />

        </figure>

        {/* SECTION 5 */}

       {/*  <div
          id="s5"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDrones.section5")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section5Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section5Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section5Text3")}
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
            {t("blog.FotogrametriaDrones.section6")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section6Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section6Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section6Text3")}
  </p>

        </div>

  <figure className="mb-10">
    <video
      src="/videos/DronModelo3DNubePuntos.mp4"
     autoPlay
    muted
    loop
    playsInline
      className="w-full rounded-xl shadow-md"
    />
  </figure>

        {/* SECTION 7 */}

        <div
          id="s7"
          className="mb-10 p-6 bg-white border rounded-xl shadow-sm"
        >

          <h2 className="text-2xl font-bold text-topo-navy mb-4">
            {t("blog.FotogrametriaDrones.section7")}
          </h2>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section7Text1")}
  </p>

  <p className="leading-8 mb-6">
    {t("blog.FotogrametriaDrones.section7Text2")}
  </p>

  <p className="leading-8">
    {t("blog.FotogrametriaDrones.section7Text3")}
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

            {/* <BlogCard								INTRODUCIR NUEVO ARTICULO APLICACIONES DRONES
              compact
              title={t("blog.settingOut.title")}
              excerpt={t("blogCard.settingOutExcerpt")}
              image="/images/blog/replanteo.jpg"
              link={
                isSpanish
                  ? "/blog/replanteo-de-obra"
                  : "/blog/construction-setting-out"
              }
            /> */}

          </div>

        </div>

      </ArticleTemplate>

    </>

  );

}