import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";

// yaml
import yaml from "@rollup/plugin-yaml"

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), vue()],

  vite: {
    plugins: [yaml()]
  }
});