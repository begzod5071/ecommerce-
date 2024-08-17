import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // If you have global variables or mixins you want to include, you can use:
        // additionalData: `@import "@/styles/variables.scss";`
      },
    },
  },

  build: {
    outDir: "./dist",
    chunkSizeWarningLimit: 1600,
  },
});
