<template>
  <article class="offer-card">
    <RouterLink class="offer-cover product-cover" :to="modalLink('product', product.id)" tabindex="-1" aria-hidden="true">
      <ResourcePaper :res="product" small />
    </RouterLink>
    <div class="offer-body">
      <div class="offer-tags">
        <span class="chip">{{ product.type }}</span>
        <span class="price-tag" :class="{ soon: status.soon }">{{ status.label }}</span>
      </div>
      <h3><RouterLink :to="modalLink('product', product.id)">{{ product.title }}</RouterLink></h3>
      <p>{{ product.desc }}</p>
      <RouterLink class="btn btn-outline btn-sm" :to="modalLink('product', product.id)">
        {{ product.free ? 'Get it free' : 'See what’s inside' }}
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import ResourcePaper from './ResourcePaper.vue';
import { modalLink } from '@/composables/useModal';
import { offerStatus } from '@/content/offers';

const props = defineProps({ product: { type: Object, required: true } });
const status = computed(() => offerStatus(props.product, 'product'));
</script>

<style>
.product-cover {
  display: grid; place-items: center; padding: 30px 20px; border-radius: 16px;
  background-color: var(--band); background-image: var(--grain), radial-gradient(80% 80% at 20% 0%, rgba(29, 165, 166, 0.25), transparent 60%);
}
.product-cover .paper { transition: transform 0.2s ease; }
.product-cover:hover .paper { transform: rotate(0deg) translateY(-4px); }
</style>
