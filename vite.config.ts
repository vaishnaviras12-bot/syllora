import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },

  plugins: [
    tanstackRouter(),
    react(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
  ],
});