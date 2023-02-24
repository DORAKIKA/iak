import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import { site } from "./src/config";

// yaml
import yaml from "@rollup/plugin-yaml";

// https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
import robotsTxt from "astro-robots-txt";

// 用于为资源密集型脚本提供web worker支持（可减轻js引擎压力，这里用来将第三放脚本添加进去执行）
// https://docs.astro.build/zh-cn/guides/integrations-guide/partytown/
import partytown from "@astrojs/partytown";

// serviceWorder 支持
// https://github.com/tatethurston/astrojs-service-worker#readme
import serviceWorker from "astrojs-service-worker"

import loadVersion from "vite-plugin-package-version"



const baseConfig = {
  site: site.origin,
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  },
  integrations: [mdx(), sitemap(), vue(), robotsTxt({
    // host 用于配置多镜像网站的首选域 - 设为true则使用上方的site配置项
    host: true
  }),
  partytown({
    config: {
      forward: ['twikoo.init']
    }
  }),
  // serviceWorker(), // 本地调试url会错误
],
  vite: {
    plugins: [yaml(), loadVersion()],
  }
}
if(process.env.NODE_ENV === "production"){
  baseConfig.integrations.push(serviceWorker())
}

// https://astro.build/config
export default defineConfig(baseConfig);