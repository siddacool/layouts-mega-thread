<template>
  <article class="section-box mb-4 md:mb-10">
    <section class="section-box__heading mb-1 md:mb-2 px-4 md:px-10">
      <HeadingH2>{{ heading }}</HeadingH2>
    </section>
    <section class="section-box__body">
      <slot />
    </section>
  </article>
</template>

<script setup>
import { defineProps } from 'vue';
import HeadingH2 from './HeadingH2.vue';

defineProps({
  heading: String,
});
</script>
