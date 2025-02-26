// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: './build',
  integrations: [solidJs({ devtools: true })],
  vite: {
    clearScreen: false,
    plugins: [tailwindcss()],
  },
});
