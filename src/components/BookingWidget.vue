<template>
  <div class="booking">
    <form v-if="!done" class="stack-form" novalidate @submit.prevent="submit">
      <fieldset class="fs">
        <legend>Choose a day</legend>
        <div class="calendar">
          <div class="calendar-header">
            <button
              class="calendar-nav previous"
              type="button"
              aria-label="Previous month"
              :disabled="!canGoPrevious"
              @click="changeMonth(-1)"
            >
              <AppIcon name="arrow" :size="16" />
            </button>
            <h3 aria-live="polite">{{ monthLabel }}</h3>
            <button
              class="calendar-nav"
              type="button"
              aria-label="Next month"
              :disabled="!canGoNext"
              @click="changeMonth(1)"
            >
              <AppIcon name="arrow" :size="16" />
            </button>
          </div>
          <div class="calendar-weekdays" aria-hidden="true">
            <span v-for="weekday in WEEKDAYS" :key="weekday">{{ weekday }}</span>
          </div>
          <div class="calendar-grid">
            <span v-for="cell in calendarCells" :key="cell.key" class="calendar-cell">
              <button
                v-if="cell.date"
                class="calendar-date"
                type="button"
                :disabled="!cell.available"
                :aria-label="cell.label"
                :aria-pressed="day === cell.key"
                @click="pickDay(cell.key)"
              >
                {{ cell.date.getDate() }}
              </button>
            </span>
          </div>
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
          <label for="bk-industry">Industry <span class="opt">(optional)</span></label>
          <input id="bk-industry" v-model.trim="f.industry" type="text" />
        </div>
        <div class="field">
          <label for="bk-business-stage">Business Stage</label>
          <select
            id="bk-business-stage"
            v-model="f.businessStage"
            v-bind="errAttrs('businessStage')"
          >
            <option value="">Choose a stage</option>
            <option value="Start">Start</option>
            <option value="Scale">Scale</option>
            <option value="Sell">Sell</option>
          </select>
          <p v-if="e.businessStage" id="bk-businessStage-err" class="field-error">{{ e.businessStage }}</p>
        </div>
      </div>
      <div class="field">
        <label for="bk-revenue">Annual revenue <span class="opt">(optional)</span></label>
        <select id="bk-revenue" v-model="f.revenue">
          <option value="">Choose a range</option>
          <option v-for="r in SITE.revenueRanges" :key="r">{{ r }}</option>
        </select>
      </div>
      <p v-if="sendError" class="field-error" role="alert">{{ sendError }}</p>
      <p v-if="!CONFIG.formEndpoint" class="booking-notice" role="status">
        Online booking requests aren’t connected yet. To arrange a call in the meantime,
        <a href="mailto:info@theownerstribe.com">email info@theownerstribe.com</a>.
      </p>
      <div>
        <button class="btn btn-gold btn-lg" type="submit" :disabled="sending || !CONFIG.formEndpoint">
          {{ sending ? 'Sending…' : 'Request this time' }}
        </button>
      </div>
    </form>

    <div v-else class="form-success booking-success" role="status">
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
const f = reactive({ name: '', email: '', industry: '', businessStage: '', revenue: '' });
const e = ref({});
const sending = ref(false);
const sendError = ref('');
const done = ref(false);
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dateOfMonth = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${dateOfMonth}`;
};

const days = computed(() => {
  const out = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  while (out.length < 10) {
    d.setDate(d.getDate() + 1);
    const weekday = d.getDay();
    if (weekday !== 0 && weekday !== 6) {
      out.push({
        key: dateKey(d),
        date: new Date(d),
        label: d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
      });
    }
  }
  return out;
});
const firstAvailableDate = days.value[0].date;
const lastAvailableDate = days.value[days.value.length - 1].date;
const calendarMonth = ref(new Date(firstAvailableDate.getFullYear(), firstAvailableDate.getMonth(), 1, 12));
const monthLabel = computed(() => calendarMonth.value.toLocaleDateString(undefined, { month: 'long', year: 'numeric' }));
const canGoPrevious = computed(() => {
  const month = calendarMonth.value;
  return month.getFullYear() > firstAvailableDate.getFullYear() ||
    (month.getFullYear() === firstAvailableDate.getFullYear() && month.getMonth() > firstAvailableDate.getMonth());
});
const canGoNext = computed(() => {
  const month = calendarMonth.value;
  return month.getFullYear() < lastAvailableDate.getFullYear() ||
    (month.getFullYear() === lastAvailableDate.getFullYear() && month.getMonth() < lastAvailableDate.getMonth());
});
const calendarCells = computed(() => {
  const year = calendarMonth.value.getFullYear();
  const month = calendarMonth.value.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  return Array.from({ length: cellCount }, (_, index) => {
    const dateOfMonth = index - firstWeekday + 1;
    if (dateOfMonth < 1 || dateOfMonth > daysInMonth) {
      return { key: `empty-${index}`, date: null };
    }

    const date = new Date(year, month, dateOfMonth, 12);
    const key = dateKey(date);
    const availableDay = days.value.find((available) => available.key === key);
    return {
      key,
      date,
      available: Boolean(availableDay),
      label: availableDay?.label || date.toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };
  });
});
const chosenLabel = computed(() => days.value.find((d) => d.key === day.value)?.label || '');

const errAttrs = (field) => (e.value[field] ? { 'aria-invalid': 'true', 'aria-describedby': `bk-${field}-err` } : {});

function changeMonth(offset) {
  calendarMonth.value = new Date(calendarMonth.value.getFullYear(), calendarMonth.value.getMonth() + offset, 1, 12);
}

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
  if (!f.businessStage) errors.businessStage = 'Choose your business stage.';
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
.fs:first-child legend { margin-bottom: 12px; text-align: center; font-size: 1rem; }
.calendar {
  width: 100%; max-width: 420px; margin-inline: auto; padding: 20px;
  border: 1px solid var(--border); border-radius: 22px; background: var(--surface);
  box-shadow: 0 14px 36px rgba(10, 28, 51, 0.09);
}
.calendar-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid var(--border);
}
.calendar-header h3 { margin: 0; color: var(--heading); font-size: 1.12rem; font-weight: 800; }
.calendar-nav {
  display: grid; place-items: center; width: 38px; height: 38px; padding: 0;
  border: 1px solid var(--border); border-radius: 50%; background: var(--surface); color: var(--heading); cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}
.calendar-nav.previous svg { transform: rotate(180deg); }
.calendar-nav:disabled { opacity: 0.4; cursor: not-allowed; }
.calendar-nav:not(:disabled):hover { transform: translateY(-1px); border-color: var(--gold); background: rgba(217, 164, 65, 0.12); }
.calendar-weekdays, .calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); text-align: center; }
.calendar-weekdays { margin-bottom: 6px; color: var(--muted); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.calendar-weekdays span { padding: 8px 0; }
.calendar-cell { display: grid; place-items: center; padding: 3px 0; }
.calendar-date {
  width: 40px; max-width: 100%; aspect-ratio: 1; padding: 0;
  border: 1.5px solid transparent; border-radius: 50%; background: transparent; color: var(--heading);
  cursor: pointer; font-weight: 650;
  transition: transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.calendar-date:disabled { color: var(--muted); cursor: not-allowed; }
.calendar-date:not(:disabled) { border-color: rgba(217, 164, 65, 0.28); background: rgba(217, 164, 65, 0.08); }
.calendar-date:not(:disabled):hover { transform: scale(1.08); border-color: var(--gold); background: rgba(217, 164, 65, 0.2); }
.time {
  border: 1.5px solid var(--border); background: var(--surface); color: var(--text);
  border-radius: 12px; cursor: pointer; font-weight: 600;
}
.times { display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: 8px; }
.time { padding: 11px 8px; font-size: 0.94rem; }
.time:hover { border-color: var(--heading); }
.calendar-date[aria-pressed="true"], .time[aria-pressed="true"] { background: var(--band); border-color: var(--band); color: #FFFFFF; }
.booking-success { border: 1px solid rgba(217, 164, 65, 0.35); background: rgba(124, 202, 93, 0.096); color: var(--heading); }
.booking-success svg { color: var(--gold); }
.booking-notice { color: var(--muted); font-size: 0.9rem; }
.booking-notice a { color: var(--link); }
</style>
