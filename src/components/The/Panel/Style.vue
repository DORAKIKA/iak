<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import iakConfig from "iak.config";
import { setTheme } from "@/lib/app/theme";

const localTheme = useLocalStorage("iak.theme", iakConfig.defaultTheme);

function onThemeChange(e: MouseEvent, theme: any) {
  setTheme(theme, { x: e.clientX, y: e.clientY });
}
</script>
<template>
  <section class="panel-style">
    <h3 class="panel-title">主题配置</h3>
    <div class="style-container">
      <div class="style-item style-theme-color">
        <div class="label">主题色</div>
        <div class="value">
          <label
            v-for="tc in iakConfig.themes"
            :key="tc"
            :data-theme="tc"
            class="style-theme-color-item"
            :class="tc === localTheme ? 'active' : ''"
            :style="`background: rgb(--main-color-meta);`"
          >
            <div class="theme-main-color"></div>
            <input
              type="radio"
              name="themeColor"
              @click="onThemeChange($event, tc)"
              :checked="tc === localTheme"
            />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel-title {
  text-align: center;
  font-weight: bold;
  color: var(--card-text-color);
  margin: 0;
}

/* TheStyle */
.style-item {
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.style-theme-color .value {
  display: flex;
  gap: 8px;
}
.style-theme-color .value .style-theme-color-item {
  width: 32px;
  height: 16px;
  padding: 2px;
  border-radius: calc(0.5 * var(--base-radius));
  border: 2px solid var(--card-border-color);
  background: var(--card-bg);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.style-theme-color .theme-main-color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(var(--main-color-meta));
}
.style-theme-color .value .style-theme-color-item input {
  position: absolute;
  appearance: none;
  opacity: 0;
}
.style-theme-color .value .style-theme-color-item.active {
  border: 2px solid rgb(var(--main-color-meta));
}
</style>
