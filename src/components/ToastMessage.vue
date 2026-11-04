<template>
  <div class="toast" :class="{ show: ui.toast }" role="status" aria-live="polite">{{ ui.toast }}</div>
</template>

<script setup>
import { ui } from '@/composables/useUi';
</script>

<style>
.toast {
  position: fixed; left: 50%; bottom: calc(env(safe-area-inset-bottom, 0px) + 24px); z-index: 200;
  transform: translate(-50%, 24px); opacity: 0; pointer-events: none;
  max-width: calc(100% - 32px); padding: 14px 20px; border-radius: 12px;
  background: var(--navy); color: #FFFFFF; font-weight: 600; border-left: 4px solid var(--gold);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.6); transition: opacity 0.2s ease, transform 0.2s ease;
}
.toast.show { opacity: 1; transform: translate(-50%, 0); }
</style>
