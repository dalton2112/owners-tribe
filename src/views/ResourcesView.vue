<template>
  <div>
    <PageHero
      title="Resources for Business Owners"
      lede="Templates and workbooks from The Owner’s Tribe, plus the tools and books we recommend for running a stronger business."
    >
      <div class="cta-row">
        <RouterLink class="btn btn-gold" :to="{ hash: '#shop' }"><AppIcon name="tag" :size="18" />Templates and workbooks</RouterLink>
        <RouterLink class="btn btn-ghost" :to="{ hash: '#tools' }"><AppIcon name="star" :size="18" />Tools we recommend</RouterLink>
      </div>
    </PageHero>

    <section id="shop" class="section">
      <div class="wrap">
        <SectionHead
          title="From The Owner’s Tribe"
          text="Ready-to-use templates and workbooks for the numbers side of your business. Start with the free checklist."
        />
        <div class="offer-grid">
          <ProductCard v-for="p in PRODUCTS" :key="p.id" :product="p" />
        </div>
      </div>
    </section>

    <section id="tools" class="section section-alt">
      <div class="wrap">
        <SectionHead
          title="Tools We Recommend"
          text="The software, services, and books we point owners to most often."
        />
        <p class="disclosure"><AppIcon name="tag" :size="18" /><span>{{ AFFILIATE_DISCLOSURE }}</span></p>
        <div v-for="group in AFFILIATE_GROUPS" :key="group.category" class="aff-group">
          <h3 class="aff-heading"><span class="svc-icon"><AppIcon :name="group.icon" :size="22" /></span>{{ group.category }}</h3>
          <div class="aff-grid">
            <article v-for="tool in group.items" :key="tool.name" class="aff-card">
              <h4>{{ tool.name }}</h4>
              <p v-if="tool.by" class="aff-by">by {{ tool.by }}</p>
              <p>{{ tool.desc }}</p>
              <a
                class="text-link aff-link"
                :href="tool.url || '#'"
                target="_blank"
                rel="sponsored noopener"
                @click="guard($event, tool)"
              >
                {{ tool.by ? 'Get the book' : `Visit ${tool.name}` }}<AppIcon name="external" :size="15" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      heading="Want Help Putting These to Work?"
      text="Book a strategy call and we’ll talk through which tools, templates, and habits fit your business."
    />
  </div>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import CtaBand from '@/components/CtaBand.vue';
import PageHero from '@/components/PageHero.vue';
import ProductCard from '@/components/ProductCard.vue';
import SectionHead from '@/components/SectionHead.vue';
import { AFFILIATE_DISCLOSURE, AFFILIATE_GROUPS } from '@/content/affiliates';
import { PRODUCTS } from '@/content/products';
import { showToast } from '@/composables/useUi';

function guard(event, tool) {
  if (!tool.url) {
    event.preventDefault();
    showToast(`${tool.name} link coming soon.`);
  }
}
</script>

<style>
.disclosure {
  display: flex; gap: 12px; align-items: flex-start; max-width: none; margin: -12px 0 40px;
  padding: 14px 18px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border);
  color: var(--muted); font-size: 0.92rem;
}
.disclosure svg { flex: none; margin-top: 2px; color: var(--link); }
.aff-group + .aff-group { margin-top: 48px; }
.aff-heading { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; font-size: 1.25rem; }
.aff-grid { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr)); }
.aff-card {
  display: flex; flex-direction: column; gap: 6px; padding: 22px; border-radius: 16px;
  background: var(--surface); border: 1px solid var(--border);
}
.aff-card h4 { font-size: 1.08rem; font-stretch: 106%; }
.aff-card p { margin: 0; color: var(--muted); font-size: 0.95rem; }
.aff-card .aff-by { font-family: var(--serif); font-style: italic; color: var(--text); }
.aff-link { display: inline-flex; align-items: center; gap: 6px; margin-top: auto; padding-top: 10px; width: fit-content; }
</style>
