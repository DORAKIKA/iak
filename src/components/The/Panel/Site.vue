<script setup lang="ts">
// @ts-ignore
import marks from "@content/mark/_index.yml"
import MarkItem from "@components/Iak/MarkItem.vue";
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
            prefix: group.prefix
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
                <img class="poster" :src="mark.poster" loading="lazy"/>
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
    background-color: var(--card-inner);
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
    color: var(--card-bg);
}
</style>

<style scoped>
.mark-item{
    display: flex;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to right, rgba(var(--main-color-meta), 0.2), rgba(var(--main-color-meta), 0.6));
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
    object-fit: cover;
    flex-shrink: 1;
}
.mark-item .mark-item__title{
    font-weight: bold;
    color: var(--white-deep-op);
}
.mark-item .mark-item__time{
    color: var(--white-deep-op);
    font-size: 12px;
    opacity: 0.6;
}
</style>