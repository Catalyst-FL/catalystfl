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
                src: '/images/Haiti-Crusade-crowdn1.jpg',
                alt: 'Haiti crusade with 45,000+ attendees',
                title: 'Massive Crusade Attendance',
              },
              {
                src: '/images/25-Smitty-preaching.jpg',
                alt: 'Pastor Smitty preaching at Haiti conference',
                title: 'Preaching to Leaders',
              },
              {
                src: '/images/new-bus.jpg',
                alt: 'Support for Haiti ministry transportation',
                title: 'Supporting Local Ministry',
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
