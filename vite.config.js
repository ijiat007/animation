import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "node:url";
import path from 'path';

export default defineConfig({
  base: '/animation/',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/variables.scss" as *;
          @use "@/assets/mixin.scss" as *;
        `,
      },
    },
  },
})
