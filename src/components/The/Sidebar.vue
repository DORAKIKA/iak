<script setup lang="ts">
import { ref, watch } from "vue";
import IakDrawer from "@components/Iak/drawer.vue";
import { menus } from "src/config";
import { registryFunction } from "@/lib/app/dynamic";

const sidebarShow = ref(false);
const toggleSidebar = (flag?: boolean) => {
  if (flag !== undefined) {
    sidebarShow.value = flag;
  } else {
    sidebarShow.value = !sidebarShow.value;
  }
};

watch(sidebarShow, () => {
  if (sidebarShow.value) {
    setTimeout(() => {
      let firstMenuItem: HTMLElement | null = document.querySelector(
        ".the-sidebar .menu-item"
      );
      if (firstMenuItem) firstMenuItem.focus();
    }, 300);
  } else {
    setTimeout(() => {
      let trigger: HTMLElement | null =
        document.querySelector("#sidebar-trigger");
      if (trigger) trigger.focus();
    }, 300);
  }
});

registryFunction("toggleSidebar", toggleSidebar);
</script>
<template>
  <IakDrawer v-model:show="sidebarShow" class="the-sidebar">
    <template #title><span>菜单</span></template>
    <template #default>
      <div class="menus">
        <div class="menu" v-for="menu in menus" :key="menu.name">
          <div class="menu-name">{{ menu.name }}</div>
          <div class="menu-items">
            <a
              class="menu-item"
              v-for="menuItem in menu.children"
              :href="menuItem.href"
              >{{ menuItem.name }}</a
            >
          </div>
        </div>
      </div>
    </template>
  </IakDrawer>
</template>

<style scoped>
/* TheSidebar */
.the-sidebar .menus {
  padding: 16px;
}
.the-sidebar .menus .menu-name {
  height: 32px;
  line-height: 32px;
  opacity: 0.6;
}
.the-sidebar .menus .menu-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.the-sidebar .menus .menu-item {
  line-height: 48px;
  height: 48px;
  border-radius: var(--base-radius);
  padding-left: 16px;
  text-decoration: none;
  color: rgba(var(--white-meta), 0.8);
  transition: 0.3s;
}
.the-sidebar .menus .menu-item:hover {
  background-color: rgba(var(--white-meta), 0.2);
}
</style>
