'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/campus-bg.jpg"
            alt="Campus background"
            fill
            priority
            className="object-cover object-center"
            quality={100}
            onLoadingComplete={() => setIsLoaded(true)}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-8 transition-all duration-1000 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/roamio-logo-white.svg"
              alt="Roamio"
              width={180}
              height={48}
              className="mx-auto"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Navigate Your Campus
            <span className="block text-primary mt-2">With Confidence</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Indoor maps, real-time directions, one-tap SOS, and schedule sync.
            Making campus life simpler, safer, and more connected.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="https://sheetdb.io/api/v1/ozh2aa4b5rh9f"
              className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              aria-label="Join Waitlist"
            >
              Join Waitlist
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              aria-label="Learn More"
            >
              Learn More
            </a>
          </div>

          {/* App Store Badges */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="#"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="Download on App Store"
            >
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on App Store"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <a
              href="#"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/images/google-play-badge.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 