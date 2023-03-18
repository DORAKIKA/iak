<script setup lang="ts">
import { ref } from 'vue';
import IakDrawer from "@components/Iak/drawer.vue"
import { menus } from 'src/config';


const sidebarShow = ref(false)
const toggleSidebar = () => {
    sidebarShow.value = !sidebarShow.value;
}
// @ts-ignore
window.iak.toggleSidebar = toggleSidebar
</script>
<template>
    <IakDrawer v-model:show="sidebarShow" class="the-sidebar">
        <template #title><span>菜单</span></template>
        <template #default>
            <div class="menus">
                <div class="menu" v-for="menu in menus" :key="menu.name">
                    <div class="menu-name">{{menu.name}}</div>
                    <div class="menu-items">
                        <a class="menu-item" v-for="menuItem in menu.children" :href="menuItem.href">{{menuItem.name}}</a>
                    </div>
                </div>
            </div>
        </template>
    </IakDrawer>
</template>

<style scoped>

/* TheSidebar */
.the-sidebar .menus{
    padding: 16px;
}
.the-sidebar .menus .menu-name{
    height: 32px;
    line-height: 32px;
    opacity: 0.6;
}
.the-sidebar .menus .menu-items{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.the-sidebar .menus .menu-item{
    line-height: 48px;
    height: 48px;
    border-radius: var(--base-radius);
    padding-left: 16px;
    text-decoration: none;
    color: var(--font-color);
    transition: 0.3s;
}
.the-sidebar .menus .menu-item:hover{
    background-color: var(--color-op);
}
</style>