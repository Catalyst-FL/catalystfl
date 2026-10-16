import { generatePageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Music, Heart, Waves, ExternalLink, Headphones, Mic2 } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Praise & Worship',
  description: 'The Catalyst Band leads worship in prisons, missions, and communities. Bringing the presence of God through music and changing atmospheres with praise.',
  path: '/worship',
  keywords: ['worship ministry', 'christian worship', 'prison worship', 'gospel music', 'praise and worship'],
});

export default function Worship() {
  return (
    <>
      <PageHero
        title="Praise & Worship"
        subtitle="Music That Transforms"
        description="Bringing the presence of God through music, changing atmospheres, and touching hearts"
        icon={<Music className="h-8 w-8" />}
      />

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Music className="mx-auto h-16 w-16 text-primary-600" />
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                The Catalyst Band
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed">
                The Catalyst Band consists of individuals who love the Lord. We believe our praise 
                and worship is a <span className="font-semibold text-primary-600">"catalyst"</span> to 
                help change the atmosphere.
              </p>
              
              <p className="text-xl leading-relaxed mt-6">
                Whether in prison, on the mission field, or at a gathering, our objective is to bring 
                the presence of God to others through our music.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pastor Smitty Music */}
      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 via-primary-900 to-primary-700 shadow-lg">
            {/* Decorative music artwork */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -right-4 top-8 h-40 w-40 rounded-full border border-white/10" />
              <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-primary-400/10 blur-3xl" />
              <Music className="absolute right-10 top-8 h-24 w-24 rotate-12 text-white/[0.07] sm:h-32 sm:w-32" />
              <Music className="absolute bottom-8 right-40 h-16 w-16 -rotate-12 text-white/[0.06]" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            <div className="relative grid gap-0 lg:grid-cols-[1.5fr_0.5fr]">
              <div className="p-6 sm:p-8 lg:p-9">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-primary-50 backdrop-blur-sm">
                  <Mic2 className="h-4 w-4" aria-hidden="true" />
                  Pastor Smitty&apos;s Music
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Smitty Tunes
                </h2>
                <p className="mt-2 text-base font-semibold text-primary-100">
                  Music ministry beyond the walls
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-50/90">
                  Visit Pastor Smitty&apos;s music website to listen to his music and learn more about his ministry through song.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-sm text-primary-50">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Headphones className="h-4 w-4" aria-hidden="true" />
                    Listen Online
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Music className="h-4 w-4" aria-hidden="true" />
                    Music &amp; Ministry
                  </span>
                </div>

                <a
                  href="https://smittytunes.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-base font-bold text-gray-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-200/40"
                >
                  Visit Smitty Tunes
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              <div className="relative hidden min-h-[260px] border-l border-white/10 lg:flex lg:items-center lg:justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-5 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 shadow-lg">
                    <Music className="h-10 w-10 text-gray-950" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Locations */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Where We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Bringing worship to those who need it most
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm text-center">
              <div className="inline-flex rounded-full bg-primary-100 p-4 mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prison Ministry</h3>
              <p className="text-gray-600">
                Leading worship during monthly prison visits, bringing hope and the presence of God 
                to incarcerated men and women.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm text-center">
              <div className="inline-flex rounded-full bg-primary-100 p-4 mb-4">
                <Waves className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Missions</h3>
              <p className="text-gray-600">
                Joining worship teams in Haiti for leadership conferences and crusades attended by 
                thousands seeking God.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm text-center">
              <div className="inline-flex rounded-full bg-primary-100 p-4 mb-4">
                <Music className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Outreach</h3>
              <p className="text-gray-600">
                Performing at Breakfast in the Park, Integrity Church, and community events throughout 
                Florida and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-primary-600 to-primary-800 px-8 py-12 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Our Worship Philosophy
            </h2>
            <div className="mx-auto max-w-3xl space-y-4 text-primary-50 text-lg">
              <p>
                We don't just perform music—we usher in the presence of the Living God.
              </p>
              <p>
                We believe that authentic worship has the power to break chains, heal hearts, 
                and transform lives. When we worship, we create space for God to move.
              </p>
              <p className="text-xl font-semibold text-white">
                Our music is a catalyst for change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Band Members Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Join Our Worship Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
              If you're a musician or vocalist who loves the Lord and wants to serve in prison ministry, 
              international missions, or community outreach, we'd love to hear from you.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Experience the Power of Worship"
        description="Invite the Catalyst Band to lead worship at your church, event, or community gathering."
        primaryButtonText="Book Our Worship Team"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More About Our Ministry"
        secondaryButtonHref="/"
      />
    </>
  );
}
