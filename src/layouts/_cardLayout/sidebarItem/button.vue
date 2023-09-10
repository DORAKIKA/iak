<script setup lang="ts">
import type { MenuButtonItemOption } from "@/types/menu";
interface Props {
  menuItem: MenuButtonItemOption;
  isExpand: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <button class="menu-item__button" @click="menuItem.onClick">
    <i
      class="menu-item__icon"
      :class="menuItem.icon ?? 'far fa-circle-dot'"
    ></i>
    <transition name="fade">
      <span v-if="isExpand" class="menu-item__title">{{ menuItem.title }}</span>
    </transition>
  </button>
</template>

<style scoped>
.menu-item__button {
  height: 40px;
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  transition: 300ms;
}
.menu-item__button:hover {
  color: var(--card-text-color);
}
.menu-item__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-item__title {
  font-size: 16px;
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
