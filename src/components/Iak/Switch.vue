<script setup lang="ts">
interface Props {
    value: boolean
}
const props = defineProps<Props>();
const emits = defineEmits<{
    (e: 'update:value', value: boolean): void
}>()
</script>

<template>
    <div class="iak-switch" :class="{active: props.value}" @click="emits('update:value', !props.value)">
        <div class="iak-switch__core"></div>
    </div>
</template>

<style scoped>
    .iak-switch{
        width: 2.75em;
        height: 1.5em;
        /* background: black; */
        padding: 0.25em 1.5em 0.25em 0.25em;
        background: var(--light-bg);
        border-radius: 0.75em;
        transition: 0.3s;
        cursor: pointer;
    }
    .iak-switch.active{
        padding: 0.25em 0.5em 0.25em 1.75em;
        background: var(--deep-bg);
    }
    .iak-switch__core{
        width: 1em;
        height: 1em;
        border-radius: 0.5em;
        background: var(--deep-bg);
        opacity: 0.5;
    }
    .iak-switch.active .iak-switch__core{
        width: 0.5em;
        opacity: 1;
        background: var(--main-color);
    }

</style>