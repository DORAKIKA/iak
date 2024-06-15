<script lang="ts" setup>
import PanelStyle from "@components/The/Panel/Style.vue";
import PanelSite from "@components/The/Panel/Site.vue";
import { ref, watch, type PropType } from "vue";
import { registryFunction } from "@/lib/app/dynamic";

defineProps({
  tags: Array as PropType<string[]>,
});

const panelShow = ref(false);
const togglePanel = (flag?: boolean) => {
  if (flag !== undefined) {
    panelShow.value = flag;
    return;
  }
  panelShow.value = !panelShow.value;
};
const currentTab = ref("style");

watch(panelShow, () => {
  if (panelShow.value) {
    setTimeout(() => {
      let focusTab: HTMLElement | null = document.querySelector(
        ".the-panel__content .tab.active"
      );
      if (focusTab) focusTab.focus();
    }, 300);
  } else {
    setTimeout(() => {
      let trigger: HTMLElement | null =
        document.querySelector("#panel-trigger");
      if (trigger) trigger.focus();
    }, 300);
  }
});

registryFunction("togglePanel", togglePanel);
</script>

<template>
  <teleport to="body">
    <transition name="from-rt">
      <div
        class="the-panel__wrapper"
        v-show="panelShow"
        @click.self="togglePanel()"
        @keydown.escape="togglePanel(false)"
      >
        <aside class="the-panel__content">
          <header class="panel-header">
            <div class="tab-container">
              <button
                :class="'site' === currentTab ? 'tab active' : 'tab'"
                @click="currentTab = 'site'"
              >
                <svg
                  t="1678809383797"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5908"
                  width="128"
                  height="128"
                >
                  <path
                    d="M736 864H288c-17.6 0-32 14.4-32 32s14.4 32 32 32h448c17.6 0 32-14.4 32-32s-14.4-32-32-32zM832 96H192c-70.4 0-128 57.6-128 128v416c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V224c0-70.4-57.6-128-128-128zM576 544c0 17.6-14.4 32-32 32H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32z m192-224c0 17.6-14.4 32-32 32H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32z"
                    p-id="5909"
                  ></path>
                </svg>
              </button>
              <button
                :class="'style' === currentTab ? 'tab active' : 'tab'"
                @click="currentTab = 'style'"
              >
                <svg
                  class="icon the-style"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9656"
                  width="32"
                  height="32"
                >
                  <path
                    d="M975.04 278.186667c8.32-8.32 8.32-21.866667 0-30.186667L776 48.96c-4.053333-4.053333-9.386667-6.293333-15.04-6.293333s-11.093333 2.24-15.04 6.293333L668.906667 125.866667l229.333333 229.226666 76.8-76.906666zM67.52 736v199.146667c0 11.84 9.493333 21.333333 21.333333 21.333333H288c0.106667 0 0.213333-0.106667 0.426667-0.106667l-220.693334-220.8c-0.106667 0.213333-0.213333 0.32-0.213333 0.426667zM898.24 668.906667l-102.826667 102.933333c-4.16 4.16-9.6 6.293333-15.04 6.293333s-10.88-2.133333-15.04-6.293333c-8.32-8.32-8.32-21.866667 0-30.186667l102.826667-102.933333-60.373333-60.373333-148.906667 148.906666c-4.16 4.16-9.6 6.293333-15.04 6.293334s-10.88-2.133333-15.04-6.293334c-8.32-8.32-8.32-21.866667 0-30.186666L777.493333 548.266667l-36.266666-36.266667 98.026666-98.026667-99.52-99.52L251.733333 802.346667l99.52 99.626666L512 741.226667l233.813333 233.813333c4.053333 4.053333 9.386667 6.293333 15.04 6.293333s11.093333-2.24 15.04-6.293333l199.146667-199.146667c8.32-8.32 8.32-21.866667 0-30.186666l-76.8-76.8zM122.026667 672.64l99.52 99.52 488-488-99.52-99.52-98.026667 98.133333-36.16-36.16-148.8 148.693334c-4.16 4.16-9.6 6.293333-15.04 6.293333s-10.88-2.133333-15.04-6.293333c-8.32-8.32-8.32-21.866667 0-30.186667l148.8-148.8-60.373333-60.373333-102.826667 102.826666c-4.16 4.16-9.6 6.293333-15.04 6.293334s-10.88-2.133333-15.04-6.293334c-8.32-8.32-8.32-21.866667 0-30.186666L355.2 125.866667l-77.013333-77.013334c-8-8-22.186667-8-30.186667 0L48.96 248c-8.32 8.32-8.32 21.866667 0 30.186667L282.773333 512 122.026667 672.64z"
                    p-id="9657"
                  ></path>
                </svg>
              </button>
            </div>
          </header>
          <div class="panel-container">
            <PanelSite v-show="currentTab === 'site'" :tags="tags" />
            <PanelStyle v-show="currentTab === 'style'" />
          </div>
        </aside>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.the-panel__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 3000;
  transition: opacity 0.3s;
}
.the-panel__content {
  position: absolute;
  right: 0;
  bottom: 1em;
  left: 0;
  margin: auto;
  width: 60vw;
  height: 60vh;
  min-width: 200px;
  min-height: 250px;
  padding: 1em 0.5em;
  border-radius: var(--base-radius);
  background: var(--card-bg);
  color: var(--card-text-color);
  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s cubic-bezier(0.34, 0.99, 0.6, 1);
  display: flex;
  flex-direction: column;
  gap: 1em;
}
@media (max-width: 768px) {
  .the-panel__content {
    width: 100vw;
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.panel-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-container {
  gap: 0.2em;
  background: var(--card-inner-bg);
  padding: 4px;
  border-radius: var(--base-radius);
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel-header .tab {
  min-width: 2em;
  min-height: 2em;
  flex: 1;
  border-radius: var(--base-radius);
  background-color: transparent;
  color: var(--card-text-color);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.panel-header .tab.active {
  background-color: var(--card-bg);
  color: var(--card-text-color);
}
.panel-container {
  flex: 1;
  border-radius: var(--base-radius);
  overflow-y: scroll;
  padding: 0 0.5em;
}

.from-rt-enter-from,
.from-rt-leave-to {
  opacity: 0;
}
.from-rt-enter-to,
.from-rt-leave-from {
  opacity: 1;
}
.from-rt-enter-active,
.from-rt-leave-active {
  transition: 0.3s cubic-bezier(0.34, 0.99, 0.6, 1);
}
.from-rt-enter-from .the-panel__content,
.from-rt-leave-to .the-panel__content {
  transform: translateY(100%);
}
.from-rt-enter-to .the-panel__content,
.from-rt-leave-from .the-panel__content {
  transform: translateY(0);
}
</style>
