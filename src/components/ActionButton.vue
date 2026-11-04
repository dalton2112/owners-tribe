<template>
  <RouterLink v-if="action.kind === 'route'" :class="classes" :to="action.to">{{ action.label }}</RouterLink>
  <a v-else :class="classes" :href="href || '#'" @click="onClick">{{ action.label }}</a>
</template>

<script setup>
import { computed } from 'vue';
import { calendlyUrl, checkoutUrl, guardLink } from '@/composables/useLinks';

// action: { kind: 'calendly' | 'checkout' | 'route', key, label, to }
const props = defineProps({
  action: { type: Object, required: true },
  answer: { type: String, default: '' },
  size: { type: String, default: 'lg' }
});

const classes = computed(() => ['btn', 'btn-gold', props.size === 'lg' ? 'btn-lg' : '']);
const href = computed(() => {
  if (props.action.kind === 'calendly') return calendlyUrl(props.action.key, props.answer);
  if (props.action.kind === 'checkout') return checkoutUrl(props.action.key);
  return '';
});

function onClick(event) {
  const message = props.action.kind === 'checkout' ? 'Checkout isn’t connected yet.' : 'This booking link isn’t connected yet.';
  guardLink(event, href.value, message);
}
</script>
