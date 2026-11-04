<template>
  <form class="stack-form" novalidate @submit.prevent="submit">
    <template v-if="!done">
      <div class="form-row two">
        <div class="field">
          <label for="cf-name">Name</label>
          <input id="cf-name" v-model.trim="f.name" type="text" autocomplete="name" v-bind="errAttrs('name')" />
          <p v-if="e.name" id="cf-name-err" class="field-error">{{ e.name }}</p>
        </div>
        <div class="field">
          <label for="cf-email">Email</label>
          <input
            id="cf-email"
            v-model.trim="f.email"
            type="email"
            autocomplete="email"
            placeholder="name@company.com"
            v-bind="errAttrs('email')"
          />
          <p v-if="e.email" id="cf-email-err" class="field-error">{{ e.email }}</p>
        </div>
      </div>
      <div class="form-row two">
        <div class="field">
          <label for="cf-company">Company <span class="opt">(optional)</span></label>
          <input id="cf-company" v-model.trim="f.company" type="text" autocomplete="organization" />
        </div>
        <div class="field">
          <label for="cf-revenue">Annual revenue <span class="opt">(optional)</span></label>
          <select id="cf-revenue" v-model="f.revenue">
            <option value="">Choose a range</option>
            <option v-for="r in SITE.revenueRanges" :key="r">{{ r }}</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label for="cf-topic">What can we help with?</label>
        <select id="cf-topic" v-model="f.topic">
          <option v-for="t in SITE.contactTopics" :key="t">{{ t }}</option>
        </select>
      </div>
      <div class="field">
        <label for="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          v-model.trim="f.message"
          placeholder="Tell us a little about your business and what’s on your mind."
          v-bind="errAttrs('message', 'cf-msg')"
        ></textarea>
        <p v-if="e.message" id="cf-msg-err" class="field-error">{{ e.message }}</p>
      </div>
      <p v-if="sendError" class="field-error" role="alert">{{ sendError }}</p>
      <div>
        <button class="btn btn-teal" type="submit" :disabled="sending">{{ sending ? 'Sending…' : 'Send message' }}</button>
      </div>
    </template>
    <div v-else class="form-success" role="status">
      <AppIcon name="check" :size="22" />
      <div>
        <strong>Message sent.</strong>
        <p>Thanks, {{ f.name }}. We’ll reply to {{ f.email }}.</p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue';
import AppIcon from './AppIcon.vue';
import { SITE } from '@/content/site';
import { submitForm } from '@/services/forms';
import { isEmail } from '@/utils/format';

const f = reactive({ name: '', email: '', company: '', revenue: '', topic: SITE.contactTopics[0], message: '' });
const e = ref({});
const sending = ref(false);
const sendError = ref('');
const done = ref(false);

const errAttrs = (field, id = `cf-${field}`) =>
  e.value[field] ? { 'aria-invalid': 'true', 'aria-describedby': `${id}-err` } : {};

async function submit(event) {
  const errors = {};
  if (!f.name) errors.name = 'Enter your name.';
  if (!f.email) errors.email = 'Enter your email address.';
  else if (!isEmail(f.email)) errors.email = 'Check the email address. It should look like name@company.com.';
  if (!f.message) errors.message = 'Add a short message so we know how to help.';
  e.value = errors;
  if (Object.keys(errors).length) {
    await nextTick();
    event.target.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  sending.value = true;
  sendError.value = '';
  try {
    await submitForm('contact', { ...f });
    done.value = true;
  } catch (err) {
    sendError.value = 'The message didn’t send. Check your connection and try again.';
  } finally {
    sending.value = false;
  }
}
</script>
