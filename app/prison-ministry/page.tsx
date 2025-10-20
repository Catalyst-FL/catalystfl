import { generatePageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ImageGallery from '@/components/ImageGallery';
import { Users, Mail, Heart, Calendar } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Prison Ministry',
  description: 'Bringing hope to incarcerated individuals through worship, preaching, and correspondence. 23+ years of monthly prison visits and support.',
  path: '/prison-ministry',
  keywords: ['prison ministry', 'prison outreach', 'inmate ministry', 'prison worship', 'prison volunteer'],
});

const teams = [
  {
    name: 'Volunteer Traveling Team',
    icon: Users,
    description: 'Our team has visited prisons at least once a month for the past 23 years.',
    details: [
      'Praise and worship services',
      'Personal testimonies',
      'Biblical preaching',
      'Altar calls and prayer',
      'Weekly character and guitar classes',
    ],
  },
  {
    name: 'Volunteer Correspondence Team',
    icon: Mail,
    description: 'For 23 years we\'ve been sending Christmas and Birthday cards to close to 3,000 inmates.',
    details: [
      'Birthday cards for inmates',
      'Christmas cards and encouragement',
      'Often the only card they receive',
      'Life-saving impact on those in crisis',
      'Reminder that they are not forgotten by us or God',
    ],
  },
];

const testimonials = [
  {
    text: "I am Isac. I have been in prison now for the last 29 years, and I humbly thank you for this holiday card. Time in prison, nor my life, has been easy, however, the words and effort behind the card you sent me, encouraged me, and shows me there are people who can through any storm still see a human to be a human. I again thank you, and will attempt to encourage others in their hardships as you've given me hope to me.",
    author: 'Isac',
  },
  {
    text: "Thank you so much for your Christmas card. I just wanted express my appreciation for your ministry that you remember an inmate like me every year when it was time for either my birthday or holiday season. I truly thank God that he used your ministry to remind me that I was not forgotten and to tell me that Jesus is alive and he is still in the business of touching people's hearts. You have been sending me cards every year for the past 12 years.",
    author: 'K.U.',
  },
];

export default function PrisonMinistry() {
  return (
    <>
      <PageHero
        title="Prison Ministry"
        subtitle="Our Heart for the Incarcerated"
        description="Bringing hope, healing, and the Gospel to those behind bars for over two decades"
        icon={<Heart className="h-8 w-8" />}
      />

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto h-12 w-12 text-primary-600" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Prison Ministries
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-left">
              In this day and age, there are so many people searching for something. Something to fill 
              the void that is in their heart that drugs, alcohol and life in general cannot fill. 
              Catalyst Ministries believes the life changing message of Jesus Christ is the answer.
            </p>
            <p className="mt-4 text-lg text-gray-600 text-left">
              Many who become incarcerated are from a direct result of their searching. Their families 
              abandon them; they stay trapped in their past and feel they have nothing to live for. 
              Catalyst wants to turn their brokenness into hopefulness. We want to reach the lost inside 
              these prison walls. We believe everyone needs God's mercy and grace.
            </p>
            <p className="mt-4 text-lg text-gray-600 text-left">
              Prison is a dark place, hopelessness can spread. But as we reach out to prisoners and show 
              them the hope they can have by accepting Jesus Christ as their Lord and Savior they find 
              joy, peace and a freedom from their chains of bondage. They realize they can start over; 
              that God has not only forgiven them, but He has not forgotten them.
            </p>
          </div>
        </div>
      </div>

      {/* Ministry Teams */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How You Can Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join one of our volunteer teams and make an eternal impact
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teams.map((team) => (
              <div key={team.name} className="rounded-lg bg-white p-8 shadow-sm">
                <div className="flex items-center">
                  <team.icon className="h-8 w-8 text-primary-600" />
                  <h3 className="ml-3 text-2xl font-bold text-gray-900">{team.name}</h3>
                </div>
                <p className="mt-4 text-gray-600">{team.description}</p>
                <ul className="mt-6 space-y-3">
                  {team.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <Calendar className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-primary-50 rounded-md">
                  <p className="text-sm font-semibold text-primary-900">
                    If you would like to become part of our team, please fill out the contact page. 
                    We would love to have you join us.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Testimonies of Hope
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Recent responses from those we serve
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="rounded-lg bg-gray-50 p-8">
                <div className="text-4xl text-primary-600 mb-4">&ldquo;</div>
                <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
                <p className="mt-4 text-right font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center rounded-lg bg-yellow-50 px-6 py-4 border-l-4 border-yellow-400">
              <Heart className="h-6 w-6 text-yellow-600 mr-3" />
              <p className="text-sm text-gray-700">
                <strong>Impact Story:</strong> We received a letter from someone on "suicide watch" who 
                planned on killing themselves but said when they received our Christmas card it made them 
                change their mind. You know it is so much more than a small gesture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ministry in Action - Photo Gallery */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Ministry in Action
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See the impact of prison ministry through worship, teaching, and personal connection
            </p>
          </div>

          <ImageGallery
            images={[
              {
                src: '/images/inmate-praying.png',
                alt: 'Inmate praying during prison ministry service',
                title: 'Lives Transformed Through Prayer',
              },
              {
                src: '/images/Christmas-2022-postcard-for-inmates.jpg',
                alt: 'Christmas card sent to inmates',
                title: 'Christmas Cards Bringing Hope',
              },
              {
                src: '/images/Ecard.jpg',
                alt: 'Birthday and holiday cards for inmates',
                title: 'Birthday Cards to Remember',
              },
            ]}
            columns={3}
          />
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Join Our Prison Ministry Team"
        description="Over 23 years of faithful service. These men and women have become family to us. They bless us as much as we bless them."
        primaryButtonText="Get Involved"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More About Our Ministry"
        secondaryButtonHref="/"
      />
    </>
  );
}
