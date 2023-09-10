<script setup lang="ts">
import { computed, onMounted } from "vue";
import { $isSidebarExpand, toggleSidebar } from "@/store/menu";
import { isSmallScreen } from "@/store/app";
import { userStarPosts, STORAGE_STAR_POSTS_KEY } from "@/store/content";
import { useStore } from "@nanostores/vue";
import SidebarButtons from "./SidebarButtons.vue";

const btns = [
  {
    id: "randomPost",
    title: "随机文章",
    icon: "fas fa-shuffle",
    // @ts-ignore
    onClick: () => window.iak.randomPage(),
  },
  {
    id: "openPanel",
    title: "打开面板",
    // @ts-ignore
    onClick: () => window.iak.togglePanel(),
    icon: "fas fa-brush",
  },
];
const basicBtns = [
  {
    id: "toggleSidebar",
    title: "侧边栏",
    onClick: toggleSidebar,
    icon: "fas fa-align-left",
  },
  {
    id: "toggleSearch",
    title: "搜索",
    // @ts-ignore
    onClick: () => window.iak.toggleSearch(),
    icon: "fa-solid fa-magnifying-glass",
  },
];
const topMenus = computed(() => {
  if ($isSidebarExpand.value) {
    return basicBtns.concat(btns);
  } else {
    return basicBtns;
  }
});

const $userStarPosts = useStore(userStarPosts);
const basicMenus = {
  home: {
    id: "home",
    title: "主页",
    icon: "fas fa-home",
    href: "/",
  },
};
const menus = computed(() => {
  return {
    ...basicMenus,
    ...$userStarPosts.value,
  };
});
onMounted(() => {
  console.log("mounted");
  const localUserStarPosts = JSON.parse(
    localStorage.getItem(STORAGE_STAR_POSTS_KEY) ?? "{}"
  );
  userStarPosts.set(localUserStarPosts);
});
</script>

<template>
  <transition name="fade">
    <aside
      v-show="$isSidebarExpand || !isSmallScreen"
      id="app-aside"
      :class="{
        expand: $isSidebarExpand,
        fixed: isSmallScreen,
      }"
    >
      <nav class="aside-card aside-nav">
        <SidebarButtons :actions="topMenus" :is-expand="$isSidebarExpand" />
      </nav>
      <section class="aside-card card-grow">
        <div class="aside-nav">
          <SidebarButtons :actions="menus" :is-expand="$isSidebarExpand" />
        </div>
      </section>
    </aside>
  </transition>
</template>

<style scoped>
#app-aside {
  flex-shrink: 0;
  position: relative;
  width: calc(44px + var(--base-radius) * 2);
  display: flex;
  flex-direction: column;
  gap: var(--base-radius);
  font-size: 24px;
  transition: 300ms;
  /* animation: marginLeftIn 300ms; */
}
#app-aside.fixed {
  box-sizing: content-box;
  position: absolute;
  top: var(--base-radius);
  left: calc(-44px - 2 * var(--base-radius));
  bottom: var(--base-radius);
  background-color: var(--bg);
  pointer-events: none;
  z-index: 10;
}
#app-aside.expand.fixed {
  pointer-events: all;
  left: var(--base-radius);
}
@keyframes marginLeftIn {
  from {
    margin-left: calc(-44px - var(--base-radius) * 2);
  }
  to {
    margin-left: 0;
  }
}
#app-aside.expand {
  width: 250px;
}
.aside-card {
  padding: var(--base-radius);
  border-radius: var(--base-radius);
  background-color: var(--card-bg);
  border: 2px solid var(--card-border-color);
}
.aside-nav {
  display: flex;
  flex-direction: column;
  gap: var(--base-radius);
}
.aside-card.card-grow {
  flex-grow: 1;
}
</style>
