<template>
  <section class="cta-band">
    <div class="wrap">
      <div class="cta-card band grain">
        <img class="cta-card-crest" :src="crest" alt="" aria-hidden="true" />
        <div>
          <h2>{{ heading }}</h2>
          <p v-if="text">{{ text }}</p>
        </div>
        <div class="cta-side">
          <ActionButton :action="action" :answer="answer" />
          <p v-if="note" class="price-note">{{ note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ActionButton from './ActionButton.vue';
import crest from '@/assets/crest.webp';

defineProps({
  heading: { type: String, required: true },
  text: { type: String, default: '' },
  action: { type: Object, required: true },
  answer: { type: String, default: '' },
  note: { type: String, default: '' }
});
</script>

<style>
.cta-band { padding-block: clamp(56px, 7vw, 96px); }
.cta-card {
  position: relative; overflow: hidden; display: grid; gap: 28px; align-items: center;
  padding: clamp(30px, 5vw, 64px); border-radius: 28px;
}
@media (min-width: 900px) { .cta-card { grid-template-columns: 1fr auto; gap: 56px; } }
.cta-card h2 { max-width: 20ch; margin-bottom: 12px; }
.cta-card p { margin: 0; }
.cta-side { position: relative; display: grid; gap: 12px; justify-items: start; }
.cta-card-crest { position: absolute; right: -60px; bottom: -80px; width: 300px; opacity: 0.08; pointer-events: none; }
</style>
