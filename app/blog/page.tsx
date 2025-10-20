import { generatePageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'News & Updates',
  description: 'Stay updated with the latest news from Catalyst Ministries Florida. Mission trips, event recaps, testimonies, and ministry updates.',
  path: '/blog',
  keywords: ['ministry news', 'mission updates', 'christian blog', 'catalyst news', 'ministry stories'],
});

// Sample blog posts - in production, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: '"The Only Way" Film Released',
    slug: 'the-only-way-film-released',
    excerpt: 'Our motion picture "The Only Way" is now complete and available for viewing! This life-changing film takes you on a journey with a man who witnessed true miracles firsthand.',
    date: '2024-12-15',
    author: 'Catalyst Team',
    category: 'Productions',
    image: '/images/LOGO.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Haiti Leadership Conference 2024',
    slug: 'haiti-leadership-conference-2024',
    excerpt: 'Over 1,500 pastors and leaders gathered for our annual leadership conference in Port-au-Prince. Powerful worship, teaching, and fellowship marked this year\'s event.',
    date: '2024-11-20',
    author: 'Pastor Smitty',
    category: 'International Outreach',
    image: '/images/Haiti-Crusade-crowdn1.jpg',
    featured: true,
  },
  {
    id: 3,
    title: 'New Prison Ministry Volunteers Needed',
    slug: 'new-prison-volunteers-needed',
    excerpt: 'We\'re expanding our prison ministry team! Join us as we bring hope and the Gospel to inmates across Florida. Training provided for all new volunteers.',
    date: '2024-10-05',
    author: 'Jeanne Smith',
    category: 'Prison Ministry',
    image: '/images/25-Smitty-preaching.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Breakthrough in Breakfast Ministry',
    slug: 'breakfast-ministry-breakthrough',
    excerpt: 'Nine years of faithful Saturday morning service has led to incredible transformations. Meet some of the lives changed through Breakfast in the Park.',
    date: '2024-09-12',
    author: 'Todd Fitts',
    category: 'National Outreach',
    image: '/images/LOGO.png',
    featured: false,
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Ministry Stories"
        description="Stay connected with the latest from Catalyst Ministries"
        icon={<Newspaper className="h-8 w-8" />}
      />

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="inline-block w-1 h-8 bg-primary-600 mr-3"></span>
                Featured Stories
              </h2>
              <div className="grid gap-8 lg:grid-cols-2">
                {featuredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary-600/20" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="inline-flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="text-primary-600 font-semibold">{post.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="inline-block w-1 h-8 bg-primary-600 mr-3"></span>
                Recent Updates
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden card-hover"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200" />
                    <div className="p-5">
                      <div className="text-xs font-semibold text-primary-600 mb-2">
                        {post.category}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary-600 font-semibold hover:text-primary-700"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-50 mb-6 max-w-2xl mx-auto">
              Get the latest news, prayer requests, and ministry updates delivered to your inbox
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Subscribe to Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
