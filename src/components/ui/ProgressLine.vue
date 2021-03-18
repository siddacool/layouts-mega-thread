<template>
  <span :style="`width: ${value}%;`" class="ui-progress-line block h-full bg-indigo-600"></span>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
</script>
