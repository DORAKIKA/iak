<script setup lang="ts">
import { NCarousel } from "naive-ui"

const {photos} = defineProps<{photos:Array<string>|string}>()

let ps = (photos instanceof Array) ? photos : [photos]
</script>

<template>
  <NCarousel class="photo-slider" dot-type="line" draggable>
    <img v-for="photo in ps" :key="photo" class="photo-slider__item" :src="photo" />
  </NCarousel>
</template>

<style>
.photo-slider{
  position: absolute;
  width: 100%;
  height: 100%;
}
.photo-slider__item{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.n-carousel.n-carousel--bottom .n-carousel__dots{
  bottom: var(--wave-height)
}
</style>