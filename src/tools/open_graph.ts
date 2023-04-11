import { default_assets } from './../config';
import type { AstroGlobal } from "astro"
import type { CollectionEntry } from "astro:content"
import { site } from "src/config"

// 文章页面的OpenGraph标签数据
export const generatePostOpenGraph = (Astro:AstroGlobal, post:CollectionEntry<"posts">) => {
    return [
        { property: "og:type", content: "website"},
        { property: "og:title", content: post.data.title },
        { property: "og:url", content: Astro.url },
        { property: "og:description", content: post.data.description },
        { property: "og:author", content: site.author },
        { property: "og:site_name", content: site.name },
        { property: "og:image", content: new URL(post.data.cover ?? default_assets.cover, Astro.url) },
        { property: "og:locale", content: "zh_CN" },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.data.date?.toISOString() },
        { property: "article:author", content: post.data.author ?? site.author },
        { property: "article:tag", content: post.data.tags?.join(',') },
        { property: "article:section", content: post.data.category },
    ]
}

// 普通页面的OpenGraph标签数据
export const generateOpenGraph = (Astro:AstroGlobal, page_meta: any) => {
    return [
        { property: "og:type", content: "website" },
        { property: "og:title", content: page_meta.title || site.name },
        { property: "og:url", content: page_meta.url || Astro.url },
        { property: "og:description", content: page_meta.description || site.description },
        { property: "og:author", content: page_meta.author || site.author },
        { property: "og:site_name", content: page_meta.site_name || site.name },
        { property: "og:image", content: new URL(page_meta.cover || default_assets.cover, Astro.url) },
        { property: "og:locale", content: "zh_CN" },
    ]
}