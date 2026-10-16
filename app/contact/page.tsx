'use client';

import PageHero from '@/components/PageHero';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
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
