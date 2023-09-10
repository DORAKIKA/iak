<script setup lang="ts">
import TextTooltip from "@/components/Iak/TextTooltip.vue";
import { $userStarPosts, addStarPost, removeStarPost } from "@/store/content";
import type { CollectionEntry } from "astro:content";
import { computed } from "vue";
interface Props {
  post: CollectionEntry<"posts">;
}
const props = defineProps<Props>();

const isContain = computed(() => $userStarPosts.value[props.post.id]);
const toggle = () => {
  if (isContain.value) {
    removeStarPost(props.post.id);
  } else {
    addStarPost({
      ...props.post,
      type: "post",
      title: props.post.data.title,
    });
  }
};
</script>
<i class=""></i>
<template>
  <TextTooltip title="收藏文章" side="top">
    <i
      :class="`${isContain ? 'fa-solid fa-star' : 'fa-regular fa-star'}`"
      @click="toggle"
    ></i>
  </TextTooltip>
</template>

<style scoped>
.fa-solid {
  color: var(--yellow);
}
</style>
