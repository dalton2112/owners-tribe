<template>
  <div class="modal-backdrop" @mousedown.self="close">
    <div
      ref="dialog"
      class="modal"
      :class="{ narrow: !wide }"
      role="dialog"
      aria-modal="true"
      :aria-label="label"
      @keydown="trapFocus"
    >
      <button ref="closeButton" class="modal-close" type="button" aria-label="Close" @click="close">
        <AppIcon name="x" :size="20" />
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AppIcon from './AppIcon.vue';
import { useModal } from '@/composables/useModal';

defineProps({
  label: { type: String, required: true },
  wide: Boolean
});

const { close } = useModal();
const dialog = ref(null);
const closeButton = ref(null);

onMounted(() => closeButton.value?.focus({ preventScroll: true }));

// Keep keyboard focus inside the window while it is open.
function trapFocus(event) {
  if (event.key !== 'Tab') return;
  const nodes = dialog.value.querySelectorAll(
    'a[href], button:not([disabled]), input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'
  );
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
</script>

<style>
.modal .player-ph { border-radius: 0; }
.modal-backdrop {
  position: fixed; inset: 0; z-index: 100; display: flex; justify-content: center; align-items: flex-start;
  padding: calc(env(safe-area-inset-top, 0px) + 24px) 14px calc(env(safe-area-inset-bottom, 0px) + 24px);
  background: rgba(5, 14, 27, 0.74); overflow-y: auto; overscroll-behavior: contain;
}
.modal {
  position: relative; width: min(100%, 900px); margin-block: auto; background: var(--bg); color: var(--text);
  border-radius: 22px; overflow: hidden; box-shadow: 0 40px 90px -30px rgba(0, 0, 0, 0.75);
}
.modal.narrow { width: min(100%, 760px); }
@media (prefers-reduced-motion: no-preference) {
  .modal { animation: modalIn 0.22s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
}
@keyframes modalIn { from { opacity: 0; transform: translateY(14px) scale(0.985); } to { opacity: 1; transform: none; }
}
.modal-close {
  position: absolute; top: 14px; right: 14px; z-index: 3; width: 44px; height: 44px; border-radius: 50%;
  display: grid; place-items: center; border: 0; cursor: pointer; background: rgba(10, 28, 51, 0.8); color: #FFFFFF;
}
.modal-close:hover { background: var(--navy); }
.modal-body { padding: clamp(24px, 4vw, 44px); }
.modal-title { font-size: clamp(1.6rem, 2vw + 1rem, 2.35rem); margin-bottom: 14px; padding-right: 8px; }
.modal-lede { font-size: 1.1rem; }
</style>
