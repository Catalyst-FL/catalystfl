'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Michael R.',
    role: 'Former Inmate',
    location: 'Florida State Prison',
    image: '/images/inmate-praying.png',
    quote: 'Catalyst Ministries showed me that I wasn\'t forgotten. Through their weekly visits, correspondence, and genuine love, I encountered Jesus Christ. Today, I\'m free—not just from prison, but from the chains that bound my soul.',
    impact: 'Now serving as a volunteer prison minister',
  },
  {
    id: 2,
    name: 'Pastor Jean',
    role: 'Haiti Partnership',
    location: 'Port-au-Prince, Haiti',
    quote: 'For over 20 years, Catalyst has been faithful partners in ministry. Their consistent support of our orphanage, leadership conferences, and crusades has transformed thousands of lives. They don\'t just visit—they become family.',
    impact: '1,500 pastors trained annually',
  },
  {
    id: 3,
    name: 'Sarah T.',
    role: 'Volunteer Team Member',
    location: 'Naples, Florida',
    quote: 'Joining the Catalyst team changed my life. Serving breakfast to the homeless every Saturday, witnessing transformations in prison, and being part of God\'s work—it\'s humbling and empowering. This ministry is the real deal.',
    impact: 'Active volunteer for 5 years',
  },
  {
    id: 4,
    name: 'David K.',
    role: 'Church Partner',
    location: 'South Carolina',
    quote: 'When Catalyst brought the A.S.K. drama to our church, it wasn\'t just a performance—it was a powerful encounter with the Gospel. Several people gave their lives to Christ that night. Their ministry has eternal impact.',
    impact: '47 salvations at one event',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16 sm:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Stories of Transformation
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Real lives changed by God's grace through faithful ministry
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto shadow-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary-700 mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-2 p-8 md:p-12">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" />
                  <blockquote className="relative text-lg text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Impact Badge */}
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-semibold text-green-900">
                    {testimonial.impact}
                  </span>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={prev}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === current
                            ? 'bg-primary-600 w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
                    aria-label="Next testimonial"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-100 mb-4">
            Want to share your story or learn how you can be part of the transformation?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
