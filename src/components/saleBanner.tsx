'use client';
import { appUrl } from '@/constants/UrlConstants';
import React from 'react';

const SalesBanner: React.FC = () => {
  return (
    <div className="sale-banner space-x-4 z-10">
      <span>🎉</span>
      <p>
        Discover the most Affordable and Extraordinary Tour Packages.
        <span
          className="ml-2 cursor-pointer underline"
          onClick={() => window.open(`${appUrl}/tours`, '_blank')}
        >
          Book now!
        </span>
      </p>
      <span>🎉</span>
    </div>
  );
};

export default SalesBanner;
