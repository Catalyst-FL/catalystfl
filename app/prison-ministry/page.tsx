import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ImageGallery from '@/components/ImageGallery';
import VideoSection from '@/components/VideoSection';
import { Users, Mail, Heart, Calendar, Award, FileText, Download, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

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

      {/* Ministry Video — first thing after the hero, on the same dark band, so
          it reads as part of the header rather than another section to scroll
          past. No poster: the still is a frame of the video itself. */}
      <VideoSection
        src="/recruiting_video_with_audio.mp4"
        title="See Our Prison Ministry in Action"
        description="A one-minute look at what our teams do behind prison walls — and how you can help or join us."
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


      {/* FDC Volunteer Application Guide */}
      <section id="volunteer-application" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <ShieldCheck className="mx-auto h-14 w-14 text-primary-600" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Become an Approved FDC Volunteer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow these steps carefully if you are applying to serve with Catalyst Ministries
              inside Florida Department of Corrections facilities.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border-2 border-primary-200 bg-primary-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-primary-900">
              Start here: use the online FDC application
            </h3>
            <p className="mt-2 text-gray-700">
              We recommend using the online internet version of the Florida Volunteer Management
              System rather than the mobile app, because the mobile version does not always work reliably.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://fdcbees.com/vms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-primary-700"
              >
                Start Online FDC Application
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.fdc.myflorida.com/volunteer-services/volunteers-and-programs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-300 bg-white px-5 py-3 font-semibold text-primary-700 transition hover:bg-primary-50"
              >
                Current FDC Volunteer Instructions
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-amber-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Use these Catalyst answers when the application asks
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <p className="text-sm font-semibold text-gray-500">Role / Ministry</p>
                    <p className="mt-1 font-bold text-gray-900">
                      Pastor or Counselor with Catalyst Ministries
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <p className="text-sm font-semibold text-gray-500">Volunteer Type</p>
                    <p className="mt-1 font-bold text-gray-900">
                      Regular Volunteer
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      If an older screen says “Full Time,” select that option. This is the volunteer
                      level used for receiving a PIN number.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <p className="text-sm font-semibold text-gray-500">Program / Service Area</p>
                    <p className="mt-1 font-bold text-gray-900">Chapel</p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <p className="text-sm font-semibold text-gray-500">Facilities</p>
                    <p className="mt-1 font-bold text-gray-900">
                      DeSoto, Charlotte, and Avon Park
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      If the application asks for a home facility, choose <strong>DeSoto</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                step: '1',
                title: 'Complete the online application',
                text: 'Open the FDC Volunteer Management System above and complete the application using the Catalyst-specific answers shown on this page.',
              },
              {
                step: '2',
                title: 'Complete Phase 1 training',
                text: 'After submitting the application, complete the required Basic Volunteer Training. If you stop partway through, you can return to the application system and resume. Watch your email, including spam or junk folders, for FDC system messages.',
              },
              {
                step: '3',
                title: 'Print and complete the Livescan form',
                text: 'Download the official Livescan form below. Complete your personal information privately. Do not email or submit your Social Security number through the Catalyst website. Leave the TCN field blank unless FDC or the chaplain tells you otherwise.',
              },
              {
                step: '4',
                title: 'Go for fingerprinting',
                text: 'Use FDC’s current facility fingerprinting schedule. Bring the completed Livescan form, a valid state-issued photo ID, and your Social Security card. FDC’s current volunteer instructions use scheduled walk-in fingerprinting days.',
              },
              {
                step: '5',
                title: 'Background review and Phase 2 / CJIS',
                text: 'After fingerprints and the background review are approved, FDC will send instructions for Phase 2 (CJIS) training. Save any completion certificate or confirmation for your records.',
              },
              {
                step: '6',
                title: 'Receive your volunteer PIN and contact us',
                text: 'After the required training is verified, FDC will issue your Volunteer PIN. Let Jeanne at Catalyst Ministries know when you have completed the process so she can notify the chaplain. The chaplain can then assist with your TCN information and facility-specific next steps.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <FileText className="h-9 w-9 text-primary-600" />
              <h3 className="mt-3 text-xl font-bold text-gray-900">FDC Volunteer Checklist</h3>
              <p className="mt-2 text-gray-600">
                Review the official checklist for the application, training, fingerprinting,
                background screening, CJIS training, PIN number, and first facility visit.
              </p>
              <a
                href="https://www.fdc.myflorida.com/content/download/1480/file/checklist%20for%20becoming%20a%20FDC%20volunteer%2C%20REVISED%20PDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800"
              >
                <Download className="h-5 w-5" />
                Open / Download Checklist
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <FileText className="h-9 w-9 text-primary-600" />
              <h3 className="mt-3 text-xl font-bold text-gray-900">Official Livescan Form</h3>
              <p className="mt-2 text-gray-600">
                Print this form, complete it before fingerprinting, and bring it with your
                identification and Social Security card as instructed by FDC.
              </p>
              <a
                href="https://www.fdc.myflorida.com/content/download/43635/file/LIVESCAN%20DC2-8068.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800"
              >
                <Download className="h-5 w-5" />
                Open / Download Livescan Form
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
            <p className="font-semibold text-gray-900">
              Important fingerprinting note
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              The Livescan form itself may still show older wording telling applicants to call for
              an appointment. FDC’s current volunteer instructions state that fingerprinting
              appointments are no longer required and facilities use designated walk-in days and
              times. Always check the current FDC volunteer page before you go.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-emerald-50 p-5">
            <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
            <p className="text-sm leading-relaxed text-emerald-950">
              <strong>Your privacy:</strong> Catalyst Ministries does not need you to enter your
              Social Security number, fingerprint information, or other sensitive Livescan data on
              this website. Complete those items only through the official FDC process and on the
              official form.
            </p>
          </div>
        </div>
      </section>

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

      {/* Correctional Ministry Recognition */}
      <div className="bg-primary-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-primary-100">
            <div className="text-center">
              <Award className="mx-auto h-12 w-12 text-primary-600" />
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                Recognition for Faithful Prison Ministry Service
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                On April 24, 2019, William Smith and Jeanne Smith were each recognized
                for their vital volunteer service at Hernando Correctional Institution&apos;s
                Faith &amp; Character Based Program Facility in Spring Hill, Florida.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {[
                {
                  src: '/images/credentials/fdc-william-smith-2019.jpg',
                  title: 'William Smith — Certificate of Appreciation',
                  alt: 'Florida Department of Corrections Certificate of Appreciation presented to William Smith in 2019',
                },
                {
                  src: '/images/credentials/fdc-jeanne-smith-2019.jpg',
                  title: 'Jeanne Smith — Certificate of Appreciation',
                  alt: 'Florida Department of Corrections Certificate of Appreciation presented to Jeanne Smith in 2019',
                },
              ].map((certificate) => (
                <div key={certificate.src} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-4 text-center font-bold text-gray-900">{certificate.title}</h3>
                  <div className="mt-3 text-center">
                    <a
                      href={certificate.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
                    >
                      View Full Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pastoral Credentials */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="mx-auto h-11 w-11 text-primary-600" />
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pastoral Credentials
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Ministry education and ordination credentials for Pastors William (Smitty) and Jeanne Smith.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: '/images/credentials/william-smith-bachelor-religious-arts.jpg',
                title: 'William H. Smith',
                subtitle: 'Bachelor of Religious Arts in Biblical Studies — Jacksonville Theological Seminary, 2002',
                alt: 'William H. Smith Bachelor of Religious Arts in Biblical Studies diploma',
              },
              {
                src: '/images/credentials/william-smith-certificate-ordination.jpg',
                title: 'William Smith',
                subtitle: 'Certificate of Ordination — Church on the Rock International, 2005',
                alt: 'William Smith Certificate of Ordination from Church on the Rock International',
              },
              {
                src: '/images/credentials/jeanne-smith-master-religious-arts.jpg',
                title: 'Jeanne M. Smith',
                subtitle: 'Master of Religious Arts in Christian Education — Jacksonville Theological Seminary, 2002',
                alt: 'Jeanne M. Smith Master of Religious Arts in Christian Education diploma',
              },
              {
                src: '/images/credentials/jeanne-smith-certificate-ordination.jpg',
                title: 'Jeanne Smith',
                subtitle: 'Certificate of Ordination — Church on the Rock International, 2005',
                alt: 'Jeanne Smith Certificate of Ordination from Church on the Rock International',
              },
            ].map((credential) => (
              <div key={credential.src} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={credential.src}
                    alt={credential.alt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{credential.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{credential.subtitle}</p>
                  <a
                    href={credential.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
                  >
                    View Full Size
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
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
                src: '/images/writing-Christmas-cards.jpg',
                alt: 'Writing Christmas cards to inmates',
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
