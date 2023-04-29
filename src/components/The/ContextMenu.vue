<script setup lang="ts">
import { ref, reactive, onMounted, Ref } from 'vue'

interface ContextItem {
    text: string,
    icon?: string,
    action: (target: any) => void,
    tag?: string,
    color?: string
}
interface ContextGroup {
    name?: string,
    type: string,
    color?: string,
    children: ContextItem[],
    target?: any
}

const show = ref(false)
const config = reactive([] as ContextGroup[])
const position = reactive({x: 0, y: 0})
const contextmenuRef: Ref<HTMLElement | null> = ref(null)
let lastFocus: HTMLElement | null = null
onMounted(() => {
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        config.splice(0, config.length)
        
        addConfig('base')

        e.target && findConfig(e.target)

        let selection = ''
        if(selection = document?.getSelection()?.toString() || selection){
            // @ts-ignore
            addConfig('selection', {value: selection})
        }

        addConfig('global')

        updatePosition(e.clientX, e.clientY)
        show.value = true
    })
    window.addEventListener('keydown', (e) => {
        
        if(e.key === 'Escape'){
            show.value = false
        }
    })
    window.addEventListener('click', (e) => {
        show.value = false
    })
})

const updatePosition = (x: number, y: number) => {
    let width = window.innerWidth
    let height = window.innerHeight
    let menuWidth = contextmenuRef.value?.offsetWidth || 200
    let menuHeight = contextmenuRef.value?.offsetHeight || 200
    if(x + menuWidth > width){
        x = width - menuWidth
    }
    if(y + menuHeight > height){
        y = height - menuHeight
    }
    position.x = Math.max(0, x)
    position.y = Math.max(0, y)
}
const findConfig = (el: any) => {
    if(!el || el === document) return;
    let role = el.getAttribute('data-role')
    if(role) {
        addConfig(role, el)
    };
    if(el.parentNode){
        findConfig(el.parentNode)
    }
}
const addConfig = (role: string, el?: HTMLElement | {value: any}) => {
    // @ts-ignore
    let group = iak.contextMenu[role];
    // let color = el && el.getAttribute('data-color');
    let color: string;
    if(el instanceof HTMLElement){
        color = el && getComputedStyle(el).getPropertyValue('--main-color-meta')
    }

    if(group){
        if(Array.isArray(group)){
            group.forEach((item) => {
                // @ts-ignore
                config.push({...item, target: el, color: color || group.color})
            })
            return;
        }else{
            // @ts-ignore
            config.push({...group, target: el, color: color||group.color})
        }
    }
}
// @ts-ignore
// window.iak.toggleSearch = toggleSearch
</script>

<template>
<teleport to='body'>
<transition name="pop">
<div v-show="show" class="the-contextmenu" :style="{left: position.x + 'px',top: position.y + 'px'}" ref="contextmenuRef">
    <div class="the-contextmenu__group" :class="group.type" v-for="group in config" :style="group.color && `--main-color-meta: ${group.color}`">
        <button class="the-contextmenu__item" v-for="item in group.children" :key="group.type + item.icon" @click="item.action(group.target)">
            <div class="the-contextmenu__item__icon" v-if="item.icon">
                <i :class="item.icon"></i>
            </div>
            <div class="the-contextmenu__item__text" v-if="item.text">{{item.text}}</div>
            <div class="the-contextmenu__item__tag" v-if="group.name || item.tag">{{ group.name || item.tag }}</div>
        </button>
    </div>
</div>
</transition>
</teleport>
</template>


<style scoped>
.the-contextmenu{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    min-width: 200px;
    background: var(--card-bg);
    border-radius: 4px;
    padding: 0.5em;
    box-shadow: 0 0 4px rgba(0,0,0,.2);
    pointer-events: auto;
    border: 2px solid var(--card-border-color);
    transition: 0.3s;
}
.the-contextmenu:is(:hover, :focus-within){
    border: 2px solid var(--main-color);
}
.the-contextmenu__group{
    --main-color: rgb(var(--main-color-meta));
}
.the-contextmenu__group:nth-child(n+2){
    --card-border-color: rgba(var(--main-color-meta), 0.1);
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 2px solid var(--card-border-color);
}

.the-contextmenu__item{
    padding: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.2rem;
    outline: none;
    border: none;
    background: transparent;
    text-align: left;
    transition: all 0.3s;
}
.the-contextmenu__item:is(:hover, :focus){
    background: var(--main-color);
    color: var(--card-active-text);
    cursor: pointer;
}
.the-contextmenu__group.small{
    display: flex;
    justify-content: space-between;
}
.the-contextmenu__group.small .the-contextmenu__item{
    min-width: 2em;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.the-contextmenu__item__text{
    flex: 1;
}
.the-contextmenu__item__tag{
    background: rgba(var(--main-color-meta), 0.2);
    color: var(--main-color);
    border: 1px solid currentColor;
    padding: 0.2em 0.5em;
    border-radius: var(--base-radius);
    font-size: 0.8em;
}
.the-contextmenu__item:hover .the-contextmenu__item__tag{
    color: var(--card-active-text);
}


.pop-enter-from, .pop-leave-to{
    opacity: 0;
    transform: scale(0.2);
}
.pop-enter-to, .pop-leave-from{
    opacity: 1;
    transform: scale(1);
}
.pop-enter-active,.pop-leave-active{
    transition: 0.2s cubic-bezier(.12,.72,.41,1.2);
}
</style>