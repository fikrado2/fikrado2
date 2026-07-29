import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const root = import.meta.dirname;

export default defineConfig({
  base: "/fikrado2/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(root, "client", "src"),
      "@shared": path.resolve(root, "shared"),
      "@assets": path.resolve(root, "attached_assets"),
    },
  },
  root: path.resolve(root, "client"),
  publicDir: path.resolve(root, "public"),
  build: {
    outDir: path.resolve(root, "dist"),
    emptyOutDir: true,
  },
});
