import './App.css'
import logo from './assets/logo.png'
import Button from './components/Button'
import ServiceCard from './components/ServiceCard'
import ProjectCard from './components/ProjectCard'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import ImageCarousel from "./components/ImageCarousel"
import PoliticaPrivacidad from "./pages/legal/PoliticaPrivacidad"
import AvisoLegal from "./pages/legal/AvisoLegal"
import MedicionParcelas from "./pages/services/MedicionParcelas"
import ReplanteoObra from "./pages/services/ReplanteoObra"
import Levantamientos from "./pages/services/Levantamientos"
import AsistenciaTecnica from "./pages/services/AsistenciaTecnica"
import MonitoreoAuscultacion from "./pages/services/MonitoreoAuscultacion"
import DronesFotogrametria from "./pages/services/DronesFotogrametria"
import ContactForm from "./components/ContactForm"
import { useTranslation } from "react-i18next"
import PrivacyPolicy from "./pages/legal/PrivacyPolicy"
import LegalNotice from "./pages/legal/LegalNotice"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import WhatIsTopographicSurvey from "./pages/blog/WhatIsTopographicSurvey";
import ReplanteoDeObra from "./pages/blog/ReplanteoDeObra";
import MonitoreoEstructuras from "./pages/blog/MonitoreoEstructuras";
import FotogrametriaDrones from "./pages/blog/FotogrametriaDrones";
import BlogCard from "./components/BlogCard";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
 const { t, i18n } = useTranslation();	
