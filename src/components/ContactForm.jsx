import React, { useState } from "react"
import Button from "./Button"

export default function ContactForm() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Enviando...")

    // Aquí podrías integrar tu backend o Formspree en el futuro
    setTimeout(() => {
      setStatus("Mensaje enviado correctamente ✅")
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-topo-gray">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        {/* FORMULARIO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">Contacto</h2>
          <p className="mb-6 text-topo-dark">
            Pide presupuesto o consulta disponibilidad. Responderemos en 24–48 horas.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full border border-topo-navy rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-topo-navy rounded-lg p-2"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              required
              className="w-full border border-topo-navy rounded-lg p-2 h-32"
            ></textarea>
            <Button type="submit" variant="accent">
              Enviar
            </Button>
          </form>

          {status && (
            <p className="mt-4 text-green-600 font-medium">{status}</p>
          )}
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
  )
}
