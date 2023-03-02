<script setup lang="ts">
// import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { ref, computed } from 'vue';
import { CollectionEntry, getCollection } from 'astro:content';

const posts = ref<CollectionEntry<"posts">[]>()
getCollection('posts', ({data}) => {
    return data.star;
}).then((ps) => {
    posts.value = ps
    posts.value.sort((a,b)=>a.data.star&&b.data.star&&a.data.star>b.data.star?1:-1)
})

const limit = posts.value?.length || 1;

const current = ref(0)
const prev = computed(() => (current.value - 1 + limit) % limit);
const next = computed(() => (current.value + 1) % limit);
const handlePrev = () => current.value = prev.value;
const handleNext = () => current.value = next.value;
const sliderClick = (num:number) => {
    current.value = num
}
</script>

<template>
    <div class="post-slider">
        <div
            v-for="article,index in posts"
            :key="article.slug"
            class="article"
            :class="{prev: index===prev, next: index === next, current: index === current}"
            :style="`transform: translateX(${(index - current)*100}%)`"
        >
            <img :src="article.data.cover" alt="" class="cover">
            <div class="meta">
                <div class="title">{{ article.data.title }}
            <span class="category">{{article.data.category}}</span></div>
                <div class="tags">
                    <span class="tag" v-for="tag in article.data.tags">#{{tag}}</span>
                </div>
                <p class="desc">{{ article.data.description }}</p>
                <a :href="`/post/${article.slug}`" class="button" :title="article.data.title">GO<span style="display:inline-block;opacity:0;font-size:0;">{{ article.data.title }}</span></a>
            </div>
        </div>
        <div class="slider-container">
            <div class="slider-item" v-for="slider,index in posts" :key="index" @click="sliderClick(index)" :class="{active: index === current}"></div>
        </div>
    </div>
</template>

<style scoped>
.post-slider{
    width: 100%;
    height: 22vw;
    min-height: 300px;
    margin: 3rem 0 1rem;
    /* background-color: var(--main-color); */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.post-slider .slider-container{
    position: absolute;
    bottom: 1rem;
    padding: 1rem;
    background-color: var(--main-color);
    border-radius: var(--base-radius);
    display: flex;
    gap: 1rem;
    z-index: 2;
    box-shadow: 0 0 0 2px white;
}
.post-slider .slider-container .slider-item{
    width: 1rem;
    height: 1rem;
    border: 0.4rem solid white;
    border-radius: 50%;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.3s;
}
.post-slider .slider-container .slider-item.active{
    border-width: 0.3rem;
    border-radius: 0 50% 50% 50%;
}
.post-slider .article{
    padding: 0 0 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.post-slider .article .cover{
    width: 50%;
    height: 100%;
    border: 4px solid white;
    border-radius: var(--base-radius);
    object-fit: cover;
    /* position: absolute; */
    background-color: var(--main-color);
}
.post-slider .article .meta{
    width: 50%;
    height: 100%;
    padding: 0 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.post-slider .article .meta .title{
    font-size: 2rem;
    font-weight: bold;
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.post-slider .article .meta .desc{
    margin: 0;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.post-slider .article .meta .tags{
    display: flex;
    gap: 0.4rem;
}
@media (max-width: 768px) {
    .post-slider .article .meta .tags{
        display: none;
    }
}
.post-slider .article .category{
    box-shadow: 0 0 0 2px white;
    background: var(--white-op);
    padding: 4px 8px;
    border-radius: var(--base-radius);
    font-size: 0.5em;
}
.post-slider .article .meta .tags .tag{
    display: inline-block;
    width: fit-content;
    padding: 2px 4px;
}
.post-slider .article .meta .button{
    align-self: flex-end;
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    border: 4px solid white;
    background-color: blueviolet;
    transition: 0.1s;
    cursor: pointer;
    text-decoration: none;
    color: white;
}
.post-slider .article .meta .button:hover{
    background-color: rgb(167, 73, 255);
}
</style>