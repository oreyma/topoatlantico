// src/App.jsx

import { Routes, Route } from "react-router-dom"
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

function Home() {	
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
    style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
  ></div>

  {/* Capa de oscurecimiento */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Contenido principal */}
  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-5xl font-extrabold mb-4">TopoAtlantico</h1>
    <p className="text-lg mb-1">
      Servicios de topografía y cartografía en las Islas Canarias. 
    </p>
    <p className="text-lg mb-8">
      Precisión, tecnología y conocimiento del terreno.
    </p>

    <div className="flex justify-center gap-6">
      <a
        href="#contact"
        className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-topo-navy transition-colors"
      >
        Solicita presupuesto
      </a>
      <a
        href="#services"
        className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-topo-navy transition-colors"
      >
        Ver servicios
      </a>
    </div>
  </div>
</section>

              {/* SERVICES */}
              <section id="services" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto p-6">
                  <h2 className="text-3xl font-bold mb-2 text-topo-navy">Nuestros servicios</h2>
                  <p className="mb-6 text-topo-dark">
                    Ofrecemos asesoramiento y soluciones adaptadas al cliente
                  </p>
                  <div className="grid gap-6 md:grid-cols-3">
                    <ServiceCard
                      title="Medición de Parcelas"
                      description=""
                      image="/images/servicios/parcelas.jpg"
                      link="/servicios/medicion-parcelas"
                    />
                     <ServiceCard
                      title="Replanteo de Obra"
                      description=""
                      image="/images/servicios/replanteo.jpg"
                      link="/servicios/replanteo-obra"
                    />
                     <ServiceCard
                      title="Levantamientos Topográficos"
                      description=""
                      image="/images/servicios/levantamiento.jpg"
                      link="/servicios/levantamientos"
                    />
                     <ServiceCard
                      title="Asistencia Técnica"
                      description=""
                      image="/images/servicios/ATecnica.jpg"
                      link="/servicios/asistencia-tecnica"
                    />
                     <ServiceCard
                      title="Monitoreo y auscultación"
                      description=""
                      image="/images/servicios/monitoreo.jpg"
                      link="/servicios/monitoreo-auscultacion"
                    />
                     <ServiceCard
                      title="Drones & Fotogrametría"
                      description=""
                      image="/images/servicios/dron.jpg"
                      link="/servicios/drones-fotogrametria"
                    />
                     {/*<ServiceCard
                      title="Drones & Fotogrametría"
                      description=""
                      image="/images/servicios/dron.jpg"
                      link="/servicios/medicion-parcelas"
                    />*/}
                  </div>
                </div>
              </section>

      {/* PROJECTS */}
<section id="projects" className="py-16 bg-topo-gray">
  <div className="max-w-6xl mx-auto p-6 text-center">
    <h2 className="text-3xl font-bold mb-4 text-topo-navy">Experiencias en el Sector </h2>
    {/*<p className="mb-8 text-topo-dark">Ejemplos de trabajos realizados en diferentes islas.</p>*/}
    <ImageCarousel />
  </div>
</section>


{/* ABOUT */}
<section id="about" className="py-16 bg-white">
  <style>{`
    /* Patch de seguridad: si Tailwind no se aplica por algún motivo,
       esta regla forzará la fila en pantallas >=768px */
    @media (min-width: 768px) {
      .about-force-row { flex-direction: row !important; }
    }
  `}</style>

  <div className="max-w-6xl mx-auto p-6 flex flex-col about-force-row gap-10 items-center md:items-start">
    {/* LOGO A LA IZQUIERDA */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <div className="bg-topo-gray/10 p-4 rounded-2xl shadow-sm">
        <img
          src={logo}
          alt="TopoAtlántico"
          className="w-40 md:w-52 lg:w-64 object-contain"
        />
      </div>
    </div>

    {/* TEXTO A LA DERECHA */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-4 text-topo-navy">Sobre nosotros</h2>
      <p className="mb-4 text-topo-dark">
        TopoAtlántico es un estudio de topografía con base en Canarias. Combinamos experiencia local con tecnología (estación total, GNSS y drones) para entregar resultados precisos y documentación lista para obra.
      </p>
      <ul className="list-disc pl-5 space-y-1 text-topo-dark">
        <li>Técnicos titulados en topografía y geomática</li>
        <li>Equipos propios: estación total, GNSS, drones multirrotor</li>
        <li>Informes detallados y modelos 3D</li>
      </ul>
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="py-16 bg-topo-gray">
        <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-topo-navy">Contacto</h2>
            <p className="mb-6 text-topo-dark">Pide presupuesto o consulta disponibilidad. Responderemos en 24–48 horas.</p>
            <form action="mailto:info@topoatlantico.com" method="post" className="space-y-4">
              <input type="text" name="name" placeholder="Nombre" required className="w-full border border-topo-navy rounded-lg p-2" />
              <input type="email" name="email" placeholder="Email" required className="w-full border border-topo-navy rounded-lg p-2" />
              <textarea name="message" placeholder="Mensaje" required className="w-full border border-topo-navy rounded-lg p-2 h-32"></textarea>
              <Button variant="accent" type="submit">Enviar</Button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2 text-topo-navy">Datos</h3>
            <p>TopoAtlántico · Canarias</p>
            <p>📞 +34 642 566 908</p>
            <p>✉️ info@topoatlantico.com</p>
            <h4 className="mt-4 font-semibold text-topo-navy">Síguenos</h4>
            <p>LinkedIn · Instagram</p>
          </div>
        </div>
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

      <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
<Route path="/aviso-legal" element={<AvisoLegal />} />
    </Routes>
  )
}