<template>
  <div>
    <ServiceHero
      hook="One call gets it done."
      h1="Start, scale, or sell your business with one call"
      lede="I’m Adam Bell, tell me where your business is, and I bring in the right team: lending, legal, financial planning, IT, and marketing, all through one point of contact."
    >
      <p class="door-prompt">Where are you today?</p>
      <DoorCards />
    </ServiceHero>

    <section class="section">
      <div class="wrap">
        <SectionHead title="How It Works" text="No forms to fill out and no runaround. You pick a door, and I take it from there." />
        <ol class="service-steps">
          <li><h3>Pick your door</h3><p>Start, Scale, or Sell: whichever fits where your business is right now.</p></li>
          <li><h3>Answer one question</h3><p>I show you the page that fits your plan, with what I do and what it costs.</p></li>
          <li><h3>Book your call or get started</h3><p>One button. From there, you call me and I bring in the team.</p></li>
        </ol>
      </div>
    </section>

    <TeamStrip />

    <CrossLinks
      class="services-cross"
      :items="[
        { to: '/courses', kicker: 'Rather learn it yourself?', title: 'Courses for business owners', cta: 'See the courses' },
        { to: '/about', kicker: 'Who’s your guy?', title: 'Meet Adam Bell', cta: 'About Adam' }
      ]"
    />
  </div>
</template>

<script setup>
import CrossLinks from '@/components/CrossLinks.vue';
import DoorCards from '@/components/DoorCards.vue';
import SectionHead from '@/components/SectionHead.vue';
import ServiceHero from '@/components/ServiceHero.vue';
import TeamStrip from '@/components/TeamStrip.vue';
</script>

<style>
.door-prompt { margin: 40px 0 16px; font-weight: 700; color: #FFFFFF; font-size: 1.05rem; }
.service-hero .doors { max-width: 1120px; }
.service-steps { list-style: none; padding: 0; margin: 0; display: grid; gap: 32px; counter-reset: ss; }
@media (min-width: 860px) { .service-steps { grid-template-columns: repeat(3, 1fr); } }
.service-steps li { position: relative; padding-top: 64px; }
.service-steps li::before {
  counter-increment: ss; content: counter(ss); position: absolute; left: 0; top: 0; width: 46px; height: 46px;
  border-radius: 50%; display: grid; place-items: center; border: 2px solid var(--gold);
  color: var(--heading); font-weight: 800; font-stretch: 112%;
}
.service-steps h3 { margin-bottom: 8px; }
.service-steps p { color: var(--muted); margin: 0; }
.services-cross { padding-top: clamp(64px, 8vw, 112px); }
</style>
