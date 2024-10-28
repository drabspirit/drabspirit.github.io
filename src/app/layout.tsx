import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'TorBox - High-Speed Torrent Downloader',
  description: 'The ultimate private, secure torrent downloader with advanced debrid seedbox services.',
  keywords: ['torrent downloader', 'seedbox', 'debrid', 'torrent client', 'cloud torrent'],
  metadataBase: new URL('https://torbox.app'),
  openGraph: {
    title: 'TorBox - High-Speed Torrent Downloader',
    description: 'Fast, secure, and private torrent downloading with advanced seedbox services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://torbox.app',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[#12141b] text-gray-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
