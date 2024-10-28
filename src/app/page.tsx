import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Reviews } from '@/components/Reviews';
import { CursorTrail } from '@/components/CursorTrail';

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 tech-pattern opacity-20" />
        <CursorTrail />
        <div className="relative z-10">
          <Hero />
          <Features />
          <Pricing />
          <FAQ />
          <Reviews />
        </div>
      </div>
    </>
  );
}