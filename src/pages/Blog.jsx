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

      <section className="pt-40 pb-20 max-w-6xl mx-auto px-6">
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
    image="/images/blog/topographic-survey.jpg"
    link={articleLink}
  />

  <BlogCard
    title={t("blog.settingOut.title")}
    excerpt={t("blogCard.settingOutExcerpt")}
    image="/images/blog/replanteo.jpg"
    link={settingOutLink}
  />

<BlogCard
  title={t("blog.monitoring.title")}
  excerpt={t("blogCard.monitoringExcerpt")}
  image="/images/blog/monitoreo.jpg"
  link={
    i18n.language === "es"
      ? "/blog/monitoreo-estructuras"
      : "/blog/monitoring-structures"}
/>

</div>
      </section>

      <Footer />
    </>
  );
}