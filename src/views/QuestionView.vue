<template>
  <section class="question band grain">
    <img class="hero-crest" :src="crest" alt="" aria-hidden="true" />
    <div class="wrap question-inner">
      <p class="service-label">{{ SERVICE_LABEL }}</p>
      <p class="question-door"><span class="chip">{{ doorLabel }}</span>{{ intro }}</p>
      <h1 class="question-h1">{{ QUESTION.text }}</h1>
      <div class="rule"></div>
      <div class="answers" role="list">
        <RouterLink
          v-for="opt in QUESTION.options"
          :key="opt.answer"
          class="answer"
          role="listitem"
          :to="QUESTION_ROUTES[door][opt.answer]"
        >
          <span class="answer-icon"><AppIcon :name="opt.icon" :size="22" /></span>
          <span class="answer-label">{{ opt.label }}</span>
          <AppIcon class="answer-go" name="arrow" :size="20" />
        </RouterLink>
      </div>
      <RouterLink class="question-back" to="/services">Back to all three doors</RouterLink>
    </div>
  </section>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import crest from '@/assets/crest.webp';
import { QUESTION, QUESTION_ROUTES } from '@/content/pages';
import { SERVICE_LABEL } from '@/content/site';

const props = defineProps({ door: { type: String, required: true } });

const doorLabel = props.door === 'start' ? 'Start' : 'Scale';
const intro =
  props.door === 'start'
    ? 'Getting started. One quick question so I can show you the right path.'
    : 'Growing your business. One quick question so I can show you the right path.';

</script>

<style>
.question { position: relative; overflow: hidden; min-height: calc(100vh - 77px); display: flex; align-items: center; padding-block: clamp(56px, 8vw, 104px); }
.question-inner { position: relative; z-index: 1; }
.question-door { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; color: #D3DBE6; margin-bottom: 18px; }
.question-door .chip { background: var(--gold); color: var(--navy); font-size: 0.9rem; padding: 5px 14px; }
.question-h1 { font-size: clamp(2.3rem, 4.4vw + 0.6rem, 4rem); font-stretch: 118%; max-width: 18ch; letter-spacing: -0.02em; }
.answers { display: grid; gap: 12px; max-width: 720px; margin-top: 8px; }
.answer {
  display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px;
  padding: 20px 22px; border-radius: 16px; text-decoration: none; background: #FFFFFF; color: var(--navy);
  font-weight: 700; font-size: 1.12rem; box-shadow: 0 22px 44px -26px rgba(0, 0, 0, 0.6);
  transition: transform 0.15s ease;
}
.answer:hover { transform: translateX(4px); }
.answer-icon { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: var(--navy); color: var(--gold); }
.answer-go { color: #11787A; }
.question-back { display: inline-block; margin-top: 28px; color: #D3DBE6; font-weight: 600; }
.question .hero-crest { position: absolute; right: -4%; bottom: -16%; width: min(44vw, 540px); opacity: 0.09; pointer-events: none; }
</style>
