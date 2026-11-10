import quickBooksLogo from '@/assets/quickbooks.png';
import rampLogo from '@/assets/ramp.png';
import paychexLogo from '@/assets/paychex.png';
import westpacLogo from '@/assets/westpac.png';
import thomasWhalenLogo from '@/assets/thomas-whalen.webp';
import anneErtelSawaskyLogo from '@/assets/anne-ertel-sawasky.webp';
import sanyuLubogoLogo from '@/assets/sanyu-lubogo.webp';

// Tools and books recommended on the Resources page.
// Sample picks: replace them with the tools you actually use and your own affiliate links.
// An empty url shows a "link coming soon" message when clicked.
export const AFFILIATE_DISCLOSURE =
  'Some links on this page are affiliate links. If you buy through them, The Owner’s Tribe may earn a commission at no extra cost to you. We only recommend tools and books we use or trust.';

export const AFFILIATE_GROUPS = [
  { category: 'Accounting and finance', icon: 'chart', items: [
    { name: 'QuickBooks Online', image: quickBooksLogo, desc: 'Cloud accounting for bookkeeping, invoicing, and financial reports.', url: 'https://quickbooks.intuit.com/ph/?gclsrc=aw.ds&gad_source=1&gad_campaignid=24163147897&gbraid=0AAAAAD1w8J9sZXCEkZz9ZUvtSmXwO466W&gclid=Cj0KCQiAnsvXBhCqARIsAHKgGNbofVfEZfpfD-WuqgHuoT4V324CRvAo8aIbPoplgqL6ncW2_TQ7dwsaApBREALw_wcB' },
    { name: 'Ramp', image: rampLogo, desc: 'Payroll, benefits, and HR tools for small businesses.', url: 'https://ramp.com/en-gb/' },
    { name: 'Paychex', image: paychexLogo, desc: 'Automates paying bills and collecting from customers.', url: 'https://www.paychex.com/' },
    { name: 'Westpac', image: westpacLogo, desc: 'Automates paying bills and collecting from customers.', url: 'https://www.westpacwealth.com/hawaii' }
  ] },
  { category: 'Strategic Partners', icon: 'layers', items: [
    { name: 'Thomas Whalen', image: thomasWhalenLogo, imageType: 'person', desc: 'Tax lawyer', url: 'https://business-advocates.com/' },
    { name: 'Anne Ertel-Sawasky', image: anneErtelSawaskyLogo, imageType: 'person', desc: 'CEO, ChFC, RICP, Attorney (WI)', url: 'https://quovadis-solutions.com/' },
    { name: 'Sanyu Labugo', image: sanyuLubogoLogo, imageType: 'person', desc: 'Founder', url: 'https://www.thelubogocreative.com/' }
  ] },
  // { category: 'Podcasting and content', icon: 'mic', items: [
  //   { name: 'Riverside', desc: 'Studio-quality remote recording for podcasts and video.', url: '' },
  //   { name: 'Canva', desc: 'Easy design for social posts, slides, and marketing.', url: '' }
  // ] },
  { category: 'Dive Into My Library', icon: 'book', items: [
    { name: 'Starting a Business the right way', by: 'Adam Bell', desc: 'A Field Guide to Building on Solid Ground', url: 'https://kdp.amazon.com/en_US/' },
    { name: 'Scalling a Business without Losing Control', by: 'Adam Bell', desc: 'A Field Guide to Growing on Numbers You Can Trust', url: 'https://kdp.amazon.com/en_US/' },
    { name: 'Selling a Business for what it\'s worth', by: 'Adam Bell', desc: 'A Field Guide to Preparing, Valuing, and Exiting Your Business', url: 'https://kdp.amazon.com/en_US/' }
  ] }
];
