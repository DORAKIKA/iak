import { useMediaQuery } from "@vueuse/core";

export const isSmallScreen = useMediaQuery('(max-width: 768px)')