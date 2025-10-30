import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const images = [
  { src: "/images/proyecto1.jpg", key: "carousel.1" },
  { src: "/images/proyecto2.jpg", key: "carousel.2" },
  { src: "/images/proyecto3.jpg", key: "carousel.3" },
  { src: "/images/proyecto4.jpg", key: "carousel.4" },
  { src: "/images/proyecto5.jpg", key: "carousel.5" },
  { src: "/images/proyecto8.jpg", key: "carousel.6" },
  { src: "/images/proyecto9.jpg", key: "carousel.7" },
  { src: "/images/proyecto10.jpg", key: "carousel.8" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // 🕒 Autoplay cada 5 segundos
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Imagen principal */}
      <img
  src={images[current].src}
  alt={images[current].key}
  className="w-full h-96 object-cover transition-all duration-700"
/>

        {/* Título de la imagen */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-8 text-center text-lg font-medium">
          {t(images[current].key)}
        </div>

      {/* Botón anterior */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-topo-navy font-bold px-3 py-2 rounded-full shadow-md"
      >
        ‹
      </button>

      {/* Botón siguiente */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-topo-navy font-bold px-3 py-2 rounded-full shadow-md"
      >
        ›
      </button>

      {/* Indicadores inferiores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-topo-turquoise" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
