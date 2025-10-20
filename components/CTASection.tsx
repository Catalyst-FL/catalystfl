import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  variant = 'primary',
}: CTASectionProps) {
  const bgColor = variant === 'primary' ? 'bg-gradient-to-r from-primary-600 to-primary-700' : 'bg-gray-100';
  const textColor = variant === 'primary' ? 'text-white' : 'text-gray-900';
  const descColor = variant === 'primary' ? 'text-primary-50' : 'text-gray-600';

  return (
    <div className={`${bgColor} ${textColor}`}>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-xl ${descColor}`}>
            {description}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className={`inline-flex items-center rounded-lg ${
                variant === 'primary' 
                  ? 'bg-white text-primary-700 hover:bg-primary-50' 
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              } px-6 py-3 text-base font-medium shadow-sm transition-colors`}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className={`inline-flex items-center rounded-lg ${
                  variant === 'primary'
                    ? 'bg-primary-500 text-white hover:bg-primary-400'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                } px-6 py-3 text-base font-medium shadow-sm transition-colors`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
