<template>
  <section class="page-hero band grain">
    <div class="wrap">
      <h1>{{ title }}</h1>
      <div class="rule"></div>
      <p v-if="lede" class="lede">{{ lede }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  lede: { type: String, default: '' }
});
</script>
