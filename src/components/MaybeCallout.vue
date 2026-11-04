<template>
  <aside class="maybe-callout" aria-labelledby="maybe-heading">
    <span class="mc-icon"><AppIcon name="compass" :size="26" /></span>
    <div>
      <h2 id="maybe-heading" class="mc-title">{{ maybe.title }}</h2>
      <p>{{ maybe.text }}</p>
      <RouterLink class="text-link" :to="maybe.linkTo">{{ maybe.linkLabel }}</RouterLink>
    </div>
  </aside>
</template>

<script setup>
import AppIcon from './AppIcon.vue';

defineProps({ maybe: { type: Object, required: true } });
</script>

<style>
.maybe-callout {
  position: relative; z-index: 2; display: grid; grid-template-columns: auto 1fr; gap: 18px;
  margin-top: -40px; padding: clamp(22px, 3vw, 32px); border-radius: 20px;
  background: var(--surface); border: 2px solid var(--gold); box-shadow: var(--shadow);
}
.mc-icon { width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center; background: var(--gold); color: var(--navy); }
.mc-title { font-size: clamp(1.2rem, 0.8vw + 1rem, 1.5rem); margin-bottom: 8px; }
.maybe-callout p { color: var(--muted); margin-bottom: 10px; }
</style>
