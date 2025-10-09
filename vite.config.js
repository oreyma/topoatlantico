import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración optimizada para Tailwind v4 + Vercel
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    outDir: "dist", // Carpeta estándar de salida
    sourcemap: false, // Opcional, puedes poner true si quieres depurar
  },
  server: {
    port: 5173, // Puerto por defecto de Vite
    open: true, // Abre el navegador automáticamente
  },
});
