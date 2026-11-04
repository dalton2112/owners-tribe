<template>
  <section class="service-hero band grain">
    <img class="hero-crest" :src="crest" alt="" aria-hidden="true" />
    <div class="wrap hero-inner">
      <p class="service-label">{{ SERVICE_LABEL }}</p>
      <p v-if="hook" class="hook">{{ hook }}</p>
      <h1 class="hero-h1">{{ h1 }}</h1>
      <div class="rule"></div>
      <p v-if="lede" class="lede">{{ lede }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup>
import crest from '@/assets/crest.webp';
import { SERVICE_LABEL } from '@/content/site';

defineProps({
  hook: { type: String, default: '' },
  h1: { type: String, required: true },
  lede: { type: String, default: '' }
});
</script>

<style>
.service-hero { position: relative; overflow: hidden; padding-block: clamp(56px, 8vw, 112px) clamp(64px, 8vw, 104px); }
.hero-inner { position: relative; z-index: 1; }
.hero-crest {
  position: absolute; right: -4%; bottom: -16%; width: min(44vw, 540px);
  opacity: 0.09; pointer-events: none; display: none;
}
@media (min-width: 900px) { .hero-crest { display: block; } }
.service-label {
  font-size: 0.76rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: #A9B6C7; margin: 0 0 22px;
}
.hook {
  font-size: clamp(2.6rem, 5vw + 0.7rem, 4.7rem); font-weight: 900; font-stretch: 118%;
  line-height: 1.02; letter-spacing: -0.02em; color: #FFFFFF; margin: 0 0 22px; max-width: 15ch;
  text-wrap: balance;
}
.service-hero .hero-h1 {
  font-family: var(--serif); font-style: italic; font-weight: 500; font-stretch: 100%;
  font-size: clamp(1.35rem, 1vw + 1.05rem, 1.85rem); line-height: 1.25; letter-spacing: 0;
  color: var(--gold); max-width: 32ch;
}
.service-hero .rule { margin-block: 22px 24px; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 22px; margin-top: 32px; }
.price-note { margin: 0; font-size: 0.92rem; color: #A9B6C7; max-width: 40ch; }
</style>
