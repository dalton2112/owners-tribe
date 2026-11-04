<template>
  <nav class="section cross-links" aria-label="Related pages">
    <div class="wrap cross-grid">
      <RouterLink v-for="item in items" :key="item.to" class="cross-card" :to="item.to">
        <span class="cross-kicker">{{ item.kicker }}</span>
        <strong>{{ item.title }}</strong>
        <span class="cross-go">{{ item.cta }}<AppIcon name="arrow" :size="18" /></span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import AppIcon from './AppIcon.vue';

defineProps({ items: { type: Array, required: true } });
</script>

<style>
.cross-links { padding-top: 0; }
.cross-grid { display: grid; gap: 16px; }
@media (min-width: 760px) { .cross-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); } }
.cross-card {
  display: flex; flex-direction: column; gap: 6px; padding: 24px 26px; border-radius: 18px; text-decoration: none;
  background: var(--surface-2); border: 1px solid var(--border); color: var(--text);
  transition: border-color 0.15s ease;
}
.cross-card:hover { border-color: var(--heading); }
.cross-kicker { font-size: 0.86rem; color: var(--muted); font-weight: 600; }
.cross-card strong { font-size: 1.2rem; color: var(--heading); font-stretch: 106%; }
</style>
