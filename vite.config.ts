import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import compression from "vite-plugin-compression";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/eduwave_to_csv/",
  plugins: [
    compression(),
    react(),
    dynamicImport(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
