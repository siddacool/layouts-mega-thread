<template>
  <ProgressContainer>
    <ProgressLine :value="value" />
  </ProgressContainer>
</template>

<script setup>
import { defineProps } from 'vue';
import ProgressContainer from 'ui/ProgressContainer.vue';
import ProgressLine from 'ui/ProgressLine.vue';

defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
</script>
