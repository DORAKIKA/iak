export function useFetch(url: string, config?: RequestInit) {
  return fetch(url, config).then((res) => res.json());
}
