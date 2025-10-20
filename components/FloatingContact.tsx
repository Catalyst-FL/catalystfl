'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:239-247-2330',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:catalystministriesfl@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'Contact Form',
      href: '/contact',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Contact buttons */}
      <div className="flex flex-col-reverse gap-3 mb-3">
        {contactMethods.map((method, index) => (
          <Link
            key={method.label}
            href={method.href}
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
            <method.icon className="h-5 w-5" />
            <span className="font-semibold text-sm whitespace-nowrap hidden sm:inline">
              {method.label}
            </span>
          </Link>
        ))}
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
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20" />
        )}
      </button>
    </div>
  );
}
