import { generatePageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ImageGallery from '@/components/ImageGallery';
import { Globe, Church, Heart, Gift } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'International Outreach',
  description: 'Supporting missions in Haiti through leadership conferences, crusades, orphanages, and ongoing partnerships. 20+ years of faithful service.',
  path: '/outreach-international',
  keywords: ['haiti missions', 'international missions', 'christian missions', 'orphanage support', 'global outreach'],
});

const partners = [
  {
    name: 'Fishers of Men Ministries (FOM)',
    leader: 'Pastor Jay Threadgill',
    icon: Church,
    description: 'Church on the Rock in Port-au-Prince',
    activities: [
      'Annual leadership conference for 1,500 leaders',
      'Crusades attended by 45,000+ people',
      'Pastor Smitty preaches and joins worship team',
      'Team works on needed projects',
      'Pastor Jeanne makes her traditional cakes',
      'Periodic remodeling and painting projects',
      'Container shipments with Christmas toys and supplies',
      'Monthly financial support for 20 years',
    ],
  },
  {
    name: 'Destiny Ministry Orphanage',
    leader: 'Pastor Gary St-Hubert',
    icon: Heart,
    description: 'Orphanage and school ministry',
    activities: [
      'Monthly financial donations',
      'Christmas gifts for children',
      'Regular visits when in Haiti',
      'Supporting education and care',
    ],
  },
];

export default function OutreachInternational() {
  return (
    <>
      <PageHero
        title="International Outreach"
        subtitle="Haiti Missions"
        description="Partnering with local churches and orphanages to bring hope, support, and the Gospel to Haiti"
        icon={<Globe className="h-8 w-8" />}
      />

      {/* Introduction */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Globe className="mx-auto h-12 w-12 text-primary-600" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Commitment to Haiti
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              For over 20 years, Catalyst Ministries has been faithfully serving the people of Haiti 
              through strategic partnerships with local churches and ministries. We join Pastors Smitty 
              and Jeanne at least once a year, and maintain ongoing support throughout the year.
            </p>
          </div>
        </div>
      </div>

      {/* Ministry Partners */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Ministry Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Working alongside faithful leaders in Haiti
            </p>
          </div>

          <div className="space-y-12">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-lg bg-white shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary-600 text-white">
                        <partner.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-lg font-semibold text-primary-600">
                        {partner.leader}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {partner.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start">
                        <Gift className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Impact in Haiti
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary-600">20+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Years of Partnership</div>
              <div className="mt-1 text-gray-600">Consistent monthly support since 2003</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary-600">45,000+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Crusade Attendees</div>
              <div className="mt-1 text-gray-600">Annual crusades reaching thousands</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary-600">1,500+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Leaders Trained</div>
              <div className="mt-1 text-gray-600">Annual leadership conferences</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry Activities */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">
              What We Do in Haiti
            </h2>
            <div className="mx-auto max-w-3xl grid gap-6 md:grid-cols-2 text-left">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Preaching & Worship</h3>
                <p className="text-primary-100">
                  Pastor Smitty preaches at conferences and crusades while joining the worship team
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Practical Service</h3>
                <p className="text-primary-100">
                  Team works on remodeling, painting, and construction projects
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Hospitality Ministry</h3>
                <p className="text-primary-100">
                  Pastor Jeanne's cakes have become a beloved tradition
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Resource Support</h3>
                <p className="text-primary-100">
                  Shipping containers with Christmas toys, supplies, and needed resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Haiti Ministry Report */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg mx-auto text-gray-700">
            <h2 className="text-center">Highlights from the Haiti Leadership Summit</h2>
            <p>
              During our most recent trip to Port-au-Prince, hundreds of Haitian pastors and leaders gathered
              for a dynamic week of worship, equipping, and compassionate ministry. Services were marked by
              heartfelt prayer, bold preaching, and powerful altar ministry that strengthened the local church.
            </p>
            <p>
              Catalyst Ministries partnered with Fishers of Men Ministries to host training intensives, youth
              workshops, and nightly crusades that welcomed thousands from across the region. Attendees engaged
              deeply—taking notes during leadership sessions, responding in prayer, and kneeling together in
              humility as they sought God for their communities.
            </p>
            <p>
              The photos below capture moments of unity, intercession, and celebration as we stood alongside our
              Haitian family. Each image tells the story of a nation hungry for hope and a church committed to
              shining the light of Christ.
            </p>
          </article>
        </div>
      </div>

      {/* Photo Gallery - Haiti Missions */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Haiti Ministry in Photos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See the impact of our partnership with Haitian churches and ministries
            </p>
          </div>

          <ImageGallery
            images={[
              {
                src: '/images/haiti/haiti-leadership-prayer.svg',
                alt: 'Haitian believers worshipping with raised hands during Catalyst Ministries leadership summit',
                title: 'Leaders United in Prayer',
              },
              {
                src: '/images/haiti/haiti-conference-front-row.svg',
                alt: 'Pastors and church leaders seated in the front row of the Haiti ministry conference',
                title: 'Haiti Ministry Leadership Gathering',
              },
              {
                src: '/images/haiti/haiti-conference-notes.svg',
                alt: 'Haitian ministry participants diligently taking notes during leadership training',
                title: 'Equipping Haitian Leaders',
              },
              {
                src: '/images/haiti/haiti-crusade-overview-1.svg',
                alt: 'Overhead view of a packed worship center during the Port-au-Prince crusade',
                title: 'Crusade Crowd Worshipping Together',
              },
              {
                src: '/images/haiti/haiti-crusade-overview-2.svg',
                alt: 'Balcony perspective of Haitian believers filling every seat during conference sessions',
                title: 'Every Seat Filled with Expectation',
              },
              {
                src: '/images/haiti/haiti-pastor-praying-over-crowd.svg',
                alt: 'Pastor ministering and praying over Haitian attendees at the altar',
                title: 'Pastoral Prayer and Ministry',
              },
              {
                src: '/images/haiti/haiti-leaders-red-ties.svg',
                alt: 'Haitian ministry team in coordinated attire representing unity and excellence',
                title: 'Committed Haiti Leadership Team',
              },
              {
                src: '/images/haiti/haiti-altar-ministry.svg',
                alt: 'Catalyst Ministries team members laying hands on Haitian believers during altar ministry',
                title: 'Intercession at the Altar',
              },
              {
                src: '/images/haiti/haiti-conference-side-angle.svg',
                alt: 'Side angle view of Haiti outreach conference with attendees focused on teaching',
                title: 'Teaching Moments that Transform',
              },
              {
                src: '/images/haiti/haiti-conference-prayer-benches.svg',
                alt: 'Haitian men kneeling at sanctuary benches in prayer during the Catalyst outreach',
                title: 'Responding in Prayer',
              },
            ]}
            columns={3}
          />
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Support Our Haiti Mission"
        description="Join us in making an eternal impact in Haiti. Your support helps fund crusades, support orphans, and equip local leaders."
        primaryButtonText="Get Involved"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More About Our Ministry"
        secondaryButtonHref="/"
        variant="secondary"
      />
    </>
  );
}
