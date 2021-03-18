<template>
  <div class="star-wars flex relative content-center font-bold" style="height: 600px">
    <div class="block overflow-hidden">
      <Background />
      <div class="crawl text-yellow-400 relative">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Background from './Background.vue';
</script>

<style>
.star-wars {
  font-size: 500%;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
}

.crawl {
  top: 9999px;
  transform-origin: 50% 100%;
  animation: crawl 60s linear;
}

@keyframes crawl {
  0% {
    top: 0;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
}
</style>
