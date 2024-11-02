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
    <section id="plans" className="py-24 px-4 z-[-1}">
      <div className="max-w-7xl mx-auto z-[-1}">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter glow-effect mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-lg">
            Select the perfect plan for your downloading needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 rounded-lg bg-[#0d0f13] border",
                plan.popular ? 'border-primary shadow-primary/20 shadow-lg' : 'border-gray-800'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-inter mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">
                  ${plan.price}<span className="text-lg text-gray-400">/mo</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-500 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={cn(
                  "block w-full py-3 px-6 rounded-lg text-center transition-all text-lg font-medium",
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
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