<template>
  <div class="doors">
    <RouterLink v-for="d in DOORS" :key="d.id" class="door" :to="d.to">
      <span class="door-icon"><AppIcon :name="d.icon" :size="26" /></span>
      <span class="door-label">{{ d.label }}</span>
      <span class="door-text">{{ d.text }}</span>
      <span class="door-go">Choose {{ d.label }}<AppIcon name="arrow" :size="18" /></span>
    </RouterLink>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue';
import { DOORS } from '@/content/site';
</script>

<style>
.doors { display: grid; gap: 14px; }
@media (min-width: 820px) { .doors { grid-template-columns: repeat(3, 1fr); gap: 18px; } }
.door {
  display: flex; flex-direction: column; gap: 8px; padding: 26px; border-radius: 20px; text-decoration: none;
  background: #FFFFFF; color: var(--navy); border: 1px solid #DCE2E9;
  box-shadow: 0 26px 50px -30px rgba(15, 39, 68, 0.55);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.door:hover { transform: translateY(-3px); box-shadow: 0 30px 60px -28px rgba(15, 39, 68, 0.65); }
.door-icon { width: 52px; height: 52px; border-radius: 14px; display: grid; place-items: center; background: var(--navy); color: var(--gold); margin-bottom: 6px; }
.door-label { font-size: 2rem; font-weight: 900; font-stretch: 120%; line-height: 1; }
.door-text { color: #4A5563; line-height: 1.45; }
.door-go { display: inline-flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 10px; font-weight: 700; color: #11787A; }
</style>
