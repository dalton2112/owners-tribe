<template>
  <div>
    <ServiceHero :hook="page.hook" :h1="page.h1" :lede="page.lede">
      <div class="hero-actions">
        <ActionButton :action="page.action" :answer="answer" />
        <p v-if="page.priceNote" class="price-note">{{ page.priceNote }}</p>
      </div>
    </ServiceHero>

    <div v-if="maybe && page.maybe" class="wrap">
      <MaybeCallout :maybe="page.maybe" />
    </div>

    <section class="section">
      <div class="wrap">
        <div class="section-head"><h2>{{ page.whatTitle }}</h2><div class="rule"></div></div>
        <div class="what-grid">
          <div v-for="w in page.what" :key="w.title" class="what-item">
            <span class="svc-icon"><AppIcon :name="w.icon" :size="24" /></span>
            <div>
              <h3>{{ w.title }}</h3>
              <p>{{ w.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="page.steps.length" class="section section-alt">
      <div class="wrap">
        <div class="section-head"><h2>How It Works</h2><div class="rule"></div></div>
        <ol class="steps" :style="{ '--cols': page.steps.length }">
          <li v-for="st in page.steps" :key="st.title">
            <h3>{{ st.title }}</h3>
            <p>{{ st.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <TeamStrip />
    <FaqBlock :faqs="page.faqs" />
    <ClosingCta
      :heading="page.action.kind === 'checkout' ? 'Ready to Get Started?' : 'Let’s Talk It Through'"
      :text="page.action.kind === 'checkout' ? 'Check out securely, then book your setup kickoff call.' : 'Pick a time that works for you, and we’ll talk through your situation and the next step.'"
      :action="page.action"
      :answer="answer"
      :note="page.priceNote"
    />
    <CrossLinks :items="crossLinks" />
  </div>
</template>

<script setup>
import ActionButton from '@/components/ActionButton.vue';
import AppIcon from '@/components/AppIcon.vue';
import ClosingCta from '@/components/ClosingCta.vue';
import CrossLinks from '@/components/CrossLinks.vue';
import FaqBlock from '@/components/FaqBlock.vue';
import MaybeCallout from '@/components/MaybeCallout.vue';
import ServiceHero from '@/components/ServiceHero.vue';
import TeamStrip from '@/components/TeamStrip.vue';
import { PAGES } from '@/content/pages';
import { faqSchema, serviceSchema } from '@/content/schema';
import { useJsonLd } from '@/composables/useJsonLd';

const props = defineProps({
  pageKey: { type: String, required: true },
  maybe: Boolean
});

const page = PAGES[props.pageKey];
// The buying question answer passed to Calendly: yes, no, or maybe. The Sell page has no question.
const answer = props.maybe ? 'maybe' : page.answer;

const ABOUT_LINK = { to: '/about', kicker: 'Who’s your guy?', title: 'Meet Adam Bell', cta: 'About Adam' };
const SELL_LINK = { to: '/sell', kicker: 'Planning to sell one day?', title: 'See how I quarterback a sale', cta: 'Selling your business' };
const SCALE_LINK = { to: '/scale', kicker: 'Not ready to sell yet?', title: 'Grow the business first', cta: 'Scaling your business' };
const SERVICES_LINK = { to: '/services', kicker: 'Somewhere else?', title: 'See all three: Start, Scale, Sell', cta: 'All services' };
const crossLinks = page.door === 'sell' ? [SCALE_LINK, SERVICES_LINK, ABOUT_LINK] : [SELL_LINK, SERVICES_LINK, ABOUT_LINK];

// Structured data for Google and AI search. Maybe pages are copies of the No pages, so they skip it.
useJsonLd(props.maybe ? [] : [serviceSchema(page), faqSchema(page.faqs)]);
</script>

<style>
.what-grid { display: grid; gap: 32px 48px; }
@media (min-width: 760px) { .what-grid { grid-template-columns: 1fr 1fr; } }
.what-item { display: grid; grid-template-columns: 48px 1fr; gap: 18px; }
.what-item h3 { margin-bottom: 6px; }
.what-item p { margin: 0; color: var(--muted); }
.steps { list-style: none; padding: 0; margin: 0; display: grid; gap: 36px; counter-reset: step; }
@media (min-width: 860px) { .steps { grid-template-columns: repeat(var(--cols, 4), 1fr); gap: 32px; } }
.steps li { position: relative; padding-top: 66px; }
.steps li::before {
  counter-increment: step; content: counter(step);
  position: absolute; left: 0; top: 0; width: 46px; height: 46px; border-radius: 50%;
  display: grid; place-items: center; border: 2px solid var(--gold); background: var(--surface-2);
  color: var(--heading); font-weight: 800; font-stretch: 112%; z-index: 1;
}
@media (min-width: 860px) {
  .steps li:not(:last-child)::after { content: ""; position: absolute; left: 46px; right: -32px; top: 22px; height: 2px; background: var(--border); }
}
.steps h3 { margin-bottom: 8px; }
.steps p { color: var(--muted); margin: 0; }
</style>
