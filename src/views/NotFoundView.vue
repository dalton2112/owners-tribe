<template>
  <div>
    <PageHero
      title="Page Not Found"
      lede="That page doesn’t exist or has moved. Head back to the home page or browse the podcast."
    >
      <div class="cta-row">
        <RouterLink class="btn btn-gold btn-lg" :to="{ name: 'home' }">Go to the home page</RouterLink>
        <RouterLink class="btn btn-ghost btn-lg" :to="{ name: 'podcast' }">Browse episodes</RouterLink>
      </div>
    </PageHero>
  </div>
</template>

<script setup>
import PageHero from '@/components/PageHero.vue';
</script>
