import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"
import flagES from "../../assets/flag-es.png"
import flagEN from "../../assets/flag-en.png"
import { Helmet } from "react-helmet-async"

export default function PoliticaPrivacidad() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const isSpanish = i18n.language === "es"

  const handleHomeClick = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const seoTitle = isSpanish
    ? "Política de Privacidad | TOPOATLANTICO"
    : "Privacy Policy | TOPOATLANTICO"

  const seoDescription = isSpanish
    ? "Política de privacidad y protección de datos personales de TOPOATLANTICO."
    : "Privacy policy and personal data protection information for TOPOATLANTICO."

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* CABECERA */}
      <header className="w-full py-4 flex justify-center items-center border-b border-topo-gray bg-white shadow-sm">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleHomeClick}
        >
          <img
            src={logo}
            alt="TOPOATLANTICO"
            className="w-24 h-24 object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-topo-navy">
              TOPOATLANTICO
            </span>

            <span className="text-sm italic font-medium text-[#1B7F8C] tracking-wide">
              Servicios Topográficos
            </span>
          </div>
        </div>

        {/* SELECTOR DE IDIOMA */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => changeLanguage("es")}
            className={`p-1 rounded-full border-2 transition-all ${
              i18n.language === "es"
                ? "border-topo-navy"
                : "border-transparent"
            }`}
            aria-label="Español"
          >
            <img
              src={flagES}
              alt="Español"
              className="w-6 h-6 rounded-full"
            />
          </button>

          <button
            onClick={() => changeLanguage("en")}
            className={`p-1 rounded-full border-2 transition-all ${
              i18n.language === "en"
                ? "border-topo-navy"
                : "border-transparent"
            }`}
            aria-label="English"
          >
            <img
              src={flagEN}
              alt="English"
              className="w-6 h-6 rounded-full"
            />
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="bg-white px-6 py-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold text-topo-navy mb-10 text-center">
            {t("privacy.title")}
          </h1>

          {/* 1. RESPONSABLE */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section1")}
            </h2>

            <div className="text-topo-dark leading-relaxed space-y-2">
              <p><strong>{t("privacy.controller")}:</strong> Oscar R. M.</p>
              <p><strong>{t("privacy.tradeName")}:</strong> TOPOATLANTICO</p>
              <p><strong>{t("privacy.email")}:</strong> info@topoatlantico.com</p>
              <p><strong>{t("privacy.website")}:</strong> www.topoatlantico.com</p>
            </div>
          </section>

          {/* 2. FINALIDAD */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section2")}
            </h2>

            <p className="text-topo-dark leading-relaxed mb-4">
              {t("privacy.section2Text")}
            </p>

            <ul className="list-disc pl-6 space-y-2 text-topo-dark">
              <li>{t("privacy.purpose1")}</li>
              <li>{t("privacy.purpose2")}</li>
              <li>{t("privacy.purpose3")}</li>
              <li>{t("privacy.purpose4")}</li>
              <li>{t("privacy.purpose5")}</li>
              <li>{t("privacy.purpose6")}</li>
              <li>{t("privacy.purpose7")}</li>
            </ul>
          </section>

          {/* 3. BASE JURÍDICA */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section3")}
            </h2>

            <div className="space-y-4 text-topo-dark leading-relaxed">
              <p>{t("privacy.section3Text1")}</p>
              <p>{t("privacy.section3Text2")}</p>
              <p>{t("privacy.section3Text3")}</p>
            </div>
          </section>

          {/* 4. DATOS TRATADOS */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section4")}
            </h2>

            <p className="text-topo-dark leading-relaxed mb-4">
              {t("privacy.section4Text")}
            </p>

            <ul className="list-disc pl-6 space-y-2 text-topo-dark">
              <li>{t("privacy.data1")}</li>
              <li>{t("privacy.data2")}</li>
              <li>{t("privacy.data3")}</li>
              <li>{t("privacy.data4")}</li>
              <li>{t("privacy.data5")}</li>
              <li>{t("privacy.data6")}</li>
              <li>{t("privacy.data7")}</li>
            </ul>

            <p className="text-topo-dark leading-relaxed mt-4">
              {t("privacy.section4Closing")}
            </p>
          </section>

          {/* 5. CONSERVACIÓN */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section5")}
            </h2>

            <p className="text-topo-dark leading-relaxed">
              {t("privacy.section5Text")}
            </p>
          </section>

          {/* 6. DESTINATARIOS */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section6")}
            </h2>

            <div className="space-y-4 text-topo-dark leading-relaxed">
              <p>{t("privacy.section6Text1")}</p>
              <p>{t("privacy.section6Text2")}</p>
              <p>{t("privacy.section6Text3")}</p>
            </div>
          </section>

          {/* 7. DERECHOS */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section7")}
            </h2>

            <div className="space-y-4 text-topo-dark leading-relaxed">
              <p>{t("privacy.section7Text1")}</p>

              <p>
                {t("privacy.section7Text2")}
                <br />
                <strong>{t("privacy.email")}:</strong> info@topoatlantico.com
              </p>

              <p>{t("privacy.section7Text3")}</p>

              <p>
                {t("privacy.section7Text4")}{" "}
                <a
                  href="https://www.aepd.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B7F8C] underline hover:no-underline"
                >
                  Agencia Española de Protección de Datos (AEPD)
                </a>.
              </p>
            </div>
          </section>

          {/* 8. SEGURIDAD */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section8")}
            </h2>

            <p className="text-topo-dark leading-relaxed">
              {t("privacy.section8Text")}
            </p>
          </section>

          {/* 9. DESTINATARIOS */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section9")}
            </h2>

            <div className="space-y-4 text-topo-dark leading-relaxed">
              <p>{t("privacy.section9Text1")}</p>
              <p>{t("privacy.section9Text2")}</p>
            </div>
          </section>

          {/* 9. ACTUALIZACIÓN */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-topo-navy mb-4">
              {t("privacy.section10")}
            </h2>

            <p className="text-topo-dark leading-relaxed mb-4">
              {t("privacy.section10Text")}
            </p>

            <p className="text-sm text-gray-600">
              <strong>{t("privacy.updatedLabel")}:</strong>{" "}
              {t("privacy.updated")}
            </p>
          </section>

          <div className="text-center mt-12">
            <button
              onClick={handleHomeClick}
              className="px-6 py-3 rounded-lg font-semibold border border-topo-navy text-topo-navy hover:bg-gray-200 transition-colors"
            >
              {t("privacy.back")}
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}