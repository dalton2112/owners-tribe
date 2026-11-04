<template>
  <div>
    <section class="hero band grain">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="hero-quote">Business ownership shouldn’t feel lonely.</p>
          <h1>Where Business Owners Gain Clarity, Confidence, and Growth</h1>
          <div class="rule"></div>
          <p class="lede">
            The Owner’s Tribe brings together entrepreneurs, industry leaders, and business experts to share the
            strategies, financial insights, and leadership lessons that help companies thrive.
          </p>
          <div class="cta-row">
            <RouterLink class="btn btn-gold btn-lg" :to="BOOK_CALL">Book a Strategy Call</RouterLink>
            <RouterLink class="btn btn-ghost btn-lg" :to="{ name: 'podcast' }">
              <AppIcon name="play" :size="16" />Watch the Podcast
            </RouterLink>
          </div>
          <div class="listen-row">
            <span>Listen on</span>
            <PlatformLinks variant="dark" />
          </div>
        </div>

        <div class="hero-visual">
          <div class="studio">
            <img
              class="studio-crest"
              :src="crest"
              alt="The Owner’s Tribe crest: two crossed swords behind a shield with three bells"
            />
            <div class="cf-card" aria-hidden="true">
              <div class="cf-head"><strong>Cash position</strong><span>Next 52 weeks</span></div>
              <svg viewBox="0 0 220 84" role="presentation">
                <defs>
                  <linearGradient id="cfFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stop-color="#1DA5A6" stop-opacity=".28" />
                    <stop offset="1" stop-color="#1DA5A6" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <path :d="`${CASH_LINE} L220 84 L0 84 Z`" fill="url(#cfFill)" />
                <line x1="0" x2="220" y1="58" y2="58" stroke="#D9A441" stroke-width="2" stroke-dasharray="5 4" />
                <path :d="CASH_LINE" fill="none" stroke="#1DA5A6" stroke-width="3" stroke-linecap="round" />
                <circle cx="86" cy="62" r="5" fill="#FFFFFF" stroke="#D9A441" stroke-width="2.5" />
                <circle cx="220" cy="12" r="4.5" fill="#0F2744" />
              </svg>
              <div class="cf-legend">
                <span><i></i>Projected cash</span><span><i class="min"></i>Minimum balance</span>
              </div>
            </div>
            <RouterLink class="np-card" :to="modalLink('episode', latest[0].id)">
              <span class="np-thumb"><AppIcon name="play" :size="22" /></span>
              <span class="np-body">
                <span class="np-meta">Latest: Episode {{ latest[0].id }}</span>
                <span class="np-title">{{ latest[0].title }}</span>
                <span class="wave" aria-hidden="true">
                  <i v-for="(h, i) in WAVE" :key="i" :class="{ played: i < 11 }" :style="{ height: `${h}%` }"></i>
                </span>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <SectionHead
          title="Business Advice You Can Actually Use"
          text="Conversations and short lessons on the numbers, people, and systems behind a growing company. Watch, listen, or read in the time you have."
        />
        <div class="ep-grid">
          <EpisodeCard v-for="ep in latest" :key="ep.id" :ep="ep" />
        </div>

        <div class="pillars">
          <div v-for="p in pillars" :key="p.title" class="pillar">
            <span class="pillar-icon"><AppIcon :name="p.icon" :size="28" /></span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
            <ul>
              <li v-for="ep in p.episodes" :key="ep.id">
                <RouterLink :to="modalLink('episode', ep.id)">
                  <AppIcon name="play" :size="14" /><span>{{ ep.title }}</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="guests-strip">
          <h3>Featured guests</h3>
          <div class="guest-row">
            <RouterLink
              v-for="g in guests"
              :key="g.id"
              class="guest-chip"
              :to="modalLink('episode', firstEpisodeWith(g.id).id)"
            >
              <span class="avatar">{{ g.initials }}</span>
              <span><strong>{{ g.name }}</strong><small>{{ g.role }}</small></span>
            </RouterLink>
          </div>
        </div>
        <div class="more-row">
          <RouterLink class="btn btn-outline" :to="{ name: 'podcast' }">Browse all episodes</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap about-split">
        <figure class="quote-figure">
          <blockquote class="big-quote"><p>Business ownership shouldn’t feel lonely.</p></blockquote>
          <figcaption class="quote-by">Adam Bell, founder and host</figcaption>
        </figure>
        <div>
          <h2>Built for Business Owners, By Business Owners</h2>
          <div class="rule"></div>
          <p>Adam Bell created The Owner’s Tribe because too many business owners face important decisions alone.</p>
          <p>
            After years of helping companies improve financial performance, implement stronger systems, and achieve
            profitable growth, Adam recognized a common challenge: business ownership can be isolating.
          </p>
          <p>
            The Owner’s Tribe brings together real experiences, expert perspectives, and actionable advice to help
            owners make better decisions and build better businesses.
          </p>
          <div class="cta-row">
            <RouterLink class="btn btn-outline" :to="{ name: 'about' }">Meet Adam Bell</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <SectionHead
          title="Start, Scale, or Sell Your Business"
          text="One call gets you a team for starting, scaling, or selling your business: lending, legal, financial planning, IT, and marketing."
        />
        <DoorCards />
        <div class="fit band grain">
          <div>
            <h3>Built for owners of</h3>
            <ul class="checks">
              <li v-for="a in SITE.audience" :key="a"><AppIcon name="check" :size="18" /><span>{{ a }}</span></li>
            </ul>
          </div>
          <div>
            <h3>Who are tired of</h3>
            <ul class="checks">
              <li v-for="a in SITE.frustrations" :key="a"><AppIcon name="check" :size="18" /><span>{{ a }}</span></li>
            </ul>
          </div>
          <div class="cta-row fit-cta">
            <RouterLink class="btn btn-gold btn-lg" :to="{ name: 'services' }">See how I can help</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section band grain">
      <div class="wrap lead-feature">
        <ResourcePaper :res="FREE_CHECKLIST" />
        <div>
          <h2>Start With the Financial Clarity Checklist</h2>
          <div class="rule"></div>
          <p class="lede">{{ FREE_CHECKLIST.desc }} Free, and in your inbox in a minute.</p>
          <LeadForm kind="download" :item="FREE_CHECKLIST" label="Email me the checklist" dark />
          <h3 class="other-res-heading">Go deeper with a course</h3>
          <ul class="other-res" aria-label="Courses">
            <li v-for="c in COURSES" :key="c.id">
              <RouterLink :to="modalLink('course', c.id)"><AppIcon name="play" :size="16" /><span>{{ c.title }}</span></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <SectionHead title="What Owners Say">
          <p><RouterLink class="text-link" :to="{ name: 'testimonies' }">Read more testimonies</RouterLink></p>
        </SectionHead>
        <div class="quotes">
          <figure v-for="t in TESTIMONIALS.slice(0, 2)" :key="t.quote" class="tquote">
            <blockquote><p>“{{ t.quote }}”</p></blockquote>
            <figcaption>{{ t.by }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap">
        <SectionHead title="Templates and Tools for Owners">
          <p><RouterLink class="text-link" :to="{ name: 'resources' }">See all resources</RouterLink></p>
        </SectionHead>
        <div class="offer-grid">
          <ProductCard v-for="p in featuredProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import DoorCards from '@/components/DoorCards.vue';
import EpisodeCard from '@/components/EpisodeCard.vue';
import LeadForm from '@/components/LeadForm.vue';
import PlatformLinks from '@/components/PlatformLinks.vue';
import ProductCard from '@/components/ProductCard.vue';
import ResourcePaper from '@/components/ResourcePaper.vue';
import SectionHead from '@/components/SectionHead.vue';
import crest from '@/assets/crest.webp';
import { EPISODES, firstEpisodeWith } from '@/content/episodes';
import { GUESTS } from '@/content/guests';
import { COURSES } from '@/content/courses';
import { FREE_CHECKLIST, PRODUCTS } from '@/content/products';
import { SITE } from '@/content/site';
import { TESTIMONIALS } from '@/content/stories';
import { modalLink } from '@/composables/useModal';
import { BOOK_CALL } from '@/router/links';

const CASH_LINE = 'M0 50 C18 46 30 36 48 40 S78 66 96 63 S124 34 146 36 S186 22 220 12';
const WAVE = [30, 55, 40, 70, 50, 85, 60, 40, 75, 95, 65, 45, 80, 55, 35, 60, 90, 70, 50, 65, 40, 75, 55, 30, 45, 60, 35, 25];

const latest = EPISODES.slice(0, 3);
const pillars = SITE.pillars.map((p) => ({
  ...p,
  episodes: EPISODES.filter((e) => p.cats.includes(e.category)).slice(0, 2)
}));
const guests = GUESTS.filter((g) => g.id !== 'adam').slice(0, 5);
const featuredProducts = PRODUCTS.filter((p) => !p.free).slice(0, 3);
</script>

<style>
.hero { padding-block: clamp(48px, 7vw, 96px) clamp(64px, 8vw, 112px); overflow: hidden; }
.hero-grid { display: grid; gap: 56px; align-items: center; }
@media (min-width: 980px) {
  .hero-grid { grid-template-columns: 1.2fr 0.8fr; gap: 40px; }
}
.hero h1 { font-size: clamp(2.3rem, 3.4vw + 0.8rem, 3.85rem); font-stretch: 116%; }
.hero-quote {
  font-family: var(--serif); font-style: italic; font-weight: 400;
  font-size: clamp(1.15rem, 1vw + 0.9rem, 1.4rem); color: var(--gold);
  margin: 0 0 18px;
}
.listen-row {
  display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px;
  margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.92rem; color: #A9B6C7;
}
.studio { position: relative; width: min(100%, 540px); margin-inline: auto; aspect-ratio: 1 / 1.02; }
.studio::before {
  content: ""; position: absolute; inset: 14% 12% 18%; border-radius: 50%;
  background: radial-gradient(circle, rgba(29, 165, 166, 0.3), transparent 68%);
}
.studio-crest { position: absolute; left: 7%; top: 6%; width: 86%; }
.np-card, .cf-card {
  position: absolute; background: #FFFFFF; color: var(--navy); border-radius: 16px;
  box-shadow: 0 26px 50px -22px rgba(0, 0, 0, 0.6);
}
.np-card {
  left: -6%; bottom: 1%; width: min(76%, 310px);
  display: flex; align-items: center; gap: 14px; padding: 14px 18px 14px 14px;
  border: 0; text-align: left; cursor: pointer;
}
.np-card:hover .np-thumb { background: var(--gold); color: var(--navy); }
.np-thumb {
  flex: none; width: 54px; height: 54px; border-radius: 12px;
  display: grid; place-items: center; background: var(--navy); color: var(--gold);
  transition: background-color 0.15s ease, color 0.15s ease;
}
.np-body { min-width: 0; }
.np-meta { display: block; font-size: 0.76rem; font-weight: 600; color: #586372; }
.np-title {
  display: block; font-weight: 800; font-stretch: 104%; font-size: 0.97rem; line-height: 1.25; margin: 2px 0 9px;
}
.wave { display: flex; align-items: center; gap: 2px; height: 22px; }
.wave i { display: block; width: 3px; border-radius: 2px; background: #B7DEDF; }
.wave i.played { background: var(--teal); }
.cf-card { right: -6%; top: 0; width: min(50%, 220px); padding: 12px 14px 10px; }
.cf-head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.cf-head strong { font-size: 0.84rem; font-weight: 800; }
.cf-head span { font-size: 0.72rem; font-weight: 600; color: #586372; }
.cf-card svg { display: block; width: 100%; height: auto; margin-top: 6px; }
.cf-legend { display: flex; flex-wrap: wrap; gap: 4px 12px; font-size: 0.7rem; color: #586372; margin-top: 6px; }
.cf-legend span { display: inline-flex; align-items: center; gap: 5px; }
.cf-legend i { display: inline-block; width: 14px; height: 3px; border-radius: 2px; background: var(--teal); }
.cf-legend i.min { background: repeating-linear-gradient(90deg, var(--gold) 0 4px, transparent 4px 7px); }
@media (prefers-reduced-motion: no-preference) {
  .studio-crest { animation: crestIn 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
  .cf-card { animation: rise 0.7s 0.35s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
  .np-card { animation: rise 0.7s 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
}
@media (max-width: 979px) {
  .studio { width: min(100%, 440px); }
  .np-card { left: 0; }
  .cf-card { right: 0; }
}
@media (max-width: 479px) {
  .np-card { width: 88%; }
  .cf-card { width: 60%; }
}
@keyframes crestIn { from { opacity: 0; transform: scale(0.94) rotate(-3deg); } to { opacity: 1; transform: none; }
}
@keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; }
}
.pillars { display: grid; gap: 36px; margin-top: 72px; }
@media (min-width: 860px) {
  .pillars { grid-template-columns: repeat(3, 1fr); gap: 40px; }
}
.pillar { border-top: 3px solid var(--gold); padding-top: 22px; }
.pillar-icon { color: var(--link); }
.pillar h3 { margin: 12px 0 8px; }
.pillar p { color: var(--muted); }
.pillar ul { list-style: none; padding: 0; margin-top: 16px; }
.pillar li a {
  display: flex; gap: 10px; align-items: flex-start; width: 100%; text-align: left;
  padding: 11px 0; border: 0; border-top: 1px solid var(--border); background: none;
  color: var(--heading); font-weight: 600; font-size: 0.95rem; line-height: 1.35; cursor: pointer;
}
.pillar li a:hover span { text-decoration: underline; text-underline-offset: 3px; }
.pillar li svg { flex: none; margin-top: 2px; color: var(--link); }
.guests-strip { margin-top: 64px; }
.guest-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px; }
.guest-chip {
  display: flex; align-items: center; gap: 12px; padding: 7px 18px 7px 7px;
  border: 1px solid var(--border); border-radius: 999px; background: var(--surface);
  color: var(--text); text-align: left; cursor: pointer;
}
.guest-chip:hover { border-color: var(--heading); }
.guest-chip strong { display: block; color: var(--heading); font-size: 0.94rem; line-height: 1.25; }
.guest-chip small { display: block; color: var(--muted); font-size: 0.8rem; line-height: 1.3; }
.more-row { margin-top: 48px; }
.about-split { display: grid; gap: 44px; align-items: start; }
@media (min-width: 900px) {
  .about-split { grid-template-columns: 0.9fr 1.1fr; gap: 80px; }
}
.big-quote {
  margin: 0; font-family: var(--serif); font-style: italic; font-weight: 400;
  font-size: clamp(2rem, 3.4vw + 0.4rem, 3.25rem); line-height: 1.1; letter-spacing: -0.01em;
  color: var(--heading);
}
.big-quote::before { content: "“"; display: block; font-size: 1.7em; line-height: 0.75; color: var(--gold); }
.quote-by { margin-top: 20px; display: flex; align-items: center; gap: 12px; color: var(--muted); font-weight: 600; }
.quote-by img { width: 44px; }
.doors + .fit { margin-top: 40px; }
.fit {
  display: grid; gap: 32px; margin-top: 56px; padding: clamp(26px, 4vw, 48px);
  border-radius: 24px; color: #D3DBE6;
}
@media (min-width: 960px) {
  .fit { grid-template-columns: 1fr 1fr auto; align-items: end; gap: 48px; }
}
.fit h3 { margin-bottom: 14px; }
.lead-feature { display: grid; gap: 56px; align-items: center; }
@media (min-width: 900px) {
  .lead-feature { grid-template-columns: 0.8fr 1.2fr; gap: 80px; }
}
.other-res-heading { margin: 32px 0 4px; font-size: 1rem; color: var(--gold); }
.other-res { list-style: none; padding: 0; margin: 28px 0 0; display: grid; gap: 4px; }
.other-res a {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left;
  background: none; border: 0; border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 12px 0; color: #FFFFFF; font-weight: 600; cursor: pointer;
}
.other-res a:hover span { text-decoration: underline; text-underline-offset: 3px; }
.other-res svg { color: var(--gold); flex: none; }
.quote-figure { margin: 0; }
.big-quote p { margin: 0; }
.fit-cta { margin-top: 0; }
</style>
