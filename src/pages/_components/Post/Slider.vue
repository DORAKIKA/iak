<script setup lang="ts">
// import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { ref, computed, onMounted, watch } from 'vue';
import type{  CollectionEntry } from 'astro:content';
import { post_slider } from 'src/config';
import { useDebounceFn, useThrottleFn } from '@vueuse/shared';

// const posts = ref<CollectionEntry<"posts">[]>()
const posts = ref<CollectionEntry<"posts">[]>([])

const limit = ref(0)
const current = ref(0)
onMounted(() => {
    // @ts-ignore
    posts.value = window.iak.data.posts.filter(post => post.data.star)
    limit.value = Math.min(post_slider.limit, posts.value.length);
    posts.value.sort((a,b)=>a.data.star&&b.data.star&&a.data.star>b.data.star?1:-1);
    posts.value.length = limit.value;
});


const postsScroll = ref<HTMLElement>();
const prev = computed(() => (current.value - 1 + limit.value) % limit.value);
const next = computed(() => (current.value + 1) % limit.value);
const handlePrev = useThrottleFn(() => current.value = prev.value, 250);
const handleNext = useThrottleFn(() => current.value = next.value, 250);
const sliderClick = (num:number) => {
    current.value = num
}

const handleWheel = (e: WheelEvent) => {
    if(!e.shiftKey) return;
    if (e.deltaY > 0) {
        handleNext();
    } else {
        handlePrev();
    }
    e.preventDefault();
}
const handleScroll =  useDebounceFn(() => {
    if (postsScroll.value === undefined) return;
    const { scrollLeft, scrollWidth, offsetWidth } = postsScroll.value;
    const scrollPercent = scrollLeft / (scrollWidth - offsetWidth);
    const index = Math.round(scrollPercent * (limit.value - 1));
    current.value = index;
}, 250)
watch(current, () => {
    postsScroll.value?.scrollTo({
        left: current.value * postsScroll.value.offsetWidth,
        behavior: 'smooth'
    })
})
</script>

<template>
    <div class="post-slider">
        <div class="posts-container" ref="postsScroll" @scroll="handleScroll" @wheel="handleWheel">
        <div class="posts-scroll-container">
            <div
                v-for="article,index in posts"
                :key="article.slug"
                class="article"
                :class="{prev: index===prev, next: index === next, current: index === current}"
            >
                <img :src="article.data.cover" alt="" class="cover" loading="lazy">
                <div class="meta">
                    <div class="title">{{ article.data.title }}
                <span class="category">{{article.data.category}}</span></div>
                    <div class="tags">
                        <a :href="`/tag/${tag}`" rel="nofollow" class="tag" v-for="tag in article.data.tags">#{{tag}}</a>
                    </div>
                    <p class="desc">{{ article.data.description }}</p>
                    <a :href="`/post/${article.slug}`" class="button" rel="prefetch" :title="article.data.title">GO<span style="display:inline-block;opacity:0;font-size:0;">{{ article.data.title }}</span></a>
                </div>
            </div>
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
    box-shadow: 0 0 0 2px rgba(var(--white-meta), 0.8);
}
.post-slider .slider-container .slider-item{
    width: 1rem;
    height: 1rem;
    border: 0.4rem solid rgba(var(--white-meta), 0.8);
    border-radius: 50%;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.3s;
}
.post-slider .slider-container .slider-item.active{
    border-width: 0.3rem;
    border-radius: 0 50% 50% 50%;
}
.post-slider .posts-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: scroll;
}
.post-slider .posts-container::-webkit-scrollbar{
    display: none;
}
.post-slider .posts-scroll-container{
    width: max-content;
    height: 100%;
    display: flex;
}
.post-slider .article{
    float: left;
    padding: 0 0 2rem;
    width: calc(100vw - 2 * var(--side-padding));
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
    border: 4px solid rgba(var(--white-meta), 0.8);
    border-radius: var(--base-radius);
    object-fit: cover;
    /* position: absolute; */
    background-color: var(--main-color);
}
.post-slider .article .meta{
    width: 50%;
    height: 100%;
    padding: 0 2rem;
    color: rgba(var(--white-meta), 0.8);
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
    box-shadow: 0 0 0 2px rgba(var(--white-meta), 0.8);
    background: rgba(var(--white-meta), 0.2);
    padding: 4px 8px;
    border-radius: var(--base-radius);
    font-size: 0.5em;
}
.post-slider .article .meta .tags .tag{
    display: inline-block;
    width: fit-content;
    padding: 2px 8px;
    background: rgba(var(--white-meta), 0.2);
    color: rgba(var(--white-meta), 0.8);
    border-radius: var(--base-radius);
    transition: 0.3s;
}
.post-slider .article .meta .tags .tag:is(:hover, :focus-within){
    color: var(--main-color);
    background: rgba(var(--white-meta), 0.8);
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