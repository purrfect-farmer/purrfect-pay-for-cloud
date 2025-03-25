import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        iframe: resolve(__dirname, "iframe.html"),
        redirect: resolve(__dirname, "redirect.html"),
      },
    },
  },
  plugins: [tailwindcss()],
});
