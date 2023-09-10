import { useStore } from "@nanostores/vue";
import { atom, map } from "nanostores";

export const isSidebarExpand = atom(false);
export const $isSidebarExpand = useStore(isSidebarExpand);
export const toggleSidebar = () => isSidebarExpand.set(!$isSidebarExpand.value);