<template>
  <div>
    <PageHero
      title="Book a Strategy Call"
      lede="Choose a weekday and time that works for you, then share a few details so we can prepare for the conversation."
    />
    <section class="section">
      <div class="wrap booking-wrap">
        <div class="booking-panel">
          <h2>Request a call time</h2>
          <p class="muted">Select your preferred time and tell us how to reach you.</p>
          <BookingWidget />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BookingWidget from '@/components/BookingWidget.vue';
import PageHero from '@/components/PageHero.vue';
</script>

<style>
.booking-wrap { max-width: 900px; }
.booking-panel {
  padding: clamp(22px, 3.5vw, 38px);
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--surface);
  box-shadow: var(--shadow);
}
.booking-panel h2 { margin-bottom: 8px; }
.booking-panel > .muted { margin-bottom: 24px; }
</style>
