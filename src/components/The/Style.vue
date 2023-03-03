<script setup lang="ts">
import { ref,computed, watch } from 'vue'
import { useLocalStorage, useStyleTag, useThrottleFn } from '@vueuse/core'
import IakDrawer from "@components/Iak/drawer.vue"
import IakSlider from "@components/Iak/Slider.vue"
import IakSwitch from "@components/Iak/Switch.vue"
import { theme } from '../../config'
import { z } from 'zod'

const default_style = {
    themeColor: theme.main_colors[0],
    largeBorderRadius: theme.large_border_radius,
    brightness: theme.brightness.default,
    headerFixed: theme.headerFixed,
}

const styleShow = ref(false)
const styleConfig = useLocalStorage('styleConfig', default_style)

async function validate(){
    const schema = z.object({
        themeColor: z.string(),
        largeBorderRadius: z.boolean(),
        brightness: z.number().min(theme.brightness.min).max(theme.brightness.max),
        headerFixed: z.boolean(),
    })
    try {
        styleConfig.value = await schema.parseAsync(styleConfig.value)
    } catch (error) {
        styleConfig.value = default_style;
        // @ts-ignore
        SnackBar({message: '样式配置错误，已重置为默认配置', type: 'error', fixed: true, position: 'bl'})
    }
}
watch(styleConfig, useThrottleFn(validate));

const styleHTML = computed(() => `
    :root{
        --main-color-meta: ${styleConfig.value.themeColor};
        --base-radius: ${styleConfig.value.largeBorderRadius ? '16px' : '8px'};
    }
    html{
        filter: brightness(${styleConfig.value.brightness})
    }
    ${styleConfig.value.headerFixed ? `
        body{
            padding-top: var(--header-height);
        }
        #header{
            position: fixed;
            background: rgba(var(--main-color-meta), 0.9);
            backdrop-filter: blur(4px);
            top: 0;
        }
    ` : ''}
`)
useStyleTag(styleHTML)

const toggleStyle = () => {
    styleShow.value = !styleShow.value;
}

// @ts-ignore
window.iak.toggleStyle = toggleStyle
</script>
<template>
    <IakDrawer v-model:show="styleShow">
        <template #title><span>样式</span></template>
        <template #default>
            <div class=" style-item style-theme-color">
                <div class="label">主题色</div>
                <div class="value">
                    <div class="style-theme-color-item"
                        v-for="tc in theme.main_colors"
                        :key="tc"
                        @click="styleConfig.themeColor=tc"
                        :class="tc===styleConfig.themeColor?'active':''"
                        :style="`background: rgb(${tc});`"
                    ></div>
                </div>
            </div>
            <div class="style-item">
                <div class="key">亮度</div>
                <div class="value"><IakSlider :min="theme.brightness.min" :max="theme.brightness.max" :step="theme.brightness.step" v-model:value="styleConfig.brightness"/></div>
            </div>
            <div class="style-item style-border-radius">
                <div class="label">大圆角</div>
                <div class="value">
                    <IakSwitch v-model:value="styleConfig.largeBorderRadius" />
                </div>
            </div>
            <div class="style-item">
                <div class="key">顶栏固定</div>
                <div class="value"><IakSwitch v-model:value="styleConfig.headerFixed"/></div>
            </div>
        </template>
    </IakDrawer>
</template>