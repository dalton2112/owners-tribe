<template>
  <div class="platforms">
    <a
      v-for="key in ['youtube', 'spotify', 'apple', 'iheart', 'amazon']"
      :key="key"
      class="pl"
      :class="variant"
      :href="platformUrl(key) || '#'"
      target="_blank"
      rel="noopener"
      @click="guardPlatformLink($event, key)"
    >
      <AppIcon :name="key" :size="18" />
      <span>{{ long ? `${PLATFORMS[key].verb} ${PLATFORMS[key].name}` : PLATFORMS[key].name }}</span>
    </a>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue';
import { PLATFORMS } from '@/content/platforms';
import { platformUrl, guardPlatformLink } from '@/composables/usePlatforms';

defineProps({
  variant: { type: String, default: 'light' },
  long: Boolean
});
</script>

<style>
.platforms { display: flex; flex-wrap: wrap; gap: 8px; }
.pl {
  display: inline-flex; align-items: center; gap: 8px; padding: 8px 15px 8px 12px;
  border-radius: 999px; border: 1.5px solid var(--border); background: var(--surface);
  color: var(--heading); font-weight: 700; font-size: 0.88rem; text-decoration: none;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}
.pl:hover { border-color: var(--heading); }
.pl.dark { background: transparent; color: #FFFFFF; border-color: rgba(255, 255, 255, 0.24); }
.pl.dark:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.6); }
.page-hero .platforms { margin-top: 30px; }
</style>
