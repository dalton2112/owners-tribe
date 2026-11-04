export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export const padNumber = (n) => String(n).padStart(2, '0');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const isEmail = (value) => EMAIL_PATTERN.test(value);

let uidCounter = 0;
export const nextUid = (prefix = 'f') => `${prefix}${++uidCounter}`;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
