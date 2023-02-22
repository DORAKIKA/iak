<script setup lang="ts">
import IakDrawer from "@components/Iak/drawer.vue"
import { ref } from "vue";
import { headings_depth } from "../../../config"

const props = defineProps(['headings', 'className']);
const headings = JSON.parse(props.headings).filter((h:any) => h.depth <= headings_depth);


const headingsShow = ref(false)
const toggleSidebar = () => {
    headingsShow.value = !headingsShow.value;
}
</script>

<template>
    <div class="headings" :class="className" @click="toggleSidebar">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4655" width="128" height="128"><path d="M120.832 35.84h173.056v403.456h436.224V35.84h173.056v952.32H730.112v-399.36H293.888v399.36H120.832v-952.32z" p-id="4656"></path></svg>
    </div>
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
    background: var(--deep-bg);
    color: var(--main-color);
}
.toolbar-headings-item::before{
    content: "";
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    background: var(--light-bg);
    color: var(--deep-bg);
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