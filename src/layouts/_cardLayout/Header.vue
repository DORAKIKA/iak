<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
} from "radix-vue";
import { headerLinks } from "@/config/menu";
import { toggleSidebar } from "@/store/menu";

const props = defineProps(["bgRGB", "title"]);

const headerRef = ref<HTMLElement | null>(null);
const scrollPercent = ref(0);
const backgroundOpacity = ref(0);
const textOpacity = ref(0);
const scrollTarget = ref<HTMLElement | null>(null);
const handleScroll = (e: any) => {
  scrollTarget.value = e.target;
  const scrollTop = e.target?.scrollTop ?? 0;
  const scrollHeight = e.target?.scrollHeight ?? 1;
  const clientHeight = e.target?.clientHeight ?? 0;
  scrollPercent.value = (scrollTop / (scrollHeight - clientHeight)) * 100;
  backgroundOpacity.value = Math.min(scrollTop / 200, 0.5);
  textOpacity.value = scrollTop / 200;
};

const backTop = () =>
  scrollTarget.value?.scrollTo({ top: 0, left: 0, behavior: "smooth" });

onMounted(() => {
  const target = document.getElementById("app-main");
  target?.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  const target = document.getElementById("app-main");
  target?.removeEventListener("scroll", handleScroll);
});

const currentTrigger = ref("");
</script>
<template>
  <header
    ref="headerRef"
    id="card-header"
    :style="`background-color: rgba(${
      props.bgRGB ?? 'var(--glassic-bgRGB)'
    },${backgroundOpacity});background-image: linear-gradient(
    rgba(var(--glassic-bgRGB), ${backgroundOpacity}),
    rgba(var(--glassic-bgRGB), ${backgroundOpacity})
  ); `"
  >
    <button class="btn sidebar-toggle" @click="toggleSidebar">
      <i class="fas fa-align-left"></i>
    </button>
    <div
      class="title"
      :style="`color: rgba(var(--glassic-textRGB), ${textOpacity - 0.5})`"
    >
      {{ props.title }}
    </div>
    <div class="right-nav">
      <NavigationMenuRoot v-model="currentTrigger">
        <NavigationMenuList class="navigation_menu_list">
          <NavigationMenuItem
            v-for="group in headerLinks"
            :key="group.title"
            class="navigation_menu_item"
          >
            <NavigationMenuLink v-if="group.href" :href="group.href">{{
              group.title
            }}</NavigationMenuLink>
            <template v-else>
              <NavigationMenuTrigger class="navigation_menu_trigger">{{
                group.title
              }}</NavigationMenuTrigger>
              <NavigationMenuContent class="navigation_menu_content">
                <ul class="header_menu_children">
                  <li
                    v-for="link in group.children"
                    class="header_menu_child"
                    :key="link.title"
                  >
                    <NavigationMenuLink
                      class="header_menu_link"
                      :href="link.href"
                      ><div>
                        {{ link.title }}
                      </div>
                      <p>{{ link.desc }}</p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent></template
            >
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
      <transition name="scale">
        <button class="btn back-top" v-if="scrollPercent > 1" @click="backTop">
          {{ scrollPercent.toFixed(0) }}
        </button>
      </transition>
    </div>
  </header>
</template>
<style scoped>
#card-header {
  position: sticky;
  top: 0;
  z-index: 99;
  height: 60px;
  margin-bottom: -60px;
  padding: 0 var(--main-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(4px);
}
#card-header .title {
  flex-grow: 1;
}
#card-header .btn {
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--bg);
  font-weight: bold;
  cursor: pointer;
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
}
#card-header .btn:hover {
  transform: scale(1.1);
}
#card-header .btn.back-top::before {
  border-radius: 50%;
  background-color: var(--bg);
  content: "⬆";
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 300ms;
}
#card-header .btn.back-top:hover::before {
  opacity: 1;
}

#card-header .sidebar-toggle {
  display: none;
}
@media (max-width: 768px) {
  #card-header .sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.right-nav {
  display: flex;
  align-items: center;
  gap: var(--size-sm);
}
:deep(.navigation_menu_list) {
  margin: 0;
  height: 2em;
  border-radius: 999px;
  background: var(--card-active);
  color: var(--card-active-text);
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.navigation_menu_trigger) {
  padding: var(--size-sm);
}
:deep(.navigation_menu_content) {
  top: 2em;
  right: 0;
}
.header_menu_children {
  display: flex;
  gap: var(--size-sm);
}
.header_menu_link {
  display: inline-block;
  padding: var(--size-sm);
  border-radius: var(--round-sm);
  transition: 300ms;
}
.header_menu_link:hover {
  background-color: rgba(var(--main-color-meta), 0.1);
  color: var(--main-color);
}
</style>
