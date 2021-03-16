<template>
  <article class="section-box">
    <section class="section-box__heading">
      <HeadingH2>{{ heading }}</HeadingH2>
    </section>
    <section class="section-box__body">
      <slot />
    </section>
  </article>
</template>

<script setup>
import HeadingH2 from './HeadingH2.vue';
import { defineProps } from 'vue';

defineProps({
  heading: String,
});
</script>
