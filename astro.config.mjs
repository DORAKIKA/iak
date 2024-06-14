import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { site } from "./src/config";

// yaml
import yaml from "@rollup/plugin-yaml";

// https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
import robotsTxt from "astro-robots-txt";

// serviceWorder 支持
// https://github.com/tatethurston/astrojs-service-worker#readme
import serviceWorker from "astrojs-service-worker";

// 预加载链接
import prefetch from "@astrojs/prefetch";
import vercelServerless from "@astrojs/vercel/serverless";
import AuthAstro from "auth-astro";
import iak from "./integrations/iak";
import db from "@astrojs/db";

/** @type { import("astro/config").AstroUserConfig } */
const baseConfig = {
  site: site.origin,
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
  output: "hybrid",
  adapter: vercelServerless(),
  integrations: [
    mdx(),
    sitemap(),
    vue(),
    prefetch(),
    robotsTxt({
      // host 用于配置多镜像网站的首选域 - 设为true则使用上方的site配置项
      host: true,
    }),
    iak(),
    AuthAstro({
      injectEndpoints: false,
    }),
    db(),
  ],
  vite: {
    plugins: [yaml()],
  },
};
if (process.env.NODE_ENV === "production") {
  // 本地调试url会错误
  baseConfig.integrations.push(serviceWorker());
}

// https://astro.build/config
export default defineConfig(baseConfig);
