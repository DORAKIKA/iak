<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps(["bgRGB", "title"]);

const isParent = (self: HTMLElement | null, target: HTMLElement): boolean => {
  if (self) {
    self = self.parentElement;
    return self == target || isParent(self, target);
  } else {
    return false;
  }
};

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
  backgroundOpacity.value = Math.min(scrollTop / 200, 0.8);
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
</script>
<template>
  <header
    ref="headerRef"
    id="card-header"
    :style="`background-color: rgba(${
      props.bgRGB ?? '29,28,32'
    },${backgroundOpacity}); `"
  >
    <div
      class="title"
      :style="`color: rgba(255,255,255, ${textOpacity - 0.5})`"
    >
      {{ props.title }}
    </div>
    <div class="right">
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
</style>
