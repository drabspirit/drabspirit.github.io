'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'FREE',
    price: '0',
    description: 'For trying out TorBox',
    features: [
      { text: '1 Concurrent Slot', included: true },
      { text: '24 Hour Cool Down', included: true },
      { text: 'Ten Downloads Per Month', included: true },
      { text: '10GB Max Download Size', included: true },
      { text: '250Mbps Download Speed', included: true },
      { text: 'Reduced Traffic Priority', included: true },
      { text: 'Torrent Seeding', included: false },
      { text: 'Debrid Downloads', included: false },
      { text: 'Usenet Downloads', included: false }
    ],
    cta: 'Try Now',
    ctaLink: 'https://torbox.app/login',
    popular: false
  },
  {
    name: 'ESSENTIAL',
    price: '3',
    description: 'Best for streaming and light usage',
    features: [
      { text: '3 Concurrent Slots (Upgradable)', included: true },
      { text: 'Unlimited Torrents', included: true },
      { text: 'Unlimited Debrid Downloads', included: true },
      { text: '200GB Max Download Size', included: true },
      { text: '1Gbps Download Speed', included: true },
      { text: '24 Hour Seeding Time', included: true },
      { text: 'Unlimited Seeding Ratio', included: true },
      { text: 'Usenet Downloads', included: false }
    ],
    cta: 'Get Started',
    ctaLink: 'https://torbox.app/login',
    popular: true
  },
  {
    name: 'STANDARD',
    price: '5',
    description: 'Best for private torrents',
    features: [
      { text: '5 Concurrent Slots (Upgradable)', included: true },
      { text: 'Unlimited Torrents', included: true },
      { text: 'Unlimited Debrid Downloads', included: true },
      { text: '200GB Max Download Size', included: true },
      { text: '1Gbps Download Speed', included: true },
      { text: '14 Day Seeding Time', included: true },
      { text: 'Unlimited Seeding Ratio', included: true },
      { text: 'Usenet Downloads', included: false }
    ],
    cta: 'Get Started',
    ctaLink: 'https://torbox.app/login',
    popular: false
  },
  {
    name: 'PRO',
    price: '10',
    description: 'Best for power users',
    features: [
      { text: '10 Concurrent Slots (Upgradable)', included: true },
      { text: 'Unlimited Torrents', included: true },
      { text: 'Unlimited Debrid Downloads', included: true },
      { text: 'Unlimited Usenet Downloads', included: true },
      { text: '500GB Max Download Size', included: true },
      { text: '80Gbps Download Speed', included: true },
      { text: '30 Day Seeding Time', included: true },
      { text: 'Unlimited Seeding Ratio', included: true },
      { text: 'Unlimited RSS Feeds', included: true }
    ],
    cta: 'Go Pro',
    ctaLink: 'https://torbox.app/login',
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="plans" className="py-24 px-4 bg-[hsl(var(--background))] z-[-1}">
      <div className="max-w-7xl mx-auto z-[-1}">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter text-[hsl(var(--foreground))] glow-effect mb-4">
            Choose Your Plan
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg">
            Select the perfect plan for your downloading needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 rounded-lg bg-[hsl(var(--card))] border shadow-lg transition-all duration-300 transform hover:scale-105",
                plan.popular ? 'border-[hsl(var(--highlight))] shadow-[hsl(var(--highlight))]/20' : 'border-[hsl(var(--border))]'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--highlight))] text-[hsl(var(--card-foreground))] px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-inter text-[hsl(var(--highlight))] mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[hsl(var(--background))] mb-2">
                  ${plan.price}<span className="text-lg text-[hsl(var(--ring))]">/mo</span>
                </div>
                <p className="text-[hsl(var(--muted-foreground))]">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-[hsl(var(--highlight))] shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-[hsl(var(--background))]' : 'text-[hsl(var(--muted-foreground))] line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={cn(
                  "block w-full py-3 px-6 rounded-lg text-center transition-all text-lg font-medium shadow-md",
                  plan.popular
                    ? 'bg-[hsl(var(--highlight))] hover:bg-[hsl(var(--highlight))]/90 text-[hsl(var(--card-foreground))]'
                    : 'bg-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]'
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
