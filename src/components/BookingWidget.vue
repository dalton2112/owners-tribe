<template>
  <div class="booking">
    <iframe v-if="CONFIG.calendlyUrl" class="calendly" :src="CONFIG.calendlyUrl" title="Book a discovery call"></iframe>

    <form v-else-if="!done" class="stack-form" novalidate @submit.prevent="submit">
      <fieldset class="fs">
        <legend>Choose a day</legend>
        <div class="days">
          <button
            v-for="d in days"
            :key="d.key"
            type="button"
            class="day"
            :aria-pressed="day === d.key"
            @click="pickDay(d.key)"
          >
            <small>{{ d.wd }}</small><b>{{ d.num }}</b><small>{{ d.mon }}</small>
          </button>
        </div>
        <p v-if="e.day" class="field-error">{{ e.day }}</p>
      </fieldset>
      <fieldset class="fs">
        <legend>
          Choose a time<span v-if="CONFIG.timeZoneLabel" class="opt"> ({{ CONFIG.timeZoneLabel }})</span>
        </legend>
        <div class="times">
          <button
            v-for="t in CONFIG.callTimes"
            :key="t"
            type="button"
            class="time"
            :aria-pressed="time === t"
            @click="pickTime(t)"
          >
            {{ t }}
          </button>
        </div>
        <p v-if="e.time" class="field-error">{{ e.time }}</p>
      </fieldset>
      <div class="form-row two">
        <div class="field">
          <label for="bk-name">Name</label>
          <input id="bk-name" v-model.trim="f.name" type="text" autocomplete="name" v-bind="errAttrs('name')" />
          <p v-if="e.name" id="bk-name-err" class="field-error">{{ e.name }}</p>
        </div>
        <div class="field">
          <label for="bk-email">Email</label>
          <input
            id="bk-email"
            v-model.trim="f.email"
            type="email"
            autocomplete="email"
            placeholder="name@company.com"
            v-bind="errAttrs('email')"
          />
          <p v-if="e.email" id="bk-email-err" class="field-error">{{ e.email }}</p>
        </div>
      </div>
      <div class="form-row two">
        <div class="field">
          <label for="bk-company">Company <span class="opt">(optional)</span></label>
          <input id="bk-company" v-model.trim="f.company" type="text" autocomplete="organization" />
        </div>
        <div class="field">
          <label for="bk-revenue">Annual revenue <span class="opt">(optional)</span></label>
          <select id="bk-revenue" v-model="f.revenue">
            <option value="">Choose a range</option>
            <option v-for="r in SITE.revenueRanges" :key="r">{{ r }}</option>
          </select>
        </div>
      </div>
      <p v-if="sendError" class="field-error" role="alert">{{ sendError }}</p>
      <div>
        <button class="btn btn-gold btn-lg" type="submit" :disabled="sending">
          {{ sending ? 'Sending…' : 'Request this time' }}
        </button>
      </div>
    </form>

    <div v-else class="form-success" role="status">
      <AppIcon name="calendar" :size="22" />
      <div>
        <strong>Request sent for {{ chosenLabel }} at {{ time }}.</strong>
        <p>We’ll email {{ f.email }} to confirm the time.</p>
        <button class="link-btn" type="button" @click="reset">Choose a different time</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import AppIcon from './AppIcon.vue';
import { CONFIG } from '@/config';
import { SITE } from '@/content/site';
import { submitForm } from '@/services/forms';
import { isEmail } from '@/utils/format';

const day = ref('');
const time = ref('');
const f = reactive({ name: '', email: '', company: '', revenue: '' });
const e = ref({});
const sending = ref(false);
const sendError = ref('');
const done = ref(false);

// The next ten weekdays, starting tomorrow.
const days = computed(() => {
  const out = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  while (out.length < 10) {
    d.setDate(d.getDate() + 1);
    const weekday = d.getDay();
    if (weekday !== 0 && weekday !== 6) {
      out.push({
        key: d.toISOString().slice(0, 10),
        wd: d.toLocaleDateString('en-US', { weekday: 'short' }),
        num: d.getDate(),
        mon: d.toLocaleDateString('en-US', { month: 'short' }),
        label: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
      });
    }
  }
  return out;
});
const chosenLabel = computed(() => days.value.find((d) => d.key === day.value)?.label || '');

const errAttrs = (field) => (e.value[field] ? { 'aria-invalid': 'true', 'aria-describedby': `bk-${field}-err` } : {});

function pickDay(key) {
  day.value = key;
  e.value = { ...e.value, day: '' };
}
function pickTime(t) {
  time.value = t;
  e.value = { ...e.value, time: '' };
}

async function submit() {
  const errors = {};
  if (!day.value) errors.day = 'Choose a day for the call.';
  if (!time.value) errors.time = 'Choose a time for the call.';
  if (!f.name) errors.name = 'Enter your name.';
  if (!f.email) errors.email = 'Enter your email address.';
  else if (!isEmail(f.email)) errors.email = 'Check the email address. It should look like name@company.com.';
  e.value = errors;
  if (Object.keys(errors).length) return;

  sending.value = true;
  sendError.value = '';
  try {
    await submitForm('discovery-call', { ...f, day: day.value, dayLabel: chosenLabel.value, time: time.value });
    done.value = true;
  } catch (err) {
    sendError.value = 'The request didn’t send. Check your connection and try again.';
  } finally {
    sending.value = false;
  }
}

function reset() {
  done.value = false;
  time.value = '';
}
</script>

<style>
.field label, .fs legend { display: block; font-weight: 700; font-size: 0.88rem; margin-bottom: 6px; color: var(--heading); }
.fs { border: 0; padding: 0; margin: 0 0 22px; min-width: 0; }
.days { display: flex; gap: 8px; overflow-x: auto; padding: 2px 2px 8px; scroll-snap-type: x proximity; }
.day, .time {
  border: 1.5px solid var(--border); background: var(--surface); color: var(--text);
  border-radius: 12px; cursor: pointer; font-weight: 600;
}
.day { flex: none; width: 72px; padding: 10px 4px; text-align: center; scroll-snap-align: start; line-height: 1.25; }
.day b {
  display: block; font-size: 1.4rem; font-weight: 800; font-stretch: 108%; color: var(--heading); margin: 2px 0;
}
.day small { display: block; font-size: 0.74rem; color: var(--muted); }
.times { display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: 8px; }
.time { padding: 11px 8px; font-size: 0.94rem; }
.day:hover, .time:hover { border-color: var(--heading); }
.day[aria-pressed="true"], .time[aria-pressed="true"] { background: var(--band); border-color: var(--band); color: #FFFFFF; }
.day[aria-pressed="true"] b, .day[aria-pressed="true"] small { color: #FFFFFF; }
.calendly { width: 100%; min-height: 680px; border: 0; border-radius: 12px; }
</style>
