// src/App.tsx

import React from 'react';
import './styles/globals.css';
import './styles/index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';

interface AppProps {
  pageProps?: any;
}

const App: React.FC<AppProps> = ({ pageProps }) => {
  return (
    <div className="relative min-h-screen bg-[#12141b] text-gray-100 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full tech-pattern opacity-20 pointer-events-none" />
      //<CursorTrail />
      <div className="relative z-[100]">
        <Navbar />
        <main className="relative z-[0]">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