const articleLink =
  i18n.language === "es"
    ? "/blog/que-es-un-levantamiento-topografico"
    : "/blog/what-is-a-topographic-survey";
  return (

    <Layout>
      <Navbar />
{/* HERO SECTION */}
<section
  id="home"
  className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
>
  {/* Imagen de fondo */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  ></div>

  {/* Capa de oscurecimiento */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Contenido principal */}
  <div className="relative z-10 max-w-3xl px-6">
<h1 className="text-5xl font-extrabold mb-4">{t("hero.title")}</h1>
<p className="text-lg mb-1">{t("hero.subtitle1")}</p>
<p className="text-lg mb-8">{t("hero.subtitle2")}</p>

<div className="flex justify-center gap-6">
  <a href="#contact" className="border border-white text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1">
    {t("hero.btn_quote")}
  </a>
  <a href="#services" className="border border-white text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1">
    {t("hero.btn_services")}
  </a>
</div>

  </div>
</section>

{/* SERVICES */}
<section id="services" className="pt-30 bg-white"
  style={{
    backgroundImage: "url('/images/bg-pattern.jpg')",
    backgroundColor: "rgba(255,255,255,0.85)",
    backgroundBlendMode: "overlay",
  }}
>
  <div className="max-w-6xl mx-auto p-6" >
    <h2 className="text-3xl font-bold mb-2 text-topo-navy">{t("services.title")}</h2>
    <p className="mb-6 text-topo-dark">{t("services.description")}</p>
    <div className="grid gap-6 md:grid-cols-3">

      <ServiceCard title={t("services.list.parcelas")} image="/images/servicios/MediciónRegularizaciónFincas.jpg" link="/servicios/medicion-parcelas" />
      <ServiceCard title={t("services.list.replanteo")} image="/images/servicios/ReplanteoDeObra.jpg" link="/servicios/replanteo-obra" />
      <ServiceCard title={t("services.list.levantamientos")} image="/images/servicios/LevantaminetoTopografico.jpg" link="/servicios/levantamientos" />
      <ServiceCard title={t("services.list.asistencia")} image="/images/servicios/ATecnica.jpg" link="/servicios/asistencia-tecnica" />
      <ServiceCard title={t("services.list.monitoreo")} image="/images/servicios/MonitoreoEstructuras.jpg" link="/servicios/monitoreo-auscultacion" />
      <ServiceCard title={t("services.list.drones")} image="/images/servicios/Ortofoto_Fotogrametria_Drones.jpg" link="/servicios/drones-fotogrametria" />
    </div>
  </div>
</section>

{/* PROJECTS 
<section id="projects" className="pt-30 bg-topo-gray"
  style={{
    backgroundImage: "url('/images/bg-pattern.jpg')",
    backgroundColor: "rgba(255,255,255,0.85)",
    backgroundBlendMode: "overlay",
  }}
>
  <div className="max-w-6xl mx-auto p-6 text-center">
    <h2 className="text-3xl font-bold mb-4 text-topo-navy">{t("projects.title")}</h2>
    <ImageCarousel />
  </div>
</section> */}


{/* ABOUT + BLOG */}
<section
  id="about"
  className="pt-15 bg-white"
  style={{
    backgroundImage: "url('/images/bg-pattern.jpg')",
    backgroundColor: "rgba(255,255,255,0.85)",
    backgroundBlendMode: "overlay",
  }}
>
  <div className="max-w-6xl mx-auto p-8 md:p-16">


      {/* ABOUT US */}
<div className="relative">

  {/* Logo de fondo */}
  <img
    src={logo}
    alt=""
    className="absolute w-120 opacity-10"
  />

  {/* Contenido */}
  <div className="relative z-10">

    <h2 className="text-3xl font-bold mb-4 text-topo-navy">
      {t("about.title")}
    </h2>

    <p className="mb-4 text-topo-dark">
      {t("about.p1")}
    </p>

    <ul className="list-disc pl-5 space-y-1 text-topo-dark">
      <li>{t("about.list.1")}</li>
      <li>{t("about.list.2")}</li>
      <li>{t("about.list.3")}</li>
      <li>{t("about.list.4")}</li>
      <li>{t("about.list.5")}</li>
    </ul>

</div>
  <div className="max-w-6xl mx-auto p-6 text-center">
    <ImageCarousel />
  </div>
      {/* BLOG */}
      <div id="blog">
        <h2 className= "pt-15 text-3xl font-bold mb-2 text-topo-navy">
          {t("blogSection.title")}
        </h2>

        <p className= "mb-8 text-topo-dark">
          {t("blogSection.description")}
        </p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <BlogCard
  title={t("blog.topographicSurvey.title")}
  excerpt={t("blogCard.surveyExcerpt")}
  image="/images/blog/topographic-survey.jpg"
  link={
    i18n.language === "es"
      ? "/blog/que-es-un-levantamiento-topografico"
      : "/blog/what-is-a-topographic-survey"

  }
/>
<BlogCard
  title={t("blog.settingOut.title")}
  excerpt={t("blogCard.settingOutExcerpt")}
  image="/images/blog/replanteo.jpg"
  link={
    i18n.language === "es"
      ? "/blog/replanteo-de-obra"
      : "/blog/construction-setting-out"
  }
/>
<BlogCard
  title={t("blog.monitoring.title")}
  excerpt={t("blogCard.monitoringExcerpt")}
  image="/images/blog/monitoreo.jpg"
  link={
    i18n.language === "es"
      ? "/blog/monitoreo-estructuras"
      : "/blog/monitoring-structures"
  }
/>
<BlogCard
  title={t("blog.FotogrametriaDrones.title")}
  excerpt={t("blogCard.FotogrametriaDronesExcerpt")}
  image="/images/blog/FotogrametriaDrones.jpg"
  link={
    i18n.language === "es"
      ? "/blog/Fotogrametria-drones"
      : "/blog/Drone-Photogrammetry"
  }
/>
 </div>
      </div>

    </div>

  </div>
</section>


{/* CONTACT */}
<section id="contact" className="pt-5 bg-topo-gray"
  style={{
    backgroundImage: "url('/images/bg-pattern.jpg')",
    backgroundColor: "rgba(255,255,255,0.85)",
    backgroundBlendMode: "overlay",
  }}
>
  <ContactForm />
</section>

<Footer />
    </Layout>
  )
}

export default function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/medicion-parcelas" element={<MedicionParcelas />} />
        <Route path="/servicios/replanteo-obra" element={<ReplanteoObra />} />
        <Route path="/servicios/levantamientos" element={<Levantamientos />} />
        <Route path="/servicios/asistencia-tecnica" element={<AsistenciaTecnica />} />
        <Route path="/servicios/monitoreo-auscultacion" element={<MonitoreoAuscultacion />} />
        <Route path="/servicios/drones-fotogrametria" element={<DronesFotogrametria />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/what-is-a-topographic-survey" element={<WhatIsTopographicSurvey />} />
        <Route path="/blog/que-es-un-levantamiento-topografico" element={<WhatIsTopographicSurvey />} />
	<Route path="/blog/replanteo-de-obra" element={<ReplanteoDeObra />} />
	<Route path="/blog/construction-setting-out" element={<ReplanteoDeObra />} />
        <Route path="/blog/monitoring-structures" element={<MonitoreoEstructuras />} />
        <Route path="/blog/monitoreo-estructuras" element={<MonitoreoEstructuras />} />
        <Route path="/blog/Fotogrametria-drones" element={<FotogrametriaDrones />} />
        <Route path="/blog/Drone-Photogrammetry" element={<FotogrametriaDrones />} />

        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacy-policy" element={<PoliticaPrivacidad />} />
        <Route path="/legal-notice" element={<AvisoLegal />} />
      </Routes>
    </>
  )
}

