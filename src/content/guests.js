// Sample content: replace with real, approved content before launch.
export const GUESTS = [
  { id: 'adam', initials: 'AB', name: 'Adam Bell', role: 'Founder and host, The Owner’s Tribe', bio: 'Adam helps business owners create financial clarity, improve operations, and build the systems needed to scale. He created The Owner’s Tribe and hosts the show.' },
  { id: 'dana', initials: 'DW', name: 'Dana Whitfield', role: 'Chief Operating Officer, regional healthcare group', bio: 'Dana has built leadership teams through three stages of growth and now coaches founders who are hiring their first executives.' },
  { id: 'marcus', initials: 'MO', name: 'Marcus Ortega', role: 'Mergers and acquisitions advisor', bio: 'Marcus advises owners of companies with $5M to $50M in revenue on preparing for, and running, the sale of their business.' },
  { id: 'priya', initials: 'PN', name: 'Priya Nandakumar', role: 'Founder, professional services firm', bio: 'Priya grew her firm by rebuilding its pricing around the value clients receive instead of the hours her team works.' },
  { id: 'tom', initials: 'TR', name: 'Tom Reyes', role: 'Operations consultant', bio: 'Tom helps owner-led companies document their core processes so the business runs without the owner in every decision.' },
  { id: 'renee', initials: 'RK', name: 'Renee Kalani', role: 'Leadership coach', bio: 'Renee works with owners and their managers on accountability systems that people actually follow.' },
  { id: 'jordan', initials: 'JB', name: 'Jordan Blake', role: 'Founder and CEO, home services company', bio: 'Jordan grew a home services company from one truck to a regional brand and talks openly about what broke along the way.' }
];

export const getGuest = (id) => GUESTS.find((g) => g.id === id) || GUESTS[0];
