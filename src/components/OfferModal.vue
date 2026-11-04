<template>
  <ModalShell :label="item.title" wide>
    <div class="offer-modal">
      <div class="offer-art">
        <CourseCover v-if="type === 'course'" :course="item" large />
        <ResourcePaper v-else :res="item" small />
      </div>
      <div class="offer-modal-body">
        <div class="offer-tags">
          <span class="chip">{{ type === 'course' ? item.topic : item.type }}</span>
          <span class="price-tag" :class="{ soon: status.soon }">{{ status.label }}</span>
        </div>
        <h2 class="modal-title offer-title">{{ item.title }}</h2>
        <p>{{ item.desc }}</p>
        <h3>{{ type === 'course' ? 'What you’ll learn' : 'What’s inside' }}</h3>
        <ul class="checks">
          <li v-for="x in points" :key="x"><AppIcon name="check" :size="18" /><span>{{ x }}</span></li>
        </ul>
        <template v-if="episodes.length">
          <h3>Related episodes</h3>
          <ul class="related one-col">
            <li v-for="ep in episodes" :key="ep.id">
              <RouterLink class="rel" :to="modalLink('episode', ep.id)">
                <AppIcon name="mic" />
                <span><small>Episode {{ ep.id }}</small>{{ ep.title }}</span>
              </RouterLink>
            </li>
          </ul>
        </template>
        <div class="offer-action">
          <a v-if="status.action === 'buy'" class="btn btn-gold btn-lg" :href="item.url" target="_blank" rel="noopener">
            {{ status.cta }}<AppIcon name="external" :size="16" />
          </a>
          <template v-else>
            <p v-if="status.action === 'waitlist'" class="offer-note">
              {{ type === 'course' ? 'Enrollment opens soon.' : 'Available soon.' }} Join the waitlist and we’ll email you first.
            </p>
            <LeadForm :kind="status.action" :item="item" :label="status.cta" />
          </template>
        </div>
      </div>
    </div>
  </ModalShell>
</template>

<script setup>
import { computed } from 'vue';
import AppIcon from './AppIcon.vue';
import CourseCover from './CourseCover.vue';
import LeadForm from './LeadForm.vue';
import ModalShell from './ModalShell.vue';
import ResourcePaper from './ResourcePaper.vue';
import { episodesForCourse } from '@/content/episodes';
import { offerStatus } from '@/content/offers';
import { modalLink } from '@/composables/useModal';

const props = defineProps({
  type: { type: String, required: true }, // course or product
  item: { type: Object, required: true }
});

const status = computed(() => offerStatus(props.item, props.type));
const points = computed(() => (props.type === 'course' ? props.item.learn : props.item.inside));
const episodes = computed(() => (props.type === 'course' ? episodesForCourse(props.item.id).slice(0, 3) : []));
</script>

<style>
.offer-modal { display: grid; }
@media (min-width: 760px) { .offer-modal { grid-template-columns: 0.85fr 1.15fr; } }
.offer-art { display: grid; place-items: center; padding: 48px 28px; background-color: var(--band); background-image: var(--grain); }
.offer-modal-body { padding: clamp(26px, 4vw, 44px); }
.offer-modal-body h3 { margin: 22px 0 10px; }
.offer-title { margin-top: 14px; }
.offer-modal-body .offer-tags { padding-right: 48px; }
.related.one-col { grid-template-columns: 1fr; }
.offer-action { margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--border); }
.offer-note { color: var(--muted); font-size: 0.95rem; margin-bottom: 16px; }
</style>
