'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Heart, Globe, Calendar, MapPin, Mail } from 'lucide-react';

const metrics = [
  {
    icon: Calendar,
    value: 23,
    suffix: '+',
    label: 'Years of Ministry',
    description: 'Serving since 2003',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MapPin,
    value: 23,
    suffix: '',
    label: 'Years of Prison Ministry',
    description: 'At least once monthly since 2003',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    value: 1500,
    suffix: '+',
    label: 'Lives Touched',
    description: 'Inmates and families reached',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Mail,
    value: 3000,
    suffix: '+',
    label: 'Cards Sent Yearly',
    description: 'Through correspondence ministry',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Globe,
    value: 45000,
    suffix: '+',
    label: 'Haiti Crusade Attendees',
    description: 'International impact',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    value: 20,
    suffix: '+',
    label: 'Years in Haiti',
    description: 'Consistent partnership',
    color: 'from-red-500 to-red-600',
  },
];

export default function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Our Impact By The Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measurable transformation through faithful service and God's grace
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-50 rounded-full border border-primary-200">
            <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-primary-900">
              501(c)(3) Registered Nonprofit • 100% Donor Transparency
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric, index, isVisible }: { metric: typeof metrics[0]; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const { icon: Icon, value, suffix, label, description, color } = metric;

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      className="relative group card-hover"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      {/* Card */}
      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full blur-2xl`} />
        
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>

        {/* Value */}
        <div className="relative">
          <div className="flex items-baseline mb-2">
            <span className="text-4xl font-extrabold text-gray-900">
              {count.toLocaleString()}
            </span>
            <span className="text-2xl font-bold text-gray-600 ml-1">{suffix}</span>
          </div>
          
          {/* Label */}
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {label}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-20 h-20 transform translate-x-8 translate-y-8">
          <Icon className="w-full h-full text-gray-100 opacity-50" />
        </div>
      </div>
    </div>
  );
}
