<template>
  <main class="mt-4 md:mt-10">
    <SectionBox heading="Star Wars opening crawl">
      <Suspense>
        <template #default>
          <StarWarsOpeningCrawl />
        </template>
        <template #fallback> Loading... </template>
      </Suspense>
    </SectionBox>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import SectionBox from 'components/SectionBox.vue';
const StarWarsOpeningCrawl = defineAsyncComponent(() => import('sections/StarWarsOpeningCrawl'));
</script>
