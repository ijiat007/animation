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
        includePaths: [path.resolve(__dirname, 'src/assets')],
        additionalData: `
          @use "variables" as *;
          @use "mixin" as *;
        `,
      },
    },
  },
})
