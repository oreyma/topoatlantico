export default function ProjectCard({ title, location }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-topo-gray hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-topo-navy mb-2">{title}</h3>
      <p className="text-topo-dark">📍 {location}</p>
    </div>
  )
}
