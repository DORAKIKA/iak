<script setup lang="ts">
import { useThrottleFn, useToggle } from '@vueuse/core';
import { CollectionEntry, getCollection } from 'astro:content';
import { ref, reactive } from 'vue'
// import { ParsedContent } from '@nuxt/content/dist/runtime/types';
const state = reactive({
    loading: false,
    searchInput: '',
    articles: [] as CollectionEntry<"posts">[],
    results: [] as CollectionEntry<"posts">[]
})
getCollection('posts').then(ps => {
    state.articles = ps
    state.results = ps
})
const query = async (e:any) => {
    state.loading = true
    state.results = state.articles.filter(p => {
        if(p.data.title && (p.data.title.indexOf(state.searchInput) !== -1))return true;
        if(p.data.description && (p.data.description.indexOf(state.searchInput) !== -1))return true;
        if(p.data.category && (p.data.category.indexOf(state.searchInput) !== -1))return true;
        if(p.data.tags && (p.data.tags.join(' ').indexOf(state.searchInput) !== -1))return true;
        return false
    })
    state.loading = false
}
const onSearch = useThrottleFn(query, 1000)
const searchShow = ref(false)
// const toggleSearch = useToggle(searchShow)
const toggleSearch = (value:boolean|undefined) => {
    if(value !== undefined){
        return searchShow.value = value
    }
    return searchShow.value = !searchShow.value
}

query({target:{value:''}})

// @ts-ignore
window.iak.toggleSearch = toggleSearch
</script>

<template>
    <teleport to='body'>
        <transition name="pop">
            <div class="the-search-wrapper" v-show="searchShow" @click.self="toggleSearch(false)">
                <div class="the-search-loading" v-show="state.loading">
                    <svg t="1670941746641" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5314" width="128" height="128">
                        <path d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z" fill="#262626" p-id="5315"></path>
                    </svg>
                </div>
                <div class="the-search">
                    <input name="searchInput" class="the-search-input" type="text" v-model="state.searchInput" @keydown.enter="onSearch">
                    <label for="searchInput" class="enter-emoji">↩️</label>
                    <div class="the-search-result">
                        <a
                            class="search-result-item"
                            v-for="item in state.results"
                            :key="item.slug"
                            :href="`/posts/${item.slug}`"
                            @click="toggleSearch(false)"
                        >
                            <div class="title">{{ item.data.title }}</div>
                            <div class="desc">{{ item.data.description }}</div>
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>
