'use client';

import Link from 'next/link';
import { Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 pb-24">
      <div className="fixed inset-0 opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="glow-effect text-5xl sm:text-6xl md:text-7xl font-inter tracking-tight leading-tight mb-8 text-[hsl(var(--ring))]">
            High-Speed 1fichier Alternative in the Cloud with TorBox
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-2xl text-[hsl(var(--muted-foreground))] font-semibold">
            Discover the ultimate 1fichier alternative with TorBox’s secure and private debrid seedbox services.
            Sign up for unrestricted, high-speed access!
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {/* Primary Button */}
            <Link 
              href="https://torbox.app/"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 font-medium text-lg transition-all duration-300 ease-out text-[hsl(var(--card-foreground))] bg-[hsl(var(--highlight))] hover:bg-[hsl(var(--highlight))]/90 rounded-lg shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--highlight))]/0 via-[hsl(var(--highlight))]/30 to-[hsl(var(--highlight))]/0 translate-x-[-100%] animate-shimmer group-hover:animate-shimmer-fast" />
              <span className="relative flex items-center gap-2">
                Try TorBox Now <Zap className="w-6 h-6 animate-pulse" />
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="https://support.torbox.app/en/"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3 font-medium text-lg transition-all duration-300 ease-out text-[hsl(var(--foreground))] bg-[hsl(var(--border))] hover:bg-[hsl(var(--border))]/90 rounded-lg shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--border))]/0 via-[hsl(var(--border))]/30 to-[hsl(var(--border))]/0 translate-x-[-100%] animate-shimmer group-hover:animate-shimmer-fast" />
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
