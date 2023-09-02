<script setup lang="ts">
import { computed, onMounted, watch, ref } from 'vue'
import { useLocalStorage, useStyleTag, useThrottleFn } from '@vueuse/core'
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption
} from '@headlessui/vue'

import IakSlider from "@components/Iak/Slider.vue"
import IakSwitch from "@components/Iak/Switch.vue"
import { themeOptions, brightnessOptions } from '@/config/theme'
import themeConfig from '@/config/theme'
import { z } from 'zod'

const default_style = {
    brightness: themeConfig.brightness,
    headerFixed: themeConfig.headerFixed,
    themeMode: themeConfig.themeMode
}

// 其他样式
const styleConfig = useLocalStorage('styleConfig', default_style)

// 主题配置
function setThemeMode(theme){
  if(themeOptions[theme]){
    styleConfig.value.themeMode = theme;
  }else{
    const keys = Object.keys(themeOptions);
    const activeIndex = keys.findIndex(k => k == styleConfig.value.themeMode);
    styleConfig.value.themeMode = keys[(activeIndex + 1) % keys.length]
  }
  console.log(styleConfig.value.themeMode)
  document.documentElement.setAttribute('data-theme', styleConfig.value.themeMode)
}
window.iak.setThemeMode = setThemeMode;
watch(() => styleConfig.value.themeMode, setThemeMode, {immediate: true})

async function validate(){
    const schema = z.object({
        brightness: z.number(),
        headerFixed: z.boolean(),
        themeMode: z.string()
    })
    try {
        styleConfig.value = await schema.parseAsync(styleConfig.value)
    } catch (error) {
        styleConfig.value = default_style;
        console.log(error)
        // @ts-ignore
        SnackBar({message: '样式配置错误，已重置为默认配置', type: 'error', fixed: true, position: 'bl'})
    }
}
watch(styleConfig, useThrottleFn(validate), {immediate: true});

const styleHTML = computed(() => `
    html{
        filter: brightness(${styleConfig.value.brightness})
    }
    ${!styleConfig.value.headerFixed ? `
        #nav{
            position: absolute;
            background: transparent;
            border: none;
            backdrop-filter: none;
        }
    ` : ''}
`)
useStyleTag(styleHTML)

</script>
<template>
  <section class="panel-style">
    <h3 class="panel-title">主题配置</h3>
    <div class="style-container">
      <RadioGroup class="style-item theme-radio__group" v-model="styleConfig.themeMode">
        <RadioGroupLabel class="key">主题</RadioGroupLabel>
        <div class="value">
          <RadioGroupOption
            v-for="(item, key) in themeOptions"
            :key="key"
            v-slot="{checked, active}"
            class="theme-radio__option"
            as="template"
            :data-theme="key" 
            :value="key" 
          >
          <div :class="{checked, active}">
            <div class="theme-radio__dot"></div>
            <div class="theme-radio__card"></div>
          </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>

      <RadioGroup class="style-item" v-model="styleConfig.brightness">
        <RadioGroupLabel class="key">亮度</RadioGroupLabel>
        <div class="value">
          <RadioGroupOption
            v-for="item in brightnessOptions"
            :key="item"
            :value="item"
            as="template"
            v-slot="{ checked, active }">
            <div
            class="brightness-radio__option"
            :class="{checked, active}" 
            :style="`--filter-brightness: ${item}`"></div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
      <div class="style-item">
          <div class="key">顶栏固定</div>
          <div class="value"><IakSwitch v-model:value="styleConfig.headerFixed"/></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel-title{
    text-align: center;
    font-weight: bold;
    color: var(--card-text-color);
    margin: 0;
}
.theme-radio__option{
  background-color: var(--bg);
  padding: var(--round-sm);
  border-radius: var(--round-md);
  display: flex;
  gap: var(--round-sm);
}
.theme-radio__option.active,
.brightness-radio__option.active{
  outline: 4px solid rgba(var(--main-color-meta), 0.2);
}
.theme-radio__option.checked,
.brightness-radio__option.checked{
  outline: 4px solid rgba(var(--main-color-meta), 0.6);
}
.theme-radio__dot{
  border-radius: var(--round-sm);
  padding: var(--round-sm);
  background: var(--card-border-color);
  border: 1px solid var(--card-border-color);
  background: var(--main-color);
}
.theme-radio__card{
  padding: var(--round-sm);
  width: calc(4 * var(--round-sm));
  border-radius: var(--round-sm);
  background-color: var(--card-bg);
  color: var(--card-text-color);
  border: 1px solid var(--card-border-color)
}
/* TheStyle */
:deep(.style-item){
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
:deep(.style-item .value){
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--round-md);
}
.brightness-radio__option{
  padding: var(--round-sm);
  border: 4px solid var(--card-bg);
  border-radius: var(--round-md);
  background: var(--card-text-color);
  box-shadow: 0 0 0 4px var(--card-border-color);
  filter: brightness(var(--filter-brightness));
}
</style>