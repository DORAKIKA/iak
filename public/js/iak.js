// 全局对象，方便管理
// 建议将不涉及dom操作的函数放在这里，涉及到dom操作的函数可放在相应的组件中
window.iak = {
  data: {
    // 文章列表
    posts: [],
    // 友链列表
    friends: [],
  },
  toggleDarkModeV2(e) {
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    let isDark;
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains("dark");
      root.classList.remove(isDark ? "dark" : "light");
      root.classList.add(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  },
  // 前往随机文章页面
  randomPage() {
    if (this.data.posts.length) {
      const rand = Math.floor(Math.random() * this.data.posts.length);
      SnackBar({
        message: `随机文章为 <a href="${this.data.posts[rand].url}" target="_self">「${this.data.posts[rand].title}」</a>`,
        fixed: true,
        position: "tc",
        timeout: 5000,
      });
    }
  },
  toggleDarkMode(flag) {
    if (flag === undefined) {
      document.documentElement.classList.toggle("dark");
    } else {
      if (flag) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    return document.documentElement.classList.contains("dark");
  },
  // 默认函数，若相应组件内绑定失败，则使用此函数
  togglePanel: defaultFunc("切换面板"),
  toggleSearch: defaultFunc("切换搜索"),
  toggleSidebar: defaultFunc("切换侧边栏"),
  toggleHeadings: defaultFunc("切换目录"),

  say(str) {
    if (SnackBar) {
      SnackBar({
        message: str,
        fixed: true,
        position: "tc",
      });
    }
  },
  // 向html的class设置主题
  setTheme(theme) {
    document.documentElement.classList.add(theme);
  },
  // 退出全屏
  cancelFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else {
      console.log("退出全屏失败");
    }
  },
  // 进入全屏
  requestFullscreen(el) {
    console.log(el);
    el?.requestFullscreen();
  },
  welcome() {
    // 根据时间设置主题\欢迎语等等
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();

    // 欢迎语
    if (localStorage.getItem("welcome") !== `${year}-${month}-${day}}`) {
      if (hour < 6) {
        iak.say("夜深了，注意休息");
      } else if (hour < 9) {
        iak.say("早上好");
      } else if (hour < 12) {
        iak.say("上午好");
      } else if (hour < 14) {
        iak.say("中午好");
      } else if (hour < 17) {
        iak.say("下午好");
      } else if (hour < 19) {
        iak.say("傍晚好");
      } else if (hour < 22) {
        iak.say("晚上好");
      } else {
        iak.say("夜深了，注意休息");
      }
      localStorage.setItem("welcome", `${year}-${month}-${day}}`);
    }

    // 设置主题
    if (month === 4 && day >= 4 && day <= 6) {
      // 清明节
      // iak.setTheme('gray');
    }
  },
};

// 右键菜单配置
iak.contextMenu = {
  base: [
    {
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
  ],
  global: {
    type: "line",
    children: [
      {
        icon: "fa-solid fa-moon",
        text: "夜间模式",
        action() {
          iak.toggleDarkMode();
        },
        tag: "全局",
      },
      {
        icon: "fa-solid fa-random",
        text: "随机文章",
        action() {
          iak.randomPage();
        },
        tag: "全局",
      },
    ],
  },
  selection: [
    {
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
                    SnackBar({
                      message: "复制成功",
                      fixed: true,
                      position: "tc",
                    });
                  },
                  function () {
                    SnackBar({
                      message: "复制失败",
                      fixed: true,
                      position: "tc",
                    });
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
            console.log(obj);
            iak.toggleSearch(true, obj.value);
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
  ],
};

// 辅助函数
function defaultFunc(msg) {
  const func = function () {
    if (SnackBar) {
      SnackBar({
        message: msg,
        fixed: true,
      });
    } else {
      console.warn(msg);
    }
  };
  func.type = "default";
  return func;
}

iak.welcome();

window.addEventListener("DOMContentLoaded", main);
function main() {
  // fancybox
  Fancybox.bind("[data-fancybox]", {});
  window.addEventListener("blur", () => {
    // 页面失去焦点，恢复初始状态
    iak.togglePanel.type !== "default" && iak.togglePanel(false);
    iak.toggleSearch.type !== "default" && iak.toggleSearch(false);
    iak.toggleSidebar.type !== "default" && iak.toggleSidebar(false);
    iak.toggleHeadings.type !== "default" && iak.toggleHeadings(false);
  });

  // 记录当前阅读位置，窗口resize后恢复
  contentBackAfterResize();

  function contentBackAfterResize() {
    let contentDom = document.querySelector("article#post");
    if (contentDom) {
      const contentPositionFunc = handlerContentPosition();
      window.addEventListener("resize", () => contentPositionFunc("resize"));
      window.addEventListener("scroll", () => contentPositionFunc("scroll"));
      function handlerContentPosition() {
        let scrollPaddingTop = parseInt(
          getComputedStyle(document.documentElement).scrollPaddingTop
        );
        let curEl = getCurEl();
        let timer = null;
        let resize = false;
        let scrollTimer = null;

        return function (type) {
          if (type === "resize") {
            resize = true;
            clearTimeout(timer);
            timer = setTimeout(() => {
              scrollToCurEl();
              resize = false;
            }, 100);
          } else {
            if (resize) return;
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
              curEl = getCurEl();
            }, 100);
          }
        };
        function getCurEl(content = contentDom) {
          let children = content.children;
          for (let i = 0; i < children.length; i++) {
            if (children[i].offsetTop - scrollPaddingTop >= window.scrollY) {
              return children[i];
            } else if (
              children[i].clientHeight +
                children[i].offsetTop -
                scrollPaddingTop >
                window.scrollY &&
              children[i].children.length
            ) {
              // 如果元素尾部在可视区域，则查找其子元素
              let child = getCurEl(children[i]);
              if (child) {
                return child;
              }
            }
          }
          return null;
        }
        function scrollToCurEl() {
          if (curEl) {
            console.log(curEl.offsetTop - scrollPaddingTop);
            document.documentElement.scrollTo(
              0,
              curEl.offsetTop - scrollPaddingTop
            );
          }
        }
      }
    }
  }
}
