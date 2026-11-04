import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getEpisode } from '@/content/episodes';
import { getCourse } from '@/content/courses';
import { getProduct } from '@/content/products';

// Episode, course, and product windows are driven by the URL query,
// so every window has a shareable link, for example /podcast?episode=14 or /courses?course=cashflow.
export const modalLink = (type, id) => ({ query: { [type]: String(id) } });

export function useModal() {
  const route = useRoute();
  const router = useRouter();

  const current = computed(() => {
    const { episode, course, product } = route.query;
    if (episode && getEpisode(episode)) return { type: 'episode', item: getEpisode(episode) };
    if (course && getCourse(course)) return { type: 'course', item: getCourse(course) };
    if (product && getProduct(product)) return { type: 'product', item: getProduct(product) };
    return null;
  });

  const close = () => router.replace({ query: {} });

  return { current, close };
}
