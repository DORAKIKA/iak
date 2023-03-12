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
    imageBackground: theme.imageBackground.default,
}

const styleShow = ref(false)
const styleConfig = useLocalStorage('styleConfig', default_style)

async function validate(){
    const schema = z.object({
        themeColor: z.string(),
        largeBorderRadius: z.boolean(),
        brightness: z.number().min(theme.brightness.min).max(theme.brightness.max),
        headerFixed: z.boolean(),
        imageBackground: z.boolean()
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
    ${styleConfig.value.imageBackground ? `
        html{
            --bg-image-url: url(${theme.imageBackground.url});
            background-image: ${theme.imageBackground.inherit ? 'var(--bg-image-url)' : 'url(' + theme.imageBackground.url + ')'};
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        body{
            background-image: none;
            animation: none;
            background-size: unset;
            background-color: rgba(0,0,0,0.7);
        }
    ` : ''}
    ${styleConfig.value.headerFixed ? `
        body{
            padding-top: var(--header-height);
        }
        #header{
            position: fixed;
            background: ${styleConfig.value.imageBackground ? 'rgba(0,0,0, 0.5)' : 'rgba(var(--main-color-meta), 0.9)'};
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
            <div class="style-item">
                <div class="key">图片背景</div>
                <div class="value"><IakSwitch v-model:value="styleConfig.imageBackground"/></div>
            </div>
        </template>
    </IakDrawer>
</template>

<style scoped>

/* TheStyle */
.style-item{
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.style-theme-color .value,
.style-border-radius .value{
    display: flex;
    gap: 8px;
}
.style-theme-color .value .style-theme-color-item,
.style-border-radius .value .style-border-radius-item{
    width: 16px;
    height: 16px;
    border-radius: calc(0.5 * var(--base-radius));
    border: 3px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
}
.style-theme-color .value .style-theme-color-item.active,
.style-border-radius .value .style-border-radius-item.active{
    border: 4px solid rgba(255, 255, 255, 0.9);
}

</style>