
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

function Home() {
 const { t } = useTranslation();	
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
<section id="services" className="py-22 bg-white">
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl font-bold mb-2 text-topo-navy">{t("services.title")}</h2>
    <p className="mb-6 text-topo-dark">{t("services.description")}</p>
    <div className="grid gap-6 md:grid-cols-3">
      <ServiceCard title={t("services.list.parcelas")} image="/images/servicios/parcelas.jpg" link="/servicios/medicion-parcelas" />
      <ServiceCard title={t("services.list.replanteo")} image="/images/servicios/replanteo.jpg" link="/servicios/replanteo-obra" />
      <ServiceCard title={t("services.list.levantamientos")} image="/images/servicios/levantamiento.jpg" link="/servicios/levantamientos" />
      <ServiceCard title={t("services.list.asistencia")} image="/images/servicios/ATecnica.jpg" link="/servicios/asistencia-tecnica" />
      <ServiceCard title={t("services.list.monitoreo")} image="/images/servicios/monitoreo.jpg" link="/servicios/monitoreo-auscultacion" />
      <ServiceCard title={t("services.list.drones")} image="/images/servicios/dron.jpg" link="/servicios/drones-fotogrametria" />
    </div>
  </div>
</section>

{/* PROJECTS */}
<section id="projects" className="py-22 bg-topo-gray">
  <div className="max-w-6xl mx-auto p-6 text-center">
    <h2 className="text-3xl font-bold mb-4 text-topo-navy">{t("projects.title")}</h2>
    <ImageCarousel />
  </div>
</section>


{/* ABOUT */}
<section id="about" className="py-10 bg-white">
  <div className="max-w-6xl mx-auto p-16 flex flex-col md:flex-row gap-10 items-center md:items-start">
    <div className="md:w-1/4 flex justify-center md:justify-start">
      <div className="bg-topo-gray/10 p-2 rounded-2xl shadow-sm">
        <img src={logo} alt="TopoAtlantico" className="w-40 md:w-52 lg:w-64 object-contain" />
      </div>
    </div>

    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-4 text-topo-navy">{t("about.title")}</h2>
      <p className="mb-4 text-topo-dark">{t("about.p1")}</p>
      <ul className="list-disc pl-5 space-y-1 text-topo-dark">
        <li>{t("about.list.1")}</li>
        <li>{t("about.list.2")}</li>
        <li>{t("about.list.3")}</li>
      </ul>
    </div>
  </div>
</section>

{/* CONTACT */}
<section id="contact" className="py-0 bg-topo-gray">
  <ContactForm />
</section>

<Footer />
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios/medicion-parcelas" element={<MedicionParcelas />} />
      <Route path="/servicios/replanteo-obra" element={<ReplanteoObra />} />
      <Route path="/servicios/levantamientos" element={<Levantamientos />} />
      <Route path="/servicios/asistencia-tecnica" element={<AsistenciaTecnica />} />
      <Route path="/servicios/monitoreo-auscultacion" element={<MonitoreoAuscultacion />} />
      <Route path="/servicios/drones-fotogrametria" element={<DronesFotogrametria />} />

        {/* Español */}
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />

        {/* Inglés */}
        <Route path="/privacy-policy" element={<PoliticaPrivacidad />} />
        <Route path="/legal-notice" element={<AvisoLegal />} />
    </Routes>
  )
}
