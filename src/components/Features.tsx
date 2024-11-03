import React from 'react';
import { Zap, Shield, Globe, PlayCircle, Server, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast 1fichier & Torrent Downloads',
    description: "Experience unparalleled download speeds with TorBox’s optimized seedbox and instant caching, ideal for high-speed 1fichier and torrent downloads."
  },
  {
    icon: Shield,
    title: 'Privacy-First, No-Logs Policy',
    description: 'Keep your data private with TorBox’s advanced encryption and strict no-logs policy, ensuring secure downloads from 1fichier and other sources.'
  },
  {
    icon: Globe,
    title: 'Access on Any Device',
    description: 'Easily manage torrents and 1fichier downloads from any device, or stream files directly with compatible apps like VLC and Stremio.'
  },
  {
    icon: Lock,
    title: 'Enterprise-Level Security for Peace of Mind',
    description: 'Protect your data with enterprise-grade encryption and security protocols, keeping your downloads and personal information safe at all times.'
  },
  {
    icon: Server,
    title: 'Instant Caching for Fast 1fichier Access',
    description: 'Popular torrents and 1fichier files are cached for immediate availability, delivering faster download speeds and reliable performance.'
  },
  {
    icon: PlayCircle,
    title: 'Direct Streaming without Delays',
    description: 'Stream media files directly on TorBox without waiting for downloads to finish, giving you instant access to your favorite content.'
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-[hsl(var(--card))] z-[-1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[-1]">
        <div className="text-center">
          <h2 className="text-3xl font-inter text-[hsl(var(--background))] glow-effect mb-4">
            Why Choose TorBox?
          </h2>
          <p className="text-xl text-[hsl(var(--highlight))]">
            Unlock Fast, Private, and Secure Torrenting with Our Seedbox Services
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[hsl(var(--background))] rounded-lg border border-[hsl(var(--ring))]/10 p-6 transition-all duration-300 card-hover-glow relative hover:shadow-[hsl(var(--ring))]/20 hover:shadow-lg"
            >
              <feature.icon 
                className="h-12 w-12 text-[hsl(var(--ring))] mb-4" 
                style={{ filter: 'drop-shadow(0 0 8px hsla(var(--ring-rgba), 0.3))' }}
              />
              <h3 className="text-xl font-inter text-[hsl(var(--foreground))] mb-2">
                {feature.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

