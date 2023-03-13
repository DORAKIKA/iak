<script setup lang="ts">
// @ts-ignore
const posts = iak.data.posts;

const tags: Array<string> = Array.from(new Set(
    posts
        .map((post:any) => post.data.tags)
        .flat()
        .filter((tag:string|undefined) => tag !== undefined)
    )
)
</script>

<template>
    <section class="panel-tags">
        <h3 class="panel-title">Tags</h3>
        <div class="tags">
            <a :href="`/tag/${tag}`" v-for="tag in tags" :key="tag" class="tag">{{ tag }}</a>
        </div>
    </section>
</template>

<style scoped>
.panel-title{
    text-align: center;
    font-weight: bold;
    color: var(--card-text-color);
    margin: 0 0 0.5em;
}
.tags{
    background-color: var(--card-inner);
    padding: var(--base-radius);
    border-radius: var(--base-radius);
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