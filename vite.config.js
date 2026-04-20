import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("react-icons")) {
            return "icons";
          }

          if (id.includes("react-calendly")) {
            return "calendly";
          }

          if (id.includes("emailjs-com")) {
            return "emailjs";
          }

          if (id.includes("lucide-react")) {
            return "lucide";
          }

          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
