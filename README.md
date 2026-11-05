# The Owner’s Tribe website (Vue 3 + Vite)

The website for The Owner’s Tribe with Adam Bell: Home, Podcast, Services, Courses, Testimonies, About Adam, Resources, and Contact.

Built with Vue 3 (`<script setup>` single-file components), Vue Router, and Vite. Fonts (Archivo and Fraunces) are self-hosted through Fontsource, so the site makes no calls to Google Fonts.

## Getting started

You need Node.js 18.18 or newer.

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build in the dist folder
npm run preview   # serve the production build locally
```

## Project structure

| Path | What it holds |
| --- | --- |
| `src/config.js` | Site settings: channel links, Calendly, form endpoint, contact email, call times. |
| `src/content/` | All editable content: episodes, guests, courses, products, affiliate links, services, testimonials, client stories, navigation. |
| `src/views/` | One file per page. |
| `src/components/` | Shared pieces: header, footer, cards, forms, and the episode, course, and product windows. |
| `src/styles/main.css` | Brand colors and fonts (design tokens), light and dark mode, buttons, forms, and other shared styles. |
| `src/router/` | Page routes, page titles, and scroll behavior. |
| `src/services/forms.js` | Sends form submissions to your form service. |
| `src/assets/crest.webp` | The crest from the logo with a transparent background. |
| `public/` | Favicon, Apple touch icon, and the Netlify redirect file. |

Each component keeps its own styles in a `<style>` block at the bottom of its `.vue` file. Brand colors live as CSS variables at the top of `src/styles/main.css`.

## Before launch

1. **Links and email.** Fill in `src/config.js`: YouTube, Spotify, Apple Podcasts, iHeartRadio, Amazon Music, Instagram, LinkedIn, Facebook, and the contact email (hello@theownerstribe.com is a stand-in). Empty links show a "coming soon" message.
2. **Forms.** Set `formEndpoint` in `src/config.js` to a URL that accepts JSON, for example a Formspree form, a Zapier or Make webhook, or your CRM. Every form posts `{ form, page, submittedAt, ...fields }`, where `form` is `newsletter`, `download:<id>`, `waitlist:<id>`, `contact`, or `discovery-call`. Until it’s set, forms show their confirmation and log the submission to the browser console only.
3. **Calendly.** Set `calendlyUrl` to show the live Calendly calendar on the Contact page instead of the built-in booking request form.
4. **YouTube video library.** Set `VITE_YOUTUBE_API_KEY` and `VITE_YOUTUBE_CHANNEL_ID` in `.env` to load the channel’s latest public videos on the Podcast page. Restrict the API key to the YouTube Data API v3 and your site’s referrers. The sample episode details in `src/content/episodes.js` are still used by related course and guest links.
5. **Courses.** In `src/content/courses.js`, add each course’s enrollment or checkout link to `url` and its price to `price`. A course with no link shows a "Join the waitlist" form instead of a buy button.
6. **Templates and workbooks.** In `src/content/products.js`, add each product’s checkout link (Gumroad, Shopify, a Stripe Payment Link, and so on) and price the same way. The free Financial Clarity Checklist (`free: true`) is sent by email through the form.
7. **Affiliate links.** In `src/content/affiliates.js`, replace the sample tools and books with the ones you recommend and paste your affiliate links into `url`. Affiliate links open in a new tab with `rel="sponsored"`, and the disclosure at the top of the section explains them to visitors. Keep that disclosure in place: it’s generally required when you earn commissions from recommendations.
8. **Sample content.** The guests, episodes, courses, products, testimonials, and client stories are samples. Replace them with real, approved content in `src/content/`.
9. **Headshot.** Replace the placeholder in `src/views/AboutView.vue` (marked with a comment) with Adam’s photo.

## Shareable links

Every page has its own address (`/podcast`, `/services`, `/courses`, `/testimonies`, `/about`, `/resources`, `/contact`). Episodes, courses, and products open in a window with their own link, for example `/podcast?episode=14`, `/courses?course=cashflow`, or `/resources?product=cashflow-template`. `/contact#book` jumps to the booking form, and `/resources#tools` jumps to the recommended tools. The old addresses `/success-stories` and `/blog` redirect to `/testimonies` and `/resources`.

## Services: Start, Scale, Sell

The Services page (`/services`) follows the Owner’s Tribe website setup guide. Visitors pick a door, answer one question on the Start and Scale pages, and land on the page that fits.

| Page | Address | In search? | Main button |
| --- | --- | --- | --- |
| Services hub | `/services` | Yes | Start, Scale, or Sell door |
| Start question | `/start` | No | Yes, No, or Maybe |
| Start-Buy | `/start/buy-a-business` | Yes | Book your buyer strategy call |
| Start-Setup | `/start/business-setup` | Yes | Get started ($4,999), checkout |
| Start-Setup Maybe | `/start/business-setup/explore` | No | Get started ($4,999), checkout |
| After Start checkout | `/start/welcome` | No | Book your setup kickoff |
| Scale question | `/scale` | No | Yes, No, or Maybe |
| Scale-Acquire | `/scale/acquisitions` | Yes | Book your acquisition strategy call |
| Scale-Fixer | `/scale/business-advisor` | Yes | Book a free fit call |
| Scale-Fixer Maybe | `/scale/business-advisor/explore` | No | Book a free fit call |
| Sell | `/sell` | Yes | Book a meeting (starting at $4,999) |

- **Copy:** `src/content/pages.js` holds the hooks, headings, sections, buttons, and FAQs for each page; `src/content/team.js` holds the "Your Team" strip. The section text is draft wording: replace it with the copy from *Owners_Tribe_Transaction_Advisory.pdf*.
- **Calendly:** paste one link per event type into `CONFIG.calendly` in `src/config.js`. Add the buying question to every Start and Scale event type; the buttons pre-fill it using Calendly’s `a1=` setting (see the notes in `config.js`).
- **Checkout:** paste the Start package link into `CONFIG.checkout.startPackage`. After payment, send buyers to the Setup kickoff Calendly link, or to `/start/welcome`.
- **Pending answers:** FAQs marked `pending: true` (buy-side pricing) stay hidden until Adam confirms them.
- **Search:** each page sets the title and meta description from the guide, and the question pages, Maybe pages, and `/start/welcome` are marked noindex. Destination pages add Service and FAQ structured data.
- The old `/consulting` address redirects to `/services`.

## Deploying

Run `npm run build` and upload the `dist` folder, or connect the repository to your host.

- **Netlify:** works as is (`public/_redirects` is included). Build command `npm run build`, publish directory `dist`.
- **Vercel:** works as is (`vercel.json` is included).
- **Other hosts:** set up a rewrite so every path serves `index.html`. Without it, refreshing a page like `/podcast` returns a 404.
- **GitHub Pages or a host without rewrites:** in `src/router/index.js`, replace `createWebHistory` with `createWebHashHistory`. Addresses then look like `/#/podcast`.
- **Hosting in a subfolder:** set `base` in `vite.config.js`, for example `base: '/tribe/'`.
