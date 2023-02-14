<script setup lang="ts">
import TheMenu from "@components/The/Menu.vue"
import TheStyle from './Style.vue';
import TheSidebar from './Sidebar.vue'
import TheSearch from './Search.vue'
import { menus } from "src/config";
import { ref } from "vue"
import { CollectionEntry, getCollection } from "astro:content";
const styleRef = ref<InstanceType<typeof TheStyle> | null>(null)
const sidebarRef = ref<InstanceType<typeof TheSidebar> | null>(null)
const searchRef = ref<InstanceType<typeof TheSearch> | null>(null)

const articles = ref<CollectionEntry<"posts">[]>()
getCollection("posts").then(ps => {
    articles.value = ps;
});
const randomPage = () => {
    if(articles.value?.length){
        const rand = Math.floor(Math.random() * articles.value.length);
        window.open('/posts/' + articles.value[rand].slug, '_self')
    }
}
</script>
<template>
    <header id="header" class="the-header">
        <a href="/" class="site-home">
            <img src="/images/dorakika.png" alt="">
        </a>
        <ul class="nav-buttons">
            <TheMenu class="nav-button" v-for="menu in menus" :key="menu.name" :menu="menu" />
            <li class="nav-button" @click="styleRef?.toggleStyle" title="博客设置">
                <TheStyle ref="styleRef"/>
            </li>
           <li class="nav-button" @click="randomPage" title="前往随机文章">
                <svg t="1670941716682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4263" width="32" height="32"><path d="M1009.942 718.058c18.746 18.746 18.746 49.138 0 67.882l-160 159.968c-30.02 30.02-81.942 8.98-81.942-33.942V832h-117.57a24.008 24.008 0 0 1-17.546-7.624l-141.112-151.192 106.666-114.286L704 672h64v-79.962c0-42.876 51.886-63.996 81.942-33.942l160 159.962zM24 352h168l105.562 113.102 106.666-114.286-141.112-151.192A23.998 23.998 0 0 0 245.57 192H24c-13.254 0-24 10.746-24 24v112c0 13.254 10.746 24 24 24z m744 0v79.968c0 42.92 51.922 63.96 81.942 33.942l160-159.968c18.746-18.746 18.746-49.138 0-67.882l-160-159.962C819.886 48.042 768 69.164 768 112.038V192h-117.57a24.008 24.008 0 0 0-17.546 7.624L192 672H24c-13.254 0-24 10.746-24 24v112c0 13.254 10.746 24 24 24h221.57c6.652 0 13.006-2.762 17.546-7.624L704 352h64z" p-id="4264"></path></svg>
            </li>
             <li class="nav-button" @click="searchRef?.toggleSearch(true)" title="搜索">
                <TheSearch ref="searchRef"/>
            </li>
            <li class="nav-button sidebar-toggle" @click="sidebarRef?.toggleSidebar" title="菜单">
                <TheSidebar ref="sidebarRef" :menus="menus"/>
            </li>
        </ul>
    </header>
</template>

<style>
#header{
    position: sticky;
    height: var(--header-height);
    padding: 0 var(--side-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 4px solid rgba(255, 255, 255, 0.2);
    color: rgba(255,255,255,0.8);
    font-weight: bold;
    z-index: 200;
}
#header .site-home{
    width: 28px;
    height: 28px;
}
#header .site-home img{
    width: 100%;
    height: 100%;
}
#header .nav{
    flex: 1;
    display: flex;
    justify-content: flex-end;
}
#header .nav-links{
    display: flex;
    gap: 40px;
    list-style: none;
    line-height: 2;
}

#header .nav-buttons{
    display: flex;
    align-items: center;
    gap: 4px;
}
#header .nav-button{
    width: 36px;
    height: 36px;
    border-radius: var(--base-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
}
#header .nav-button:hover{
    color: var(--main-color);
    background: rgba(255, 255, 255, 0.8);
}
#header .nav-button .icon{
    width: 18px;
    height: 18px;
    
}

#header .sidebar-toggle{
    display: none;
}
@media (max-width: 900px){
    #header .nav{
        display: none;
    }
    #header .sidebar-toggle{
        display: flex;
    }
}
</style>