// Templates and workbooks sold on the Resources page. Sample content: replace with your real products.
// free: true shows an email form that sends the download.
// Otherwise, leave url empty to show a "Join the waitlist" form, or add the checkout link
// (Gumroad, Shopify, Stripe Payment Link, and so on) to url and a price to price to start selling.
export const PRODUCTS = [
  { id: 'clarity-checklist', type: 'Checklist', title: 'Financial Clarity Checklist', free: true, price: 'Free', url: '',
    desc: 'Find out whether your books are ready to make decisions with.',
    inside: ['Reconciliations and month-end close', 'The reports to review every month', 'Warning signs on your balance sheet'] },
  { id: 'cashflow-template', type: 'Spreadsheet template', title: '52-Week Cash Flow Template', price: '', url: '',
    desc: 'Project cash week by week, with any week below your minimum balance flagged automatically.',
    inside: ['Weekly inflows, payroll, and expenses', 'Minimum balance alerts', 'Instructions and a worked example'] },
  { id: 'budget-template', type: 'Spreadsheet template', title: 'Annual Budget Template', price: '', url: '',
    desc: 'Plan the year month by month, then compare budget to actual as each month closes.',
    inside: ['A monthly budget by account', 'Budget vs. actual comparison', 'A note for every assumption'] },
  { id: 'review-workbook', type: 'Workbook', title: 'Monthly Financial Review Workbook', price: '', url: '',
    desc: 'A guided worksheet for your monthly numbers meeting: what to look at, what to ask, and what to decide.',
    inside: ['A review agenda you can reuse', 'Questions for each report', 'A decisions and follow-ups log'] },
  { id: 'kpi-scorecard', type: 'Template', title: 'Owner’s KPI Scorecard', price: '', url: '',
    desc: 'A one-page weekly scorecard that gives every important number an owner.',
    inside: ['Choosing the right measures', 'Weekly targets and trends', 'Owner and status for each number'] }
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === String(id));
export const FREE_CHECKLIST = PRODUCTS[0];
