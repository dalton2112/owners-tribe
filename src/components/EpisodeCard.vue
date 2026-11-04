<template>
  <article class="ep-card">
    <RouterLink
      class="ep-thumb"
      :to="modalLink('episode', ep.id)"
      :style="{ '--stripe': seriesColor(ep) }"
      tabindex="-1"
      aria-hidden="true"
    >
      <span class="ep-num">{{ padNumber(ep.id) }}</span>
      <span class="ep-series">{{ seriesName(ep) }}</span>
      <span class="ep-who">
        <span class="ep-play"><AppIcon name="play" :size="18" /></span>
        <span>{{ guestLine(ep) }}</span>
      </span>
    </RouterLink>
    <div class="ep-body">
      <h3>
        <RouterLink :to="modalLink('episode', ep.id)">{{ ep.title }}</RouterLink>
      </h3>
      <p class="ep-meta">
        <span class="chip">{{ ep.category }}</span>
        <span class="meta-i"><AppIcon name="clock" :size="15" />{{ ep.duration }} min</span>
        <span class="meta-i">{{ formatDate(ep.date) }}</span>
      </p>
    </div>
  </article>
</template>

<script setup>
import AppIcon from './AppIcon.vue';
import { modalLink } from '@/composables/useModal';
import { guestLine, seriesColor, seriesName } from '@/content/episodes';
import { formatDate, padNumber } from '@/utils/format';

defineProps({ ep: { type: Object, required: true } });
</script>

<style>
.ep-card { display: flex; flex-direction: column; min-width: 0; }
.ep-thumb {
  position: relative; display: block; width: 100%; aspect-ratio: 16 / 10; padding: 0;
  border: 0; border-radius: 14px; overflow: hidden; cursor: pointer; text-align: left;
  color: #FFFFFF; background-color: var(--navy);
  background-image: var(--grain), radial-gradient(120% 90% at 85% 100%, rgba(29, 165, 166, 0.28), transparent 60%);
}
.ep-thumb::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 7px; background: var(--stripe, var(--gold));
}
.ep-num {
  position: absolute; right: 14px; bottom: -0.16em; line-height: 1;
  font-size: clamp(6rem, 11vw, 8.5rem); font-weight: 900; font-stretch: 62%;
  color: rgba(255, 255, 255, 0.13); letter-spacing: -0.03em; pointer-events: none;
}
.ep-series {
  position: absolute; left: 26px; top: 18px; font-size: 0.8rem; font-weight: 700; color: var(--stripe, var(--gold));
}
.ep-who {
  position: absolute; left: 26px; right: 90px; bottom: 18px; display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 0.92rem; line-height: 1.2;
}
.ep-play {
  flex: none; width: 44px; height: 44px; border-radius: 50%;
  display: grid; place-items: center; background: var(--gold); color: var(--navy);
  transition: transform 0.15s ease;
}
.ep-thumb:hover .ep-play { transform: scale(1.08); }
.ep-body { padding-top: 16px; }
.ep-body h3 { font-size: 1.14rem; margin-bottom: 8px; }
.ep-body h3 a { color: inherit; text-decoration: none; }
.ep-body h3 a:hover { text-decoration: underline; text-underline-offset: 3px; }
.ep-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 16px; margin: 0; }
.ep-who .avatar { width: 36px; height: 36px; font-size: 0.78rem; }
</style>
