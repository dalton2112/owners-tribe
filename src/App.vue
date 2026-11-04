<template>
  <a class="skip" href="#main" @click.prevent="focusMain">Skip to content</a>
  <SiteHeader />
  <main id="main" ref="mainEl" tabindex="-1">
    <RouterView :key="route.path" />
  </main>
  <NewsletterBand />
  <SiteFooter />
  <EpisodeModal v-if="modal?.type === 'episode'" :key="'e' + modal.item.id" :ep="modal.item" />
  <OfferModal v-else-if="modal" :key="modal.type + modal.item.id" :type="modal.type" :item="modal.item" />
  <ToastMessage />
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import NewsletterBand from '@/components/NewsletterBand.vue';
import EpisodeModal from '@/components/EpisodeModal.vue';
import OfferModal from '@/components/OfferModal.vue';
import ToastMessage from '@/components/ToastMessage.vue';
import { useModal } from '@/composables/useModal';
import { ui } from '@/composables/useUi';

const route = useRoute();
const mainEl = ref(null);
const { current: modal, close } = useModal();

// Lock page scroll while a window is open, and return focus to whatever opened it.
let opener = null;
watch(
  modal,
  (now, before) => {
    if (now && !before) opener = document.activeElement;
    document.documentElement.style.overflow = now ? 'hidden' : '';
    if (!now && before) {
      nextTick(() => {
        if (opener && opener.isConnected) opener.focus({ preventScroll: true });
        opener = null;
      });
    }
  },
  { immediate: true }
);

// Move focus to the new page after navigation so screen readers start at the top.
watch(
  () => route.path,
  (now, before) => {
    if (before === undefined) return;
    nextTick(() => mainEl.value?.focus({ preventScroll: true }));
  }
);

function focusMain() {
  mainEl.value?.focus();
  mainEl.value?.scrollIntoView();
}

function onKeydown(event) {
  if (event.key !== 'Escape') return;
  if (modal.value) close();
  else if (ui.menuOpen) ui.menuOpen = false;
}
onMounted(() => document.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown));
</script>
