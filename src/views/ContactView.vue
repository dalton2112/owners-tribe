<template>
  <div>
    <PageHero
      title="Let’s Talk About Your Business"
      lede="Book a discovery call or send a message. Either way, you’ll hear back from Adam’s team."
    />
    <section class="section">
      <div class="wrap contact-grid">
        <div id="book" class="panel">
          <h2 class="panel-title">Book a Discovery Call</h2>
          <p class="muted">Pick a day and time that works for you. We’ll confirm by email.</p>
          <BookingWidget />
        </div>
        <div>
          <div class="panel">
            <h2 class="panel-title">Send a Message</h2>
            <p class="muted">Questions about services, the podcast, or being a guest.</p>
            <ContactForm />
          </div>
          <div class="contact-lines">
            <h3>Other ways to reach us</h3>
            <a class="cline" :href="`mailto:${CONFIG.email}`"><AppIcon name="mail" />{{ CONFIG.email }}</a>
            <div class="social-row">
              <a
                v-for="key in SOCIALS"
                :key="key"
                class="social-btn"
                :href="platformUrl(key) || '#'"
                target="_blank"
                rel="noopener"
                :aria-label="PLATFORMS[key].name"
                @click="guardPlatformLink($event, key)"
              >
                <AppIcon :name="key" :size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppIcon from '@/components/AppIcon.vue';
import BookingWidget from '@/components/BookingWidget.vue';
import ContactForm from '@/components/ContactForm.vue';
import PageHero from '@/components/PageHero.vue';
import { CONFIG } from '@/config';
import { PLATFORMS } from '@/content/platforms';
import { platformUrl, guardPlatformLink } from '@/composables/usePlatforms';

const SOCIALS = ['youtube', 'spotify', 'apple', 'iheart', 'amazon', 'instagram', 'linkedin', 'facebook'];
</script>

<style>
.contact-grid { display: grid; gap: 40px; align-items: start; }
@media (min-width: 1000px) {
  .contact-grid { grid-template-columns: 1.05fr 0.95fr; gap: 48px; }
}
.panel {
  padding: clamp(22px, 3.5vw, 38px); border-radius: 24px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow);
}
.panel-title { font-size: clamp(1.45rem, 1vw + 1.1rem, 1.85rem); margin-bottom: 8px; }
.panel > .muted { margin-bottom: 24px; }
.contact-lines { margin-top: 32px; display: grid; gap: 14px; }
.contact-lines h3 { margin-bottom: 4px; }
.cline {
  display: inline-flex; align-items: center; gap: 10px; color: var(--heading); font-weight: 700; text-decoration: none; width: fit-content;
}
.cline:hover { text-decoration: underline; text-underline-offset: 3px; }
.cline svg { color: var(--link); }
.social-row { display: flex; flex-wrap: wrap; gap: 8px; }
.social-btn {
  width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center;
  border: 1.5px solid var(--border); color: var(--heading); background: var(--surface); text-decoration: none;
}
.social-btn:hover { border-color: var(--heading); }
</style>
