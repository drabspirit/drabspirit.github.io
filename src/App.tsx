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
    <div className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full tech-pattern opacity-20 pointer-events-none" />

      {/* Cursor Trail */}
      <CursorTrail />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative z-0">
          <Hero />
          {/* Insert other sections here, if needed */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
