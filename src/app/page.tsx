'use client';

import WebHeader from '@/components/header';
import HeroSection from '@/components/heroSection';
import SalesBanner from '@/components/saleBanner';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <WebHeader />
      <HeroSection />
      {/* Content Area */}
      <div className="flex flex-col justify-center items-center my-24 mx-auto w-[90%]">
        <SalesBanner />
      </div>
    </div>
  );
}
