import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";
import { Film, Play, Users } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Productions",
  description:
    'Gospel-centered film productions including A.S.K. and "The Only Way" motion picture. Reaching audiences with the message of Jesus Christ.',
  path: "/productions",
  keywords: [
    "christian film",
    "gospel film",
    "the only way film",
    "christian productions",
    "faith based movies",
  ],
});

const productions = [
  {
    title: "A.S.K. Movie",
    subtitle: "Feature Film Experience",
    description:
      "A powerful cinematic journey through the incredible life of Zacchaeus as he witnesses the historic miracles of Jesus that change his life forever.",
    scripture:
      '"Ask and it will be given to you; Seek and you will find; Knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened."',
    scriptureRef: "Matthew 7:7-8",
    icon: Users,
    available: true,
  },
  {
    title: "The Only Way",
    subtitle: "Motion Picture",
    description:
      '"The Only Way" is a motion picture that takes you on a life changing journey with a man who witnessed true miracles firsthand. We believe this movie will reach an audience that may not know Jesus and touch a world that is hurting and searching for peace.',
    status:
      "Our film is complete! Check out theonlywayfilm.com for viewing times and dates.",
    icon: Film,
    available: true,
  },
];

export default function Productions() {
  return (
    <>
      <PageHero
        title="Productions"
        subtitle="Gospel-Centered Film"
        description="Reaching souls through powerful storytelling and the transformative message of Jesus Christ"
        icon={<Film className="h-8 w-8" />}
      />

      {/* Mission */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Play className="mx-auto h-12 w-12 text-primary-600" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Expanding Our Reach
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              The Catalyst Team has begun to expand with the A.S.K. movie, and
              we are producing motion pictures that bring the Gospel to life in
              powerful, transformative ways.
            </p>
          </div>
        </div>
      </div>

      {/* Productions Showcase */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productions.map((production, idx) => (
              <div
                key={production.title}
                className={`grid gap-8 items-center ${
                  idx % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    <production.icon className="h-10 w-10 text-primary-600 mr-3" />
                    <div>
                      <h3 className="text-3xl font-extrabold text-gray-900">
                        {production.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        {production.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {production.description}
                  </p>

                  {production.scripture && (
                    <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6">
                      <p className="text-gray-700 italic mb-2">
                        {production.scripture}
                      </p>
                      <p className="text-sm font-semibold text-primary-900">
                        {production.scriptureRef}
                      </p>
                    </div>
                  )}

                  {production.status && (
                    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                      <p className="text-sm font-semibold text-green-900 uppercase tracking-wide mb-2">
                        Latest Update
                      </p>
                      <p className="text-gray-700">{production.status}</p>
                      {production.title === "The Only Way" && (
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
                      )}
                    </div>
                  )}

                  {production.title === "A.S.K. Movie" && (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Host a Screening
                      </p>
                      <p className="text-gray-600 mb-4">
                        If you would like to host a screening of the A.S.K.
                        movie for your organization, please contact us.
                      </p>
                      <a
                        href="tel:239-247-2330"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                      >
                        Call 239-247-2330
                      </a>
                    </div>
                  )}
                </div>

                {/* Production Images */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  {production.title === "A.S.K. Movie" ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/images/widow-scene-1_edited_edited.jpg"
                          alt="A.S.K. Movie - Widow Scene"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/images/Glenn-and-Michael_edited_edited.jpg"
                          alt="A.S.K. Movie - Glenn and Michael"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/images/Paralyzed-Man-lying-down-and-Wife-sittin.jpg"
                          alt="A.S.K. Movie - Paralyzed Man Scene"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src="/images/Travy-bfore_edited_edited.jpg"
                          alt="A.S.K. Movie - Cast Member"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  ) : production.title === "The Only Way" ? (
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg bg-gray-900">
                      <Image
                        src="/images/theonlywaymovieposter.png"
                        alt="The Only Way Motion Picture Poster"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-center font-semibold text-lg">
                          Available at theonlywayfilm.com
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex flex-col items-center justify-center shadow-lg p-8">
                      <production.icon className="h-24 w-24 text-white opacity-80 mb-4" />
                    </div>
                  )}
                </div>
              </div>
            ))}
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
        description="Schedule an A.S.K. movie screening for your church, organization, or event. Contact us to learn more about scheduling and availability."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn About Our Ministry"
        secondaryButtonHref="/"
      />
    </>
  );
}
