<script setup lang="ts">
import IakDrawer from "@components/Iak/drawer.vue"
import { ref, watch } from "vue";
import { headings as headingsConfig } from "../../../config"

const props = defineProps(['headings', 'className']);
const headings = props.headings.filter((h:any) => h.depth <= headingsConfig.depth);


const headingsShow = ref(false)
const toggleHeadings = (flag?: boolean) => {
    if(flag !== undefined){
        headingsShow.value = flag
    }else{
        headingsShow.value = !headingsShow.value
    }
}

watch(headingsShow, () => {
    if(headingsShow.value){
        setTimeout(() => {
            let firstHeadingItem: HTMLElement | null = document.querySelector('.the-sidebar .toolbar-headings-item')
            if(firstHeadingItem)firstHeadingItem.focus()
        }, 300)
    }else{
        setTimeout(() => {
            let trigger: HTMLElement | null = document.querySelector('#headings-trigger');
            if(trigger)trigger.focus()
        }, 300)
    }
})

// @ts-ignore
window.iak.toggleHeadings = toggleHeadings
</script>

<template>
    <button id="headings-trigger" class="toolbar-headings-trigger" :class="className" @click="toggleHeadings(true)">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4655" width="128" height="128"><path d="M120.832 35.84h173.056v403.456h436.224V35.84h173.056v952.32H730.112v-399.36H293.888v399.36H120.832v-952.32z" p-id="4656"></path></svg>
    </button>
    <IakDrawer v-model:show="headingsShow" class="the-sidebar">
        <template #title><span>目录</span></template>
        <template #default>
            <div class="toolbar-headings">
                <a v-for="h in headings" :key="h.slug" :href="'#'+h.slug" class="toolbar-headings-item" :class="'h' + h.depth">{{ h.text }}</a>
            </div>
        </template>
    </IakDrawer>
</template>

<style scoped>
.toolbar-headings{
    padding: 1rem;
}
.toolbar-headings-item{
    display: flex;
    align-items: center;
    gap: 4px;
    padding: calc(var(--base-radius) / 2);
    border-radius: calc(var(--base-radius) / 2);
    transition: 0.3s;
}
.toolbar-headings-item:is(:hover, :focus-within){
    background: rgba(var(--white-meta), 0.8);
    color: var(--main-color);
}
.toolbar-headings-item::before{
    content: "";
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    background: var(--white);
    color: var(--main-color);
    text-align: center;
    border-radius: var(--base-radius);
}
.toolbar-headings-item.h1::before{
    content: "Ⅰ";
}
.toolbar-headings-item.h2::before{
    content: "Ⅱ";
    width: 2em;
}
.toolbar-headings-item.h3::before{
    content: "Ⅲ";
    width: 2.5em;
}
.toolbar-headings-item.h4::before{
    content: "Ⅳ";
    width: 3em;
}
.toolbar-headings-item.h5::before{
    content: "Ⅴ";
    width: 3.5em;
}
.toolbar-headings-item.h6::before{
    content: "Ⅵ";
    width: 4em;
}
</style>