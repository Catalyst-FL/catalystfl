import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "News & Updates - Ministry Stories, Mission Trips & Testimonies",
  description:
    "Latest news from Catalyst Ministries Florida: Haiti mission trips, prison ministry updates, outreach events, and powerful testimonies of lives transformed by the Gospel of Jesus Christ.",
  path: "/blog",
  keywords: [
    "ministry news",
    "Haiti mission trip",
    "prison ministry updates",
    "christian testimonies",
    "mission trip stories",
    "catalyst news",
    "ministry blog",
    "international outreach",
    "gospel impact stories",
    "Florida ministry news",
  ],
});

// Sample blog posts - in production, this would come from a CMS or database
const blogPosts = [
  {
    id: 7,
    title: "Pastors Smitty & Jeanne Smith Featured on Voices in the Wilderness",
    slug: "voices-in-the-wilderness-smitty-jeanne-smith",
    excerpt:
      "Pastors William (Smitty) and Jeanne Smith share their testimony and the story of Catalyst Ministries on Voices in the Wilderness. The television program is airing now, with the YouTube video expected in November.",
    date: "2026-10-15",
    author: "Catalyst Team",
    category: "News",
    image: "https://static.wixstatic.com/media/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg/v1/fill/w_973%2Ch_767%2Cal_c%2Cq_85/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg",
    featured: true,
  },
  {
    id: 6,
    title: "Haiti Leadership Conference 2026 — Ebenezer",
    slug: "haiti-leadership-conference-2026",
    excerpt:
      "Our ministry partners at Église Sur Le Rocher Haiti gathered leaders under the theme “Ebenezer — Thus Far the Lord Has Helped Us,” based on 1 Samuel 7:12.",
    date: "2026-08-27",
    author: "Catalyst Team",
    category: "International Outreach",
    image: "/images/haiti/haiti-conference-crowd.jpg",
    featured: true,
  },

  {
    id: 1,
    title: '"The Only Way" Film Released',
    slug: "the-only-way-film-released",
    excerpt:
      'Our motion picture "The Only Way" is now complete and available for viewing! This life-changing film takes you on a journey with a man who witnessed true miracles firsthand.',
    date: "2024-12-15",
    author: "Catalyst Team",
    category: "Productions",
    image: "/images/theonlywaymovieposter.png",
    featured: true,
  },
  {
    id: 2,
    title: "Church on the Rock Baptism",
    slug: "church-on-the-rock-baptism",
    excerpt: "Against all odds of gang warfare, Church on the Rock in Haiti continues to advance the Kingdom of God. These precious souls were water baptized this past Saturday. We thank all of you who pray for our team, along with those who sow into the ministry. Joined with the Holy Spirit, we are producing fruit!",
    date: "2026-10-16",
    author: "Catalyst Team",
    category: "International Outreach",
    image: "/images/haiti/church-on-the-rock-baptism-pool.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "New Prison Ministry Volunteers Needed",
    slug: "new-prison-volunteers-needed",
    excerpt:
      "We're expanding our prison ministry team! Join us as we bring hope and the Gospel to inmates across Florida. Training provided for all new volunteers.",
    date: "2024-10-05",
    author: "Jeanne Smith",
    category: "Prison Ministry",
    image: "/images/writing-Christmas-cards.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Testimony: Ron R — Never Forgotten",
    slug: "ronal-r-testimony",
    excerpt:
      "After 37 years incarcerated, Ron shares a powerful story of God’s mercy, a favorable parole review, and the hope found in Christ — a reminder that we are never forgotten.",
    date: "2025-10-15",
    author: "Ron R",
    category: "Testimonies",
    image: "/images/ronaldRcoverphoto.png",
    featured: true,
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

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
                    <div className="aspect-video relative overflow-hidden bg-gray-200">
                      {post.slug === "voices-in-the-wilderness-smitty-jeanne-smith" ? (
                        <div className="absolute inset-0 overflow-hidden bg-slate-900">
                          <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
                            <div
                              role="img"
                              aria-label="Voices in the Wilderness television program studio backdrop"
                              className="absolute inset-0"
                              style={{ backgroundImage: "url('https://static.wixstatic.com/media/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg/v1/fill/w_973%2Ch_767%2Cal_c%2Cq_85/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg')", backgroundSize: "100% auto", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}
                            />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 flex h-[58%] flex-col items-center justify-center bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900/90 px-4 text-center text-white">
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">Featured on Television</span>
                            <span className="mt-2 text-xl font-bold sm:text-2xl">Voices in the Wilderness</span>
                            <span className="mt-1 text-sm text-gray-200">Smitty &amp; Jeanne Smith</span>
                          </div>
                        </div>
                      ) : post.image && (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-primary-700 shadow-lg">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="inline-flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-primary-600 font-semibold">
                          {post.category}
                        </span>
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

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-primary-50 mb-6 max-w-2xl mx-auto">
              Get the latest news, prayer requests, and ministry updates
              delivered to your inbox
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
