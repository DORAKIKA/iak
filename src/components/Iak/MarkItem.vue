<script setup lang="ts">
const props = defineProps(['mark', 'group'])
</script>
<template>
    <a :href="mark.url" class="mark-item">
        <img class="poster" :src="mark.poster" loading="lazy"/>
        <div class="top">
            <div class="icon" v-html="group ? group.icon||'' : ''"></div>
            <div class="time">{{mark.time ? new Date(mark.time).toLocaleDateString() : ''}}</div>
        </div>
        <div class="bottom">
            <div class="title">{{mark.title}}</div>
            <div class="star">{{mark.star}}</div>
        </div>
    </a>
</template>

<style>
.mark-item {
    flex-grow: 1;
    border-radius: var(--base-radius);
    overflow: hidden;
    box-shadow: 0 0 0 4px var(--white-op);
    position: relative;
    display: flex;
    transition: 0.3s;
    color: var(--white-deep-op);
}
.mark-item:hover {
    box-shadow: 0 0 0 4px var(--white-deep-op);
}
.mark-item .poster{
    width: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    transition: 0.3s;
}
.mark-item:hover .poster{
    filter: brightness(1);
}
.mark-item .top{
    position: absolute;
    top: 0;
    left: 0;
    padding: calc(var(--base-radius) / 2) var(--base-radius);
    line-height: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mark-item .icon{
    font-size: 1.25em;
}
.mark-item .bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--base-radius);
}
.mark-item .title{
    font-size: 1.2em;
    font-weight: 600;
    color: var(--white-deep-op);
}
</style>