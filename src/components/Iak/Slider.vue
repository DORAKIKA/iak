<script setup lang="ts">
interface SliderProps{
    min: number,
    max: number,
    step: number,
    value: number,
    name: string,
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
        <label class="button"
            v-for="value in values"
            :key="value"
            :title="value.toString()"
            @click="() => emits('update:value', value)"
            :class="value === props.value ? 'active' : ''"
        >
            <input type="radio" :name="name" :checked="props.value === value"/>
        </label>
    </div>
</template>

<style scoped>
.iak-slider{
    height: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    background: var(--card-inner-bg);
}
.iak-slider input{
    appearance: none;
    position: absolute;
    opacity: 0;
}
.iak-slider .button{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--card-inner-bg);
    box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: 0.3s;
}
.iak-slider .button:focus-within{
    outline: 3px solid var(--card-active);
}
.iak-slider .button.active{
    width: 16px;
    height: 16px;
    background: var(--card-active);
    border: 3px solid rgba(255,255,255,0.5);
}
</style>