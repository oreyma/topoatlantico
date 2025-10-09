/*
TopoAtlántico - Single-file React component (Tailwind CSS)

INSTRUCCIONES RÁPIDAS:
1) Este fichero es un componente React que puede pegarse en un proyecto creado con Vite/React o Create React App.
2) Requiere Tailwind CSS para el estilo. Si no quieres Tailwind, copia las clases y conviértelas a CSS propio.
3) Sustituye `/logo.png` por la ruta de tu logo final (por ejemplo: `/assets/logo-topoatlántico.png`).
4) Formularios: el formulario de contacto usa `mailto:` como fallback. Para envío real en producción, conecta con Formspree, Netlify Forms, o tu backend.

Cómo arrancar (resumen):
- yarn create vite mysite --template react
- cd mysite
- instalar Tailwind siguiendo la guía oficial (tailwindcss.com)
- pegar este componente en `src/App.jsx` y añadir la imagen `public/logo.png`

A continuación tienes el componente listo para copiar/pegar.
*/

import React from "react";

export default function TopoAtlanticoWebsite() {
  return (
    <div className="min-h-screen bg-cream-50 text-slate-900 font-sans">
      {/* NAV */}
      <header className="bg-white/60 backdrop-blur sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* Logo: replace /logo.png with your real file in public/ */}
            <img src="/logo.png" alt="TopoAtlántico" className="w-12 h-12 object-contain" />
            <span className="font-semibold text-xl">TopoAtlántico</span>
          </a>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-sky-600">Servicios</a>
            <a href="#projects" className="hover:text-sky-600">Proyectos</a>
            <a href="#about" className="hover:text-sky-600">Nosotros</a>
            <a href="#contact" className="bg-sky-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-sky-700">Contacto</a>
          </nav>
          <button className="md:hidden p-2 rounded-md border" onClick={() => {
            const el = document.getElementById('mobile-menu');
            if (el) el.classList.toggle('hidden');
          }}>☰</button>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            <a href="#services">Servicios</a>
            <a href="#projects">Proyectos</a>
            <a href="#about">Nosotros</a>
            <a href="#contact" className="font-semibold">Contacto</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">TopoAtlántico</h1>
            <p className="mt-4 text-lg text-slate-700">Servicios de topografía y cartografía en las Islas Canarias. Precisión, tecnología y conocimiento del terreno insular: estación total, drones, GNSS y modelado 3D.</p>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="inline-block bg-sky-600 text-white px-5 py-2 rounded-md shadow hover:bg-sky-700">Solicita presupuesto</a>
              <a href="#services" className="inline-block border border-slate-200 px-5 py-2 rounded-md">Ver servicios</a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <li>• Levantamientos topográficos 2D/3D</li>
              <li>• Fotogrametría y mapeo con drones</li>
              <li>• Georreferenciación y control geométrico</li>
              <li>• Modelados digitales del terreno (MDT/DSM)</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-gradient-to-br from-sky-50 to-emerald-50 flex items-center justify-center shadow-lg">
              {/* Logo grande */}
              <img src="/logo.png" alt="TopoAtlántico logo" className="w-48 h-48 object-contain" />
            </div>
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <section id="services" className="py-12 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Nuestros servicios</h2>
          <p className="text-slate-600 mt-2">Soluciones adaptadas a obra civil, urbanismo y proyectos medioambientales.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard title="Levantamientos Topográficos" desc="Estación total y GNSS. Entrega de planos y archivos compatibles con AutoCAD/GIS." />
            <ServiceCard title="Drone & Fotogrametría" desc="Ortomosaicos, nubes de puntos y modelos 3D para análisis y seguimiento de obra." />
            <ServiceCard title="Control Geométrico" desc="Marcaje, replanteos y control de deformaciones. Informes técnicos y registros periódicos." />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Proyectos recientes</h2>
          <p className="text-slate-600 mt-2">Ejemplos de trabajos realizados en diferentes islas.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard title="Replanteo carretera" location="Tenerife" />
            <ProjectCard title="Ortomosaico costa" location="Gran Canaria" />
            <ProjectCard title="Control de talud" location="La Palma" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Sobre nosotros</h2>
            <p className="mt-3 text-slate-700">TopoAtlántico es un estudio de topografía con base en Canarias. Combinamos experiencia local con tecnología (estación total, GNSS y drones) para entregar resultados precisos y documentación lista para obra.</p>

            <ul className="mt-4 text-slate-600">
              <li>• Técnicos titulados en topografía y geomática</li>
              <li>• Equipos propios: estación total, GNSS, drones multirrotor</li>
              <li>• Informes detallados y modelos 3D</li>
            </ul>
          </div>
          <div>
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">Imagen / Galería (puedes sustituir por fotos reales)</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="text-slate-600 mt-2">Pide presupuesto o consúlta disponibilidad. Responderemos en 24–48 horas.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="space-y-4 bg-white p-6 rounded-lg shadow" onSubmit={(e) => {
              e.preventDefault();
              const f = e.target;
              const subject = encodeURIComponent('Solicitud desde web - TopoAtlántico');
              const body = encodeURIComponent(`Nombre: ${f.name.value}%0AEmail: ${f.email.value}%0AMensaje: ${f.message.value}`);
              window.location.href = `mailto:info@topoatlantico.com?subject=${subject}&body=${body}`;
            }}>
              <label className="block">
                <span className="text-sm">Nombre</span>
                <input name="name" required className="mt-1 block w-full rounded-md border px-3 py-2" />
              </label>
              <label className="block">
                <span className="text-sm">Email</span>
                <input name="email" type="email" required className="mt-1 block w-full rounded-md border px-3 py-2" />
              </label>
              <label className="block">
                <span className="text-sm">Mensaje</span>
                <textarea name="message" rows={4} required className="mt-1 block w-full rounded-md border px-3 py-2" />
              </label>

              <button className="bg-sky-600 text-white px-4 py-2 rounded-md">Enviar</button>
            </form>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">Datos</h3>
              <p className="mt-2 text-sm text-slate-600">TopoAtlántico · Canarias</p>
              <p className="mt-2 text-sm">📞 +34 600 000 000</p>
              <p className="text-sm">✉️ info@topoatlantico.com</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium">Síguenos</h4>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="text-sm">LinkedIn</a>
                  <a href="#" className="text-sm">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} TopoAtlántico</div>
          <div className="text-sm text-slate-300">Made with care · Servicios de topografía en Canarias</div>
        </div>
      </footer>
    </div>
  );
}


/* ---------- Small helper components ---------- */
function ServiceCard({ title, desc }){
  return (
    <article className="p-5 border rounded-lg bg-white shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </article>
  );
}

function ProjectCard({ title, location }){
  return (
    <article className="rounded-lg overflow-hidden bg-white shadow">
      <div className="h-40 bg-slate-100 flex items-center justify-center">Foto</div>
      <div className="p-4">
        <div className="text-sm text-slate-500">{location}</div>
        <h4 className="font-semibold mt-1">{title}</h4>
      </div>
    </article>
  );
}

/*
SUGERENCIAS DE MEJORA / SIGUIENTES PASOS
- Añadir Google Analytics / Matomo si quieres medir tráfico.
- Preparar versiones del logo: color, invertido y favicon 32x32/16x16.
- Generar páginas internas (presupuestos, política de privacidad, avisos legales).
- Si quieres que lo despliegue en Netlify/Vercel, puedo crear los archivos de configuración y un README con pasos.
- Si prefieres que el diseño sea en HTML/CSS puro o en otra tecnología (WordPress, Webflow), lo adapto.
*/
