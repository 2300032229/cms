import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // IMPORTANT: Production base must be "/"
  base: "/",

  server: {
    host: true,
    port: 8082,  // your actual local port
    proxy: {
      "/api": {
        target: "http://localhost:9091", // backend running in Docker on 9091
        changeOrigin: true,
      },
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
