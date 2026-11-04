<template>
  <RouterLink class="brand" :to="{ name: 'home' }" aria-label="The Owner’s Tribe, home">
    <img :src="crest" alt="" width="48" height="47" />
    <span class="brand-text" aria-hidden="true">
      <span class="brand-top">THE OWNER’S</span>
      <span class="brand-main">TRIBE</span>
    </span>
  </RouterLink>
</template>

<script setup>
import crest from '@/assets/crest.webp';
</script>

<style>
.brand { display: flex; align-items: center; gap: 12px; color: #FFFFFF; text-decoration: none; margin-right: auto; }
.brand img { width: 48px; height: 47px; }
.brand-text { display: flex; flex-direction: column; gap: 3px; }
.brand-top {
  font-size: 0.62rem; font-weight: 700; font-stretch: 120%; letter-spacing: 0.34em; color: var(--gold); line-height: 1;
}
.brand-main {
  font-size: 1.5rem; font-weight: 900; font-stretch: 125%; color: var(--cream); line-height: 0.9; letter-spacing: 0.03em;
}
</style>
