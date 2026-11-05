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
        <div v-if="featured" class="feature-video">
          <div class="ep-tags">
            <span class="chip">Latest video</span>
            <span class="meta-i">{{ featured.publishedAt }}</span>
          </div>
          <h2>{{ featured.title }}</h2>
          <RouterLink
            class="player-ph feature-video-thumbnail"
            :to="youtubeVideoLink(featured)"
            :aria-label="`Play ${featured.title}`"
          >
            <img :src="featured.thumbnail || crest" alt="" />
            <span class="ph-play"><AppIcon name="play" :size="30" /></span>
          </RouterLink>
        </div>
        <div v-if="featured" class="feature-video-info">
          <div class="feature-description">
            <template v-for="(block, index) in featuredDescription" :key="index">
              <p v-if="block.type === 'paragraph'">{{ block.text }}</p>
              <component :is="block.type === 'ordered' ? 'ol' : 'ul'" v-else>
                <li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li>
              </component>
            </template>
            <p v-if="!featuredDescription.length" class="muted">Watch the latest video from The Owner’s Tribe.</p>
          </div>
          <div class="cta-row">
            <RouterLink class="btn btn-outline" :to="youtubeVideoLink(featured)">Play video</RouterLink>
          </div>
        </div>
        <p v-else-if="loading" class="muted">Loading the latest videos…</p>
        <p v-else-if="feedError" class="feed-error" role="alert">{{ feedError }}</p>
        <p v-else class="muted">The latest videos will appear here when the YouTube channel is configured.</p>
      </div>
    </section>

    <section id="library" class="section section-alt">
      <div class="wrap">
        <SectionHead title="Episode Library">
          <div class="search">
            <label class="sr-only" for="ep-search">Search videos</label>
            <AppIcon name="search" :size="18" />
            <input id="ep-search" v-model="query" type="search" placeholder="Search videos" />
          </div>
        </SectionHead>
        <p class="results-note" aria-live="polite">
          Showing {{ filteredVideos.length }} {{ filteredVideos.length === 1 ? 'video' : 'videos' }}
        </p>
        <p v-if="feedError" class="feed-error" role="alert">{{ feedError }}</p>
        <p v-if="!channelId && !feedError" class="muted">Set VITE_YOUTUBE_CHANNEL_ID to load the channel videos.</p>
        <p v-else-if="loading && !videos.length" class="muted">Loading videos…</p>
        <div v-else-if="filteredVideos.length" class="youtube-grid">
          <article v-for="video in filteredVideos" :key="video.id" class="youtube-card">
            <RouterLink
              class="youtube-thumb"
              :to="youtubeVideoLink(video)"
              :aria-label="`Play ${video.title}`"
            >
              <img :src="video.thumbnail || crest" alt="" loading="lazy" />
              <span class="ph-play"><AppIcon name="play" :size="24" /></span>
            </RouterLink>
            <div class="ep-body">
              <h3><RouterLink :to="youtubeVideoLink(video)">{{ video.title }}</RouterLink></h3>
              <p class="ep-meta"><span class="meta-i">{{ video.publishedAt }}</span></p>
              <p class="youtube-description">{{ video.description }}</p>
            </div>
          </article>
        </div>
        <div v-else-if="videos.length" class="empty">
          <h3>No videos match your search</h3>
          <p>Try a different search term.</p>
          <button class="btn btn-outline btn-sm" type="button" @click="query = ''">Show all videos</button>
        </div>
        <div v-else-if="!loading && !feedError && channelId" class="empty">
          <h3>No videos found</h3>
          <p>This YouTube channel does not have any public videos yet.</p>
        </div>
        <div v-if="hasMore" class="load-more">
          <button class="btn btn-outline" type="button" :disabled="loading" @click="fetchVideos(channelId, true)">
            {{ loading ? 'Loading…' : 'Load more videos' }}
          </button>
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
            <span class="avatar lg">
              <img v-if="g.avatar" :src="g.avatar" :alt="`Photo of ${g.name}`" />
              <template v-else>{{ g.initials }}</template>
            </span>
            <div>
              <h3>{{ g.name }}</h3>
              <p class="role">{{ g.role }}</p>
              <p>{{ g.bio }}</p>
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
import PageHero from '@/components/PageHero.vue';
import PlatformLinks from '@/components/PlatformLinks.vue';
import SectionHead from '@/components/SectionHead.vue';
import crest from '@/assets/crest.webp';
import { firstEpisodeWith } from '@/content/episodes';
import { GUESTS } from '@/content/guests';
import { modalLink, youtubeVideoLink } from '@/composables/useModal';
import { useYoutubeChannel } from '@/composables/useYoutubeChannel';

