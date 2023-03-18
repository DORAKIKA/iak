<script setup lang="ts">
// @ts-ignore
import marks from "@content/mark/_index.yml"
import { formatDateTime } from "src/tools/tools";
// @ts-ignore
const posts = iak.data.posts || [];
const tags_map = new Map();
posts.forEach((post: any) => {
    post.tags?.forEach((tag: string | undefined) => {
        if (tags_map.has(tag)) {
            tags_map.set(tag, tags_map.get(tag) + 1);
        } else {
            tags_map.set(tag, 1);
        }
    })
});
const tags = Array.from(tags_map).sort((a: any, b: any) => {
    return b[1] - a[1];
}).map((item: any) => {
    return item[0];
}).slice(0, 30);

// @ts-ignore
// marks
const arr = [] as any[];
marks.forEach((group: any) => {
    group.values.forEach((mark: any) => {
        arr.push({
            ...mark,
            group: group.name,
            prefix: group.prefix,
            icon: group.icon
        })
    })
});
const filterMarks = arr.sort((a: any, b: any) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
});
const mark = filterMarks[0];
</script>

<template>
    <aside class="panel-site">

        <section class="panel-card panel-tags">
            <h3 class="panel-title">TAGS</h3>
            <div class="tags">
                <a :href="`/tag/${tag}`" v-for="tag in tags" :key="tag" class="tag">{{ tag }}</a>
            </div>
        </section>

        <section class="panel-card panel-mark">
            <h3 class="panel-title">近期</h3>
            <div class="mark-item">
                <div class="poster">
                    <img class="poster__main" :src="mark.poster" loading="lazy"/>
                    <span class="poster__icon" v-html="mark.icon"></span>
                </div>
                
                <div class="mark-meta">
                    <div class="mark-item__title">{{ mark.title }}</div>
                    <div class="mark-item__time">{{ formatDateTime(new Date(mark.time)) }}</div>
                    <div class="mark-item__star">{{ mark.star }}</div>
                </div>
            </div>
        </section>
    
    </aside>
</template>

<style scoped>
.panel-site{
    display: grid;
    gap: 0.5em;
}
.panel-card{
    padding: var(--base-radius);
    border-radius: var(--base-radius);
    background-color: var(--card-inner-bg);
}
.panel-title{
    font-weight: bold;
    color: var(--card-sub-text-color);
    font-size: 12px;
    margin: 0 0 0.5em;
    opacity: 0.6;
}
.tags{
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    gap: 0.5em;
}
.tags .tag{
    padding: 0.25em 0.75em;
    border-radius: 1em;
    height: fit-content;
    background-color: var(--card-bg);
    color: var(--card-sub-text-color);
    min-width: 3em;
    text-align: center;
    transition: 0.3s;
}
.tags .tag:hover{
    background-color: var(--card-active);
    color: var(--card-active-text);
}
</style>

<style scoped>
.mark-item{
    display: flex;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to right, rgba(var(--main-color-meta), 0.15), rgba(var(--main-color-meta), 0.2) 80%);
    user-select: none;
}
.mark-item .mark-meta{
    flex: 1;
    text-align: right;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 3px solid var(--card-active);
}
.mark-item .poster{
    width: auto;
    height: auto;
    max-width: 50%;
    max-height: 120px;
    flex-shrink: 1;
    position: relative;
}
.mark-item .poster__main{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.mark-item .poster__icon{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(var(--main-color-meta), 0.9);
    font-size: 30px;
    opacity: 0;
    transition: 0.3s;
    color: var(--color-deep-op);
}
.mark-item:hover .poster__icon{
    opacity: 1;
}
.mark-item .mark-item__title{
    font-weight: bold;
    color: var(--card-text-color);
}
.mark-item .mark-item__time{
    color: var(--card-sub-text-color);
    font-size: 12px;
    opacity: 0.6;
}
</style>