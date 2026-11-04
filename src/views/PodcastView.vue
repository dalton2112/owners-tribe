<template>
  <div>
    <PageHero
      title="Conversations Every Business Owner Needs to Hear"
      lede="Candid conversations with owners, operators, and advisors, plus Adam Bell’s financial education series on the reports behind every good decision."
    >
      <PlatformLinks variant="dark" long />
    </PageHero>

    <section class="section">
      <div class="wrap feature-ep">
        <RouterLink class="player-ph" :to="modalLink('episode', featured.id)" :aria-label="`Watch episode ${featured.id}: ${featured.title}`">
          <span class="ph-num" aria-hidden="true">{{ padNumber(featured.id) }}</span>
          <span class="ph-cap">Featured episode</span>
          <img :src="crest" alt="" />
          <span class="ph-play"><AppIcon name="play" :size="30" /></span>
        </RouterLink>
        <div>
          <div class="ep-tags">
            <span class="chip">Episode {{ featured.id }}</span>
            <span class="chip">{{ featured.category }}</span>
            <span class="meta-i"><AppIcon name="clock" :size="15" />{{ featured.duration }} min</span>
          </div>
          <h2>{{ featured.title }}</h2>
          <p class="muted">{{ featured.summary }}</p>
          <ul class="checks">
            <li v-for="t in featured.takeaways.slice(0, 2)" :key="t"><AppIcon name="check" :size="18" /><span>{{ t }}</span></li>
          </ul>
          <div class="cta-row">
            <RouterLink class="btn btn-outline" :to="modalLink('episode', featured.id)">Watch the episode</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section id="library" class="section section-alt">
      <div class="wrap">
        <SectionHead title="Episode Library">
          <div class="search">
            <label class="sr-only" for="ep-search">Search episodes</label>
            <AppIcon name="search" :size="18" />
            <input id="ep-search" v-model="query" type="search" placeholder="Search episodes, guests, or topics" />
          </div>
        </SectionHead>
        <div class="filters" role="group" aria-label="Filter episodes by category">
          <button
            v-for="c in categories"
            :key="c"
            class="fchip"
            type="button"
            :aria-pressed="category === c"
            @click="category = c"
          >
            {{ c }}<span>{{ countFor(c) }}</span>
          </button>
        </div>
        <p class="results-note" aria-live="polite">
          Showing {{ filtered.length }} {{ filtered.length === 1 ? 'episode' : 'episodes' }}
        </p>
        <div v-if="filtered.length" class="ep-grid">
          <EpisodeCard v-for="ep in filtered" :key="ep.id" :ep="ep" />
        </div>
        <div v-else class="empty">
          <h3>No episodes match your search</h3>
          <p>Try a different word, or show every category.</p>
          <button class="btn btn-outline btn-sm" type="button" @click="resetFilters">Show all episodes</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <SectionHead
          title="Guest Profiles"
          text="Owners, operators, and advisors who have built, fixed, and sold real businesses."
        />
        <div class="guest-grid">
          <article v-for="g in guests" :key="g.id" class="guest-card">
            <span class="avatar lg">{{ g.initials }}</span>
            <div>
              <h3>{{ g.name }}</h3>
              <p class="role">{{ g.role }}</p>
              <p>{{ g.bio }}</p>
              <RouterLink class="text-link" :to="modalLink('episode', firstEpisodeWith(g.id).id)">
                Watch episode {{ firstEpisodeWith(g.id).id }}
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CtaBand
      heading="Hear Something That Sounds Like Your Business?"
      text="Talk it through with Adam. A strategy call is a focused conversation about your numbers, your team, and what to do next."
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import CtaBand from '@/components/CtaBand.vue';
import EpisodeCard from '@/components/EpisodeCard.vue';
import PageHero from '@/components/PageHero.vue';
import PlatformLinks from '@/components/PlatformLinks.vue';
import SectionHead from '@/components/SectionHead.vue';
import crest from '@/assets/crest.webp';
import { EPISODES, firstEpisodeWith, guestOf } from '@/content/episodes';
import { GUESTS } from '@/content/guests';
import { SITE } from '@/content/site';
import { modalLink } from '@/composables/useModal';
import { padNumber } from '@/utils/format';

const featured = EPISODES[0];
const categories = ['All', ...SITE.categories];
const guests = GUESTS.filter((g) => g.id !== 'adam');

const category = ref('All');
const query = ref('');

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return EPISODES.filter((e) => {
    if (category.value !== 'All' && e.category !== category.value) return false;
    if (!q) return true;
    return [e.title, e.summary, e.category, guestOf(e).name].join(' ').toLowerCase().includes(q);
  });
});

const countFor = (c) => (c === 'All' ? EPISODES.length : EPISODES.filter((e) => e.category === c).length);

function resetFilters() {
  category.value = 'All';
  query.value = '';
}
</script>

<style>
.feature-ep { display: grid; gap: 40px; align-items: center; }
@media (min-width: 940px) {
  .feature-ep { grid-template-columns: 1.25fr 1fr; gap: 56px; }
}
.feature-ep h2 { margin-bottom: 16px; }
.toolbar { display: grid; gap: 20px; margin-bottom: 8px; }
.search { position: relative; max-width: 440px; width: 100%; }
.search svg {
  position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--muted); pointer-events: none;
}
.search input { padding-left: 46px; border-radius: 999px; }
.guest-grid { display: grid; gap: 40px 36px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr)); }
.guest-card { display: grid; grid-template-columns: 72px 1fr; gap: 20px; align-items: start; }
.guest-card h3 { margin-bottom: 2px; }
.guest-card .role { color: var(--muted); font-size: 0.9rem; margin-bottom: 10px; }
.guest-card p { font-size: 0.98rem; }
</style>
