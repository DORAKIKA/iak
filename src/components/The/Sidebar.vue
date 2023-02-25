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