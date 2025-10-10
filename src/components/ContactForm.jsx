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
  className="bg-topo-navy text-topo-navy px-6 py-2 rounded-lg shadow hover:bg-topo-ocean hover:text-topo-navy transition-colors"
>
  {state.submitting ? "Enviando..." : "Enviar"}
</button>

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
