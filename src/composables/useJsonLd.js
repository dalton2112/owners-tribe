import { onMounted, onBeforeUnmount } from 'vue';

// Adds structured data to the page while the component is shown, and removes it when the visitor leaves.
export function useJsonLd(items) {
  const nodes = [];
  onMounted(() => {
    items.filter(Boolean).forEach((data) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = JSON.stringify(data);
      document.head.appendChild(el);
      nodes.push(el);
    });
  });
  onBeforeUnmount(() => nodes.forEach((el) => el.remove()));
}
