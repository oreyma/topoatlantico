export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-lg shadow transition font-medium";
  const styles = {
    primary: "bg-topo-navy text-white hover:bg-topo-ocean",
    secondary: "border border-topo-navy text-topo-navy hover:bg-topo-ocean hover:text-white",
    accent: "bg-topo-sun text-white hover:bg-topo-ocean",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
