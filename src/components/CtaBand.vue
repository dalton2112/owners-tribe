<template>
  <section class="cta-band">
    <div class="wrap">
      <div class="cta-card band grain">
        <img class="cta-card-crest" :src="crest" alt="" />
        <div>
          <h2>{{ heading }}</h2>
          <p>{{ text }}</p>
        </div>
        <div class="cta-row">
          <!-- <RouterLink class="btn btn-gold btn-lg" :to="BOOK_CALL">{{ primary }}</RouterLink> -->
          <a class="btn btn-gold btn-lg" href="https://calendly.com/adam-bell-acb-logistics" target="_blank" rel="noopener noreferrer">{{ primary }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import crest from '@/assets/crest.webp';
import { BOOK_CALL } from '@/router/links';

defineProps({
  heading: { type: String, required: true },
  text: { type: String, required: true },
  primary: { type: String, default: 'Book a Strategy Call' }
});
</script>

<style>
.cta-band { padding-block: clamp(56px, 7vw, 96px); }
.cta-card {
  display: grid; gap: 28px; align-items: center; padding: clamp(30px, 5vw, 64px);
  border-radius: 28px; color: #D3DBE6; position: relative; overflow: hidden;
}
@media (min-width: 900px) {
  .cta-card { grid-template-columns: 1fr auto; gap: 56px; }
}
.cta-card h2 { max-width: 20ch; margin-bottom: 14px; }
.cta-card p { margin: 0; }
.cta-card .cta-row { margin-top: 0; }
.cta-card-crest { position: absolute; right: -60px; bottom: -80px; width: 300px; opacity: 0.08; pointer-events: none; }
</style>
