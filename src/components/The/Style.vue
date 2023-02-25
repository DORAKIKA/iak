<script setup lang="ts">
import { ref,computed } from 'vue'
import { useLocalStorage, useStyleTag } from '@vueuse/core'
import IakDrawer from "@components/Iak/drawer.vue"
import IakSlider from "@components/Iak/Slider.vue"
import IakSwitch from "@components/Iak/Switch.vue"
import { theme } from '../../config'

const styleShow = ref(false)
const styleConfig = useLocalStorage('styleConfig', {
    themeColor: theme.main_colors[0],
    baseRadius: theme.border_radius[0],
    brightness: theme.brightness.default,
    headerFixed: theme.headerFixed,
})
// 补undefined - 更新后可能会添加配置，但用户缓存中没有这个配置项，就会undefined
styleConfig.value.themeColor ??= theme.main_colors[0];
styleConfig.value.baseRadius ??= theme.border_radius[0];
styleConfig.value.brightness ??= theme.brightness.default;
styleConfig.value.headerFixed ??= theme.headerFixed;

const styleHTML = computed(() => `
    :root{
        --main-color-meta: ${styleConfig.value.themeColor};
        --base-radius: ${styleConfig.value.baseRadius};
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
            <div class="style-item style-border-radius">
                <div class="label">圆角</div>
                <div class="value">
                    <div class="style-border-radius-item"
                        v-for="r in theme.border_radius"
                        :key="r"
                        @click="styleConfig.baseRadius=r"
                        :class="r===styleConfig.baseRadius?'active':''"
                        :style="`border-radius: calc(${r} / 2)`"
                    ></div>
                </div>
            </div>
            <div class="style-item">
                <div class="key">亮度</div>
                <div class="value"><IakSlider :min="theme.brightness.min" :max="theme.brightness.max" :step="theme.brightness.step" v-model:value="styleConfig.brightness"/></div>
            </div>
            <div class="style-item">
                <div class="key">顶栏固定</div>
                <div class="value"><IakSwitch v-model:value="styleConfig.headerFixed"/></div>
            </div>
        </template>
    </IakDrawer>
</template>