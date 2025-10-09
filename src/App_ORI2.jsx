// src/App.jsx

import './App.css'
import logo from './assets/logo.png'
import Button from './components/Button'
import ServiceCard from './components/ServiceCard'
import ProjectCard from './components/ProjectCard'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

function App() {	
  return (
    <Layout>
      <Navbar />

      {/* HERO */}
      <section id="home" className="py-20 bg-topo-gray">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-20">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-topo-navy">TopoAtlántico</h1>
            <p className="mb-7 text-lg leading-relaxed">
              Servicios de topografía y cartografía en las Islas Canarias. Precisión, tecnología y conocimiento del terreno insular: estación total, drones, GNSS y modelado 3D.
            </p>
            <div className="flex gap-4 mb-6">
              <Button>Solicita presupuesto</Button>
              <Button variant="secondary">Ver servicios</Button>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-topo-dark">
              <li>Medidición de Parcelas</li>
              <li>Replanteos de Obra</li>
              <li>Levantamientos Topograficos</li>
              <li>Drones & Fotogrametría</li>
              <li>Asistencia Tecnica</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo TopoAtlántico" className="w-48 md:w-60 object-contain" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">Nuestros servicios</h2>
          <p className="mb-8 text-topo-dark">Soluciones adaptadas a obra civil, urbanismo y proyectos medioambientales.</p>
          <div className="grid gap-6 md:grid-cols-3">
	     <ServiceCard
              title="Medidición de Parcelas"
              description="Medicion precisa de terrenos rusticos, ofrecemos una amplia gama de servicios que incluye el cálculo detallado de la superficie de la parcela,  análisis de diferencias de nivel, control de pendientes y cubicación de volúmenes, entre otros."
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
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">Proyectos recientes</h2>
          <p className="mb-8 text-topo-dark">Ejemplos de trabajos realizados en diferentes islas.</p>
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard title="Replanteo carretera" location="Tenerife" />
            <ProjectCard title="Ortomosaico costa" location="Gran Canaria" />
            <ProjectCard title="Control de talud" location="La Palma" />
          </div>
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