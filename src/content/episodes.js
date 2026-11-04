import { getGuest } from './guests';

// Newest first. Add a YouTube video ID to youtubeId to show the real video in the episode window.
export const EPISODES = [
  { id: 14, series: 'education', guest: 'adam', category: 'Finance', duration: 38, date: '2026-10-20', youtubeId: '',
    title: 'Cash flow is a weekly habit, not a monthly surprise',
    summary: 'Adam walks through the 52-week cash flow projection: what goes in it, how often to update it, and how to spot a tight week months before it arrives.',
    takeaways: ['Profit and cash are different numbers, and the gap between them is where most surprises live.', 'A weekly projection shows payroll weeks, tax payments, and slow seasons side by side.', 'Set a minimum cash balance and treat any week below it as a decision to make now.'],
    courses: ['cashflow'], products: ['cashflow-template'] },
  { id: 13, series: 'education', guest: 'adam', category: 'Finance', duration: 31, date: '2026-10-13', youtubeId: '',
    title: 'Reading your balance sheet like a lender does',
    summary: 'What your balance sheet says about the health of your business, and the ratios a bank looks at before it says yes.',
    takeaways: ['The balance sheet is a snapshot of what you own, what you owe, and what’s left for you.', 'Lenders look closely at working capital, debt to equity, and how fast receivables turn into cash.', 'Clean, reconciled accounts make every financing conversation easier.'],
    courses: ['clarity'], products: ['clarity-checklist'] },
  { id: 12, series: 'conversation', guest: 'dana', category: 'Team Building', duration: 46, date: '2026-10-06', youtubeId: '',
    title: 'Hiring your first leadership team',
    summary: 'Dana Whitfield on when to hire your first executives, which seat to fill first, and how to hand over responsibility without losing control.',
    takeaways: ['Hire leaders for the company you’re building next, not the one you have today.', 'Give each leader a number they own and a meeting where they report on it.', 'Expect the owner’s role to change more than anyone else’s.'],
    courses: ['leadership'], products: ['kpi-scorecard'] },
  { id: 11, series: 'education', guest: 'adam', category: 'Finance', duration: 29, date: '2026-09-29', youtubeId: '',
    title: 'Budget vs. actual: the monthly meeting that changes decisions',
    summary: 'How to build a budget you’ll actually use, and how a short monthly review of budget vs. actual keeps small problems small.',
    takeaways: ['A budget is a plan for decisions, not a forecast you’re graded on.', 'Review the biggest variances first and ask what changed, not who’s to blame.', 'Update the plan when the business changes, and write down why.'],
    courses: ['budget'], products: ['budget-template', 'review-workbook'] },
  { id: 10, series: 'conversation', guest: 'marcus', category: 'Exit Planning', duration: 52, date: '2026-09-22', youtubeId: '',
    title: 'What buyers look for before you sell',
    summary: 'Marcus Ortega explains how buyers value a business, what slows a sale down, and the preparation that pays off at closing.',
    takeaways: ['Buyers pay for predictable earnings and a business that runs without the owner.', 'Messy books lower the price and lengthen due diligence.', 'Start preparing two to three years before you plan to sell.'],
    courses: ['exit'], products: ['clarity-checklist'] },
  { id: 9, series: 'conversation', guest: 'priya', category: 'Sales & Marketing', duration: 41, date: '2026-09-15', youtubeId: '',
    title: 'Pricing for profit in a service business',
    summary: 'Priya Nandakumar on raising prices with confidence, packaging services, and talking about value with clients who are used to paying by the hour.',
    takeaways: ['Know your gross margin by service line before you change a price.', 'Package outcomes clients understand instead of listing hours.', 'Test a well-explained increase with your best accounts first.'],
    courses: ['clarity'], products: ['review-workbook'] },
  { id: 8, series: 'education', guest: 'adam', category: 'Finance', duration: 34, date: '2026-09-08', youtubeId: '',
    title: 'The income statement, line by line',
    summary: 'A plain-language tour of the profit and loss statement, from revenue to net income, and the questions every owner should ask about each line.',
    takeaways: ['Gross margin tells you whether the work itself is profitable.', 'Operating expenses show what it costs to run the company, whatever you sell.', 'Compare each month to last year and to budget to see the real trend.'],
    courses: ['clarity'], products: ['review-workbook'] },
  { id: 7, series: 'conversation', guest: 'tom', category: 'Operations', duration: 44, date: '2026-09-01', youtubeId: '',
    title: 'Systems that let the owner take a vacation',
    summary: 'Tom Reyes on documenting the work only you know how to do, choosing which process to fix first, and building a business that runs while you’re away.',
    takeaways: ['Start with the process that interrupts you most often.', 'A checklist someone else can follow beats a perfect manual nobody reads.', 'Measure a process by how often people still have to ask you.'],
    courses: ['leadership'], products: ['kpi-scorecard'] },
  { id: 6, series: 'conversation', guest: 'renee', category: 'Leadership', duration: 39, date: '2026-08-25', youtubeId: '',
    title: 'Accountability without micromanaging',
    summary: 'Renee Kalani on clear expectations, scorecards, and the weekly conversation that replaces checking up on people.',
    takeaways: ['People can’t be accountable for results nobody defined.', 'A short weekly scorecard makes performance visible without hovering.', 'Address missed commitments early and privately.'],
    courses: ['leadership'], products: ['kpi-scorecard'] },
  { id: 5, series: 'conversation', guest: 'jordan', category: 'Business Growth', duration: 48, date: '2026-08-18', youtubeId: '',
    title: 'From $2M to $10M: what breaks first',
    summary: 'Jordan Blake on the cash crunches, hiring mistakes, and system failures that showed up as his company grew, and what he would do differently.',
    takeaways: ['Growth uses cash before it produces it.', 'The systems that worked at $2M usually fail quietly at $5M.', 'Hire ahead of the pain in finance and operations.'],
    courses: ['cashflow'], products: ['cashflow-template'] },
  { id: 4, series: 'education', guest: 'adam', category: 'Finance', duration: 27, date: '2026-08-11', youtubeId: '',
    title: 'Tax planning basics for owners',
    summary: 'Why tax planning is a year-round conversation, what records your tax preparer needs, and the questions to bring to your next meeting with them.',
    takeaways: ['Planning happens during the year; filing reports what already happened.', 'Clean, closed books make your preparer’s work faster and more accurate.', 'Bring questions early and confirm every decision with a tax professional.'],
    courses: ['clarity'], products: ['clarity-checklist'] },
  { id: 3, series: 'conversation', guest: 'adam', category: 'Entrepreneurship', duration: 33, date: '2026-08-04', youtubeId: '',
    title: 'Why ownership feels lonely, and what to do about it',
    summary: 'Adam shares why he started The Owner’s Tribe, the decisions owners usually make alone, and how to build a circle of advisors you trust.',
    takeaways: ['Every owner needs people who can see the whole business, not just one part of it.', 'Current financials make hard conversations easier, with your team and with yourself.', 'Ask for help before a decision becomes urgent.'],
    courses: ['leadership'], products: ['clarity-checklist'] }
];

export const getEpisode = (id) => EPISODES.find((e) => e.id === Number(id));
export const guestOf = (ep) => getGuest(ep.guest);
export const guestLine = (ep) => (ep.guest === 'adam' ? 'With Adam Bell' : guestOf(ep).name);
export const seriesName = (ep) => (ep.series === 'education' ? 'Financial education series' : 'Owner conversations');
export const seriesColor = (ep) => (ep.series === 'education' ? '#1DA5A6' : '#D9A441');
export const episodesForCourse = (courseId) => EPISODES.filter((e) => e.courses.includes(courseId));
export const firstEpisodeWith = (guestId) => EPISODES.find((e) => e.guest === guestId) || EPISODES[0];
