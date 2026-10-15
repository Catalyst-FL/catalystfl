import { generatePageMetadata } from '@/lib/metadata';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ImageGallery from '@/components/ImageGallery';
import VideoSection from '@/components/VideoSection';
import { Users, Mail, Heart, Calendar, FileText, Download, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, ClipboardList, Printer, MailCheck, ArrowRight } from 'lucide-react';

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


      {/* Plain-language volunteer application and fingerprinting instructions */}
      <section id="volunteer-application" className="bg-white py-16 sm:py-20" aria-labelledby="volunteer-guide-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-primary-600" aria-hidden="true" />
            <p className="mt-4 text-sm font-bold uppercase tracking-wider text-primary-700">
              New Volunteers — Start Here
            </p>
            <h2 id="volunteer-guide-title" className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Prison Ministry Volunteer Application
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              You do not apply through Catalyst's contact form. The Florida Department of Corrections (FDC)
              handles applications, training, fingerprinting, background checks, and volunteer PIN numbers.
              Follow the steps below and let Jeanne know as you make progress.
            </p>
          </div>

          {/* Primary action — online, not the unreliable mobile app */}
          <div className="mt-10 rounded-2xl border-2 border-primary-300 bg-primary-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary-600 text-white">
                <ClipboardList className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">1. Start the official online application</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Select <strong>“Online Internet: Home Page – FLVMS”</strong> on the FDC application site.
                  This is the browser-based version, which Catalyst recommends instead of the mobile app.
                  Fill in your own accurate personal information; do not submit sensitive details through Catalyst.
                </p>
                <a
                  href="https://fdcbees.com/vms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-4 text-center text-base font-bold text-white shadow-sm transition-colors hover:bg-primary-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:w-auto"
                >
                  Open the Official FLVMS Application
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
                <p className="mt-3 text-sm text-gray-600">
                  The application opens on an external FDC volunteer-system website.
                  If you have already started, use the same site to return and finish training.
                </p>
              </div>
            </div>
          </div>

          {/* Exactly what Catalyst applicants should select */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-6 w-6 flex-none text-amber-700" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-gray-900">Catalyst-specific choices for the application</h3>
                <p className="mt-2 text-gray-700">
                  Use these selections <strong>where the FDC application asks for them</strong>.
                  Screen labels can vary. If the options differ, confirm with Jeanne before submitting.
                </p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-amber-100 bg-white p-4">
                    <dt className="text-sm font-semibold text-gray-600">Role / ministry</dt>
                    <dd className="mt-1 font-bold text-gray-900">Pastor or Counselor with Catalyst Ministries</dd>
                  </div>
                  <div className="rounded-lg border border-amber-100 bg-white p-4">
                    <dt className="text-sm font-semibold text-gray-600">Volunteer type</dt>
                    <dd className="mt-1 font-bold text-gray-900">Regular Volunteer</dd>
                    <dd className="mt-1 text-sm text-gray-600">May be called “Full Time” on an older screen.</dd>
                  </div>
                  <div className="rounded-lg border border-amber-100 bg-white p-4">
                    <dt className="text-sm font-semibold text-gray-600">Program / area</dt>
                    <dd className="mt-1 font-bold text-gray-900">Chapel</dd>
                  </div>
                  <div className="rounded-lg border border-amber-100 bg-white p-4">
                    <dt className="text-sm font-semibold text-gray-600">Facilities to select</dt>
                    <dd className="mt-1 font-bold text-gray-900">DeSoto, Charlotte, and Avon Park</dd>
                    <dd className="mt-1 text-sm text-gray-600">If asked for a home facility: <strong>DeSoto</strong>.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Most-requested downloadable form */}
          <div id="livescan-form" className="mt-12 overflow-hidden rounded-2xl border-2 border-primary-200 bg-white shadow-lg">
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 px-6 py-7 text-white sm:px-8">
              <div className="flex flex-wrap items-center gap-3">
                <Printer className="h-8 w-8" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-100">Required for fingerprinting</p>
                  <h3 className="text-2xl font-extrabold sm:text-3xl">2. Download and print the Livescan form</h3>
                </div>
              </div>
              <p className="mt-3 max-w-3xl text-primary-50">
                This is FDC's LiveScan Request Form, DC2-8068. Print one copy, complete it carefully,
                and bring the paper form to your fingerprinting location.
              </p>
              <a
                href="https://www.fdc.myflorida.com/content/download/43635/file/LIVESCAN%20DC2-8068.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-center text-base font-bold text-primary-800 shadow-sm transition-colors hover:bg-primary-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Open / Download Livescan PDF
              </a>
              <p className="mt-3 text-sm text-primary-100">
                The official PDF opens in a new tab. Use its download or print option.
                On a phone, save the PDF first and print it later.
              </p>
            </div>
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <h4 className="text-lg font-bold text-gray-900">How to fill out the Livescan form</h4>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-700 marker:font-bold marker:text-primary-700">
                  <li><strong>Name:</strong> Last, first, middle, and suffix (if any), matching your ID.</li>
                  <li><strong>Alias names:</strong> List other names used if applicable; otherwise follow the form's instructions.</li>
                  <li><strong>Birth and description:</strong> Date of birth, indicated sex and race, height, weight, eye color, and hair color.</li>
                  <li><strong>Birthplace:</strong> State and country of birth.</li>
                  <li><strong>Occupation:</strong> Your accurate job title and work location.</li>
                  <li><strong>Home address:</strong> Your physical street address and city, state, ZIP. <strong>No P.O. boxes.</strong></li>
                  <li><strong>Social Security number:</strong> Fill in privately on your paper form, <em>not</em> on this website.</li>
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Do not guess these two fields</h4>
                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-gray-600">ORI — Controlling Agency Identifier</p>
                    <p className="mt-1 text-2xl font-extrabold tracking-wider text-primary-800">FL037H75C</p>
                    <p className="mt-2 text-sm text-gray-600">
                      This code is already printed on the FDC form. Do not change it; confirm that fingerprinting staff use the correct ORI.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-gray-600">TCN — Transaction Control Number</p>
                    <p className="mt-1 font-semibold text-gray-900">Leave blank unless FDC staff instruct you otherwise.</p>
                    <p className="mt-2 text-sm text-gray-600">
                      The TCN is associated with the fingerprint transaction. After completing your application
                      and fingerprinting, let Jeanne know so she can coordinate the TCN details with the chaplain.
                    </p>
                  </div>
                </div>
                <p className="mt-4 rounded-lg bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
                  <strong>Note:</strong> The printed Livescan form still says to call for an appointment.
                  FDC's current volunteer guidance says appointments are <strong>not required</strong>;
                  fingerprinting takes place during designated walk-in days and times.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <CheckCircle2 className="h-6 w-6 text-primary-700" aria-hidden="true" />
                3. Complete Phase 1 training
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                After you submit your online application, complete the required Basic Volunteer Training.
                Return to the same FLVMS link if you need to resume. Watch your inbox and spam folder
                for email from <strong>alerts@fdcbees.com</strong>.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <CheckCircle2 className="h-6 w-6 text-primary-700" aria-hidden="true" />
                4. Go to fingerprinting
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Check the current FDC statewide fingerprinting schedule for a facility near you and its
                walk-in hours. <strong>Bring your printed, completed Livescan form, valid state-issued photo ID,
                and Social Security card.</strong> You may ask the facility contact about its schedule before going.
              </p>
              <a
                href="https://www.fdc.myflorida.com/volunteer-services/volunteers-and-programs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:underline"
              >
                Check FDC's current fingerprinting instructions <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <CheckCircle2 className="h-6 w-6 text-primary-700" aria-hidden="true" />
                5. Background check and Phase 2
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                FDC reviews your fingerprint background check. If approved, you will receive instructions
                to complete Phase 2 (CJIS) training. Follow those emailed instructions and save your confirmation.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <CheckCircle2 className="h-6 w-6 text-primary-700" aria-hidden="true" />
                6. Receive your PIN and coordinate with Jeanne
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                FDC issues your volunteer PIN when the required CJIS training is completed and verified.
                Let Jeanne at Catalyst know when you have finished your application and fingerprinting,
                and again when you receive your PIN. She can coordinate with the chaplain about your
                TCN and first facility visit. Do not visit until the facility confirms your approval and schedule.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-primary-200 bg-primary-50 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <MailCheck className="h-6 w-6 text-primary-700" aria-hidden="true" />
              Finished a step? Tell Jeanne
            </h3>
            <p className="mt-2 text-gray-700">
              Please contact Catalyst to let Jeanne know your application and training progress.
              You can mention your name and which steps you finished, but <strong>do not send your Social
              Security number, a completed Livescan form, or copies of your ID by email.</strong>
            </p>
            <a
              href="mailto:catalystministriesfl@gmail.com?subject=FDC%20Volunteer%20Application%20Update"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary-700 px-5 py-3 font-bold text-white transition-colors hover:bg-primary-800"
            >
              Email Catalyst an Update
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary-600" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-gray-900">Official FDC Volunteer Checklist</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Print or save FDC's checklist. The plain-language guide above combines Catalyst's
                specific selections with the current FDC volunteer instructions.
              </p>
              <a
                href="https://www.fdc.myflorida.com/content/download/1480/file/checklist%20for%20becoming%20a%20FDC%20volunteer%2C%20REVISED%20PDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-bold text-primary-700 hover:underline"
              >
                <Download className="h-5 w-5" aria-hidden="true" /> Open / Print FDC Checklist
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary-600" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-gray-900">Questions or missing FDC emails?</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                First check your spam/junk folder and the FLVMS website. For official application or
                training problems, contact FDC Volunteer Services.
              </p>
              <a
                href="mailto:OPR-VolunteerServices@fdc.myflorida.com"
                className="mt-4 inline-flex items-center gap-2 font-bold text-primary-700 hover:underline"
              >
                OPR-VolunteerServices@fdc.myflorida.com
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <p className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5 text-sm leading-relaxed text-emerald-950">
            <strong>Privacy reminder:</strong> The Catalyst website does not collect fingerprint records,
            Social Security numbers, or completed Livescan forms. Enter sensitive information only in
            the official FDC system or on the printed Livescan form.
          </p>

          <p className="mt-6 text-center text-sm text-gray-600">
            Looking for our pastors' diplomas, ordination certificates, and ministry awards?
            <a href="/contact#ministry-credentials" className="ml-1 font-bold text-primary-700 hover:underline">
              View all ministry credentials on the Contact page
            </a>.
          </p>
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
