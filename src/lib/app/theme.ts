import { useLocalStorage } from "@vueuse/core";
import iakConfig from "iak.config";

interface SetThemeOptions {
  /** start x */
  x?: number;
  /** start y */
  y?: number;
  /** @default 300 ms */
  duration?: number;
}

/**
 * 设置主题
 * @param theme 主题名称
 * @param options 主题配置
 */
export function setTheme(theme: string, options?: SetThemeOptions) {
  const root = document.documentElement;
  if (root.getAttribute("data-theme") == theme) {
    return;
  }

  const {
    x = innerWidth / 2,
    y = innerHeight / 2,
    duration = 300,
  } = options ?? {};
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  // @ts-ignore
  const transition = document.startViewTransition(() => {
    const localTheme = useLocalStorage("iak.theme", iakConfig.defaultTheme);
    localTheme.value = theme;
    root.setAttribute("data-theme", theme);
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration,
        easing: "ease-in",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
}

/**
 * 初始化主题
 */
export function initTheme() {
  if (!import.meta.env.SSR) {
    const localTheme = useLocalStorage("iak.theme", iakConfig.defaultTheme);
    document.documentElement.setAttribute("data-theme", localTheme.value);
  }
}
