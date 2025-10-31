import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";
import { Film, Play, Users } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Productions",
  description:
    'Gospel-centered film production featuring "The Only Way" motion picture. Reaching audiences with the message of Jesus Christ.',
  path: "/productions",
  keywords: [
    "christian film",
    "gospel film",
    "the only way film",
    "christian productions",
    "faith based movies",
  ],
});

const onlyWay = {
  title: "The Only Way",
  subtitle: "Motion Picture",
  description:
    '"The Only Way" is a motion picture that takes you on a life changing journey with a man who witnessed true miracles firsthand. We believe this movie will reach an audience that may not know Jesus and touch a world that is hurting and searching for peace.',
  status:
    "Our film is complete! Check out theonlywayfilm.com for viewing times and dates.",
  icon: Film,
  available: true,
};

export default function Productions() {
  return (
    <>
      <PageHero
        title="Productions"
        subtitle="Gospel-Centered Film"
        description="Reaching souls through powerful storytelling and the transformative message of Jesus Christ"
        icon={<Film className="h-8 w-8" />}
      />

      {/* Feature: The Only Way (poster and copy above) */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Poster */}
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl bg-gray-900">
              <Image
                src="/images/theonlywaymovieposter.png"
                alt="The Only Way Motion Picture Poster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Copy */}
            <div>
              <div className="flex items-center mb-4">
                <onlyWay.icon className="h-10 w-10 text-primary-600 mr-3" />
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {onlyWay.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    {onlyWay.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                {onlyWay.description}
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                <p className="text-sm font-semibold text-green-900 uppercase tracking-wide mb-2">
                  Latest Update
                </p>
                <p className="text-gray-700">{onlyWay.status}</p>
                <a
                  href="https://theonlywayfilm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-green-700 font-semibold hover:text-green-800"
                >
                  Visit theonlywayfilm.com
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photos and Host Screening (below) */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Glenn-and-Michael_edited_edited.jpg"
                alt="Behind the scenes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/widow-scene-1_edited_edited.jpg"
                alt="Film still"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Paralyzed-Man-lying-down-and-Wife-sittin.jpg"
                alt="On set"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Travy-bfore_edited_edited.jpg"
                alt="Cast member"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Host a Screening */}
          <div className="mt-10 text-center">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Host a Screening
            </p>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Interested in hosting a screening of "The Only Way" for your
              church, organization, or event? Contact us for details and
              scheduling.
            </p>
            <a
              href="tel:239-247-2330"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Call 239-247-2330
            </a>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              We believe these productions will reach audiences who may not know
              Jesus and touch a world that is hurting and searching for peace.
              Through powerful storytelling, compelling music, and authentic
              testimonies, we're bringing the Gospel to life in ways that
              transform hearts and change lives.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Bring Our Productions to Your Community"
        description="Schedule a screening of 'The Only Way' for your church, organization, or event. Contact us to learn more about scheduling and availability."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn About Our Ministry"
        secondaryButtonHref="/"
      />
    </>
  );
}
