<script setup lang="ts">
import type { MenuItemProOption } from "@/types/menu";
import { removeStarPost } from "@/store/content";
interface Props {
  menuItem: MenuItemProOption;
  isExpand: boolean;
}
const props = defineProps<Props>();

const deleteItem = (e: any) => {
  e.preventDefault();
  removeStarPost(props.menuItem.id);
};
</script>

<template>
  <a :href="`/post/${menuItem.slug}`" class="menu-item__post">
    <img class="menu-item__cover" :src="menuItem.data.cover" alt="" />
    <transition name="fade">
      <div v-if="isExpand" class="menu-item__title">
        {{ menuItem.data.title }}
        <i @click="deleteItem" class="fa-regular fa-circle-xmark"></i>
      </div>
    </transition>
  </a>
</template>

<style scoped>
.menu-item__post {
  height: 40px;
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  transition: 300ms;
}
.menu-item__post:hover {
  color: var(--card-text-color);
}
.menu-item__cover {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 18px;
  border-radius: var(--round-sm);
  object-fit: cover;
  opacity: 0.8;
}
.menu-item__post:hover .menu-item__cover {
  opacity: 1;
}
.menu-item__title {
  font-size: 16px;
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
