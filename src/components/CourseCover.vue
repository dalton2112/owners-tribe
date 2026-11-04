<template>
  <div class="course-cover" :class="{ large }" aria-hidden="true">
    <span class="cc-num">{{ padNumber(course.number) }}</span>
    <span class="cc-kicker"><AppIcon name="play" :size="13" />Self-paced course</span>
    <span class="cc-title">{{ course.title }}</span>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue';
import { padNumber } from '@/utils/format';

defineProps({
  course: { type: Object, required: true },
  large: Boolean
});
</script>

<style>
.course-cover {
  position: relative; display: flex; flex-direction: column; justify-content: flex-end; gap: 8px;
  aspect-ratio: 4 / 3; width: 100%; padding: 22px 24px; border-radius: 16px; overflow: hidden; color: #FFFFFF;
  background-color: var(--navy);
  background-image: var(--grain), radial-gradient(110% 90% at 0% 0%, rgba(29, 165, 166, 0.3), transparent 60%);
  border-top: 5px solid var(--gold);
}
.cc-num {
  position: absolute; right: 18px; top: 4px; line-height: 1;
  font-size: clamp(5.5rem, 10vw, 7.5rem); font-weight: 900; font-stretch: 62%;
  color: transparent; -webkit-text-stroke: 1.5px rgba(217, 164, 65, 0.65); letter-spacing: -0.02em;
}
.cc-kicker { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 700; color: var(--gold); }
.cc-title { font-size: 1.35rem; font-weight: 850; font-stretch: 112%; line-height: 1.1; max-width: 14ch; }
.course-cover.large { max-width: 320px; box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.7); border-left: 1px solid rgba(255, 255, 255, 0.12); border-right: 1px solid rgba(255, 255, 255, 0.12); }
</style>
