<template>
  <div>
    <PageHero
      title="Real Business Results"
      lede="Testimonies from business owners about what changed when they got current numbers, a clear cash forecast, and a plan their team can follow."
    />

    <section class="section">
      <div class="wrap">
        <SectionHead title="What Owners Are Saying" :split="false" />
        <div class="quotes">
          <figure v-for="t in TESTIMONIALS" :key="t.quote" class="tquote">
            <blockquote><p>“{{ t.quote }}”</p></blockquote>
            <figcaption>{{ t.by }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap">
        <SectionHead title="Client Stories" text="A closer look at the before and after." />
        <article v-for="c in CASES" :key="c.title" class="case">
          <div>
            <div class="case-meta">
              <span class="chip">{{ c.industry }}</span>
              <span class="chip">{{ c.revenue }}</span>
              <span class="chip">{{ c.service }}</span>
            </div>
            <h2>{{ c.title }}</h2>
            <h3>The challenge</h3>
            <p>{{ c.challenge }}</p>
            <h3>What changed</h3>
            <ul class="checks">
              <li v-for="x in c.changes" :key="x"><AppIcon name="check" :size="18" /><span>{{ x }}</span></li>
            </ul>
          </div>
          <div>
            <div class="ledger-wrap">
              <table class="ledger">
                <caption class="sr-only">Before and after results: {{ c.industry }}</caption>
                <thead>
                  <tr><th scope="col">Measure</th><th scope="col">Before</th><th scope="col">After</th></tr>
                </thead>
                <tbody>
                  <tr v-for="r in c.results" :key="r.m">
                    <th scope="row">{{ r.m }}</th>
                    <td>{{ r.b }}</td>
                    <td class="after">{{ r.a }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="illustrative">Illustrative example</p>
          </div>
        </article>
      </div>
    </section>

    <CtaBand
      heading="Your Results Start With a Conversation"
      text="Book a strategy call and we’ll look at where the business is today and what would move it forward."
    />
  </div>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import CtaBand from '@/components/CtaBand.vue';
import PageHero from '@/components/PageHero.vue';
import SectionHead from '@/components/SectionHead.vue';
import { CASES, TESTIMONIALS } from '@/content/stories';
</script>

<style>
.case { display: grid; gap: 36px; padding-block: 56px; border-top: 1px solid var(--border); }
.case:first-of-type { border-top: 0; padding-top: 8px; }
.case:last-child { padding-bottom: 0; }
@media (min-width: 960px) { .case { grid-template-columns: 1fr 1fr; gap: 72px; } }
.case-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
.case h2 { font-size: clamp(1.55rem, 1.6vw + 1rem, 2.2rem); }
.case h3 { font-size: 1.02rem; margin: 26px 0 8px; }
.ledger-wrap { overflow-x: auto; border-radius: 16px; border: 1px solid var(--border); background: var(--surface); }
.ledger { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; min-width: 420px; }
.ledger th, .ledger td { text-align: left; padding: 16px 18px; border-bottom: 1px solid var(--border); vertical-align: top; }
.ledger thead th { font-size: 0.82rem; font-weight: 700; color: var(--muted); border-bottom: 2px solid var(--heading); }
.ledger tbody th { font-weight: 600; color: var(--text); font-size: 0.95rem; }
.ledger tbody tr:last-child > * { border-bottom: 0; }
.ledger td { color: var(--muted); font-weight: 600; white-space: nowrap; }
.ledger td.after { color: var(--heading); font-weight: 800; font-stretch: 108%; font-size: 1.12rem; background: var(--chip); }
.illustrative { font-size: 0.82rem; color: var(--muted); margin: 12px 0 0; }
</style>
