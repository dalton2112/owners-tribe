import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { PAGES } from '@/content/pages';
import { prefersReducedMotion } from '@/utils/format';

const SITE_NAME = 'The Owner’s Tribe';

const Question = () => import('@/views/QuestionView.vue');
const Destination = () => import('@/views/DestinationView.vue');

// Start, Scale, and Sell pages under Services, with the page titles and descriptions from the setup guide.
// Question pages, Maybe pages, and the after-checkout page are hidden from search (noindex).
function serviceRoutes() {
  const page = (key, maybe = false) => ({
    path: maybe ? PAGES[key].maybePath : PAGES[key].path,
    component: Destination,
    props: { pageKey: key, maybe },
    meta: { title: PAGES[key].title, description: PAGES[key].description, noindex: maybe, section: 'services' }
  });
  return [
    { path: '/start', component: Question, props: { door: 'start' }, meta: { title: 'Start: Is Buying a Business Part of Your Plan?', noindex: true, section: 'services' } },
    page('startBuy'),
    page('startSetup'),
    page('startSetup', true),
    { path: '/start/welcome', component: () => import('@/views/StartWelcomeView.vue'), meta: { title: 'Book Your Setup Kickoff', noindex: true, section: 'services' } },
    { path: '/scale', component: Question, props: { door: 'scale' }, meta: { title: 'Scale: Is Buying a Business Part of Your Plan?', noindex: true, section: 'services' } },
    page('scaleAcquire'),
    page('scaleFixer'),
    page('scaleFixer', true),
    page('sell')
  ];
}

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'The Owner’s Tribe with Adam Bell' } },
  { path: '/podcast', name: 'podcast', component: () => import('@/views/PodcastView.vue'), meta: { title: 'Podcast' } },
  { path: '/services', name: 'services', component: () => import('@/views/ServicesView.vue'), meta: { title: 'Services: Start, Scale, or Sell Your Business', description: 'One call gets you a team for starting, scaling, or selling your business: lending, legal, financial planning, IT, and marketing.', section: 'services' } },
  ...serviceRoutes(),
  { path: '/courses', name: 'courses', component: () => import('@/views/CoursesView.vue'), meta: { title: 'Courses' } },
  { path: '/testimonies', name: 'testimonies', component: () => import('@/views/TestimoniesView.vue'), meta: { title: 'Testimonies' } },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue'), meta: { title: 'About Adam Bell' } },
  { path: '/resources', name: 'resources', component: () => import('@/views/ResourcesView.vue'), meta: { title: 'Resources' } },
  // Old addresses from earlier versions of the site
  { path: '/consulting', redirect: { name: 'services' } },
  { path: '/success-stories', redirect: { name: 'testimonies' } },
  { path: '/blog', redirect: { name: 'resources' } },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue'), meta: { title: 'Page not found' } }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    const samePage = to.path === from.path;
    if (to.hash) return { el: to.hash, top: 96, behavior: samePage && !prefersReducedMotion() ? 'smooth' : 'auto' };
    // Opening or closing an episode, course, or product window only changes the query: keep the scroll position.
    if (samePage) return false;
    return { top: 0 };
  }
});

const DEFAULT_DESCRIPTION =
  'The Owner’s Tribe helps business owners gain financial clarity, improve profitability, and grow with confidence.';

function setMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Page title, meta description, and search visibility for every page.
router.afterEach((to) => {
  const title = to.meta.title || SITE_NAME;
  document.title = to.name === 'home' ? title : `${title} | ${SITE_NAME}`;
  setMeta('description', to.meta.description || DEFAULT_DESCRIPTION);
  setMeta('robots', to.meta.noindex ? 'noindex, follow' : 'index, follow');
});

export default router;
