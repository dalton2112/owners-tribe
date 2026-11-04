// Courses. Sample content: replace with your real courses.
// Leave url empty to show a "Join the waitlist" form. Add the checkout or enrollment link
// (Kajabi, Teachable, Thinkific, Stripe, and so on) to url and a price to price to start selling.
export const COURSES = [
  { id: 'clarity', number: 1, topic: 'Start here', title: 'Financial Clarity Fundamentals', price: '', url: '',
    desc: 'Learn to read your balance sheet, profit and loss statement, and cash flow with confidence, using one sample company from start to finish.',
    learn: ['What each financial statement tells you, in plain language', 'The questions to ask about every line', 'Warning signs to catch early'] },
  { id: 'cashflow', number: 2, topic: 'Cash flow', title: 'Cash Flow Mastery', price: '', url: '',
    desc: 'Build a 52-week cash flow projection, keep it current, and spot tight weeks months before they arrive.',
    learn: ['Building the projection from your own numbers', 'Setting a minimum cash balance', 'Speeding up collections and timing large expenses'] },
  { id: 'budget', number: 3, topic: 'Planning', title: 'Budgeting That Drives Decisions', price: '', url: '',
    desc: 'Build an annual budget you’ll actually use, and run a monthly budget vs. actual review that keeps small problems small.',
    learn: ['Building the budget month by month', 'Running a short monthly review', 'Updating the plan when the business changes'] },
  { id: 'exit', number: 4, topic: 'Exit planning', title: 'Exit Readiness', price: '', url: '',
    desc: 'See your business the way a buyer will, and start the preparation that pays off at closing.',
    learn: ['The financial records buyers expect', 'Reducing how much the business depends on you', 'A two-to-three-year preparation timeline'] },
  { id: 'leadership', number: 5, topic: 'Leadership', title: 'Leadership Accountability', price: '', url: '',
    desc: 'Goals, scorecards, and a meeting rhythm that keep your team accountable without micromanaging.',
    learn: ['Defining the results each role owns', 'A weekly scorecard your team will use', 'A meeting rhythm for your leadership team'] }
];

export const getCourse = (id) => COURSES.find((c) => c.id === String(id));
