import React from 'react';
import { Zap, Shield, Globe, PlayCircle, Server, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast Downloads',
    description: "Achieve high-speed torrent downloads through TorBox's optimized seedbox technology."
  },
  {
    icon: Shield,
    title: 'Enhanced Privacy',
    description: 'Your data remains secure with encrypted connections and a strict no-logs policy.'
  },
  {
    icon: Globe,
    title: 'Stream Anywhere',
    description: 'Access and manage torrents from any device, or stream files directly using apps like VLC or Stremio.'
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Enterprise-grade encryption and security measures to protect your privacy.'
  },
  {
    icon: Server,
    title: 'Instant Caching',
    description: 'Popular torrents are cached for immediate availability and lightning-fast access.'
  },
  {
    icon: PlayCircle,
    title: 'Direct Streaming',
    description: 'Stream your media directly without waiting for downloads to complete.'
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-gray-800/50 z-[-1}">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[-1}">
        <div className="text-center">
          <h2 className="text-3xl font-inter glow-effect mb-4">Why Choose TorBox?</h2>
          <p className="text-xl text-gray-400">
            Unlock Fast, Private, and Secure Torrenting with Our Seedbox Services
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0d0f13] rounded-lg border border-primary/10 p-6 transition-all duration-300 card-hover-glow relative hover:shadow-primary/20 hover:shadow-lg"
            >
              <feature.icon 
                className="h-12 w-12 text-primary mb-4" 
                style={{ filter: 'drop-shadow(0 0 8px rgba(4, 191, 138, 0.3))' }}
              />
              <h3 className="text-xl font-inter mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}