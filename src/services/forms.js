import { CONFIG } from '@/config';

/**
 * Sends a form to CONFIG.formEndpoint as JSON.
 * formName tells the receiving service which form was used: newsletter, download:<id>, waitlist:<id>, contact, or discovery-call.
 * When no endpoint is set, the submission is logged to the browser console and treated as sent.
 */
export async function submitForm(formName, data) {
  const payload = { form: formName, page: window.location.pathname, submittedAt: new Date().toISOString(), ...data };

  if (!CONFIG.formEndpoint) {
    console.info('[forms] No formEndpoint set in src/config.js. Submission not sent:', payload);
    return { ok: true, simulated: true };
  }

  const response = await fetch(CONFIG.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`);
  return { ok: true };
}
