import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Catalyst Ministries Florida. Join our prison ministry, volunteer for missions, or book our worship team and gospel productions. Serving since 2003.',
  path: '/contact',
  keywords: ['contact catalyst ministries', 'volunteer prison ministry', 'book worship team', 'mission volunteer', 'florida ministry contact'],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
