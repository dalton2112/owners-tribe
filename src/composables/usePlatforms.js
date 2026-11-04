import { CONFIG } from '@/config';
import { PLATFORMS } from '@/content/platforms';
import { showToast } from './useUi';

export const platformUrl = (key) => CONFIG.links[key] || '';

// Stops a click on a platform link that has not been set up yet and explains why.
export function guardPlatformLink(event, key) {
  if (!platformUrl(key)) {
    event.preventDefault();
    showToast(`${PLATFORMS[key].name} link coming soon.`);
  }
}
