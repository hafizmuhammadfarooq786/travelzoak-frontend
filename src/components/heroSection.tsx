'use client';
import { Banner } from '@/constants/appConstants';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  name: string;
  count: number;
  imageSrc: string;
  slug: string;
}

const HeroSection: React.FC = () => {
  return (
    <div className="hero_section">
      <img
        src={Banner.heroImage}
        alt="hero banner"
        height="100vh"
        width="100%"
      />
      <div className="container">
        <div className="flex flex-col flex-wrap space-y-6">
          <h1>Enjoy Your</h1>
          <h1>Trip With Us!</h1>
        </div>
        <div className="flex bg-white relative rounded-full w-[620px] h-[60px] mt-16 px-4">
          <input
            type="text"
            className="w-full rounded-full outline-none text-xl px-4"
            placeholder="I want to visit..."
          />

          <div className="flex flex-col justify-center items-center h-full cursor-pointer">
            <img
              src="/send.svg"
              alt="send icon"
              height={48}
              width={48}
              style={{ height: 48, width: 48, margin: 0 }}
            />
          </div>
        </div>

        <div
          className="flex justify-center items-center space-x-8 absolute left-0 w-full"
          style={{ bottom: '-12.5%' }}
        >
          <div className="flex flex-wrap justify-between items-center space-x-8">
            {Banner.cards.map((item: CardProps, index: number) => (
              <div
                key={index}
                className="h-[240px] w-[240px] relative cursor-pointer"
                // onClick={() => console.log(`to=${item.slug}`)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  height={240}
                  width={240}
                  className="rounded-lg"
                />

                <div className="absolute top-0 h-[240px] w-full">
                  <div
                    className="relative bg-[#00000030] h-[160px] w-full rounded-lg"
                    style={{ bottom: '-3.75rem' }}
                  >
                    <div className="absolute top-24 left-4 h-full w-full">
                      <h3 className="text-white text-xl font-bold">
                        {item.name}
                      </h3>
                      <p className="text-white text-md" style={{ margin: 0 }}>
                        {item.count > 1
                          ? `${item.count} Tours`
                          : `${item.count} Tour`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
