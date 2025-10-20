interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, description, backgroundImage }: PageHeroProps) {
  return (
    <div 
      className="relative bg-gradient-to-r from-primary-600 to-primary-800 py-24 px-4 sm:px-6 lg:px-8"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(74, 168, 176, 0.85), rgba(40, 88, 93, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      <div className="mx-auto max-w-7xl text-center">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-100 mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-xl text-primary-50">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
