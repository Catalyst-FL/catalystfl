import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ImageGallery from "@/components/ImageGallery";
import { Coffee, Users, MapPin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "National Outreach",
  description:
    "Serving communities across America through SW Florida churches, homeless ministry, and regional outreach programs.",
  path: "/outreach-national",
  keywords: [
    "homeless ministry",
    "community outreach",
    "church ministry",
    "florida ministry",
    "south carolina missions",
  ],
});

const ministries = [
  {
    name: "SW Florida Churches",
    leaders: "Catalyst Worship Team",
    icon: Users,
    description:
      "Serving alongside churches throughout Southwest Florida and using worship, outreach, and practical service to share the Gospel.",
    activities: [
      "Catalyst worship team has ministered in numerous churches",
      "Catalyst team has participated in outreach events",
      "Team members serve as greeters and ushers in their home churches",
      "Catalyst members are youth leaders at their home churches",
    ],
  },
  {
    name: "Breakfast in the Park",
    leaders: "Todd and Tracy Fitts",
    icon: Coffee,
    description:
      "9 years of Saturday morning ministry to the homeless at Naples Park.",
    activities: [
      "Serve breakfast every Saturday",
      "Worship service for the homeless",
      "Provide clothes and toiletry items",
      "Catalyst Band performances",
      "Building relationships with the community",
      "Showing the love of Christ in practical ways",
    ],
  },
  {
    name: "South Carolina Outreach",
    leaders: "Catalyst Team",
    icon: MapPin,
    description: "Regional outreach bringing hope to underserved communities.",
    activities: [
      "Praise and worship services",
      "A.S.K. drama performances",
      "Food and clothing distribution",
      "Door-to-door neighborhood outreach",
      "Prayer ministry with residents",
      "Building lasting relationships",
    ],
  },
];

export default function OutreachNational() {
  return (
    <>
      <PageHero
        title="National Outreach"
        subtitle="Serving America"
        description="Bringing hope to communities across the United States through worship, practical service, and the Gospel"
        icon={<MapPin className="h-8 w-8" />}
      />

      {/* Introduction */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Users className="mx-auto h-12 w-12 text-primary-600" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Local Impact, National Reach
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              While our heart extends to international missions, we're deeply
              committed to serving communities right here in America. From
              weekly homeless ministry to church partnerships and regional
              outreach, we're bringing the Gospel where it's needed most.
            </p>
          </div>
        </div>
      </div>

      {/* Ministry Programs */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Outreach Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Serving communities through multiple ministry initiatives
            </p>
          </div>

          <div className="space-y-12">
            {ministries.map((ministry) => (
              <div
                key={ministry.name}
                className="rounded-lg bg-white shadow-sm overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary-600 text-white">
                        <ministry.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {ministry.name}
                      </h3>
                      <p className="mt-1 text-lg font-semibold text-primary-600">
                        {ministry.leaders}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {ministry.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {ministry.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-primary-600 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breakfast in the Park Highlight */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold text-white">
                  Breakfast in the Park
                </h2>
                <p className="mt-3 text-lg text-orange-100">
                  Every Saturday morning for the past 9 years, our team has
                  served breakfast and held worship services for the homeless
                  community at Naples Park. This ministry, led by Todd and Tracy
                  Fitts, embodies the heart of Christ by meeting practical needs
                  while sharing the Gospel.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <Coffee className="h-32 w-32 text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision for Expansion */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Looking Forward
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our South Carolina outreach was a tremendous success, and we are
              looking forward to returning. We believe God is opening doors for
              Catalyst to expand our national reach, bringing the combination of
              worship, drama, and practical service to more communities across
              America.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery - National Outreach */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              National Ministry in Action
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Serving communities across America with the Gospel
            </p>
          </div>

          <ImageGallery
            images={[
              {
                src: "/images/breakfest-team.jpg",
                alt: "Breakfast in the Park team serving the homeless",
                title: "Breakfast in the Park Ministry",
              },
              {
                src: "/images/south-carolina-1.jpg",
                alt: "South Carolina outreach event",
                title: "South Carolina Outreach",
              },
              {
                src: "/images/Thanksgiving.jpg",
                alt: "Thanksgiving serving ministry",
                title: "Serving Local Communities",
              },
              {
                src: "/images/smitty-in-cart.jpg",
                alt: "Door-to-door ministry delivery",
                title: "Door-to-Door Ministry",
              },
              {
                src: "/images/south-carolina4.jpg",
                alt: "Team prayer and outreach",
                title: "Prayer Ministry",
              },
            ]}
            columns={3}
          />
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Join Our National Outreach"
        description="Whether serving the homeless weekly, supporting church ministries, or joining regional outreach trips, there's a place for you on our team."
        primaryButtonText="Get Involved"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More About Our Ministry"
        secondaryButtonHref="/"
      />
    </>
  );
}
