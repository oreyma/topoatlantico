import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Breadcrumb({ current }) {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-4 text-sm text-gray-500">
      <Link
        to="/"
        className="hover:text-topo-ocean transition-colors"
      >
        {i18n.language === "es" ? "Inicio" : "Home"}
      </Link>

      <span className="mx-2">/</span>

      <Link
        to="/blog"
        className="hover:text-topo-ocean transition-colors"
      >
        Blog
      </Link>

      <span className="mx-2">/</span>

      <span className="font-semibold text-topo-navy">
        {current}
      </span>
    </div>
  );
}