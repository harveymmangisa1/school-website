import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fadeInSlide">
            {subtitle}
          </p>
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-4 animate-fadeInSlideUp">
              {primaryButtonText && primaryButtonLink && (
                <Link to={primaryButtonLink}>
                  <Button variant="secondary" size="lg">
                    {primaryButtonText}
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </Link>
              )}
              
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink}>
                  <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;