<script setup lang="ts">
import { ref } from 'vue';
import IakDrawer from "@components/Iak/drawer.vue"
interface Menu {
    name: string
    children: MenuItem[]
}
interface MenuItem {
    name: string
    href: string
}
interface Props{
    menus: Array<Menu>
}
const props = defineProps<Props>()

const sidebarShow = ref(false)
const toggleSidebar = () => {
    sidebarShow.value = !sidebarShow.value;
}
defineExpose({
    toggleSidebar
})
</script>
<template>
    <svg t="1671348868662" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10746" width="32" height="32"><path d="M950.848 768l0 73.152q0 14.848-10.848 25.728t-25.728 10.848l-804.576 0q-14.848 0-25.728-10.848t-10.848-25.728l0-73.152q0-14.848 10.848-25.728t25.728-10.848l804.576 0q14.848 0 25.728 10.848t10.848 25.728zM950.848 475.424l0 73.152q0 14.848-10.848 25.728t-25.728 10.848l-804.576 0q-14.848 0-25.728-10.848t-10.848-25.728l0-73.152q0-14.848 10.848-25.728t25.728-10.848l804.576 0q14.848 0 25.728 10.848t10.848 25.728zM950.848 182.848l0 73.152q0 14.848-10.848 25.728t-25.728 10.848l-804.576 0q-14.848 0-25.728-10.848t-10.848-25.728l0-73.152q0-14.848 10.848-25.728t25.728-10.848l804.576 0q14.848 0 25.728 10.848t10.848 25.728z" p-id="10747"></path></svg>
    <IakDrawer v-model:show="sidebarShow" class="the-sidebar">
        <template #title><span>菜单</span></template>
        <template #default>
            <div class="menus">
                <div class="menu" v-for="menu in props.menus" :key="menu.name">
                    <div class="menu-name">{{menu.name}}</div>
                    <div class="menu-items">
                        <a class="menu-item" v-for="menuItem in menu.children" :href="menuItem.href">{{menuItem.name}}</a>
                    </div>
                </div>
            </div>
        </template>
    </IakDrawer>
</template>