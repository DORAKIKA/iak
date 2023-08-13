<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
</script>

<template>
  <Popover v-slot="{ open }" class="iak-popover">
    <PopoverButton class="iak-popover__trigger">
      <slot></slot>
    </PopoverButton>
    <PopoverPanel class="iak-popover__panel">
      <slot name="panel"></slot>
    </PopoverPanel>
  </Popover>
</template>