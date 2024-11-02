'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as Flags from 'country-flag-icons/react/3x2';

type CountryCode = keyof typeof Flags;

const reviews = [
  {
    text: "Oh how I recommend this. The support is great, the discord server is alive and everything is going on fine. Reliable service, lots of features.",
    author: "fffoo",
    location: "PL",
    date: "Oct 9, 2024"
  },
  {
    text: "Fast speeds, long retention. Great debrid service. The developer actually listens to the community. Great support. Hope they stay in business for long",
    author: "Jimmy McGill",
    location: "US",
    date: "Mar 26, 2024"
  },
  {
    text: "I have been using the Pro plan with Torbox for a few months. For someone not well-versed with torrenting, the process is straightforward for adding and downloading items.",
    author: "Customer",
    location: "US",
    date: "Jul 15, 2024"
  },
  {
    text: "Probably one of the most cost-effective solutions I've found for all of my seedbox needs. Excellent community, dev is friendly and straightforward.",
    author: "Kamal",
    location: "PK",
    date: "Mar 25, 2024"
  },
  {
    text: "Fast downloading and seeding with the best design out there very good and easy to use, the developer is active, with great support.",
    author: "ayghub",
    location: "MA",
    date: "Dec 1, 2023"
  },
  {
    text: "Fresh and convenient. The price is fantastic for the moment (as is the speed). Of course, there are some rough edges, as with a new product, but the service definitely has its own niche.",
    author: "Jiffy",
    location: "CH",
    date: "Apr 10, 2024"
  }
];

const CountryFlag = ({ countryCode }: { countryCode: string }) => {
  const Flag = Flags[countryCode as CountryCode];
  return Flag ? (
    <Flag className="w-4 h-4 rounded-sm shadow-sm" title={countryCode} />
  ) : (
    <span className="text-xs text-gray-500">{countryCode}</span>
  );
};

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 3) % reviews.length);
        setIsTransitioning(false);
      }, 300);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const displayedReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <section id="reviews" className="relative py-20 px-4 section-gradient z-[-1}">
      <div className="relative max-w-7xl mx-auto z-[-1}">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-inter glow-effect mb-4">
            Trusted by Users Worldwide
          </h2>
          <a 
            href="https://www.trustpilot.com/review/torbox.app"
            className="text-[#04bf8a] hover:text-[#04bf8a]/80 inline-flex items-center transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all reviews on Trustpilot
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          {displayedReviews.map((review, index) => (
            <div 
              key={`${review.author}-${index}`}
              className="bg-[#0d0f13] rounded-lg border border-[#04bf8a]/10 p-6 transition-all duration-300 card-hover-glow relative hover:shadow-[#04bf8a]/20 hover:shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-[#04bf8a] fill-[#04bf8a]"
                    style={{ filter: 'drop-shadow(0 0 2px rgba(4, 191, 138, 0.3))' }}
                  />
                ))}
              </div>
              <p className="text-gray-400 mb-4 line-clamp-4">
                {review.text}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div>
                  <p className="font-inter text-[#04bf8a]">{review.author}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <CountryFlag countryCode={review.location} />
                    <span className="text-sm text-gray-500">{review.location}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}