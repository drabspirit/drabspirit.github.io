'use client';

import Link from 'next/link';
import { Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 pb-24">
      <div className="fixed inset-0 tech-pattern opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="animated-title text-4xl sm:text-5xl md:text-6xl font-inter tracking-tight leading-tight mb-8">
            <style jsx>{`
              .animated-title {
                color: #04bf8a;
                text-shadow: 0 0 20px rgba(4, 191, 138, 0.3);
                animation: titleGlow 2s ease-in-out infinite;
                transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000;
                will-change: text-shadow;
              }

              @keyframes titleGlow {
                0%, 100% {
                  text-shadow: 
                    0 0 20px rgba(4, 191, 138, 0.3),
                    0 0 40px rgba(4, 191, 138, 0.2),
                    0 0 60px rgba(4, 191, 138, 0.1);
                }
                50% {
                  text-shadow: 
                    0 0 30px rgba(4, 191, 138, 0.5),
                    0 0 60px rgba(4, 191, 138, 0.3),
                    0 0 80px rgba(4, 191, 138, 0.2);
                }
              }
            `}</style>
            High Speed Torrent Downloader through the Cloud with TorBox
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-400">
            The ultimate private, secure torrent downloader with advanced debrid seedbox services.
            Sign up now for fast, unrestricted access!
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link 
              href="https://torbox.app/"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 font-medium text-lg transition-all duration-300 ease-out hover:text-white bg-[#04bf8a] hover:bg-[#04bf8a]/90 text-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(4,191,138,0.2)] hover:shadow-[0_0_20px_rgba(4,191,138,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#04bf8a]/0 via-[#04d698]/30 to-[#04bf8a]/0 translate-x-[-100%] animate-shimmer group-hover:animate-shimmer-fast" />
              <span className="relative flex items-center gap-2">
                Try Now! <Zap className="w-6 h-6 animate-pulse" />
              </span>
            </Link>
            <Link
              href="https://support.torbox.app/en/"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 font-medium text-lg transition-all duration-300 ease-out bg-gray-800 hover:bg-gray-700 text-white rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(4,191,138,0.2)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700/0 via-gray-600/30 to-gray-700/0 translate-x-[-100%] animate-shimmer group-hover:animate-shimmer-fast" />
              <span className="relative flex items-center gap-2">
                Learn More <Shield className="w-6 h-6" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
