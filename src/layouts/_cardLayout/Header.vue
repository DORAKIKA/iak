<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps(["bgRGB", "title"]);

const scrollPercent = ref(0);
const backgroundOpacity = ref(0);
const handleScroll = (e: any) => {
  const scrollTop = e.target?.scrollTop;
  const scrollHeight = e.target?.scrollHeight;
  scrollPercent.value = (scrollTop / scrollHeight) * 100;
  backgroundOpacity.value = scrollTop / 200;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll, true);
});
</script>
<template>
  <header
    id="card-header"
    :style="`background-color: rgba(${
      props.bgRGB ?? '29,28,32'
    },${backgroundOpacity}); `"
  >
    <div
      class="title"
      :style="`color: rgba(255,255,255, ${backgroundOpacity - 0.5})`"
    >
      {{ props.title }}
    </div>
    <div class="right">
      <transition name="scale">
        <button class="btn back-top" v-if="scrollPercent > 1">
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
