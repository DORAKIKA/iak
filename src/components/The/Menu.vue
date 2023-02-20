<script setup lang="ts">
interface Menu {
    name: string
    children: MenuItem[]
}
interface MenuItem {
    name: string
    href: string
}
interface Props {
    menu: Menu
}
const props = defineProps<Props>()
</script>
<template>
    <div class="the-menu">
        <div class="trigger">
            <span>{{menu.name}}</span>
        </div>
        <ul class="children">
            <li v-for="menuItem in menu.children" :key="menuItem.name">
                <a class="menu-item" :href="menuItem.href">{{menuItem.name}}</a>
            </li>
        </ul>
    </div>
</template>