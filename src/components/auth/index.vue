<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { GithubIcon, LogOutIcon } from "lucide-vue-next";
import { IakCard } from "@/lib/ui";
import { signIn, signOut } from "auth-astro/client";
import { useFetch } from "@/lib/utils";
import type { Session } from "@auth/core/types";
import { registryFunction } from "@/lib/app/dynamic";

const [show, toggleAuth] = useToggle(false);

const session = ref<Session>();

onMounted(() => {
  toggleAuth(true);
  useFetch("/api/me", { method: "post" }).then((res) => {
    // console.log(res);
    session.value = res;
  });
});

function onSignIn(provider: "github") {
  signIn(provider, {
    callbackUrl: location.origin + location.pathname,
  });
}
function onSignOut() {
  signOut();
}

// toggle
registryFunction("toggleAuth", toggleAuth);
</script>

<template>
  <teleport to="body">
    <aside class="aside-auth" v-show="show">
      <IakCard
        as="aside"
        v-if="!session?.user"
        class="github-auth"
        title="github登录"
        @click="onSignIn('github')"
      >
        <GithubIcon />
      </IakCard>
      <IakCard v-else @click="onSignOut" class="signout" title="登出">
        <img class="avatar" :src="session.user.image" alt="" />
        <LogOutIcon class="logout-icon" size="1em" />
      </IakCard>
    </aside>
  </teleport>
</template>

<style scoped>
.aside-auth {
  position: fixed;
  left: var(--base-radius);
  bottom: var(--base-radius);
  background-color: var(--bg);
  border-radius: var(--base-radius);
  box-shadow: var(--card-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
}
.github-auth {
  width: 3em;
  height: 3em;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.signout {
  padding: calc(var(--base-radius) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.avatar {
  width: 1.5em;
  height: 1.5em;
  border-radius: calc(var(--base-radius) / 2);
}
.logout-icon {
  width: 0px;
  transition: 300ms;
}
.signout:hover .logout-icon {
  margin-left: 1em;
  width: 1em;
}
</style>
