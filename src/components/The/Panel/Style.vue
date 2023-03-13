<script setup lang="ts">
import { computed, watch } from 'vue'
import { useLocalStorage, useStyleTag, useThrottleFn } from '@vueuse/core'

import IakSlider from "@components/Iak/Slider.vue"
import IakSwitch from "@components/Iak/Switch.vue"
import { theme } from '../../../config'
import { z } from 'zod'

const default_style = {
    themeColor: theme.main_colors[0],
    largeBorderRadius: theme.large_border_radius.default,
    brightness: theme.brightness.default,
    headerFixed: theme.headerFixed.default,
    imageBackground: theme.imageBackground.default,
    whiteCard: theme.whiteCard.default
}

const styleConfig = useLocalStorage('styleConfig', default_style)

async function validate(){
    const schema = z.object({
        themeColor: z.string(),
        largeBorderRadius: z.boolean(),
        brightness: z.number().min(theme.brightness.min).max(theme.brightness.max),
        headerFixed: z.boolean(),
        imageBackground: z.boolean(),
        whiteCard: z.boolean()
    })
    try {
        styleConfig.value = await schema.parseAsync(styleConfig.value)
    } catch (error) {
        styleConfig.value = default_style;
        // @ts-ignore
        SnackBar({message: '样式配置错误，已重置为默认配置', type: 'error', fixed: true, position: 'bl'})
    }
}
watch(styleConfig, useThrottleFn(validate), {immediate: true});

const styleHTML = computed(() => `
    :root{
        --main-color-meta: ${styleConfig.value.themeColor};
        --base-radius: ${styleConfig.value.largeBorderRadius ? '16px' : '8px'};
        ${styleConfig.value.whiteCard ? '':`
        --card-bg: var(--main-color);
        --card-tab-bg: var(--white-op);
        --card-text-color: var(--white-deep-op);
        --card-sub-text-color: var(--white-deep-op);
        --card-inner: var(--white-op);
        --card-active: var(--white-deep-op);
        `}
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

</script>
<template>
    <section class="panel-style">
        <h3 class="panel-title">主题配置</h3>
        <div class="style-container">
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
                <div class="key">来点白色</div>
                <div class="value"><IakSwitch v-model:value="styleConfig.whiteCard"/></div>
            </div>
            <div class="style-item">
                <div class="key">图片背景</div>
                <div class="value"><IakSwitch v-model:value="styleConfig.imageBackground"/></div>
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
    border: 4px solid rgba(255, 255, 255, 0.7);
}

</style>