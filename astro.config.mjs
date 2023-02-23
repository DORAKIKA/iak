import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import { site } from "./src/config";

// yaml
import yaml from "@rollup/plugin-yaml";

// https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: site.origin,
  integrations: [
    mdx(), 
    sitemap(), 
    vue(), 
    robotsTxt({
      // host 用于配置多镜像网站的首选域 - 设为true则使用上方的site配置项
      host: true,
    })
  ],
  vite: {
    plugins: [yaml()]
  }
});