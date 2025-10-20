import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  icon?: ReactNode;
}

export default function PageHero({ title, subtitle, description, backgroundImage, icon }: PageHeroProps) {
  return (
    <div 
      className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(74, 168, 176, 0.92), rgba(40, 88, 93, 0.95)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Geometric Patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary-300/20 rounded-lg rotate-12 hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-primary-200/20 rounded-full hidden lg:block" />
        
        {/* Dot Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl text-center">
        {/* Icon */}
        {icon && (
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-white">
              {icon}
            </div>
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold uppercase tracking-wide text-white">
              {subtitle}
            </span>
          </div>
        )}

        {/* Title with enhanced styling */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block drop-shadow-lg">{title}</span>
        </h1>

        {/* Description */}
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-primary-50 leading-relaxed drop-shadow-md">
            {description}
          </p>
        )}

        {/* Decorative Line */}
        <div className="mx-auto mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
      </div>
    </div>
  );
}
