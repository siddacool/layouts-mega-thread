<template>
  <div class="sub-section mb-2 md:mb-8">
    <section class="sub-section__heading mb-2">
      <HeadingH3>{{ heading }}</HeadingH3>
    </section>
    <section class="sub-section__body">
      <slot />
    </section>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import HeadingH3 from './HeadingH3.vue';

defineProps({
  heading: String,
});
</script>

<style>
.sub-section__body > * {
  margin-bottom: 16px;
}
</style>
