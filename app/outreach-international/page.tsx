import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { Globe, Church, Heart, Gift, ArrowRight } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Haiti Missions & International Outreach - 20+ Years Serving",
  description:
    "Catalyst Ministries partners with Haitian churches for leadership conferences reaching 1,500+ pastors, crusades with 45,000+ attendees, orphanage support, and life-changing Gospel ministry in Port-au-Prince.",
  path: "/outreach-international",
  keywords: [
    "haiti missions",
    "port-au-prince ministry",
    "haitian leadership conference",
    "international missions",
    "christian missions haiti",
    "orphanage support haiti",
    "global outreach",
    "fishers of men ministries",
    "haiti crusade",
    "catalyst ministries haiti",
  ],
});

const partners = [
  {
    name: "Fishers of Men Ministries (FOM)",
    leader: "Pastor Jay Threadgill",
    icon: Church,
    description: "Church on the Rock in Port-au-Prince",
    activities: [
      "Annual leadership conference for 1,500 leaders",
      "Crusades attended by 45,000+ people",
      "Pastor Smitty preaches and joins worship team",
      "Team works on needed projects",
      "Pastor Jeanne makes her traditional cakes",
      "Periodic remodeling and painting projects",
      "Container shipments with Christmas toys and supplies",
      "Monthly financial support for 20 years",
    ],
  },
  {
    name: "Destiny Ministry Orphanage",
    leader: "Pastor Gary St-Hubert",
    icon: Heart,
    description: "Orphanage and school ministry",
    activities: [
      "Monthly financial donations",
      "Christmas gifts for children",
      "Regular visits when in Haiti",
      "Supporting education and care",
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
              For over 20 years, Catalyst Ministries has been faithfully serving
              the people of Haiti through strategic partnerships with local
              churches and ministries. We join Pastors Smitty and Jeanne at
              least once a year, and maintain ongoing support throughout the
              year.
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
              <div
                key={partner.name}
                className="rounded-lg bg-white shadow-sm overflow-hidden"
              >
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
              <div className="text-5xl font-extrabold text-primary-600">
                20+
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Years of Partnership
              </div>
              <div className="mt-1 text-gray-600">
                Consistent monthly support since 2003
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary-600">
                45,000+
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Crusade Attendees
              </div>
              <div className="mt-1 text-gray-600">
                Annual crusades reaching thousands
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-primary-600">
                1,500+
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                Leaders Trained
              </div>
              <div className="mt-1 text-gray-600">
                Annual leadership conferences
              </div>
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  Preaching & Worship
                </h3>
                <p className="text-primary-100">
                  Pastor Smitty preaches at conferences and crusades while
                  joining the worship team
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Practical Service
                </h3>
                <p className="text-primary-100">
                  Team works on remodeling, painting, and construction projects
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Hospitality Ministry
                </h3>
                <p className="text-primary-100">
                  Pastor Jeanne's cakes have become a beloved tradition
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Resource Support
                </h3>
                <p className="text-primary-100">
                  Shipping containers with Christmas toys, supplies, and needed
                  resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Haiti Ministry Report */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
              <h2 className="text-3xl font-extrabold text-white text-center">
                Haiti Leadership Conference 2024 - A Historic Gathering
              </h2>
              <p className="text-primary-100 text-center mt-2">
                October 28, 2024
              </p>
            </div>

            <article className="prose prose-lg mx-auto text-gray-700 p-8">
              <p className="text-xl font-semibold text-gray-900 mb-6">
                Over 1,500 pastors and leaders gathered in Port-au-Prince for
                three days of powerful teaching, worship, and fellowship in the
                face of unprecedented challenges.
              </p>

              <p>
                Despite extreme security challenges and volatile conditions in
                Port-au-Prince, God made it clear these pastors needed
                encouragement. Our team navigated closed airports, roadblocks,
                and challenging logistics to be there for this historic
                gathering.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Conference Highlights
              </h3>

              <ul className="space-y-3">
                <li>
                  <strong>Theme:</strong> "Leading with Faith in Difficult
                  Times"
                </li>
                <li>
                  <strong>Attendance:</strong> 1,500+ pastors and church leaders
                  from across Haiti
                </li>
                <li>
                  <strong>Powerful Worship:</strong> Thousands of voices lifted
                  in passionate, authentic praise
                </li>
                <li>
                  <strong>Resources Distributed:</strong> 1,200 Bibles in
                  Haitian Creole, leadership materials, medical supplies
                </li>
                <li>
                  <strong>Testimonies:</strong> Stories of miraculous healings,
                  divine protection, and gang members coming to Christ
                </li>
                <li>
                  <strong>Impact:</strong> Pastors traveled for days through
                  dangerous territory to attend
                </li>
              </ul>

              <p className="mt-6">
                The Haitian church's faith is unshakeable. Despite hearing
                gunfire in the distance during the conference, the worship never
                stopped. Fear never overtook faith. We came to encourage them,
                but they encouraged us far more.
              </p>

              <div className="mt-8 text-center">
                <Link
                  href="/blog/haiti-leadership-conference-2024"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Read the Full Story & See Photos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <blockquote className="mt-8 border-l-4 border-primary-600 pl-4 italic text-gray-700">
                "Thank you for not forgetting us. Thank you for coming when
                others said it was too dangerous. Thank you for believing in the
                Haitian church. We are not a people of defeat - we are a people
                of faith! Together, we will see Haiti transformed by the
                Gospel!"
                <footer className="text-sm text-gray-600 mt-2">
                  — Message from the Haitian Pastors
                </footer>
              </blockquote>
            </article>
          </div>
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
