import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import { site } from "./src/config"

// yaml
import yaml from "@rollup/plugin-yaml"



// https://astro.build/config
export default defineConfig({
  site: site.origin,
  integrations: [mdx(), sitemap(), vue()],

  vite: {
    plugins: [yaml()]
  }
});