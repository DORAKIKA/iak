<script setup lang="ts">
import { registryFunction } from "@/lib/app/dynamic";
import { useFetch } from "@/lib/utils";
import { getPostUrl } from "@/lib/utils/content";
import { useThrottleFn } from "@vueuse/core";
import type { CollectionEntry } from "astro:content";
import { ref, reactive, onMounted, watch } from "vue";
const state = reactive({
  loading: false,
  searchInput: "",
  articles: [] as CollectionEntry<"posts">[],
  results: [] as CollectionEntry<"posts">[],
});
onMounted(() => {
  query();
});

const query = async () => {
  state.loading = true;
  useFetch(`/api/post?search=${state.searchInput}&size=10`, { method: "get" })
    .then((res) => {
      state.results = res;
    })
    .finally(() => {
      state.loading = false;
    });
};
const onSearch = useThrottleFn(query, 1000);
const searchShow = ref(false);
const toggleSearch = (value: boolean | undefined, text?: string) => {
  if (value !== undefined) {
    searchShow.value = value;
  } else {
    searchShow.value = !searchShow.value;
  }
  if (text) state.searchInput = text;
  return;
};

watch(searchShow, () => {
  if (searchShow.value) {
    setTimeout(() => {
      let searchInput: HTMLElement | null =
        document.querySelector(".the-search-input");
      if (searchInput) searchInput.focus();
    }, 300);
  } else {
    setTimeout(() => {
      let trigger: HTMLElement | null =
        document.querySelector("#search-trigger");
      if (trigger) trigger.focus();
    }, 300);
  }
});

registryFunction("toggleSearch", toggleSearch);
</script>

<template>
  <teleport to="body">
    <transition name="pop">
      <div
        class="the-search-wrapper"
        v-show="searchShow"
        @click.self="toggleSearch(false)"
        @keydown.escape="toggleSearch(false)"
      >
        <div class="the-search-loading" v-show="state.loading">
          <svg
            t="1670941746641"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5314"
            width="128"
            height="128"
          >
            <path
              d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z"
              fill="#262626"
              p-id="5315"
            ></path>
          </svg>
        </div>
        <div class="the-search">
          <input
            name="searchInput"
            autofocus
            class="the-search-input"
            type="text"
            v-model="state.searchInput"
            @keydown.enter="onSearch"
          />
          <label for="searchInput" class="enter-emoji">↩️</label>
          <div class="the-search-result">
            <a
              class="search-result-item"
              v-for="item in state.results"
              :key="item.slug"
              :href="getPostUrl(item)"
              @click="toggleSearch(false)"
            >
              <div class="title">{{ item.data.title }}</div>
              <div class="desc">{{ item.data.description }}</div>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
/* TheSearch */
.the-search-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 8000;
}
.the-search-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.the-search-loading .icon {
  animation: search 0.5s alternate-reverse infinite;
}
@keyframes search {
  0% {
    transform: translate(20px);
  }
  100% {
    transform: translate(-20px);
  }
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}
.pop-enter-to,
.pop-leave-from {
  opacity: 1;
}
.pop-enter-active,
.pop-leave-active {
  transition: 0.3s cubic-bezier(0.14, 0.99, 0.55, 1.24);
}
.pop-enter-from .the-search,
.pop-leave-to .the-search {
  transform: scale(0.2);
}
.pop-enter-to .the-search,
.pop-leave-from .the-search {
  transform: scale(1);
}
.the-search {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 80vw;
  height: 50vh;
  min-width: 300px;
  max-width: 600px;
  min-height: 300px;
  border: 4px solid var(--white);
  background: var(--main-color);
  border-radius: var(--base-radius);
  padding: 16px;
  transform: scale(1);
  transition: 0.3s cubic-bezier(0.14, 0.99, 0.55, 1.24);
}
.enter-emoji {
  position: absolute;
  right: calc(16px + var(--base-radius));
  line-height: 48px;
}
.the-search .the-search-input {
  width: 100%;
  height: 48px;
  line-height: 48px;
  background-color: rgba(var(--white-meta), 0.2);
  color: var(--font-color);
  border: none;
  outline: none;
  padding: 0 16px;
  border-radius: var(--base-radius);
  transition: 0.3s;
}
.the-search .the-search-input:focus {
  background: rgba(var(--white-meta), 0.5);
}
.the-search .the-search-result {
  overflow-y: overlay;
  overflow-x: hidden;
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
}
.the-search .the-search-result::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.the-search .the-search-result::-webkit-scrollbar-thumb {
  background-color: rgba(var(--white-meta), 0.2);
}
.the-search .search-result-item {
  background-color: rgba(var(--white-meta), 0.2);
  border-radius: var(--base-radius);
  padding: var(--base-radius);
  text-decoration: none;
  color: var(--white);
  transition: 0.3s;
}
.the-search .search-result-item:is(:hover, :focus) {
  background: rgba(var(--white-meta), 0.4);
}
.the-search .search-result-item .title {
  font-size: 1.2em;
  line-height: 1.5;
  font-weight: bold;
}
.the-search .search-result-item .desc {
  font-size: 0.9em;
  line-height: 1.5;
}
</style>
