import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://catalystfl.vercel.app';
  
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/prison-ministry', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/productions', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/worship', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/outreach-international', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/outreach-national', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Blog posts
  const blogPosts = [
    'the-only-way-film-released',
    'haiti-leadership-conference-2025',
    'ronald-rosier-testimony',
    'new-prison-volunteers-needed',
    'breakfast-ministry-breakthrough',
  ];

  const blogRoutes = blogPosts.map(slug => ({
    path: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
