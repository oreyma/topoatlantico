import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t, i18n } = useTranslation();

  const articleLink =
    i18n.language === "es"
      ? "/blog/que-es-un-levantamiento-topografico"
      : "/blog/what-is-a-topographic-survey";

const settingOutLink =
  i18n.language === "es"
    ? "/blog/replanteo-de-obra"
    : "/blog/construction-setting-out";

  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 max-w-6xl mx-auto px-6"
      style={{
        backgroundImage: "url('/images/bg-pattern.jpg')",
        backgroundColor: "rgba(255,255,255,0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
        <h1 className="text-4xl font-bold text-topo-navy mb-6">
          {t("blogSection.title")}
        </h1>

        <p className="mb-8 text-topo-dark">
          {t("blogSection.description")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  <BlogCard
    title={t("blog.topographicSurvey.title")}
    excerpt={t("blogCard.surveyExcerpt")}
    image="/images/blog/Levantamiento_Topográfico_Carretera.webp"
    link={
  i18n.language === "es"
      ? "/blog/que-es-un-levantamiento-topografico"
      : "/blog/what-is-a-topographic-survey"}
  />

  <BlogCard
    title={t("blog.settingOut.title")}
    excerpt={t("blogCard.settingOutExcerpt")}
    image="/images/blog/Replanteo_Edificacion.webp"
    link={settingOutLink}
  />


<BlogCard
  title={t("blog.monitoring.title")}
  excerpt={t("blogCard.monitoringExcerpt")}
  image="/images/blog/MonitoreoTunelDeformacion.webp"
  link={
    i18n.language === "es"
      ? "/blog/monitoreo-estructuras"
      : "/blog/monitoring-structures"}
/>

<BlogCard
  title={t("blog.FotogrametriaDrones.title")}
  excerpt={t("blogCard.FotogrametriaDronesExcerpt")}
  image="/images/blog/FotogrametriaDrones.webp"
  link={
    i18n.language === "es"
      ? "/blog/Fotogrametria-drones"
      : "/blog/Drone-Photogrammetry"
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

</div>
      </section>

      <Footer />
    </>
  );
}