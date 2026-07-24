import { Link } from "react-router-dom";

export default function BlogCard({
  title,
  excerpt,
  image,
  link,
  compact = false,
}) {
  return (
    <Link
      to={link}
      onClick={() => window.scrollTo(0, 0)}
      className={`block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1 ${ compact ? "border border-gray-200" : "" }`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full object-cover ${ compact ? "h-40" : "h-32" }`}
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-topo-navy mb-2">
          {title}
        </h3>

        <p className="text-sm text-topo-dark line-clamp-3">
          {excerpt}
        </p>

        <span className="inline-block mt-3 font-semibold text-[#1B7F8C]">
          →
        </span>
      </div>
    </Link>
  );
}