<template>
  <article class="offer-card">
    <RouterLink class="offer-cover" :to="modalLink('course', course.id)" tabindex="-1" aria-hidden="true">
      <CourseCover :course="course" />
    </RouterLink>
    <div class="offer-body">
      <div class="offer-tags">
        <span class="chip">{{ course.topic }}</span>
        <span class="price-tag" :class="{ soon: status.soon }">{{ status.label }}</span>
      </div>
      <h3><RouterLink :to="modalLink('course', course.id)">{{ course.title }}</RouterLink></h3>
      <p>{{ course.desc }}</p>
      <RouterLink class="btn btn-outline btn-sm" :to="modalLink('course', course.id)">View course</RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';
import CourseCover from './CourseCover.vue';
import { modalLink } from '@/composables/useModal';
import { offerStatus } from '@/content/offers';

const props = defineProps({ course: { type: Object, required: true } });
const status = computed(() => offerStatus(props.course, 'course'));
</script>
