/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "topo-navy": "#002B5B",   // Azul marino (profesional)
        "topo-ocean": "#0077B6",  // Azul océano (cercano, tecnológico)
        "topo-gray": "#F5F5F5",   // Gris claro (fondos suaves)
        "topo-sun": "#FDC500",    // Amarillo sol (acentos, energía)
        "topo-dark": "#333333",   // Gris oscuro (texto)
        "topo-turquoise": "#2EC4B6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
