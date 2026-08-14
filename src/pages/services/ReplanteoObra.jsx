import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import { useTranslation } from "react-i18next"
import Navbar from "../../components/Navbar"
import ServiceTemplate from "../../components/ServiceTemplate";
import BlogCard from "../../components/BlogCard";

export default function ReplanteoObra() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

   const handleContactClick = () => {
    navigate("/#contact")
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handleServicesClick = () => {
    navigate("/#services")
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

const settingOutLink =
  i18n.language === "es"
    ? "/blog/replanteo-de-obra"
    : "/blog/construction-setting-out";

  return (
    <>
<ServiceTemplate>

      {/* CONTENIDO PRINCIPAL */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6 pt-30" >
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-topo-navy mt-6 mb-4 text-center">
            {t("services.replanteo.title")}
          </h1>

          <img
            src="/images/servicios/ReplanteoDeObraTopografico.webp"
            alt={t("services.replanteo.title")}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
          />

          <p className="text-lg text-topo-dark mb-6">
            {t("services.replanteo.desc")}
          </p>

          <div className="flex justify-center gap-4">
            <Button
              variant="accent"
              onClick={handleContactClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              {t("buttons.quote")}
            </Button>

            <button
              onClick={handleServicesClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              {t("buttons.other")}
            </button>
          </div>
        </div>

{/* RELATED ARTICLE */}

<div className="mt-12 border-t pt-10">
  <h3 className="grid md:grid-cols-2 gap-6 text-2xl font-bold text-topo-navy mb-6">
    {i18n.language === "es"
      ? "¿Quieres saber cómo se lleva a cabo un  replanteo?"
      : "Would you like to know how setting out works?"}
  </h3>

  <div className="max-w-3xl grid md:grid-cols-2 gap-6">

  <BlogCard
    title={t("blog.settingOut.title")}
    excerpt={t("blogCard.settingOutExcerpt")}
    image="/images/blog/Replanteo_Edificacion.webp"
    link={settingOutLink}
  />



  </div>
</div>


      </section>
      </ServiceTemplate>
    </>
  )
}
