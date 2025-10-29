import { useState, useEffect } from "react";

const images = [
    { src: "/images/proyecto1.jpg", title: "Levantamiento topográfico, La Gomera" },
    { src: "/images/proyecto2.jpg", title: "Replanteo de Obra, Tenerife" },
    { src: "/images/proyecto3.jpg", title: "Guiado Tunel, Londres" },
    { src: "/images/proyecto4.jpg", title: "Edificacion, Gran Canaria" },
    { src: "/images/proyecto5.jpg", title: "Movimientos de tierra, Plasencia" },
    { src: "/images/proyecto6.jpg", title: "Redes geodesicas, Lima" },
    { src: "/images/proyecto7.jpg", title: "Control Geométrico, Londres" },
    { src: "/images/proyecto8.jpg", title: "Levantamiento  ferroviario, Caceres" },
    { src: "/images/proyecto9.jpg", title: "Monitoreo y auscultacion, Londres" },
    { src: "/images/proyecto10.jpg", title: "Obra Civil y Edificacion, Reino Unido" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      {/* Imagen principal */}
      <div className="relative h-[600px] flex items-center justify-center bg-gray-100">
        <img
          src={images[current].src}
          alt={images[current].title}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Título de la imagen */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-3 text-center text-lg font-medium">
          {images[current].title}
        </div>
      </div>

      {/* Botón anterior */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/70 hover:bg-white text-topo-navy font-bold px-4 py-2 rounded-full shadow-md"
      >
        ‹
      </button>

      {/* Botón siguiente */}
      <button
        onClick={next}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/70 hover:bg-white text-topo-navy font-bold px-4 py-2 rounded-full shadow-md"
      >
        ›
      </button>

      {/* Indicadores inferiores */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
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