// Site settings. Fill these in before launch.
export const CONFIG = {
  // Channel and profile links. An empty link shows a "coming soon" message when clicked.
  links: {
    youtube: '',
    spotify: '',
    apple: '',
    iheart: '',
    amazon: '',
    instagram: '',
    linkedin: '',
    facebook: ''
  },

  // Calendly scheduling link, for example https://calendly.com/your-name/strategy-call
  // When set, the Contact page shows the live Calendly calendar instead of the built-in request form.
  calendlyUrl: '',

  // Services: one Calendly event type per path, so Adam knows what kind of call it is before it starts.
  calendly: {
    buyerStrategy: '', // Start-Buy
    setupKickoff: '', // After the Start checkout (also on /start/welcome)
    acquisitionStrategy: '', // Scale-Acquire
    fitCall: '', // Scale-Fixer and Scale-Fixer Maybe
    sellMeeting: '' // Sell
  },

  // Pre-fills the buying question on Start and Scale bookings.
  // param: a1 if it is the first question on the event type, a2 if second, and so on.
  // answers: for a multiple-choice question use the option numbers (1, 2, 3) in the order they appear in Calendly;
  // for a text question use the answer text instead. Set param to '' to turn pre-fill off.
  buyingQuestion: {
    param: 'a1',
    answers: { yes: '1', no: '2', maybe: '3' }
  },

  // Checkout link from Adam's card processor for the $4,999 Start package.
  // After paying, send buyers straight to the Setup kickoff Calendly link, or to /start/welcome.
  checkout: {
    startPackage: ''
  },

  // Where form submissions are sent as JSON (for example a Formspree, Zapier, Make, or CRM webhook URL).
  // When empty, forms show their confirmation without sending anything, which is handy for testing.
  formEndpoint: '',

  // Public contact email. This is a stand-in until the real address is set.
  email: 'hello@theownerstribe.com',

  // Times offered in the built-in booking request form, and an optional time zone label.
  callTimes: ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'],
  timeZoneLabel: ''
};
