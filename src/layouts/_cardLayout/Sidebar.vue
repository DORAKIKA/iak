<script setup lang="ts">
import { ref } from "vue";

const navBtns = [
  {
    title: "随机文章",
    onclick: () => window.iak.randomPage(),
  },
  {
    title: "打开面板",
    onclick: () => window.iak.togglePanel(),
    icon: "fas fa-brush",
  },
  {
    title: "主页",
    icon: "fas fa-home",
  },
  {
    title: "搜索",
    onclick: () => window.iak.toggleSearch(),
    icon: "fa-solid fa-magnifying-glass",
  },
];

const isSidebarShow = ref(false);
const toggleSidebar = () => (isSidebarShow.value = !isSidebarShow.value);
</script>

<template>
  <aside id="app-aside" :class="isSidebarShow ? 'expand' : ''">
    <section class="aside-card aside-nav">
      <button
        v-for="btn in navBtns"
        :key="btn.title"
        class="nav-button"
        @click="btn.onclick"
      >
        <i
          class="nav-button__icon"
          :class="btn.icon ?? 'far fa-circle-dot'"
        ></i>
        <transition name="fade">
          <span v-if="isSidebarShow" class="nav-button__title">{{
            btn.title
          }}</span>
        </transition>
      </button>
    </section>
    <section class="aside-card card-grow">
      <div class="aside-nav">
        <button class="nav-button" @click="toggleSidebar">
          <i class="nav-button__icon fas fa-align-left"></i>
          <span v-if="isSidebarShow" class="nav-button__title">侧边栏</span>
        </button>
      </div>
    </section>
  </aside>
</template>

<style scoped>
#app-aside {
  flex-shrink: 0;
  position: relative;
  width: 60px;
  display: flex;
  flex-direction: column;
  gap: var(--base-radius);
  font-size: 24px;
  transition: 300ms;
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
.nav-button {
  height: 32px;
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 100;
  cursor: pointer;
  transition: 300ms;
}
.nav-button:hover {
  color: var(--card-text-color);
}
.nav-button__icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
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
