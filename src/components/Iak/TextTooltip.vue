<script setup lang="ts">
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
} from "radix-vue";
const props = defineProps(["title", "side"]);
</script>

<template>
  <span>
    <TooltipProvider :delay-duration="300">
      <TooltipRoot>
        <TooltipTrigger as-child>
          <slot></slot>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            class="tooltip_content"
            :side="props.side ?? 'right'"
            :side-offset="10"
            >{{ props.title }}</TooltipContent
          >
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </span>
</template>
