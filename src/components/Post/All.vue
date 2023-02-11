<script setup lang="ts">
import type { CollectionEntry } from "astro:content";
import {reactive, computed, ref} from "vue"
import PostCard from "@components/Post/Card.vue"
import { getCollection } from 'astro:content';

const articles = ref<CollectionEntry<"posts">[]>();
const props = defineProps(['pageSize'])
const options = reactive({
    pageSize: Number(props.pageSize) || 12,
    current: 1
})

getCollection('posts').then(posts => {
    articles.value = posts
    articles.value.sort((a, b) => a.data.date > b.data.date ? -1 : 1
);
})


const filterArticles = computed(() => {
    if(!articles.value)return[]
    const res = []
    for(let i = 0; i < options.pageSize; i++){
        if(!articles.value[(options.current-1) * options.pageSize + i])break;
        res[i] = articles.value[(options.current-1) * options.pageSize + i]
    }
    return res
})
</script>
<template>
    <div class="post-list">
        <div class="post-container">
            <PostCard v-for="article in filterArticles" :article="article"/>
        </div>
        <div class="pagination">
            <div class="pagination-item"
                v-for="i in Math.ceil((articles?.length || 0)/options.pageSize)"
                :key="i"
                @click="options.current = i"
                :class="{active: options.current === i}"
            >{{ i }}</div>
        </div>
    </div>
</template>

<style scoped>

.post-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-rows: auto;
    gap: 1rem;
}
.pagination{
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}
.pagination .pagination-item{
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
.pagination .pagination-item.active{
    box-shadow: 0 0 0 2px white;
}
</style>