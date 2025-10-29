import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();


  // Rutas dinámicas según idioma
  const privacyPath =
    i18n.language === "en" ? "/privacy-policy" : "/politica-privacidad";
  const legalPath =
    i18n.language === "en" ? "/legal-notice" : "/aviso-legal";

  return (
    <footer className="font-semibold mb-2 text-topo-navy border-t border-topo-gray bg-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-center md:text-left">
        <p>
          © {new Date().getFullYear()} TopoAtlántico. {t("footer.rights")}
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to={privacyPath} className="hover:underline">
            {t("footer.privacy")}
          </Link>
          <Link to={legalPath} className="hover:underline">
            {t("footer.legal")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
