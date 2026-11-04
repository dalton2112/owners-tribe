<template>
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div>
        <BrandMark />
        <p class="footer-tagline">Helping Business Owners Build Better Businesses.</p>
        <p class="footer-note">A podcast, community, and advisory practice for business owners who want clearer numbers and stronger companies.</p>
      </div>
      <nav aria-label="Footer">
        <h3>Navigate</h3>
        <ul>
          <li v-for="item in SITE.footerNav" :key="item.id">
            <RouterLink :to="{ name: item.id }">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div>
        <h3>Get started</h3>
        <ul>
          <li><RouterLink :to="BOOK_CALL">Book a Strategy Call</RouterLink></li>
          <li><RouterLink :to="{ name: 'courses' }">Courses</RouterLink></li>
          <li><RouterLink :to="{ name: 'resources' }">Templates and tools</RouterLink></li>
          <li><a href="#join" @click.prevent="toJoin">Join The Tribe</a></li>
        </ul>
      </div>
      <div>
        <h3>Follow</h3>
        <ul>
          <li v-for="key in SOCIALS" :key="key">
            <a :href="platformUrl(key) || '#'" target="_blank" rel="noopener" @click="guardPlatformLink($event, key)">
              <AppIcon :name="key" :size="18" />{{ PLATFORMS[key].name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <span>© {{ year }} The Owner’s Tribe. All rights reserved. <span class="footer-label">{{ SERVICE_LABEL }}</span></span>
      <a :href="`mailto:${CONFIG.email}`">{{ CONFIG.email }}</a>
    </div>
  </footer>
</template>

<script setup>
import AppIcon from './AppIcon.vue';
import BrandMark from './BrandMark.vue';
import { CONFIG } from '@/config';
import { SERVICE_LABEL, SITE } from '@/content/site';
import { PLATFORMS } from '@/content/platforms';
import { platformUrl, guardPlatformLink } from '@/composables/usePlatforms';
import { BOOK_CALL } from '@/router/links';
import { prefersReducedMotion } from '@/utils/format';

const SOCIALS = ['youtube', 'spotify', 'apple', 'iheart', 'amazon', 'instagram', 'linkedin', 'facebook'];
const year = new Date().getFullYear();

function toJoin() {
  document.getElementById('join')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
</script>

<style>
.site-footer { background: var(--footer); color: #A9B6C7; padding-block: 64px 32px; font-size: 0.95rem; }
.footer-grid { display: grid; gap: 40px; }
@media (min-width: 700px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1000px) {
  .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
}
.footer-tagline {
  font-family: var(--serif); font-style: italic; font-size: 1.32rem; line-height: 1.3; color: var(--cream); margin: 22px 0 12px; max-width: 22ch;
}
.footer-note { font-size: 0.88rem; max-width: 40ch; }
.site-footer h3 { font-size: 0.95rem; color: #FFFFFF; margin-bottom: 12px; }
.site-footer ul { list-style: none; padding: 0; margin: 0; }
.site-footer li a { display: inline-flex; align-items: center; gap: 10px; color: #C9D3E0; text-decoration: none; padding: 6px 0; }
.site-footer li a:hover { color: #FFFFFF; text-decoration: underline; text-underline-offset: 3px; }
.footer-bottom {
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px;
  margin-top: 48px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 0.86rem;
}
.footer-bottom a { color: #C9D3E0; }
.footer-label { margin-left: 10px; font-size: 0.76rem; letter-spacing: 0.12em; text-transform: uppercase; color: #8A97A8; }
</style>
