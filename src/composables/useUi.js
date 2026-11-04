import { reactive } from 'vue';

// Small shared UI state: the mobile menu and the toast message.
export const ui = reactive({ menuOpen: false, toast: '' });

let toastTimer = null;
export function showToast(message) {
  ui.toast = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    ui.toast = '';
  }, 3600);
}