const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const guests = GUESTS.filter((g) => g.id !== 'adam');

const query = ref('');
const { videos, loading, error, hasMore, fetchVideos } = useYoutubeChannel();
const featured = computed(() => videos.value[0]);
const feedError = computed(() => error.value);
const featuredDescription = computed(() => parseVideoDescription(featured.value?.description));

function parseVideoDescription(description = '') {
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
    paragraph = [];
  };
  const flushList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const line of description.split(/\r?\n/).map((text) => text.trim())) {
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const bullet = line.match(/^(?:[-*•▪◦]\s+)(.+)$/);
    const numbered = line.match(/^\d+[.)]\s+(.+)$/);
    if (bullet || numbered) {
      flushParagraph();
      const type = numbered ? 'ordered' : 'unordered';
      if (list?.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((bullet || numbered)[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

const filteredVideos = computed(() => {
  const q = query.value.trim().toLowerCase();
  console.log(videos)
  if (!q) return videos.value;
  return videos.value.filter((video) => [video.title, video.description].join(' ').toLowerCase().includes(q));
});

if (channelId) fetchVideos(channelId);
</script>

<style>
.feature-ep { display: grid; gap: 40px; align-items: center; }
@media (min-width: 940px) {
  .feature-ep { grid-template-columns: 1.25fr 1fr; gap: 56px; }
}
.feature-video h2 { margin-bottom: 16px; }
.feature-description { display: grid; gap: 14px; color: var(--muted); line-height: 1.65; }
.feature-description p, .feature-description ul, .feature-description ol { margin: 0; }
.feature-description ul, .feature-description ol { padding-left: 1.4rem; }
.feature-description li + li { margin-top: 6px; }
.feature-video-info .cta-row { margin-top: 22px; }
.toolbar { display: grid; gap: 20px; margin-bottom: 8px; }
.search { position: relative; max-width: 440px; width: 100%; }
.search svg {
  position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--muted); pointer-events: none;
}
.search input { padding-left: 46px; border-radius: 999px; }
.guest-grid { display: grid; gap: 40px 36px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr)); }
.guest-card { display: grid; grid-template-columns: 72px 1fr; gap: 20px; align-items: start; }
.guest-card .avatar img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; aspect-ratio: 1 / 1 }
.guest-card h3 { margin-bottom: 2px; }
.guest-card .role { color: var(--muted); font-size: 0.9rem; margin-bottom: 10px; }
.guest-card p { font-size: 0.98rem; }
.feature-video-thumbnail img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.youtube-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr)); gap: 36px 24px; }
.youtube-card { min-width: 0; }
.youtube-thumb { position: relative; display: block; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 14px; background: var(--navy); }
.youtube-thumb img { width: 100%; height: 100%; object-fit: cover; }
.youtube-thumb .ph-play { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
.youtube-card .ep-body h3 a { color: inherit; text-decoration: none; }
.youtube-card .ep-body h3 a:hover { text-decoration: underline; text-underline-offset: 3px; }
.youtube-description { display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 3; margin-top: 10px; color: var(--muted); }
.feed-error { color: #b42318; }
.load-more { display: flex; justify-content: center; margin-top: 36px; }
</style>
