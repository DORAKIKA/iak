import { map, onMount } from "nanostores";
import type { MenuItemOption } from "@/types/menu";
import { useStore } from "@nanostores/vue";


export const STORAGE_STAR_POSTS_KEY = 'UserStarPosts'

export const userStarPosts = map<Record<string, MenuItemOption | undefined>>({});
export const $userStarPosts = useStore(userStarPosts);

userStarPosts.listen((val) => {
    localStorage.setItem(STORAGE_STAR_POSTS_KEY, JSON.stringify(val))
})
export function addStarPost(item: MenuItemOption) {
  userStarPosts.setKey(item.id, item);
}
export function removeStarPost(id: string) {
  userStarPosts.setKey(id, undefined);
}