<script setup lang="ts">
interface Props{
    show: boolean,
    class?: string
}
const props = defineProps<Props>()
const emits = defineEmits<{
    (e: 'update:show', value: boolean): void
}>()
</script>

<template>
    <teleport to='body'>
        <transition name="slide">
            <div class="k-drawer__wrapper" :class="props.class" v-if="props.show" @click.self="emits('update:show', false)">
                <div class="k-drawer__content">
                    <div class="k-drawer__header">
                        <slot name="title"/>
                        <svg @click="emits('update:show', false)" t="1671282605277" class="icon close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2663" width="32" height="32"><path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z" p-id="2664"></path><path d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z" p-id="2665"></path></svg>
                    </div>
                    <div class="k-drawer__body"><slot/></div>
                    <div class="k-drawer__footer"></div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<style scoped>
.k-drawer__wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3000;
}
.k-drawer__content{
    position: absolute;
    right: 0;
    top: 0;
    width: 25vw;
    min-width: 300px;
    background: var(--main-color);
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
}
.slide-enter-from, .slide-leave-to{
    opacity: 0;
}
.slide-enter-to, .slide-leave-from{
    opacity: 1;
}
.slide-enter-active,.slide-leave-active{
    transition: 0.3s;
}
.slide-enter-from .k-drawer__content, .slide-leave-to .k-drawer__content{
    transform: translateX(100%);
}
.slide-enter-to .k-drawer__content, .slide-leave-from .k-drawer__content{
    transform: translateX(0);
}
.k-drawer__content .k-drawer__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: var(--header-height);
    border-bottom: 4px solid rgba(255, 255, 255, 0.3);
}
.k-drawer__header .close{
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
}
.k-drawer__content .k-drawer__body{
    flex: 1;
}
</style>