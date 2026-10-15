'use client';

import PageHero from '@/components/PageHero';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send, Award, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Script from 'next/script';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://catalystfl.vercel.app/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: 'https://catalystfl.vercel.app/contact',
    },
  ],
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '239-247-2330',
    link: 'tel:239-247-2330',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'catalystministriesfl@gmail.com',
    link: 'mailto:catalystministriesfl@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Florida, USA',
    link: null,
  },
];

const credentialGroups = [
  {
    title: 'Prison Ministry Appreciation',
    intro: 'Recognition from the Florida Department of Corrections for faithful volunteer service at Hernando Correctional Institution.',
    items: [
      {
        name: 'Certificate of Appreciation — William Smith',
        detail: 'Florida Department of Corrections · Hernando Correctional Institution · April 24, 2019',
        src: '/images/credentials/fdc-william-smith-2019.jpg',
        portrait: false,
      },
      {
        name: 'Certificate of Appreciation — Jeanne Smith',
        detail: 'Florida Department of Corrections · Hernando Correctional Institution · April 24, 2019',
        src: '/images/credentials/fdc-jeanne-smith-2019.jpg',
        portrait: false,
      },
    ],
  },
  {
    title: 'Theological Education',
    intro: 'Academic degrees awarded by Jacksonville Theological Seminary in 2002.',
    items: [
      {
        name: 'Bachelor of Religious Arts in Biblical Studies — William H. Smith',
        detail: 'Jacksonville Theological Seminary · September 30, 2002',
        src: '/images/credentials/william-smith-bachelor-religious-arts.jpg',
        portrait: false,
      },
      {
        name: 'Master of Religious Arts in Christian Education — Jeanne M. Smith',
        detail: 'Jacksonville Theological Seminary · September 30, 2002',
        src: '/images/credentials/jeanne-smith-master-religious-arts.jpg',
        portrait: false,
      },
    ],
  },
  {
    title: 'Certificates of Ordination',
    intro: 'Ordination to the work of the Gospel Ministry by Church on the Rock International.',
    items: [
      {
        name: 'Certificate of Ordination — William Smith',
        detail: 'Church on the Rock International · 2005',
        src: '/images/credentials/william-smith-certificate-ordination.jpg',
        portrait: false,
      },
      {
        name: 'Certificate of Ordination — Jeanne Smith',
        detail: 'Church on the Rock International · 2005',
        src: '/images/credentials/jeanne-smith-certificate-ordination.jpg',
        portrait: false,
      },
    ],
  },
  {
    title: 'Recognition from Haiti',
    intro: 'Original Honour and Merit plaques presented by the staff of Church on the Rock, Port-au-Prince, Haiti. Names below reproduce the inscription on each plaque.',
    items: [
      {
        name: 'Honour and Merit — Mrs. Jeanne Williams',
        detail: 'Staff, Church on the Rock · Port-au-Prince, Haiti',
        src: '/images/credentials/haiti-jeanne-honour-merit.jpg',
        portrait: true,
      },
      {
        name: 'Honour and Merit — Smith Williams',
        detail: 'Staff, Church on the Rock · Port-au-Prince, Haiti',
        src: '/images/credentials/haiti-smitty-honour-merit.jpg',
        portrait: true,
      },
    ],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:catalystministriesfl@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        title="Contact Us"
        subtitle="Get Involved"
        description="Join us in making an eternal impact. Reach out to learn more about volunteering, partnerships, or booking our ministry."
      />

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {contactInfo.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-4">
                  <item.icon className="h-8 w-8 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-primary-700 hover:text-primary-900 transition-colors"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.details}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Whether you're interested in volunteering, booking our ministry, or learning more about our work, 
                we'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Volunteer - Prison Ministry">Volunteer - Prison Ministry</option>
                    <option value="Volunteer - Correspondence Team">Volunteer - Correspondence Team</option>
                    <option value="Volunteer - Worship Team">Volunteer - Worship Team</option>
                    <option value="Book A.S.K. Drama">Book A.S.K. Drama</option>
                    <option value="Book Worship Team">Book Worship Team</option>
                    <option value="Partnership/Support">Partnership/Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Volunteer Opportunities */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Get Involved</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6 py-4 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prison Ministry Team</h3>
                  <p className="text-gray-600 mb-3">
                    Join our traveling team for monthly prison visits. Share worship, testimonies, and the Gospel 
                    with incarcerated individuals.
                  </p>
                  <p className="text-sm font-semibold text-primary-700">Commitment: Monthly visits</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-6 py-4 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Correspondence Team</h3>
                  <p className="text-gray-600 mb-3">
                    Help send birthday and Christmas cards to nearly 3,000 inmates. Your simple gesture 
                    can save lives.
                  </p>
                  <p className="text-sm font-semibold text-primary-700">Commitment: Periodic card writing</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-6 py-4 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Worship Team</h3>
                  <p className="text-gray-600 mb-3">
                    Musicians and vocalists needed for prison ministry, missions, and community outreach.
                  </p>
                  <p className="text-sm font-semibold text-primary-700">Commitment: Varies by opportunity</p>
                </div>

                <div className="border-l-4 border-primary-600 pl-6 py-4 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Haiti Missions</h3>
                  <p className="text-gray-600 mb-3">
                    Join annual mission trips to support conferences, crusades, and hands-on projects in Haiti.
                  </p>
                  <p className="text-sm font-semibold text-primary-700">Commitment: Annual trip + support</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Have Questions?</h3>
                <p className="text-gray-700 mb-4">
                  We'd love to talk with you about how you can serve with Catalyst Ministries.
                </p>
                <a
                  href="tel:239-247-2330"
                  className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-900"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call us at 239-247-2330
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All certificates and recognition plaques are grouped here, not on the Prison Ministry page. */}
      <section id="ministry-credentials" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20" aria-labelledby="credentials-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <Award className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 id="credentials-title" className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Certificates, Credentials &amp; Recognition
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              A collection of the original documents recognizing the education, ordination,
              and ministry service of Pastors William (Smitty) and Jeanne Smith.
              Select any document to view it at full size.
            </p>
          </div>

          <div className="mt-12 space-y-14">
            {credentialGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-6 border-b border-primary-100 pb-5">
                  <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
                  <p className="mt-2 max-w-3xl text-gray-600">{group.intro}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {group.items.map((item) => (
                    <article key={item.src} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg">
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gray-100 p-4 sm:p-5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                        aria-label={`View original document: ${item.name}`}
                      >
                        <div className={`relative mx-auto w-full overflow-hidden rounded-xl border border-gray-200 bg-[#f9f8f4] shadow-inner ${item.portrait ? 'h-80 sm:h-96' : 'h-64 sm:h-80'}`}>
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-[1.025]"
                            sizes="(max-width: 767px) 100vw, 50vw"
                          />
                        </div>
                      </a>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <h4 className="text-lg font-bold leading-snug text-gray-900">{item.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</p>
                        <a
                          href={item.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border border-primary-200 bg-primary-50 px-4 py-2.5 text-sm font-semibold text-primary-800 transition-colors hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                        >
                          View Full Document
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Document names are transcribed from their original inscriptions; image files remain unaltered.
          </p>
        </div>
      </section>

      {/* 501(c)(3) Information */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
            <p className="text-lg text-gray-600 mb-2">
              Catalyst Ministries is a 501(c)(3) nonprofit organization.
            </p>
            <p className="text-gray-600">
              Your donations are tax-deductible and help us continue bringing hope to prisons, 
              supporting international missions, and spreading the Gospel through worship and productions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
