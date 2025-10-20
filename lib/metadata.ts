import { Metadata } from 'next';

export const siteConfig = {
  name: 'Catalyst Ministries Florida',
  description: 'Igniting change through prison ministry, international outreach, worship, and gospel-centered productions. Serving communities since 2003.',
  url: 'https://www.catalystfl.org',
  ogImage: '/og-image.jpg',
  keywords: [
    'prison ministry',
    'christian ministry',
    'florida ministry',
    'gospel outreach',
    'haiti missions',
    'worship ministry',
    'christian drama',
    'faith-based nonprofit',
    'prison outreach',
    'homeless ministry',
    'catalyst ministries',
    'william smith',
    'jeanne smith',
    '501c3 ministry',
  ],
  authors: [{ name: 'Catalyst Ministries Florida' }],
  creator: 'Catalyst Ministries Florida',
  publisher: 'Catalyst Ministries Florida',
};

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const imageUrl = ogImage || siteConfig.ogImage;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Schema.org JSON-LD for Organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: siteConfig.name,
  alternateName: 'Catalyst Ministries',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: '2003',
  founders: [
    {
      '@type': 'Person',
      name: 'William Smith',
      alternateName: 'Smitty',
    },
    {
      '@type': 'Person',
      name: 'Jeanne Smith',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Florida',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-239-247-2330',
    email: 'catalystministriesfl@gmail.com',
    contactType: 'Customer Service',
  },
  sameAs: [],
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  knowsAbout: [
    'Prison Ministry',
    'Christian Outreach',
    'International Missions',
    'Worship Ministry',
    'Gospel Drama',
    'Homeless Ministry',
  ],
};
