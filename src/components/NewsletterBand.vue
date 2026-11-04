<template>
  <section id="join" class="newsletter band grain" aria-labelledby="join-heading">
    <div class="wrap nl-grid">
      <div>
        <h2 id="join-heading">Join The Tribe</h2>
        <div class="rule"></div>
        <p>
          Get weekly insights on business growth, leadership, profitability, and financial strategy directly from
          Adam Bell and The Owner’s Tribe community.
        </p>
      </div>
      <LeadForm kind="newsletter" label="Join The Tribe" dark />
    </div>
  </section>
</template>

<script setup>
import LeadForm from './LeadForm.vue';
</script>

<style>
.newsletter { padding-block: clamp(64px, 8vw, 104px); border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
.nl-grid { display: grid; gap: 36px; align-items: center; }
@media (min-width: 900px) {
  .nl-grid { grid-template-columns: 1fr 1fr; gap: 72px; }
}
.nl-grid h2 { font-size: clamp(2.2rem, 3vw + 1rem, 3.5rem); font-stretch: 122%; }
.nl-grid p { margin: 0; }
</style>
