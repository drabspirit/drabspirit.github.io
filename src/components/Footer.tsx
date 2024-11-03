'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Logo = () => (
  <Link href="https://torbox.app" passHref>
    <a rel="noopener noreferrer" className="flex items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" className="w-full h-full">
          <g>
            <polygon points="749.99,749.99 749.99,1191.96 367.25,970.97 367.25,529.01" style={{ fill: 'hsl(var(--foreground))' }} />
            <polygon points="1132.75,529.01 1132.75,970.97 749.99,1191.96 749.99,749.99 872.87,679.05 956.71,630.66" style={{ fill: 'hsl(var(--highlight))' }} />
            <polygon points="1132.75,529.01 749.99,749.99 367.25,529.01 749.99,308.04" style={{ fill: 'hsl(var(--muted))' }} />
            <polygon points="1043.04,739.36 958.66,1057.08 952.4,851.84 839.71,915.39 872.87,679.05 956.71,630.66 931.81,799.21" style={{ fill: 'hsl(var(--card-foreground))' }} />
          </g>
        </svg>
      </div>
      <span className="text-2xl font-inter text-[hsl(var(--background))]">TorBox</span>
    </a>
  </Link>
);

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--card))] border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-[-1}">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-[hsl(var(--background))]">
              The ultimate private, secure 1fichier alternative with advanced seedbox services.
            </p>
          </div>
          <div>
            <h3 className="font-inter mb-4 text-[hsl(var(--highlight))]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition">Features</Link></li>
              <li><Link href="#faq" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition">FAQ</Link></li>
              <li><Link href="https://torbox.app/pricing" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-inter mb-4 text-[hsl(var(--highlight))]">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="https://support.torbox.app/en/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition">Support Center</Link></li>
              <li><Link href="https://status.torbox.app" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition">Status</Link></li>
              <li>
                <Link href="https://www.trustpilot.com/review/torbox.app" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition flex items-center gap-1">
                  Trustpilot <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-inter mb-4 text-[hsl(var(--highlight))]">Developers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.postman.com/wamy-dev/torbox/collection/6km0yx3/search-api" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--ring))] transition flex items-center gap-1">
                  API Documentation <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[hsl(var(--border))] text-center text-[hsl(var(--muted-foreground))]">
          <p>© {new Date().getFullYear()} TorBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
