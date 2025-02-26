// @ts-check
import { defineConfig } from "astro/config";

import netlify from '@astrojs/netlify';
import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://holzbrook.dev',
  output: 'static',
  outDir: 'dist',
  cacheDir: 'cache',
  integrations: [
    solidJs(),
  ],
  vite: {
    clearScreen: false,
    plugins: [tailwindcss()],
  },
});
