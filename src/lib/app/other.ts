import type { CollectionEntry } from "astro:content";
import { useFetch } from "../utils";
import { getPostUrl } from "../utils/content";

/** 抽一个随机文章 */
export function getRandomPost() {
  useFetch("/api/post?type=random&size=1", { method: "get" }).then(
    (posts: CollectionEntry<"posts">[]) => {
      if (posts.length) {
        const post = posts[0];
        const msg = `随机文章为 <a href="${getPostUrl(
          post
        )}" target="_self">「${post.data.title}」</a>`;
        window.IakApp.toast(msg, {
          duration: 5000,
        });
      }
    }
  );
}

/** 取消全屏 */
export function cancelFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    /** @ts-ignore */
  } else if (document.msExitFullscreen) {
    /** @ts-ignore */
    document.msExitFullscreen();
    /** @ts-ignore */
  } else if (document.mozCancelFullScreen) {
    /** @ts-ignore */
    document.mozCancelFullScreen();
    /** @ts-ignore */
  } else if (document.webkitExitFullscreen) {
    /** @ts-ignore */
    document.webkitExitFullscreen();
  } else {
    console.log("退出全屏失败");
  }
}
