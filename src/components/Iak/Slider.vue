<script setup lang="ts">
interface SliderProps{
    min: number,
    max: number,
    step: number,
    value: number,
}
const props = defineProps<SliderProps>();
const emits = defineEmits<{
    (e: 'update:value', value: number): void
}>()

const values:number[] = [];
for(let i = props.min; i <= props.max; i+=props.step){
    values.push(Math.round(i*10)/10);
}

</script>

<template>
    <div class="iak-slider">
        <div class="button"
        v-for="value in values"
        :key="value"
        :title="value.toString()"
        @click="() => emits('update:value', value)"
        :class="value === props.value ? 'active' : ''"
        ></div>
    </div>
</template>

<style scoped>
.iak-slider{
    height: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    background: var(--card-inner);
}
.iak-slider .button{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--card-inner);
    box-shadow: 2px 1px 4px 0px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: 0.3s;
}
.iak-slider .button.active{
    width: 16px;
    height: 16px;
    background: var(--main-color);
}
</style>