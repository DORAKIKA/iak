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

<style scoped>
.the-menu{
    position: relative;
}
.the-menu .children{
    position: absolute;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    padding: 0.5rem;
    background-color: var(--main-color);
    /* box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.8); */
    border: 4px solid rgba(255, 255, 255, 0.8);
    border-radius: 0.5rem;
    opacity: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    line-height: 2;
    
}
.the-menu:hover::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 100%;
}
.the-menu:hover .children{
    opacity: 1;
    pointer-events: all;
    animation: menu 0.2s;
}
@keyframes menu{
    from{
        transform: translate(-50%) scale(0.5);
    }to{
        transform: translate(-50%) scale(1);
    }
}
.the-menu .children .menu-item{
    display: inline-flex;
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: 0.25rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: 0.3s;
}
.the-menu .children .menu-item:hover{
    background-color: rgba(255, 255, 255, 0.8);
    color: var(--main-color);
}
</style>