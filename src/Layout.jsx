export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/images/bg-pattern.jpg')] bg-cover bg-center bg-fixed"
        style={{ opacity: 0.25 }}
      ></div>

      {/* Optional overlay to improve readability */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* All your page content goes here */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
