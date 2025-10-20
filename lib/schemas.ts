// Utility functions for generating Schema.org structured data

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Catalyst Ministries Florida',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://catalystfl.vercel.app',
    },
  };
}

export function generateArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: author || 'Catalyst Ministries Florida',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Catalyst Ministries Florida',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://catalystfl.vercel.app'}/images/LOGO.png`,
      },
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    location: {
      '@type': 'Place',
      name: location,
    },
    organizer: {
      '@type': 'Organization',
      name: 'Catalyst Ministries Florida',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://catalystfl.vercel.app',
    },
    url,
  };
}
