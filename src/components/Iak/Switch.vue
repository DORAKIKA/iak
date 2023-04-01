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
    <label class="iak-switch" :class="{active: props.value}">
        <div class="iak-switch__core"></div>
        <input class="iak-switch__input"
            type="checkbox" :checked="props.value"
            @keydown.enter="emits('update:value', !props.value)"
            @click="emits('update:value', !props.value)"
        />
    </label>
</template>

<style scoped>
    .iak-switch{
        width: 2.75em;
        height: 1.5em;
        /* background: black; */
        display: block;
        padding: 0.25em 1.5em 0.25em 0.25em;
        background: var(--card-tab-bg);
        border-radius: 0.75em;
        transition: 0.3s;
        cursor: pointer;
    }
    .iak-switch.active{
        padding: 0.25em 0.5em 0.25em 1.75em;
        background: var(--card-bg);
        box-shadow: 0px 0px 0px 1px var(--card-active);
    }
    .iak-switch__core{
        width: 1em;
        height: 1em;
        border-radius: 0.5em;
        background: var(--card-bg);
        box-shadow: 2px 1px 2px 0px rgba(0,0,0,0.2);
        transition: 0.3s;
        /* opacity: 0.5; */
    }
    .iak-switch__input{
        opacity: 0;
    }
    .iak-switch.active .iak-switch__core{
        width: 0.5em;
        opacity: 1;
        background: var(--card-active);
    }

</style>