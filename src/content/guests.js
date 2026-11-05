import anneAvatar from '@/assets/anne.webp';
import scottAvatar from '@/assets/scott.webp';

// Sample content: replace with real, approved content before launch.
export const GUESTS = [
  { id: 'adam', initials: 'AB', name: 'Adam Bell', role: 'Founder and host, The Owner’s Tribe', bio: 'Adam helps business owners create financial clarity, improve operations, and build the systems needed to scale. He created The Owner’s Tribe and hosts the show.' },
  { id: 'anne', initials: 'AES', name: 'Anne Ertel-Sawasky', role: 'CEO, ChFC, RICP, Attorney (WI)', avatar: anneAvatar, bio: 'Anne combines legal, financial, and business expertise to help business owners maximize company value, plan for succession, and achieve long-term financial security. With nearly four decades of experience, she provides strategic guidance on business valuation, retirement planning, tax efficiency, and estate planning.' },
  { id: 'scott', initials: 'SM', name: 'Scott Milburn', role: 'Attorney & Business Strategist', avatar: scottAvatar, bio: 'Scott combines decades of legal experience with executive leadership, helping businesses navigate complex challenges with practical, growth-focused solutions. His background spans the U.S. Department of Justice, commercial litigation, and senior leadership roles across a wide range of industries.' },
  // { id: 'priya', initials: 'PN', name: 'Priya Nandakumar', role: 'Founder, professional services firm', bio: 'Priya grew her firm by rebuilding its pricing around the value clients receive instead of the hours her team works.' },
  // { id: 'tom', initials: 'TR', name: 'Tom Reyes', role: 'Operations consultant', bio: 'Tom helps owner-led companies document their core processes so the business runs without the owner in every decision.' },
  // { id: 'renee', initials: 'RK', name: 'Renee Kalani', role: 'Leadership coach', bio: 'Renee works with owners and their managers on accountability systems that people actually follow.' },
  // { id: 'jordan', initials: 'JB', name: 'Jordan Blake', role: 'Founder and CEO, home services company', bio: 'Jordan grew a home services company from one truck to a regional brand and talks openly about what broke along the way.' }
];

export const getGuest = (id) => GUESTS.find((g) => g.id === id) || GUESTS[0];
