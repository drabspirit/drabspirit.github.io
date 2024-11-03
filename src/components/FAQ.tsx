'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Why choose TorBox for 1fichier downloads?',
    answer: 'TorBox provides an efficient solution for 1fichier downloads, offering seamless integration with high-speed torrenting and debrid services. Unlike other platforms, TorBox eliminates the need for manual VPN or client configurations, allowing users to download files from 1fichier and other sources easily. Our interface is designed for quick control, backed by a dedicated community. Simply upload your torrent, and TorBox will manage the rest, making it ideal for users seeking fast and private downloads.'
  },
  {
    question: 'Does the free plan have any limitations?',
    answer: 'TorBox’s free plan is completely cost-free and does not require any payment information. It includes powerful features for secure 1fichier downloads and alternative services, though premium plans provide additional functionality. The free plan is perfect for users exploring torrent cloud storage and debrid services without any hidden fees, making TorBox accessible to everyone.'
  },
  {
    question: 'How does TorBox protect my privacy with 1fichier and debrid downloads?',
    answer: 'At TorBox, user privacy is paramount. We implement a strict no-logs policy and strong encryption to protect your data. With TorBox, no IP addresses, download logs, or personal information are stored, and all traffic is encrypted through SSL. This keeps your activity with 1fichier, torrents, and other downloads anonymous, even from your ISP. Visit our community forums for additional information on our privacy protocols.'
  },
  {
    question: 'Can TorBox be used for anonymous torrenting and 1fichier downloads?',
    answer: 'Absolutely. TorBox is designed to support anonymous downloads, including those from 1fichier and similar services. We do not retain IP addresses, metadata, or other identifiers once your downloads are deleted. Additionally, users can delete their account and all associated data, ensuring total privacy. TorBox provides secure and anonymous cloud storage for users who value privacy in torrenting.'
  },
  {
    question: 'Is TorBox compatible with mobile devices?',
    answer: 'Yes, TorBox is optimized for cross-device use. You can access TorBox from any browser, with a dedicated Android app available and an iOS version in development. WebDAV support allows you to access your files seamlessly across platforms, making it a versatile option for users seeking mobile 1fichier and torrent download solutions.'
  },
  {
    question: 'Are frequently downloaded torrents cached for faster access on TorBox?',
    answer: 'Yes, TorBox caches popular files for rapid download speeds. If a 1fichier or other torrent file is not yet cached, it will be added upon first download, benefiting other users with near-instant access. This caching system makes TorBox an efficient alternative to traditional seedbox and debrid solutions, ensuring high-speed access to frequently downloaded content.'
  },
  {
    question: 'What makes TorBox a better choice than traditional seedboxes?',
    answer: 'Unlike traditional seedboxes that require setup and extra costs for tools like *Arr apps or media servers, TorBox is a pre-configured platform with optimized settings. Our competitively priced plans provide faster speeds and simplified torrenting, making it easy for both new and experienced users. TorBox offers more value and convenience compared to typical seedbox services, particularly for 1fichier and debrid download needs.'
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
    <div className="bg-[hsl(var(--card))] rounded-lg border border-[hsl(var(--ring))]/20 transition-all duration-300 card-hover-glow overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-[hsl(var(--card))]/80 transition-colors focus:outline-none focus-visible:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg sm:text-xl font-inter text-[hsl(var(--highlight))]">{question}</h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[hsl(var(--highlight))] transition-transform duration-300",
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
            <p className="text-[hsl(var(--background))]/90 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-[hsl(var(--background))]">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-inter text-center mb-12 glow-effect text-[hsl(var(--foreground))]">
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
