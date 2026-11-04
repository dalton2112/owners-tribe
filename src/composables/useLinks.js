import { CONFIG } from '@/config';
import { showToast } from './useUi';

// Booking link for a Calendly event type, with the buying question pre-filled when an answer is given.
export function calendlyUrl(key, answer = '') {
  const base = CONFIG.calendly[key] || '';
  if (!base) return '';
  const { param, answers } = CONFIG.buyingQuestion;
  if (!answer || !param || !answers[answer]) return base;
  return `${base}${base.includes('?') ? '&' : '?'}${param}=${encodeURIComponent(answers[answer])}`;
}

export const checkoutUrl = (key) => CONFIG.checkout[key] || '';

// Stops a click on a link that hasn't been connected yet, and says so.
export function guardLink(event, href, message) {
  if (!href) {
    event.preventDefault();
    showToast(message);
  }
}
