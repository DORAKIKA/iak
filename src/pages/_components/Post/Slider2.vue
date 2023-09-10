<script setup lang="ts">
import { ref, computed } from "vue";
import { post_slider } from "src/config";
import { getStarPosts } from "@/pages/_contents/posts";

const limit = post_slider.limit;
const current = ref(0);
const posts = getStarPosts(limit);

const sliderClick = (num: number) => {
  current.value = num;
};
const active = computed(() => posts[current.value]);
</script>
<template>
  <div class="post-slider" v-if="posts.length">
    <div class="info-wrap" style="--color: var(--main-color)">
      <div class="mask"></div>
      <div class="info-content-wrap">
        <div class="season-cover"><img :src="active.data.cover" alt="" /></div>
        <h3 class="title">{{ active.data.title }}</h3>
        <div class="desc">{{ active.data.description }}</div>
        <a :href="`/post/${active.slug}`" class="button">Go</a>
        <div class="carousel-wrap">
          <div
            class="carousel-item"
            v-for="(post, index) in posts"
            :key="post.slug"
            @click="sliderClick(index)"
            :class="{ active: index === current }"
          >
            <img :src="post.data.cover" />
          </div>
        </div>
      </div>
    </div>
    <div class="cover-wrap" v-if="active.data.cover">
      <img :src="active.data.cover" alt="" />
    </div>
  </div>
</template>

<style scoped>
.post-slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-slider {
  width: 100%;
  aspect-ratio: 3/1;
  position: relative;
  color: white;
  margin: 2em 0 1em;
}
.cover-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: calc(100% - 1rem);
  border-radius: var(--base-radius);
  box-shadow: 0 0 0 3px var(--main-color);
  overflow: hidden;
}
.info-wrap {
  position: absolute;
  left: 5%;
  top: 1rem;
  bottom: 0;
  right: 0;
  border-radius: var(--base-radius);
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  background-color: var(--color);
  transition: 0.3s;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.info-content-wrap {
  position: relative;
  width: 42.1%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  gap: 1rem;
}
.season-cover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.05;
  filter: saturate(0) contrast(150%);
}
.title,
.desc,
.button {
  position: relative;
}
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 2rem;
}
.button {
  background-color: var(--card-bg);
  color: var(--card-text-color);
  line-height: 2rem;
  border: none;
  border-radius: var(--base-radius);
  text-align: center;
  transition: 0.3s;
}
.button:hover {
  background-color: var(--main-color);
  color: white;
}
.carousel-wrap {
  position: relative;
  display: flex;
  gap: 1rem;
  height: 4rem;
}
.carousel-item {
  width: calc(calc(100% - 3rem) / 4);
  overflow: hidden;
  border-radius: var(--base-radius);
  cursor: pointer;
  box-shadow: 0 0 0 2px var(--color-op);
  transition: 0.3s;
}

.carousel-item:hover {
  box-shadow: 0 0 0 3px var(--color-deep-op);
}
.carousel-item.active {
  box-shadow: 0 0 0 4px var(--color-deep-op);
}
@media (max-width: 768px) {
  .carousel-wrap {
    flex-wrap: wrap;
    height: 5rem;
    gap: 0.5rem;
  }
  .carousel-item {
    width: calc(calc(100% - 0.5rem) / 2);
    height: 2.25rem;
  }
}
</style>
