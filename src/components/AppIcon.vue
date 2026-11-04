<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="ICONS[name] || ''"
  ></svg>
</template>

<script setup>
import { ICONS } from './icons';

defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 }
});
</script>
