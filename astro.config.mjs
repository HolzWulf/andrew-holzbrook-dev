// @ts-check
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: 'https://holzbrook.dev',
  output: 'static',
  outDir: 'dist',
  cacheDir: 'cache',
  vite: {
    clearScreen: false,
    plugins: [tailwindcss()],
  },
});
