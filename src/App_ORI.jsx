// src/App.jsx

import './App.css'
import logo from './assets/logo.png'
import Button from './components/Button'
import ServiceCard from './components/ServiceCard'
import ProjectCard from './components/ProjectCard'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import ImageCarousel from "./components/ImageCarousel";


function App() {	
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
      Precisión, tecnología y conocimiento del terreno insular.
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
          <p className="mb-6 text-topo-dark">Ofrecemos asesoramiento y soluciones adaptadas al cliente</p>

          <div className="grid gap-6 md:grid-cols-3">
	     <ServiceCard
              title="Medidición de Parcelas"
                description="Medición precisa de terrenos rústicos, cálculo de superficies y pendientes."
  image="/images/servicios/parcelas.jpg"
  link="/servicios/medicion-parcelas"
/>
	     <ServiceCard
              title="Replanteos de Obra"
              description="Servicios de replanteo de alta precision tanto en Edificacion como en Obra Civil; Replanteos de estructuras, Movimientos de tierra, Drenajes, Servicios afectados, etc."
            />
	     <ServiceCard
              title="Levantamientos Topograficos"
              description="Especializados en levantamientos topográficos de alta precision. encaje de proyectoOfrecemoso Estación total y GNSS. Entrega de planos y archivos compatibles con AutoCAD/GIS."
            />
	     <ServiceCard
              title="Monitoreo y Auscultacion"
              description="Control de deformaciones, Nivelacion de precision, Informes técnicos y Registros periódicos."
            />
	     <ServiceCard
              title="Drones & Fotogrametría"
              description="Ortomosaicos, nubes de puntos y modelos 3D para análisis y seguimiento de obra."
            />
            	<ServiceCard
              title="Asistencia Tecnica"
              description="Servicios de asistencia técnica para el control y vigilancia de la ejecución de las obras"
            />
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
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-topo-navy">Sobre nosotros</h2>
            <p className="mb-4 text-topo-dark">
              TopoAtlantico es un estudio de topografía con base en Canarias. Combinamos experiencia local con tecnología (estación total, GNSS y drones) para entregar resultados precisos y documentación lista para obra.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-topo-dark">
              <li>Técnicos titulados en topografía y geomática</li>
              <li>Equipos propios: estación total, GNSS, drones multirrotor</li>
              <li>Informes detallados y modelos 3D</li>
            </ul>
          </div>
          <div className="flex-1 bg-topo-gray h-60 flex items-center justify-center text-topo-dark">
            Imagen / Galería
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
            <p>📞 +34 600 000 000</p>
            <p>✉️ info@topoatlantico.com</p>
            <h4 className="mt-4 font-semibold text-topo-navy">Síguenos</h4>
            <p>LinkedIn · Instagram</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default App