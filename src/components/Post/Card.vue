<script setup lang="ts">
defineProps(['article'])
</script>
<template>
    <div class="article">
        <div class="cover">
            <img :src="article.data.cover" alt="" class="cover-img"/>
            <span class="category">{{article.data.category}}</span>
        </div>
        
        <div class="meta">
            <a :href="`/posts/${article.slug}`" class="title">{{ article.data.title }}</a>
            <div class="desc">{{ article.data.description }}</div>
        </div>
    </div>
</template>

<style scoped>
.article{
    width: 100%;
    height: 100%;
}
.article .cover{
    width: 100%;
    aspect-ratio: 2/1;
    border: 4px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--base-radius);
    position: relative;
    overflow: hidden;
    transition: 0.3s;
}
.article:hover .cover{
    border: 4px solid rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 3px rgba(255, 255, 255, 0.9);
}
.article .cover-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.article .category{
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: calc(0.75 * var(--base-radius));
    background-color: var(--deep-bg);
    color: #232323;
    font-weight: bold;
    padding: 4px calc(0.75 * var(--base-radius));
    font-size: 0.7rem;
}
.article .meta{
    color: white;
}
.article .title{
    display: inline-block;
    max-width: 100%;
    font-weight: bold;
    line-height: 1.5;
    margin-top: 0.5rem;
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.article .title:hover{
    box-shadow: 0 2px white;
}
.article .desc{
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>