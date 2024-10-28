// src/App.tsx

import React from 'react';
import './styles/globals.css';
import './styles/index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';

interface AppProps {
  pageProps?: any; // You can define a more specific type if needed
}

const App: React.FC<AppProps> = ({ pageProps }) => {
  return (
    <div className="relative min-h-screen bg-[#12141b] text-gray-100 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full tech-pattern opacity-20 pointer-events-none" />
      //<CursorTrail />
      <div className="relative z-20">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Reviews />
          <FAQ />
          {/* You can render components conditionally based on pageProps if needed */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
