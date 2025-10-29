import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkgqqrql"); // Tu ID de Formspree

  if (state.succeeded) {
    return (
      <section id="contact" className="py-16 bg-topo-gray">
        <div className="max-w-6xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">Gracias</h2>
          <p className="text-topo-dark">
            ✅ Tu mensaje ha sido enviado correctamente. Te responderemos pronto.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-topo-gray">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        {/* FORMULARIO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">Contacto</h2>
          <p className="mb-6 text-topo-dark">
            Pide presupuesto o consulta disponibilidad. Responderemos en 24–48 h.
          </p>

          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full border border-topo-navy rounded-lg p-2"
            />
            <ValidationError prefix="Nombre" field="name" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-topo-navy rounded-lg p-2"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder="Mensaje"
              required
              className="w-full border border-topo-navy rounded-lg p-2 h-32"
            ></textarea>
            <ValidationError prefix="Mensaje" field="message" errors={state.errors} />

<button
  type="submit"
  disabled={state.submitting}
  className="bg-topo-navy text-topo-dark px-6 py-2 rounded-lg shadow hover:bg-topo-ocean hover:text-topo-navy transition-colors"
>
  {state.submitting ? "Enviando..." : "Enviar"}
</button>

{/* BOTÓN DE WHATSAPP */}
<div className="bg-white p-6 rounded-xl shadow">
  <a
    href="https://wa.me/34642566908" // <-- pon aquí tu número, sin + ni espacios
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.7 6.1L0 24l6.12-1.6A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.17-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.38l-.36-.21-3.63.96.97-3.54-.23-.37A9.91 9.91 0 012 12C2 6.48 6.48 2 12 2a9.98 9.98 0 019.98 9.98A9.98 9.98 0 0112 22zm5.33-7.32c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.3-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.51.07-.78.36-.26.3-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.18 2.99.15.19 2.04 3.11 4.95 4.36.69.3 1.22.47 1.64.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
    </svg>
    <span className="text-sm font-medium">Escríbenos por WhatsApp</span>
  </a>
</div>

          </form>
        </div>

        {/* DATOS DE CONTACTO */}
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
  );
}
