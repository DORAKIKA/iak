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

defineExpose({
    toggleStyle
})
</script>
<template>
    <svg t="1671287648173" class="icon the-style" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9656" width="32" height="32"><path d="M975.04 278.186667c8.32-8.32 8.32-21.866667 0-30.186667L776 48.96c-4.053333-4.053333-9.386667-6.293333-15.04-6.293333s-11.093333 2.24-15.04 6.293333L668.906667 125.866667l229.333333 229.226666 76.8-76.906666zM67.52 736v199.146667c0 11.84 9.493333 21.333333 21.333333 21.333333H288c0.106667 0 0.213333-0.106667 0.426667-0.106667l-220.693334-220.8c-0.106667 0.213333-0.213333 0.32-0.213333 0.426667zM898.24 668.906667l-102.826667 102.933333c-4.16 4.16-9.6 6.293333-15.04 6.293333s-10.88-2.133333-15.04-6.293333c-8.32-8.32-8.32-21.866667 0-30.186667l102.826667-102.933333-60.373333-60.373333-148.906667 148.906666c-4.16 4.16-9.6 6.293333-15.04 6.293334s-10.88-2.133333-15.04-6.293334c-8.32-8.32-8.32-21.866667 0-30.186666L777.493333 548.266667l-36.266666-36.266667 98.026666-98.026667-99.52-99.52L251.733333 802.346667l99.52 99.626666L512 741.226667l233.813333 233.813333c4.053333 4.053333 9.386667 6.293333 15.04 6.293333s11.093333-2.24 15.04-6.293333l199.146667-199.146667c8.32-8.32 8.32-21.866667 0-30.186666l-76.8-76.8zM122.026667 672.64l99.52 99.52 488-488-99.52-99.52-98.026667 98.133333-36.16-36.16-148.8 148.693334c-4.16 4.16-9.6 6.293333-15.04 6.293333s-10.88-2.133333-15.04-6.293333c-8.32-8.32-8.32-21.866667 0-30.186667l148.8-148.8-60.373333-60.373333-102.826667 102.826666c-4.16 4.16-9.6 6.293333-15.04 6.293334s-10.88-2.133333-15.04-6.293334c-8.32-8.32-8.32-21.866667 0-30.186666L355.2 125.866667l-77.013333-77.013334c-8-8-22.186667-8-30.186667 0L48.96 248c-8.32 8.32-8.32 21.866667 0 30.186667L282.773333 512 122.026667 672.64z" p-id="9657"></path></svg>
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