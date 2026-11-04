<template>
  <section v-if="visible.length" class="section faq" aria-labelledby="faq-heading">
    <div class="wrap faq-grid">
      <div>
        <h2 id="faq-heading">Questions Owners Ask</h2>
        <div class="rule"></div>
      </div>
      <div class="faq-list">
        <div v-for="f in visible" :key="f.q" class="faq-item">
          <h3>{{ f.q }}</h3>
          <p>{{ f.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({ faqs: { type: Array, default: () => [] } });
// Answers marked pending stay hidden until Adam confirms them.
const visible = computed(() => props.faqs.filter((f) => !f.pending));
</script>

<style>
.faq-grid { display: grid; gap: 24px; }
@media (min-width: 900px) { .faq-grid { grid-template-columns: 0.8fr 1.2fr; gap: 72px; } }
.faq-item { padding: 24px 0; border-top: 1px solid var(--border); }
.faq-item:first-child { padding-top: 0; border-top: 0; }
.faq-item h3 { font-size: 1.15rem; margin-bottom: 8px; }
.faq-item p { margin: 0; color: var(--muted); }
</style>
