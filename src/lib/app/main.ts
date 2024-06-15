import { onIakMounted } from ".";

// @ts-ignore
Fancybox.bind("[data-fancybox]", {});

onIakMounted(() => {
  console.log("Iak loaded");
  welcome();
  window.addEventListener("blur", () => {
    // 页面失去焦点，恢复初始状态
    window.IakApp.execFunction("togglePanel", false);
    window.IakApp.execFunction("toggleSearch", false);
    window.IakApp.execFunction("toggleSidebar", false);
    window.IakApp.execFunction("toggleHeadings", false);
  });
});

function welcome() {
  // 根据时间设置主题\欢迎语等等
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();

  // 欢迎语
  if (localStorage.getItem("iak.welcome") !== `${year}-${month}-${day}`) {
    if (hour < 6) {
      window.IakApp.toast("夜深了，注意休息");
    } else if (hour < 9) {
      window.IakApp.toast("早上好");
    } else if (hour < 12) {
      window.IakApp.toast("上午好");
    } else if (hour < 14) {
      window.IakApp.toast("中午好");
    } else if (hour < 17) {
      window.IakApp.toast("下午好");
    } else if (hour < 19) {
      window.IakApp.toast("傍晚好");
    } else if (hour < 22) {
      window.IakApp.toast("晚上好");
    } else {
      window.IakApp.toast("夜深了，注意休息");
    }
    localStorage.setItem("iak.welcome", `${year}-${month}-${day}`);
  }
}
