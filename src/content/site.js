export const FOCUS_AREAS = [
  { icon: 'chart', title: 'Fractional CFO advisory', text: 'Profitability, forecasting, budgeting, and the numbers behind strategic decisions.' },
  { icon: 'target', title: 'Cash flow planning', text: '52-week projections that show tight weeks long before they arrive.' },
  { icon: 'compass', title: 'Systems and operations', text: 'Processes and reporting that let a business grow without chaos.' },
  { icon: 'users', title: 'Leadership alignment', text: 'Clear goals, an owner for every number, and meetings that lead to action.' }
];

export const SITE = {
  primaryNav: [
    { id: 'about', label: 'About' }, { id: 'podcast', label: 'Podcast' }, { id: 'services', label: 'Services' }, { id: 'courses', label: 'Courses' }, { id: 'resources', label: 'Resources' }, { id: 'testimonies', label: 'Testimonies' }
  ],
  // mobileNav: [
  //   { id: 'home', label: 'Home' }, { id: 'podcast', label: 'Podcast' }, { id: 'services', label: 'Services' },
  //   { id: 'courses', label: 'Courses' }, { id: 'testimonies', label: 'Testimonies' }, { id: 'about', label: 'About Adam' },
  //   { id: 'resources', label: 'Resources' }, { id: 'contact', label: 'Contact' }
  // ],
  mobileNav: [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'podcast', label: 'Podcast' }, { id: 'services', label: 'Services' }, { id: 'courses', label: 'Courses' }, { id: 'resources', label: 'Resources' }, { id: 'testimonies', label: 'Testimonies' }
  ],
  // footerNav: [
  //   { id: 'home', label: 'Home' }, { id: 'podcast', label: 'Podcast' }, { id: 'services', label: 'Services' },
  //   { id: 'courses', label: 'Courses' }, { id: 'testimonies', label: 'Testimonies' }, { id: 'about', label: 'About Adam' },
  //   { id: 'resources', label: 'Resources' }, { id: 'contact', label: 'Contact' }
  // ],
  footerNav: [
    { id: 'home', label: 'Home' }, { id: 'podcast', label: 'Podcast' }, { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' }, { id: 'testimonies', label: 'Testimonies' }, { id: 'about', label: 'About' },
    { id: 'resources', label: 'Resources' }
  ],
  categories: ['Leadership', 'Finance', 'Entrepreneurship', 'Operations', 'Sales & Marketing', 'Business Growth', 'Exit Planning', 'Team Building'],
  pillars: [
    { icon: 'chart', title: 'Business growth topics', text: 'Scaling, pricing, and the decisions that move a company to its next stage.', cats: ['Business Growth', 'Entrepreneurship', 'Exit Planning', 'Sales & Marketing'] },
    { icon: 'target', title: 'Financial leadership', text: 'Cash flow, reporting, and budgeting, explained in plain language for owners.', cats: ['Finance'] },
    { icon: 'layers', title: 'Operational excellence', text: 'Systems, teams, and accountability that keep the business running without you in every decision.', cats: ['Operations', 'Team Building', 'Leadership'] }
  ],
  audience: ['Companies with $500K to $25M+ in annual revenue', 'Founder-led and family-owned businesses', 'CEOs who want a real financial partner'],
  audienceLong: ['Business owners, founders, and CEOs', 'Family-owned businesses', 'Companies with $500K to $25M+ in annual revenue', 'Owners ready to act on what the numbers say'],
  frustrations: ['Financials that are late, unclear, or hard to trust', 'Cash flow that feels unpredictable', 'Operational bottlenecks that run through you'],
  revenueRanges: ['Under $500K', '$500K to $2M', '$2M to $10M', '$10M to $25M', '$25M+'],
  contactTopics: ['Starting a business', 'Scaling my business', 'Selling my business', 'Courses and templates', 'Being a guest on the podcast', 'Something else'],
  seriesTopics: ['Balance sheet', 'Income statement and profit and loss', 'Cash flow', 'Budget vs. actual', 'Tax planning basics'],
};

// Services: Start, Scale, and Sell
export const SERVICE_LABEL = 'Transaction & Growth Advisory';

export const DOORS = [
  { id: 'start', to: '/start', label: 'Start', icon: 'compass', text: 'Starting a business, or buying your first one.' },
  { id: 'scale', to: '/scale', label: 'Scale', icon: 'chart', text: 'Growing, fixing what’s breaking, or buying a competitor.' },
  { id: 'sell', to: '/sell', label: 'Sell', icon: 'tag', text: 'Getting ready to sell, start to finish.' }
];
