import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Free 1fichier Download & Alternatives - TorBox',
  description: 'Experience high-speed 1fichier downloads and alternatives with TorBox, offering secure torrent downloads and advanced debrid seedbox services.',
  keywords: [
    '1fichier', '1fichier com', '1fichier dl', 'free 1fichier download', '1fichier alternative', 
    '1fichier dl free', '1fichier alternatives for download', 'TorBox downloader'
  ],
  metadataBase: new URL('https://torbox.app')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" title="TorBox Icon" />
      </head>
      <body className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
