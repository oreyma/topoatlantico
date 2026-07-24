import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ServiceTemplate({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}