export interface ContextItem {
  text?: string;
  icon?: string;
  action: (target: any) => void;
  tag?: string;
  color?: string;
}
export interface ContextGroup {
  name?: string;
  type: string;
  color?: string;
  children: ContextItem[];
  target?: any;
}

const contextMenuStore: Record<string, ContextGroup> = {
  base: {
    type: "small",
    children: [
      {
        icon: "fa-solid fa-arrow-up",
        action() {
          scrollTo(0, 0);
        },
      },
      {
        icon: "fas fa-refresh",
        action() {
          location.reload();
        },
      },
      {
        icon: "fa-solid fa-arrow-left",
        action() {
          history.back();
        },
      },
      {
        icon: "fa-solid fa-arrow-right",
        action() {
          history.forward();
        },
      },
    ],
  },

  global: {
    type: "line",
    children: [
      {
        icon: "fa-solid fa-moon",
        text: "夜间模式",
        action() {
          window.IakApp.setTheme("dark");
        },
        tag: "全局",
      },
      {
        icon: "fa-solid fa-random",
        text: "随机文章",
        action() {
          window.IakApp.getRandomPost();
        },
        tag: "全局",
      },
    ],
  },
  selection: {
    type: "line",
    name: "选区",
    children: [
      {
        icon: "fa-solid fa-copy",
        text: "复制",
        action(obj) {
          let text = obj.value;
          if (text) {
            if (typeof text === "string") {
              text = text.trim();
            }
            if (text) {
              navigator.clipboard.writeText(text).then(
                function () {
                  window.IakApp.toast("复制成功");
                },
                function () {
                  window.IakApp.toast("复制失败");
                }
              );
            }
          }
        },
      },
      {
        icon: "fa-solid fa-search",
        text: "站内搜索",
        action(obj) {
          window.IakApp.execFunction("toggleSearch", true, obj.value);
        },
      },
      {
        icon: "fa-solid fa-search",
        text: "站外搜索",
        action(obj) {
          console.log(obj);
          window.open(`https://cn.bing.com/search?q=${obj.value}`);
        },
      },
    ],
  },
};

export function registerContextMenu(role: string, menu: ContextGroup) {
  contextMenuStore[role] = menu;
}

export function getContextMenuByRole(role: string) {
  return contextMenuStore[role];
}
