import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Globe, Church, Heart, Gift } from "lucide-react";

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

      {/* 2026 Haiti Leadership Conference */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Haiti Leadership Conference 2026
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Continuing our long-standing partnership with church leaders in Haiti
              </p>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Our ministry partners at Église Sur Le Rocher Haiti held their 2026
                Leaders Conference under the theme <strong>“Ebenezer — Thus Far the
                Lord Has Helped Us”</strong>, based on 1 Samuel 7:12. The conference
                continued through August 27, 2026 as leaders gathered for worship,
                teaching, encouragement, and renewed commitment to serving Christ
                faithfully in Haiti.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The gathering came during a meaningful season for the church, which
                also celebrated its 1989–2026 jubilee with thanksgiving, testimonies,
                prayer for the nation, fellowship, and worship. Catalyst Ministries is
                grateful for the faithfulness of our Haitian brothers and sisters and
                for the privilege of supporting ministry leaders in Haiti year after year.
              </p>
              <div className="mt-6">
                <a
                  href="/blog/haiti-leadership-conference-2026"
                  className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors"
                >
                  Read the 2026 Conference Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Haiti Ministry Update */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
              <h2 className="text-3xl font-extrabold text-white text-center">
                Haiti Ministry 2026 - Latest Update
              </h2>
              <p className="text-primary-100 text-center mt-2">
                See the latest ministry update from our partners in Haiti
              </p>
            </div>

            <div className="p-4 sm:p-8">
              <div className="mx-auto mb-8 max-w-3xl rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  English Translation & Context
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  <strong>Leaders Conference — Theme:</strong> “Ebenezer, Thus Far the
                  Lord Has Helped Us,” from 1 Samuel 7:12. The post highlights the
                  third day of the Église Sur Le Rocher Haiti leaders conference on
                  August 27, 2026, a time of worship, biblical teaching, fellowship,
                  and encouragement for Christian leaders serving in Haiti.
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  The original church post is shown below in its original language.
                  This English summary is provided for our visitors.
                </p>
              </div>

              <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feglisesurlerocherhaiti%2Fposts%2Fpfbid02qw2GBgiKEiuxrhmbeGTwjngG9d2dBJVbv5nczJwPB4Ewdvufmn2KWbLhFPkDQnwfl&show_text=true&width=500"
                  width="500"
                  height="829"
                  className="w-full max-w-full border-0"
                  style={{ overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Haiti Ministry 2026 Facebook update"
                />
              </div>
            </div>
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
