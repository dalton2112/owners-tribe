// Destination pages. Draft copy: replace hooks, ledes, and section text with the copy in
// Owners_Tribe_Transaction_Advisory.pdf. Titles, H1s, meta descriptions, and FAQs come from the setup guide.
// FAQs marked pending: true are hidden until Adam confirms the answer.

export const PAGES = {
  startBuy: {
    door: 'start',
    answer: 'yes',
    path: '/start/buy-a-business',
    title: 'Buying a Business? Get a Deal Quarterback',
    description:
      'Buying your first business? I vet the books, coordinate your lender and attorney, and get you ready to run it from day one.',
    hook: 'Don’t buy a business blind.',
    h1: 'Buying a business? I quarterback the deal',
    lede: 'Buying a business has a lot of moving parts. I’m your deal quarterback: I vet the books, coordinate your lender and attorney, and get you ready to run it from day one.',
    action: { kind: 'calendly', key: 'buyerStrategy', label: 'Book your buyer strategy call' },
    priceNote: '',
    whatTitle: 'What I handle for you',
    what: [
      { icon: 'search', title: 'Vet the business', text: 'Real cash flow, real customers, and whether the numbers match the tax returns.' },
      { icon: 'file', title: 'Check what you’re buying', text: 'Contracts, systems, and what it really takes to run it day to day.' },
      { icon: 'users', title: 'Coordinate your team', text: 'Your lender and attorney working from one plan, with me as your one point of contact.' },
      { icon: 'check', title: 'Get you ready for day one', text: 'So you can run the business from the day you take over.' }
    ],
    steps: [
      { title: 'Book your buyer strategy call', text: 'Tell me what you’re looking at, or what you’re looking for.' },
      { title: 'I vet the deal', text: 'Books, customers, contracts, and systems, before you commit.' },
      { title: 'We close together', text: 'Lender, attorney, and paperwork lined up and moving.' },
      { title: 'You take over', text: 'Ready to run it from day one.' }
    ],
    service: { name: 'Buy-side deal quarterback', serviceType: 'Business acquisition advisory' },
    faqs: [
      { q: 'Do I need a broker to buy a business?', a: 'A broker usually represents the seller. I work on your side: vetting the business, coordinating your lender and attorney, and getting you ready to run it.' },
      { q: 'What do you check before I buy?', a: 'The books first: real cash flow, customers, and whether the numbers match the tax returns. Then contracts, systems, and what it takes to run it day to day.' },
      { q: 'How much does buy-side help cost?', a: 'Waiting on Adam’s pricing decision.', pending: true }
    ]
  },

  startSetup: {
    door: 'start',
    answer: 'no',
    path: '/start/business-setup',
    maybePath: '/start/business-setup/explore',
    title: 'Start a Business the Right Way',
    description:
      'Complete business setup for $4,999: entity, registrations, QuickBooks, and systems for getting paid, with one-on-one guidance.',
    hook: 'Open the right way, the first time.',
    h1: 'Start your business the right way',
    lede: 'Everything a new business needs before it opens its doors, set up for you, with one-on-one guidance from me along the way.',
    action: { kind: 'checkout', key: 'startPackage', label: 'Get started ($4,999)' },
    priceNote: '$4,999 for the complete setup. After checkout, you’ll book your setup kickoff call.',
    whatTitle: 'What’s included',
    what: [
      { icon: 'file', title: 'Entity structure and registrations', text: 'The right structure for your business, registered and ready.' },
      { icon: 'chart', title: 'QuickBooks, set up for you', text: 'Books built around how your business actually runs.' },
      { icon: 'layers', title: 'Systems for getting paid', text: 'Invoicing, collecting, and paying bills, working from day one.' },
      { icon: 'users', title: 'One-on-one guidance', text: 'Me, in your corner, answering the questions that come up.' }
    ],
    steps: [
      { title: 'Get started', text: 'Check out securely for the Start package.' },
      { title: 'Book your kickoff', text: 'Pick a time for your setup kickoff call.' },
      { title: 'We set it up', text: 'Entity, registrations, QuickBooks, and payment systems.' },
      { title: 'Open for business', text: 'Ready to take customers and get paid.' }
    ],
    maybe: {
      title: 'Still deciding whether to buy a business?',
      text: 'That’s a smart question to ask before you start. Buying one that already works can be a faster path. See how buying works, or bring it up on your kickoff call.',
      linkLabel: 'See how buying a business works',
      linkTo: '/start/buy-a-business'
    },
    service: { name: 'Business setup package', serviceType: 'Business formation and setup', price: 4999 },
    faqs: [
      { q: 'How much does it cost to set up a business?', a: '$4,999 for the complete setup.' },
      { q: 'What’s included?', a: 'Entity structure and registrations, QuickBooks set up for your business, systems for getting paid and paying bills, and one-on-one guidance.' },
      { q: 'Do you work with owners in any state?', a: 'Yes. All work is done remotely, nationwide.' }
    ]
  },

  scaleAcquire: {
    door: 'scale',
    answer: 'yes',
    path: '/scale/acquisitions',
    title: 'Grow by Acquisition: Buy a Competitor',
    description:
      'Grow by acquisition without inheriting a mess. Diligence, financing, closing, and integration, quarterbacked start to finish.',
    hook: 'Buy growth. Skip the mess.',
    h1: 'Grow by buying a competitor, supplier, or location',
    lede: 'Buying another business is the fastest way to add customers, capacity, or territory. I quarterback the deal from diligence to integration, so you don’t inherit a mess.',
    action: { kind: 'calendly', key: 'acquisitionStrategy', label: 'Book your acquisition strategy call' },
    priceNote: '',
    whatTitle: 'I quarterback the whole deal',
    what: [
      { icon: 'search', title: 'Diligence', text: 'What you’re really inheriting: books, customers, contracts, and risks.' },
      { icon: 'bank', title: 'Financing', text: 'The right lender lined up for the deal.' },
      { icon: 'scale', title: 'Closing', text: 'Your attorney and advisors moving together to the finish line.' },
      { icon: 'layers', title: 'Integration', text: 'Books merged, systems connected, and IT and marketing rolled over, so two businesses run as one.' }
    ],
    steps: [],
    service: { name: 'Acquisition deal quarterback', serviceType: 'Acquisition advisory' },
    faqs: [
      { q: 'Is buying a competitor a good way to grow?', a: 'It’s the fastest way to add customers, capacity, or territory. The risk is in what you inherit, so diligence and integration decide whether it pays off.' },
      { q: 'What happens after closing?', a: 'The books get merged, systems connected, and IT and marketing rolled over, so two businesses run as one.' },
      { q: 'How is it priced?', a: 'Per project, based on deal size and scope.' }
    ]
  },

  scaleFixer: {
    door: 'scale',
    answer: 'no',
    path: '/scale/business-advisor',
    maybePath: '/scale/business-advisor/explore',
    title: 'Business Advisor for Growing Owners',
    description:
      'Cash tight, books unclear, systems breaking? One call brings in the right specialists to fix it and keep it fixed.',
    hook: 'You call. I fix it.',
    h1: 'The business advisor growing owners call',
    lede: 'Cash tight, books unclear, systems breaking? One call to me brings in the right specialists to fix it and keep it fixed.',
    action: { kind: 'calendly', key: 'fitCall', label: 'Book a free fit call' },
    priceNote: 'The fit call is free. Work is quoted per project after we talk.',
    whatTitle: 'What owners call me about',
    what: [
      { icon: 'chart', title: 'Tight cash while sales grow', text: 'Revenue is up, but the bank balance doesn’t show it.' },
      { icon: 'file', title: 'Books that can’t answer simple questions', text: 'You need numbers you can make decisions with.' },
      { icon: 'layers', title: 'Systems that break as you grow', text: 'What worked with five people stops working with twenty.' },
      { icon: 'users', title: 'Anything that needs a specialist', text: 'I bring in the right person and stay on it until it’s fixed.' }
    ],
    steps: [
      { title: 'Book a free fit call', text: 'Tell me what’s broken, or what’s about to break.' },
      { title: 'Get a project quote', text: 'A clear scope and price for the fix.' },
      { title: 'I fix it, and it stays fixed', text: 'The right specialists, coordinated through me.' }
    ],
    maybe: {
      title: 'Wondering if buying a competitor is your next move?',
      text: 'Bring it to the fit call. We’ll look at whether an acquisition makes sense for your business before you spend a dollar on it.',
      linkLabel: 'See how growing by acquisition works',
      linkTo: '/scale/acquisitions'
    },
    service: { name: 'Business advisor for growing owners', serviceType: 'Business advisory' },
    faqs: [
      { q: 'What problems do you fix?', a: 'Tight cash while sales grow, books that can’t answer simple questions, systems that break as you add people, and anything else that needs a specialist.' },
      { q: 'Who’s on the team?', a: 'Lending, legal, financial planning, IT, and marketing specialists, all coordinated through one point of contact.' },
      { q: 'How do you charge?', a: 'Per project, quoted after a free fit call.' }
    ]
  },

  sell: {
    door: 'sell',
    answer: '',
    path: '/sell',
    title: 'How to Sell Your Business, Start to Finish',
    description:
      'Selling your business is a project, not a listing. Books cleaned up, advisors coordinated, and a clean handoff after closing.',
    hook: 'Selling is a project, not a listing.',
    h1: 'Sell your business without the chaos',
    lede: 'I’m the deal quarterback for your sale: books cleaned up, your advisors coordinated, and a clean handoff after closing.',
    action: { kind: 'calendly', key: 'sellMeeting', label: 'Book a meeting (starting at $4,999)' },
    priceNote: 'Selling support starts at $4,999.',
    whatTitle: 'How I run your sale',
    what: [
      { icon: 'file', title: 'Clean up the books', text: 'So they hold up in a buyer’s review.' },
      { icon: 'users', title: 'Line up your advisors', text: 'Attorney, lender, and financial planner in place before you go to market.' },
      { icon: 'scale', title: 'Quarterback the closing', text: 'Everyone moving together, so nothing stalls the deal.' },
      { icon: 'check', title: 'A clean handoff', text: 'The business transitions smoothly after closing.' }
    ],
    steps: [],
    service: { name: 'Sell-side deal quarterback', serviceType: 'Business sale advisory', minPrice: 4999 },
    faqs: [
      { q: 'What should I do before selling my business?', a: 'Get the books clean and able to hold up in a buyer’s review, then line up your attorney, lender, and financial planner before you go to market.' },
      { q: 'Do I still need a business broker?', a: 'A broker markets the business and finds buyers. I quarterback everything around the sale: the books, the advisors, the closing, and the handoff.' },
      { q: 'How much does it cost?', a: 'Starting at $4,999.' }
    ]
  }
};

export const QUESTION = {
  text: 'Is buying a business part of your plan?',
  options: [
    { answer: 'yes', label: 'Yes, I’m looking to acquire', icon: 'check' },
    { answer: 'no', label: 'No, not right now', icon: 'x' },
    { answer: 'maybe', label: 'Maybe, I’d like to explore it', icon: 'compass' }
  ]
};

// Where each answer goes from each question page.
export const QUESTION_ROUTES = {
  start: { yes: '/start/buy-a-business', no: '/start/business-setup', maybe: '/start/business-setup/explore' },
  scale: { yes: '/scale/acquisitions', no: '/scale/business-advisor', maybe: '/scale/business-advisor/explore' }
};
