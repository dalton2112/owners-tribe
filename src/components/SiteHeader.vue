<template>
  <header class="site-header">
    <div class="wrap header-inner">
      <BrandMark />
      <nav class="primary-nav" aria-label="Main">
        <RouterLink v-for="item in SITE.primaryNav" :key="item.id" :to="{ name: item.id }" :class="{ active: isActive(item.id) }">
          {{ item.label }}
        </RouterLink>
      </nav>
      <!-- <RouterLink class="btn btn-gold btn-sm header-cta" :to="BOOK_CALL">Book a Strategy Call</RouterLink> -->
      <a class="btn btn-gold btn-sm header-cta" href="https://calendly.com/adam-bell-acb-logistics" target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="ui.menuOpen"
        aria-controls="mobile-nav"
        @click="ui.menuOpen = !ui.menuOpen"
      >
        <AppIcon :name="ui.menuOpen ? 'x' : 'menu'" :size="22" />
        <span class="sr-only">{{ ui.menuOpen ? 'Close menu' : 'Open menu' }}</span>
      </button>
    </div>
    <div v-show="ui.menuOpen" id="mobile-nav" class="mobile-nav">
      <div class="wrap">
        <nav aria-label="Mobile">
          <RouterLink v-for="item in SITE.mobileNav" :key="item.id" :to="{ name: item.id }" :class="{ active: isActive(item.id) }">
            {{ item.label }}
          </RouterLink>
          <!-- <RouterLink class="btn btn-gold" :to="BOOK_CALL">Book a Strategy Call</RouterLink> -->
          <a class="btn btn-gold" href="https://calendly.com/adam-bell-acb-logistics" target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import AppIcon from './AppIcon.vue';
import BrandMark from './BrandMark.vue';
import { ui } from '@/composables/useUi';
import { SITE } from '@/content/site';
import { BOOK_CALL } from '@/router/links';

const route = useRoute();
// Services stays highlighted on the Start, Scale, and Sell pages.
const isActive = (id) => route.name === id || (id === 'services' && route.meta.section === 'services');
watch(
  () => route.fullPath,
  () => {
    ui.menuOpen = false;
  }
);
</script>

<style>
.site-header {
  position: sticky; top: env(safe-area-inset-top, 0px); z-index: 50;
  background: var(--navy); color: #FFFFFF;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.header-inner { display: flex; align-items: center; gap: 28px; min-height: 76px; }
.primary-nav { display: none; gap: 26px; }
.primary-nav a {
  color: #CBD5E1; text-decoration: none; font-weight: 600; font-size: 0.95rem;
  padding: 8px 0; border-bottom: 2px solid transparent;
}
.primary-nav a:hover { color: #FFFFFF; }
.primary-nav a.active { color: #FFFFFF; border-bottom-color: var(--gold); }
.header-cta { display: none; }
.menu-toggle {
  display: inline-flex; align-items: center; justify-content: center;
  width: 46px; height: 46px; border-radius: 12px; cursor: pointer;
  background: transparent; color: #FFFFFF; border: 1px solid rgba(255, 255, 255, 0.28);
}
.mobile-nav { border-top: 1px solid rgba(255, 255, 255, 0.1); max-height: calc(100vh - 76px); overflow-y: auto; }
.mobile-nav nav { display: flex; flex-direction: column; padding-block: 8px 20px; }
.mobile-nav a:not(.btn) {
  color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 1.08rem;
  padding: 14px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.mobile-nav a.active:not(.btn) { color: var(--gold); }
.mobile-nav .btn { margin-top: 18px; width: 100%; }
@media (min-width: 720px) {
  .header-cta { display: inline-flex; }
}
@media (min-width: 1160px) {
  .primary-nav { display: flex; }
  .menu-toggle, .mobile-nav { display: none !important; }
}
</style>
