'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactMethods = [
    {
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Donate',
      href: 'https://www.powr.io/checkout_screen?unique_label=3aa1bc03_1745869827',
      color: 'from-emerald-500 to-emerald-600',
      external: true,
    },
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:239-247-2330',
      color: 'from-green-500 to-green-600',
      external: false,
    },
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:catalystministriesfl@gmail.com',
      color: 'from-blue-500 to-blue-600',
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'Contact Form',
      href: '/contact',
      color: 'from-purple-500 to-purple-600',
      external: false,
    },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Contact buttons */}
      <div className="flex flex-col-reverse gap-3 mb-3">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <Link
              key={method.label}
              href={method.href}
              {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r ${method.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                isOpen 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8 pointer-events-none'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
              }}
              onClick={() => setIsOpen(false)}
            >
              <Icon />
              <span className="font-semibold text-sm whitespace-nowrap hidden sm:inline">
                {method.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle contact options"
      >
        {isOpen ? (
          <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
}
