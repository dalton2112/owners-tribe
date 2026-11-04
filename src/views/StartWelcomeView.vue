<template>
  <section class="service-hero band grain thanks">
    <div class="wrap hero-inner">
      <p class="service-label">{{ SERVICE_LABEL }}</p>
      <p class="hook">You’re in. Let’s get you set up.</p>
      <h1 class="hero-h1">Book your setup kickoff call</h1>
      <div class="rule"></div>
      <p class="lede">Thanks for choosing the Start package. Pick a time for your kickoff, and we’ll get your entity, registrations, QuickBooks, and payment systems moving.</p>
      <div class="hero-actions">
        <ActionButton :action="{ kind: 'calendly', key: 'setupKickoff', label: 'Book your setup kickoff' }" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ActionButton from '@/components/ActionButton.vue';
import { SERVICE_LABEL } from '@/content/site';

</script>

<style>
.thanks { min-height: calc(100vh - 77px); display: flex; align-items: center; }
</style>
