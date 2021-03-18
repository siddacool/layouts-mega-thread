<template>
  <ProgressContainer class="relative">
    <ProgressLine :value="value" />
    <div
      class="absolute h-4 w-4 bg-white rounded-full border-gray-500 border cursor-pointer"
      style="top: -4px; left: 0"
      @dragstart="handleDragStart"
      draggable
    ></div>
  </ProgressContainer>
</template>

<script setup>
import { defineProps } from 'vue';
import ProgressContainer from 'ui/ProgressContainer.vue';
import ProgressLine from 'ui/ProgressLine.vue';

const handleDragStart = (e) => {
  console.log(e);
};

defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
</script>
