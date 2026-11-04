// Structured data (schema.org) for the Services pages. Organization is used, not LocalBusiness, so no address is needed.
const PROVIDER = { '@type': 'Organization', name: 'The Owner’s Tribe' };

export const serviceSchema = (page) => {
  const s = page.service;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: page.description,
    provider: PROVIDER,
    areaServed: { '@type': 'Country', name: 'United States' }
  };
  if (s.price) data.offers = { '@type': 'Offer', price: String(s.price), priceCurrency: 'USD' };
  if (s.minPrice) {
    data.offers = { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: s.minPrice, priceCurrency: 'USD' } };
  }
  return data;
};

export const faqSchema = (faqs) => {
  const visible = faqs.filter((f) => !f.pending);
  if (!visible.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: visible.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };
};
