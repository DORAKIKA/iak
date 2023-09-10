<script setup lang="ts">
import MenuButtonItem from "./button.vue";
import MenuLinkItem from "./Link.vue";
import MenuPostItem from "./post.vue";
interface Props {
  menuItem: any;
  isExpand: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <MenuLinkItem
    v-if="menuItem.href"
    :menu-item="menuItem"
    :is-expand="isExpand"
  />
  <MenuPostItem
    v-else-if="menuItem.type === 'post'"
    :menu-item="menuItem"
    :is-expand="isExpand"
  />
  <MenuButtonItem
    v-else="menuItem.onClick"
    :menu-item="menuItem"
    :is-expand="isExpand"
  />
</template>

<style scoped>
.nav-button {
  height: 40px;
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  transition: 300ms;
}
.nav-button:hover {
  color: var(--card-text-color);
}
.nav-button__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-button__title {
  font-size: 16px;
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
