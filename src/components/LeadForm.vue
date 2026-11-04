<template>
  <form class="lead-form" :class="{ 'dark-form': dark }" novalidate @submit.prevent="submit">
    <template v-if="!done">
      <div class="form-row two">
        <div class="field">
          <label :for="`${uid}-name`">First name <span class="opt">(optional)</span></label>
          <input :id="`${uid}-name`" v-model.trim="name" type="text" autocomplete="given-name" />
        </div>
        <div class="field">
          <label :for="`${uid}-email`">Email</label>
          <input
            :id="`${uid}-email`"
            v-model.trim="email"
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="name@company.com"
            :aria-invalid="error ? 'true' : null"
            :aria-describedby="error ? `${uid}-err` : null"
          />
          <p v-if="error" :id="`${uid}-err`" class="field-error">{{ error }}</p>
        </div>
      </div>
      <button class="btn" :class="dark ? 'btn-gold' : 'btn-teal'" type="submit" :disabled="sending">
        {{ sending ? 'Sending…' : label }}
      </button>
      <p class="form-note">{{ note }}</p>
    </template>
    <div v-else class="form-success" role="status">
      <AppIcon name="check" :size="22" />
      <p>{{ successText }}</p>
    </div>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue';
import AppIcon from './AppIcon.vue';
import { submitForm } from '@/services/forms';
import { isEmail, nextUid } from '@/utils/format';

const props = defineProps({
  // newsletter, download (free product sent by email), or waitlist (course or product not on sale yet)
  kind: { type: String, default: 'newsletter' },
  item: { type: Object, default: null },
  label: { type: String, required: true },
  dark: Boolean
});

const uid = nextUid('lead');
const name = ref('');
const email = ref('');
const error = ref('');
const sending = ref(false);
const done = ref(false);

const note = computed(() => {
  if (props.kind === 'newsletter') return 'One email a week. Unsubscribe anytime.';
  if (props.kind === 'waitlist') return 'We’ll email you as soon as it’s available. No spam.';
  return 'We’ll email it to you right away.';
});

const successText = computed(() => {
  const hi = name.value ? `, ${name.value}` : '';
  if (props.kind === 'newsletter') return `You’re in${hi}. Watch your inbox for the next issue from The Owner’s Tribe.`;
  if (props.kind === 'waitlist') return `You’re on the list${hi}. We’ll email ${email.value} as soon as ${props.item.title} is available.`;
  return `Thanks${hi}. The ${props.item.title} is on its way to ${email.value}.`;
});

async function submit() {
  if (!email.value) {
    error.value = 'Enter your email address, like name@company.com.';
    return;
  }
  if (!isEmail(email.value)) {
    error.value = 'Check the email address. It should look like name@company.com.';
    return;
  }
  error.value = '';
  sending.value = true;
  try {
    const formName = props.item ? `${props.kind}:${props.item.id}` : props.kind;
    await submitForm(formName, { name: name.value, email: email.value });
    done.value = true;
  } catch (err) {
    error.value = 'The form didn’t send. Check your connection and try again.';
  } finally {
    sending.value = false;
  }
}
</script>
