import { useEventListener } from "@vueuse/core";
import { onMounted, onUnmounted } from "vue";

export interface AstroPageLoadOptions {
  immediate?: boolean;
  once?: boolean;
}

// use astro ViewTransition event
export const useAstroPageLoad = (
  func: Function,
  { immediate, once }: AstroPageLoadOptions
) => {
  onMounted(() => {
    // some client:only components may use this
    if (immediate) {
      func();
    }
    // @ts-ignore
    document.addEventListener("astro:page-load", func, { once });
  });
  onUnmounted(() => {
    // @ts-ignore
    document.removeEventListener("astro:page-load", func);
  });
};
