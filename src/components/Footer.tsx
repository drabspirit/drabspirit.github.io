'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Logo = () => (
  <div className="flex items-center">
    <div className="w-12 h-12 -ml-2">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500">
        <g>
          <polygon points="749.99,749.99 749.99,1191.96 367.25,970.97 367.25,529.01" style={{fill: 'rgb(0, 68, 77)'}}/>
          <polygon points="1132.75,529.01 1132.75,970.97 749.99,1191.96 749.99,749.99 872.87,679.05 956.71,630.66" style={{fill: 'rgb(52, 186, 144)'}}/>
          <polygon points="1132.75,529.01 749.99,749.99 367.25,529.01 749.99,308.04" style={{fill: 'rgb(82, 161, 83)'}}/>
          <polygon points="1043.04,739.36 958.66,1057.08 952.4,851.84 839.71,915.39 872.87,679.05 956.71,630.66 931.81,799.21" style={{fill: 'rgb(255, 255, 255)'}}/>
        </g>
      </svg>
    </div>
    <span className="text-2xl font-share-tech">TORBOX</span>
  </div>
);

export function Footer() {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              The ultimate private, secure torrent downloader with advanced seedbox services.
            </p>
          </div>
          <div>
            <h3 className="font-share-tech mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition">Features</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              <li><Link href="https://torbox.app/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-share-tech mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="https://support.torbox.app/en/" className="text-gray-400 hover:text-white transition">Support Center</Link></li>
              <li><Link href="https://status.torbox.app" className="text-gray-400 hover:text-white transition">Status</Link></li>
              <li>
                <Link href="https://www.trustpilot.com/review/torbox.app" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                  Trustpilot <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-share-tech mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.postman.com/wamy-dev/torbox/collection/6km0yx3/search-api" className="text-gray-400 hover:text-white transition flex items-center gap-1">
                  API Documentation <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TorBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}