<script setup lang="ts">
// @ts-ignore
import marks from "@content/mark/_index.yml"
import MarkItem from "@components/Iak/MarkItem.vue";
// marks
const arr = [] as any[];
marks.forEach((group: any) => {
    group.values.forEach((mark: any) => {
        arr.push({
            ...mark,
            group: group.name,
            prefix: group.prefix
        })
    })
});
const filterMarks = arr.sort((a: any, b: any) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
}).slice(0,1);
</script>

<template>

<section class="marks">
    <h3 class="panel-title">近期</h3>
    <MarkItem :mark="mark"  v-for="mark in filterMarks" :key="mark.url"/>
    
</section>
</template>

<style scoped>
.marks{
    height: 100%;
}
.panel-title{
    text-align: center;
    font-weight: bold;
    color: var(--card-text-color);
    height: 3rem;
    margin: 0;
}
.mark-item{
    height: calc(100% - 3rem);
}
</style>