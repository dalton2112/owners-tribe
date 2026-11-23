import anneAvatar from '@/assets/anne-ertel-sawasky.webp';
import scottAvatar from '@/assets/scott-milburn.webp';
import sanyuAvatar from '@/assets/sanyu-lubogo.webp';
import joeAvatar from '@/assets/joe-elgin.webp';
import kyleAvatar from '@/assets/kyle-wicker.webp';

// Sample content: replace with real, approved content before launch.
export const GUESTS = [
  { id: 'adam', initials: 'AB', name: 'Adam Bell', role: 'Founder and host, The Owner’s Tribe', bio: 'Adam helps business owners create financial clarity, improve operations, and build the systems needed to scale. He created The Owner’s Tribe and hosts the show.' },
  { id: 'anne-ertel-sawasky', initials: 'AES', name: 'Anne Ertel-Sawasky', role: 'CEO, ChFC, RICP, Attorney (WI)', avatar: anneAvatar, bio: 'Anne combines legal, financial, and business expertise to help business owners maximize company value, plan for succession, and achieve long-term financial security. With nearly four decades of experience, she provides strategic guidance on business valuation, retirement planning, tax efficiency, and estate planning.' },
  { id: 'scott-milburn', initials: 'SM', name: 'Scott Milburn', role: 'Attorney & Business Strategist', avatar: scottAvatar, bio: 'Scott combines decades of legal experience with executive leadership, helping businesses navigate complex challenges with practical, growth-focused solutions. His background spans the U.S. Department of Justice, commercial litigation, and senior leadership roles across a wide range of industries.' },
  { id: 'sanyu-lubogo', initials: 'SL', name: 'Sanyu Lubogo', role: 'Brand Strategy Director', avatar: sanyuAvatar, bio: 'Sanyu blends a creative background in the performing arts with strategic marketing expertise, helping brands tell compelling stories that drive engagement and growth. As Brand Strategy Director at BDG and founder of Labugo Creative, Sanyu develops impactful brand partnerships, creative campaigns, and brand identities for businesses across beauty, fashion, luxury, and emerging markets.' },
  { id: 'joe-elgin', initials: 'JE', name: 'Joe Elgin', role: 'Founder and Owner', avatar: joeAvatar, bio: 'With over 15 years of IT experience spanning enterprise cybersecurity in Silicon Valley and small business support, Joe founded Maui Tech Support to give local Maui businesses access to the same quality of IT that large corporations rely on, delivered by people who actually know their community.' },
  { id: 'kyle-wicker', initials: 'KW', name: 'Kyle Wicker', role: 'Founder, Middle Creek Capital', avatar: kyleAvatar, bio: 'Kyle brings over 20 years of commercial lending experience to help business owners secure the right financing. A former regional and national bank leader, he anticipates lender questions, negotiates favorable terms, and positions clients to close efficiently.' },
  // { id: 'jordan', initials: 'JB', name: 'Jordan Blake', role: 'Founder and CEO, home services company', bio: 'Jordan grew a home services company from one truck to a regional brand and talks openly about what broke along the way.' }
];

export const getGuest = (id) => GUESTS.find((g) => g.id === id) || GUESTS[0];
