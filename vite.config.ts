import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Plain client-side SPA build (no server runtime). `vite build` emits a static
// folder of HTML/CSS/JS into dist/ that can be served by any static host
// (Hostinger shared hosting, etc.). See public/.htaccess for the SPA fallback.
export default defineConfig({
  plugins: [
    // Resolves the "@/*" alias from tsconfig.json.
    tsconfigPaths(),
    // File-based routing: regenerates src/routeTree.gen.ts from src/routes/*.
    // Must run before the React plugin.
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
  },
});
