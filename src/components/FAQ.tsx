'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What makes TorBox stand out among torrenting tools?',
    answer: 'TorBox is more than just a traditional torrent hosting service; it’s a fully integrated download platform. By providing affordability, speed, and ease of use, it eliminates the need for manual configuration of VPNs, clients, and automation tools. The user interface is designed for quick access and control, backed by a dedicated community. Simply upload your torrent and let TorBox handle the rest, delivering files to any device. With continuous updates and integrations, TorBox serves as a complete torrent privacy tool for all your downloading needs.'
  },
  {
    question: 'Is there any catch to the free plan?',
    answer: 'No catch. The free plan is truly cost-free, with no hidden charges or payment information required. You can use it as long as you like, with a few restrictions compared to our premium plans. The free plan still provides robust features, making it ideal for exploring the platform. Our mission is to encourage the use of peer-to-peer networks and support torrent cloud storage technologies for everyone.'
  },
  {
    question: 'How does TorBox prioritize privacy and data security?',
    answer: 'At TorBox, we prioritize user privacy with a strict no-logs policy and strong encryption protocols. We don’t store IP addresses, download details, or any personal data, and all connections are securely routed through our servers using SSL and HTTPS. This ensures your torrenting activities remain completely anonymous, even from your ISP. Join our community to learn more about our privacy features, or visit our support resources for additional information on our torrent privacy tool.'
  },
  {
    question: 'Can TorBox be used for anonymous torrenting?',
    answer: 'Yes, TorBox is designed specifically for anonymous and private downloading. We don’t retain IP addresses, torrent metadata, or any other identifiers after you delete your download. The platform gives you complete control over your data, including the ability to erase your account entirely, leaving no trace behind. This makes TorBox the ideal choice for secure and private torrent cloud storage.'
  },
  {
    question: 'Is TorBox accessible on mobile and other devices?',
    answer: 'Yes, TorBox is built to be cross-device accessible. It works on any web browser, with a dedicated Android app available and an iOS app in development. We also offer WebDAV support for seamless file access across devices, making it easy to manage and retrieve your downloads from any location. The platform functions as an easy-to-use torrent platform for mobile users and desktop users alike.'
  },
  {
    question: 'Are frequently downloaded torrents cached for quicker access?',
    answer: 'Yes, popular torrents are cached in our system for near-instant availability. If a torrent is not yet cached, it will be added to our high-speed file access system upon your first download, allowing other users to benefit from rapid download speeds. This approach makes TorBox an efficient alternative to seedbox solutions for users seeking fast download platforms.'
  },
  {
    question: 'What advantages does TorBox have over traditional seedboxes?',
    answer: 'Unlike traditional seedboxes that require manual configuration and additional costs for add-ons like *Arr apps or media servers, TorBox is a pre-configured service offering optimized settings out-of-the-box. Our plans are competitively priced, with faster speeds and features designed to simplify the torrenting experience. Whether you are a beginner or a seasoned user, TorBox provides an alternative to seedbox services that delivers higher value and greater convenience.'
  }
];




interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="bg-[#0d0f13] rounded-lg border border-[#04bf8a]/10 transition-all duration-300 card-hover-glow overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-[#0d0f13]/80 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-xl font-inter">{question}</h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[#04bf8a] transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-4">
            <p className="text-gray-400 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 z-[-1}">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-inter text-center mb-12 glow-effect">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}