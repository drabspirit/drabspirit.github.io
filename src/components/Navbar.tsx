'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
      <span className="text-3xl sm:text-4xl md:text-5xl font-inter ml-4 text-[hsl(var(--background))]">TorBox</span>
    </a>
  </Link>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[hsl(var(--card))]/90 backdrop-blur-md border-b border-[hsl(var(--border))] z-50" aria-expanded={isMenuOpen}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-1 flex justify-start">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] transition">Features</Link>
            <Link href="#faq" className="text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] transition">FAQ</Link>
            <Link href="#pricing" className="text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] transition">Pricing</Link>
            <Link
              href="https://torbox.app/login"
              className="bg-[hsl(var(--highlight))] hover:bg-[hsl(var(--highlight))]/90 text-[hsl(var(--card-ring))] px-6 py-3 rounded-lg transition font-medium text-lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(var(--card))] border-b border-[hsl(var(--border))]">
            <Link href="#features" className="block px-3 py-2 text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] hover:bg-[hsl(var(--ring))] rounded-lg transition">
              Features
            </Link>
            <Link href="#faq" className="block px-3 py-2 text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] hover:bg-[hsl(var(--ring))] rounded-lg transition">
              FAQ
            </Link>
            <Link href="https://torbox.app/pricing" className="block px-3 py-2 text-[hsl(var(--background))] hover:text-[hsl(var(--ring))] hover:bg-[hsl(var(--ring))] rounded-lg transition" rel="noopener noreferrer" target="_blank">
              Pricing
            </Link>
            <Link
              href="https://torbox.app/login"
              className="block px-3 py-2 bg-[hsl(var(--highlight))] hover:bg-[hsl(var(--ring))]/90 text-[hsl(var(--background))] rounded-lg transition font-medium"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
