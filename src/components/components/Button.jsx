export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-topo-navy text-white hover:bg-topo-ocean",
    accent: "bg-topo-sun text-topo-dark hover:bg-yellow-400",
    secondary: "bg-topo-gray text-topo-navy hover:bg-topo-ocean hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
