import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { generatePageMetadata } from '@/lib/metadata';
import { generateWebPageSchema } from '@/lib/schemas';
import { Heart, Users, Globe, Music, Film, HandHeart } from 'lucide-react';
import CTASection from '@/components/CTASection';
import ImpactMetrics from '@/components/ImpactMetrics';
import Testimonials from '@/components/Testimonials';

export const metadata = generatePageMetadata({
  title: 'Home',
  description: 'Catalyst Ministries Florida - Igniting change through prison ministry, international outreach, worship, and gospel-centered productions. Serving communities since 2003.',
  path: '/',
  keywords: ['christian ministry florida', 'prison ministry', 'gospel outreach', 'faith based nonprofit'],
});

const features = [
  {
    name: 'Prison Ministry',
    description: 'Visiting prisons monthly for 23+ years, bringing hope, worship, and the Gospel to incarcerated men and women.',
    icon: Heart,
    href: '/prison-ministry',
  },
  {
    name: 'International Outreach',
    description: 'Supporting missions in Haiti through leadership conferences, crusades, and ongoing partnership with local churches.',
    icon: Globe,
    href: '/outreach-international',
  },
  {
    name: 'Productions',
    description: 'Creating powerful gospel-centered dramas like A.S.K. and our film "The Only Way" to reach souls with the message of Jesus.',
    icon: Film,
    href: '/productions',
  },
  {
    name: 'Praise & Worship',
    description: 'Leading worship in prisons, missions, and communities - bringing the presence of God through music.',
    icon: Music,
    href: '/worship',
  },
  {
    name: 'National Outreach',
    description: 'Serving the homeless, partnering with SW Florida churches, and reaching communities across America with the Gospel.',
    icon: Users,
    href: '/outreach-national',
  },
  {
    name: 'Volunteer Opportunities',
    description: 'Join our traveling team or correspondence ministry to make a lasting impact in the lives of those in need.',
    icon: HandHeart,
    href: '/contact',
  },
];

const webPageSchema = generateWebPageSchema({
  name: 'Home - Catalyst Ministries Florida',
  description: 'Catalyst Ministries Florida - Igniting change through prison ministry, international outreach, worship, and gospel-centered productions. Serving communities since 2003.',
  url: 'https://catalystfl.vercel.app/',
});

export default function Home() {
  return (
    <>
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Hero Section with Video Background */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden min-h-[70vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/80" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Igniting Change</span>
              <span className="block text-primary-200 mt-2">Through the Gospel of Christ</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-50">
              Catalyst Ministries is a 501(c)(3) organization committed to reaching the lost and 
              incarcerated, supporting international missions, and spreading hope through worship and productions.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3 text-base font-medium text-primary-700 shadow-sm hover:bg-primary-50 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="/prison-ministry"
                className="rounded-lg bg-primary-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-500 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement with Images */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary-600">Since 2003</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-xl text-gray-600">
              Founded by Pastors William (Smitty) and Jeanne Smith, Catalyst Ministries members are 
              Bible believers committed to equipping communities and touching the lost and incarcerated. 
              We present the Gospel of Jesus Christ through music, drama, preaching, testimonies, prayer, 
              and encouragement.
            </p>
          </div>

          {/* Image Showcase */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-56">
              <Image
                src="/images/25-Smitty-preaching.jpg"
                alt="Pastor Smitty preaching the Gospel"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end z-10">
                <p className="p-4 text-white font-semibold">Preaching the Gospel</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-56">
              <Image
                src="/images/inmate-praying.png"
                alt="Inmate praying - lives transformed through prison ministry"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end z-10">
                <p className="p-4 text-white font-semibold">Prison Ministry Impact</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-56">
              <Image
                src="/images/Haiti-Crusade-crowdn1.jpg"
                alt="Haiti crusade with thousands in attendance"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end z-10">
                <p className="p-4 text-white font-semibold">Haiti Missions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Catalyst Ministries reaches communities through multiple avenues of service
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.name}
                href={feature.href}
                className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div>
                  <span className="inline-flex rounded-lg bg-primary-50 p-3 text-primary-700 ring-4 ring-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Metrics Section */}
      <ImpactMetrics />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Latest News Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl shadow-lg bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">Latest News</h2>
              <h3 className="mt-4 text-2xl font-bold text-primary-50">THE ONLY WAY</h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-50">
                Our film is complete! A life-changing journey with a man who witnessed true miracles firsthand.
                Visit <a href="https://theonlywayfilm.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">theonlywayfilm.com</a> to watch the full movie.
              </p>
              <div className="mt-8">
                <Link
                  href="/productions"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-primary-700 shadow-sm hover:bg-primary-50 transition-colors"
                >
                  Learn About Our Productions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title="Ready to Make a Difference?"
        description="Join us in bringing hope to those in prison, supporting missions worldwide, and spreading the Gospel through worship and productions."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn About Volunteering"
        secondaryButtonHref="/prison-ministry"
      />
    </>
  );
}
