<script setup lang="ts">
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipArrow,
  TooltipContent,
} from "radix-vue";
import SidebarItem from "./sidebarItem/index.vue";
const props = defineProps(["actions", "isExpand"]);
</script>

<template>
  <TooltipProvider
    :delay-duration="300"
    :disable-hoverable-content="props.isExpand"
  >
    <TooltipRoot v-for="action in props.actions" :key="action.id">
      <TooltipTrigger as-child>
        <SidebarItem
          class="sidebar-item"
          :menu-item="action"
          :is-expand="isExpand"
        />
      </TooltipTrigger>
      <TooltipPortal v-if="!props.isExpand">
        <TooltipContent
          class="tooltip_content"
          side="right"
          :side-offset="10"
          :area-label="action.title"
          >{{ action.title }}</TooltipContent
        >
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
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
.sidebar-item {
  animation: fadeIn 300ms;
}
</style>
