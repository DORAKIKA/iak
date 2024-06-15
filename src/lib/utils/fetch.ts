export function useFetch(url: string, config?: RequestInit) {
  return fetch(url, config).then((res) => {
    console.log(res);
    switch (res.status) {
      case 200:
        return res.json();
      case 401:
        window.IakApp.toast("要先登录哦！");
        throw new Error("401");
      default:
        throw new Error("");
    }
  });
}
