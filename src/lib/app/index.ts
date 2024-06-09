import { toast } from "./toast";
import { initTheme, setTheme } from "./theme";
import * as other from "./other";
import * as dynamic from "./dynamic";
import * as contextmenu from "./contextmenu";
import "./main";

const IakApp = {
  setTheme,
  initTheme,
  toast,
  ...other,
  ...dynamic,
  ...contextmenu,
};

export default IakApp;

/** 挂载Iak */
export function mountIak() {
  window.IakApp = IakApp;
  IakApp.initTheme();
  const event = new Event("iak:mounted");
  window.dispatchEvent(event);
}

/** IakApp挂载完毕 */
export function onIakMounted(callback) {
  if (window.IakApp) {
    callback();
  } else {
    const eventListener = () => {
      callback();
      window.removeEventListener("iak:mounted", eventListener);
    };
    window.addEventListener("iak:mounted", eventListener);
  }
}
