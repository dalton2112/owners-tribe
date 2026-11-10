<template>
  <div>
    <section class="page-hero band grain">
      <div class="wrap about-hero">
        <!-- Replace this placeholder with Adam's photo, for example <img src="..." alt="Adam Bell"> -->
        <figure class="headshot">
          <img class="hs-crest" :src="crest" alt="" />
          <span class="hs-mono" aria-hidden="true">AB</span>
          <figcaption>Headshot placeholder</figcaption>
        </figure>
        <div>
          <h1>Meet Adam Bell</h1>
          <div class="rule"></div>
          <p class="lede">
            Adam Bell helps business owners create financial clarity, improve operations, and develop the systems
            needed to scale sustainably.
          </p>
          <p>
            Through The Owner’s Tribe, he works with entrepreneurs and leadership teams to simplify
            financial management, improve decision-making, and build stronger businesses.
          </p>
          <ul class="creds">
            <li>Founder and host, The Owner’s Tribe</li>
            <li>Fractional CFO advisor</li>
          </ul>
          <div class="cta-row">
            <!-- <RouterLink class="btn btn-gold btn-lg" :to="BOOK_CALL">Book a Strategy Call</RouterLink> -->
            <a class="btn btn-gold btn-lg" href="https://calendly.com/adam-bell-acb-logistics" target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section">
      <div class="wrap bio-grid">
        <div>
          <h2>Executive Biography</h2>
          <div class="rule"></div>
        </div>
        <div class="bio-text">
          <p>Adam Bell is the founder and host of The Owner’s Tribe and a fractional CFO advisor to growing, owner-led businesses.</p>
          <p>
            After years of helping companies improve financial performance, implement stronger systems, and achieve
            profitable growth, Adam recognized a common challenge: business ownership can be isolating. Too many owners
            face important decisions alone.
          </p>
          <p>
            He created The Owner’s Tribe to change that, bringing together real experiences, expert perspectives, and
            actionable advice so owners can make better decisions and build better businesses.
          </p>
        </div>
      </div>
    </section> -->

    <section class="section section-alt">
      <div class="wrap">
        <SectionHead
          title="Experience"
          text="Adam’s work focuses on the financial and strategic side of an owner-led company, from cash flow and reporting to the big decisions."
        />
        <div class="focus-grid">
          <div v-for="f in FOCUS_AREAS" :key="f.title" class="focus">
            <span class="svc-icon"><AppIcon :name="f.icon" :size="24" /></span>
            <div>
              <h3>{{ f.title }}</h3>
              <p>{{ f.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section">
      <div class="wrap host-grid">
        <div>
          <h2>Podcast Host</h2>
          <div class="rule"></div>
          <p class="lede">
            As host of The Owner’s Tribe, Adam sits down with owners, operators, and advisors to talk about what really
            happens inside growing companies.
          </p>
          <p>
            He also leads the show’s financial education series, a plain-language walk through the reports every owner
            should understand.
          </p>
          <div class="cta-row">
            <RouterLink class="btn btn-outline" :to="{ name: 'podcast' }">Browse episodes</RouterLink>
          </div>
        </div>
        <div class="series-card band grain">
          <h3>Financial education series</h3>
          <p>Each lesson walks through one report using the same sample company, so the numbers connect from episode to episode.</p>
          <ol>
            <li v-for="t in SITE.seriesTopics" :key="t">{{ t }}</li>
          </ol>
        </div>
      </div>
    </section> -->

    <section class="mission section-alt">
      <div class="wrap">
        <h2>Our mission</h2>
        <div class="rule"></div>
        <blockquote>
          <p>
            “Our mission is to equip business owners with the financial insight, strategic guidance, and community
            support they need to build stronger businesses and more fulfilling lives.”
          </p>
        </blockquote>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import SectionHead from '@/components/SectionHead.vue';
import crest from '@/assets/crest.webp';
import { FOCUS_AREAS, SITE } from '@/content/site';
// import { BOOK_CALL } from '@/router/links';
</script>

<style>
.about-hero { display: grid; gap: 48px; align-items: center; }
@media (min-width: 900px) {
  .about-hero { grid-template-columns: 0.75fr 1.25fr; gap: 72px; }
}
.headshot {
  position: relative; margin: 0; aspect-ratio: 4 / 5; border-radius: 26px; overflow: hidden;
  display: grid; place-items: center; max-width: 420px; width: 100%;
  background: linear-gradient(165deg, #1A3D63, #0A1C33); border: 1px solid rgba(255, 255, 255, 0.12);
}
.hs-crest { position: absolute; width: 115%; right: -38%; bottom: -24%; opacity: 0.16; }
.hs-mono {
  position: relative; font-size: clamp(4rem, 9vw, 6.5rem); font-weight: 900; font-stretch: 125%; color: var(--cream); letter-spacing: 0.02em;
}
.headshot figcaption { position: absolute; left: 22px; bottom: 18px; font-size: 0.82rem; color: #A9B6C7; }
.creds { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 26px 0 0; }
.creds li {
  padding: 7px 14px; border-radius: 999px; font-size: 0.88rem; font-weight: 700; color: #FFFFFF;
  background: rgba(255, 255, 255, 0.07); border: 1px solid rgba(255, 255, 255, 0.18);
}
.bio-grid { display: grid; gap: 24px; }
@media (min-width: 900px) {
  .bio-grid { grid-template-columns: 0.75fr 1.25fr; gap: 72px; }
}
.bio-text p { font-size: 1.08rem; }
.focus-grid { display: grid; gap: 36px 44px; }
@media (min-width: 720px) {
  .focus-grid { grid-template-columns: 1fr 1fr; }
}
.focus { display: grid; grid-template-columns: 48px 1fr; gap: 18px; }
.focus h3 { margin-bottom: 6px; }
.focus p { color: var(--muted); margin: 0; }
.host-grid { display: grid; gap: 40px; align-items: start; }
@media (min-width: 900px) {
  .host-grid { grid-template-columns: 1.1fr 0.9fr; gap: 72px; }
}
.series-card { padding: clamp(24px, 3vw, 36px); border-radius: 22px; color: #D3DBE6; }
.series-card h3 { margin-bottom: 6px; }
.series-card > p { color: #A9B6C7; font-size: 0.95rem; }
.series-card ol { list-style: none; padding: 0; margin: 18px 0 0; counter-reset: s; }
.series-card li {
  display: flex; gap: 14px; align-items: baseline; padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12); color: #FFFFFF; font-weight: 600;
}
.series-card li::before {
  counter-increment: s; content: counter(s); color: var(--gold); font-weight: 800; font-stretch: 70%; font-size: 1.2rem; min-width: 1.2em;
}
.mission { padding-block: clamp(72px, 9vw, 128px); }
.mission h2 { font-size: 1.1rem; color: var(--link); font-stretch: 110%; }
.mission blockquote { margin: 0; }
.mission blockquote p {
  font-family: var(--serif); font-style: italic; font-weight: 400; color: var(--heading); margin: 0;
  font-size: clamp(1.7rem, 2.6vw + 0.8rem, 3rem); line-height: 1.18; max-width: 30ch;
}
</style>
