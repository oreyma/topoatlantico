import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkgqqrql"); // Tu ID de Formspree
  const { t } = useTranslation();

  if (state.succeeded) {
    return (
      <section id="contact" className="py-16 bg-topo-gray">
        <div className="max-w-6xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">{t("contact.success_title")}</h2>
          <p className="text-topo-dark">{t("contact.success_message")}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-topo-gray">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        {/* FORMULARIO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-topo-navy">{t("contact.title")}</h2>
          <p className="mb-6 text-topo-dark">{t("contact.description")}</p>

          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder={t("contact.name")}
              required
              className="w-full border border-topo-navy rounded-lg p-2"
            />
            <ValidationError prefix={t("contact.name")} field="name" errors={state.errors} />

            <input
              type="email"
              name="email"
              placeholder={t("contact.email")}
              required
              className="w-full border border-topo-navy rounded-lg p-2"
            />
            <ValidationError prefix={t("contact.email")} field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder={t("contact.message")}
              required
              className="w-full border border-topo-navy rounded-lg p-2 h-32"
            ></textarea>
            <ValidationError prefix={t("contact.message")} field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-topo-navy text-topo-dark px-6 py-2 rounded-lg shadow  hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              {state.submitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>

        {/* DATOS DE CONTACTO */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2 text-topo-navy">{t("contact.data_title")}</h3>
          <p>{t("contact.company")}</p>
          <p>📞 +34 642 566 908</p>
          <p>✉️ info@topoatlantico.com</p>

            {/* BOTÓN DE WHATSAPP */}
              <a
                href="https://wa.me/34642566908"
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
                <span className="text-sm font-medium">{t("contact.whatsapp")}</span>
              </a>

          <h4 className="mt-4 font-semibold text-topo-navy">{t("contact.follow")}</h4>
          <p>LinkedIn · Instagram</p>
        </div>
      </div>
    </section>
  );
}
