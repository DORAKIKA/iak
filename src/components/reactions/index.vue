<script setup lang="ts">
import { useFetch } from "@/lib/utils";
import { onMounted, ref, type PropType } from "vue";

const props = defineProps({
  slug: String,
  scope: String,
  reactions: Array as PropType<string[]>,
});

const reactions = ref({});
const userReaction = ref();
function setReactions(value: [string, number][]) {
  const ans = {};
  props.reactions.forEach((e) => (ans[e] = 0));
  value.forEach((item) => {
    ans[item[0]] = item[1];
  });
  reactions.value = ans;
}
function refreshReactions() {
  if (props.slug && props.scope) {
    useFetch(`/api/reactions?scope=${props.scope}&slug=${props.slug}`).then(
      (res) => {
        setReactions(res.reactions);
        userReaction.value = res.user_reaction;
      }
    );
  }
}
onMounted(() => {
  refreshReactions();
});

function onReaction(reaction: string) {
  useFetch("/api/reactions", {
    method: "post",
    body: JSON.stringify({
      slug: props.slug,
      scope: props.scope,
      reaction,
    }),
  }).then((res) => {
    if (res) {
      // window.IakApp.toast("success");
      refreshReactions();
    }
  });
}
</script>

<template>
  <div class="iak-post-reactions">
    <button
      class="reaction"
      v-for="(val, key) in reactions"
      :key="key"
      :class="{ active: key == userReaction }"
      @click="onReaction(key)"
    >
      <span class="emoji">{{ key }}</span>
      <span class="num" v-show="val">{{ val }}</span>
    </button>
  </div>
</template>

<style scoped>
.iak-post-reactions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
}
.reaction {
  background: var(--card-bg);
  padding: calc(var(--base-radius) / 2) var(--base-radius);
  border-radius: var(--base-radius);
  border: 1px solid var(--card-border-color);
  cursor: pointer;
}
.reaction:hover {
  transform: scale(1.05);
}
.reaction.active {
  border: 3px solid var(--main-color);
}
.num {
  margin-left: 1em;
}
</style>
