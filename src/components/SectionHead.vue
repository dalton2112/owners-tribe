<template>
  <div class="section-head" :class="{ split }">
    <div>
      <h2>{{ title }}</h2>
      <div class="rule"></div>
    </div>
    <p v-if="text">{{ text }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, default: '' },
  split: { type: Boolean, default: true }
});
</script>
