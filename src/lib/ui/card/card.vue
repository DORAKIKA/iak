<script setup lang="ts">
interface Props {
  as?: string;
}
defineOptions({
  name: "IakCard",
  inheritAttrs: true,
});
withDefaults(defineProps<Props>(), {
  as: "div",
});
</script>

<template>
  <component :is="as" class="iak-card"><slot></slot></component>
</template>

<style scoped>
.iak-card {
  padding: var(--base-radius);
  background-color: var(--card-bg);
  color: var(--card-text-color);
  border: 3px solid var(--card-border-color);
  border-radius: var(--base-radius);
  transition-duration: 0.3s;
}
.iak-card:is(:hover, :focus-within) {
  /* transform: translateY(-4px); */
  box-shadow: 0 12px 6px rgba(var(--main-color-meta), 0.2), var(--card-outline);
  color: var(--main-color);
  outline: none;
}
</style>
