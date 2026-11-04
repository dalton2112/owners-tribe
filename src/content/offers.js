// Works out the price label and the main action for a course or product.
// action is buy (has a checkout link), download (free, sent by email), or waitlist (not on sale yet).
export function offerStatus(item, type) {
  if (type === 'product' && item.free) {
    return { label: 'Free', action: 'download', cta: 'Email me the checklist', soon: false };
  }
  if (item.url) {
    return { label: item.price || 'Available now', action: 'buy', cta: type === 'course' ? 'Enroll now' : 'Buy now', soon: false };
  }
  return { label: 'Coming soon', action: 'waitlist', cta: 'Join the waitlist', soon: true };
}
