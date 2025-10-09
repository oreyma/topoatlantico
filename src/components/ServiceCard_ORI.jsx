import { Link } from "react-router-dom"

export default function ServiceCard({ title, description, image, link }) {
  return (
    <Link
      to={link}
      className="group relative block rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1"
    >
      <div
        className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-topo-navy">{title}</h3>
        <p className="text-topo-dark">{description}</p>
      </div>
    </Link>
  )
}
