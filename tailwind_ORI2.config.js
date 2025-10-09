/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "topo-navy": "#1A2E40",       // Azul oscuro principal
        "topo-gray": "#F4F4F4",       // Gris claro de fondo
        "topo-ocean": "#1B7F8C",      // Azul marino claro
        "topo-turquoise": "#2DD4BF",  // 💎 Turquesa brillante
        "topo-dark": "#333333",
        "topo-accent": "#009688",     // Verde-azulado (respaldo)
      },
    },
  },
  plugins: [],
}
