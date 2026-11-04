<template>
  <ModalShell :label="ep.title" wide>
    <div class="player">
      <iframe
        v-if="ep.youtubeId"
        :src="`https://www.youtube-nocookie.com/embed/${ep.youtubeId}`"
        :title="ep.title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button v-else class="player-ph" type="button" :aria-label="`Play episode ${ep.id}`" @click="playVideo">
        <span class="ph-num" aria-hidden="true">{{ padNumber(ep.id) }}</span>
        <span class="ph-cap">{{ seriesName(ep) }}</span>
        <img :src="crest" alt="" />
        <span class="ph-play"><AppIcon name="play" :size="30" /></span>
      </button>
    </div>
    <div class="modal-body">
      <div class="ep-tags">
        <span class="chip">Episode {{ ep.id }}</span>
        <span class="chip">{{ ep.category }}</span>
        <span class="meta-i"><AppIcon name="clock" :size="15" />{{ ep.duration }} min</span>
        <span class="meta-i">{{ formatDate(ep.date) }}</span>
      </div>
      <h2 class="modal-title">{{ ep.title }}</h2>
      <p class="modal-lede">{{ ep.summary }}</p>
      <div class="modal-cols">
        <section>
          <h3>Key takeaways</h3>
          <ul class="checks">
            <li v-for="t in ep.takeaways" :key="t"><AppIcon name="check" :size="18" /><span>{{ t }}</span></li>
          </ul>
        </section>
        <section class="guest-box">
          <h3>{{ guest.id === 'adam' ? 'About the host' : 'About the guest' }}</h3>
          <div class="guest-head">
            <span class="avatar lg">{{ guest.initials }}</span>
            <div>
              <strong>{{ guest.name }}</strong>
              <small>{{ guest.role }}</small>
            </div>
          </div>
          <p>{{ guest.bio }}</p>
        </section>
      </div>
      <section class="related-wrap">
        <h3>Go deeper</h3>
        <ul class="related">
          <li v-for="c in relatedCourses" :key="c.id">
            <RouterLink class="rel" :to="modalLink('course', c.id)">
              <AppIcon name="play" />
              <span><small>Course</small>{{ c.title }}</span>
            </RouterLink>
          </li>
          <li v-for="p in relatedProducts" :key="p.id">
            <RouterLink class="rel" :to="modalLink('product', p.id)">
              <AppIcon name="file" />
              <span><small>{{ p.free ? 'Free ' + p.type.toLowerCase() : p.type }}</small>{{ p.title }}</span>
            </RouterLink>
          </li>
        </ul>
      </section>
      <div class="modal-actions">
        <PlatformLinks />
        <RouterLink class="btn btn-gold" :to="BOOK_CALL">Book a Strategy Call</RouterLink>
      </div>
    </div>
  </ModalShell>
</template>

<script setup>
import { computed } from 'vue';
import AppIcon from './AppIcon.vue';
import ModalShell from './ModalShell.vue';
import PlatformLinks from './PlatformLinks.vue';
import crest from '@/assets/crest.webp';
import { CONFIG } from '@/config';
import { guestOf, seriesName } from '@/content/episodes';
import { getCourse } from '@/content/courses';
import { getProduct } from '@/content/products';
import { modalLink } from '@/composables/useModal';
import { showToast } from '@/composables/useUi';
import { BOOK_CALL } from '@/router/links';
import { formatDate, padNumber } from '@/utils/format';

const props = defineProps({ ep: { type: Object, required: true } });

const guest = computed(() => guestOf(props.ep));
const relatedCourses = computed(() => props.ep.courses.map((id) => getCourse(id)).filter(Boolean));
const relatedProducts = computed(() => props.ep.products.map((id) => getProduct(id)).filter(Boolean));

function playVideo() {
  if (CONFIG.links.youtube) window.open(CONFIG.links.youtube, '_blank', 'noopener');
  else showToast('This episode’s video is coming soon.');
}
</script>

<style>
.player { position: relative; aspect-ratio: 16 / 9; background: var(--navy); }
.player iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.modal-cols { display: grid; gap: 32px; margin-top: 30px; }
@media (min-width: 760px) {
  .modal-cols { grid-template-columns: 1.2fr 1fr; gap: 44px; }
}
.modal-cols h3, .related-wrap h3 { margin-bottom: 12px; }
.guest-box { padding: 22px; border-radius: 18px; background: var(--surface-2); }
.guest-head { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
.guest-head strong { display: block; color: var(--heading); font-size: 1.05rem; }
.guest-head small { display: block; color: var(--muted); font-size: 0.86rem; line-height: 1.35; }
.guest-box p { margin: 0; font-size: 0.96rem; }
.related-wrap { margin-top: 34px; }
.related { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
@media (min-width: 700px) {
  .related { grid-template-columns: 1fr 1fr; }
}
.modal-actions {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;
  margin-top: 34px; padding-top: 24px; border-top: 1px solid var(--border);
}
</style>
