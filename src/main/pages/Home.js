import React from 'react'

import Banner from '../../shared/components/UIElements/Banner'; 
import ServicesList from '../components/ServicesList';
import DestinationsList from '../../destinations/components/DestinationsList';
import './Home.css';
import destinationImage from '../../destinations/media/destination-400x400.webp';

const SERVICES = [
  {
    id: 'u1',
    name: '700+  Destinaions',
    image:
      'https://max-themes.net/demos/traveltour/demo2/upload/tvicon1.1.png',
      description: 'Our expert team handpicked all destinations in this site',
    className : ''
  },
  {
    id: 'u2',
    name: 'BEST PRICE GURANTEE',
    image:
      'https://max-themes.net/demos/traveltour/demo2/upload/tvicon2.1.png',
      description: 'Price match within 48 Hours of order confirmation',
    className : ''
  },
  {
    id: 'u3',
    name: 'TOP NOTCH SUPPORT',
    image:
      'https://max-themes.net/demos/traveltour/demo2/upload/tvicon3.png',
    description: 'We are here to help, before, during, and even after your trip.',
    className : ''
  }
];

const DESTINATIONS = [
  {
    id: 'u1',
    name: '700+  Destinaions',
    image:
    destinationImage,
      description: 'Our expert team handpicked all destinations in this site',
    className : ''
  },
  {
    id: 'u2',
    name: 'BEST PRICE GURANTEE',
    image:
    destinationImage,
      description: 'Price match within 48 Hours of order confirmation',
    className : ''
  },
  {
    id: 'u3',
    name: 'TOP NOTCH SUPPORT',
    image:
    destinationImage,
    description: 'We are here to help, before, during, and even after your trip.',
    className : ''
  }
];

export default function Home() {

  const bannerUrl = 'https://max-themes.net/demos/traveltour/demo2/upload/bgtravel.jpg';
  return (
    <div>
      {/* Use the Banner component and pass the banner URL as a prop */}
      <div className='banner-content'>
        <h1 className='fs-3 color-white fw-8'>Find Next Place to Visit</h1>
        <Banner bannerUrl={bannerUrl} />
        <span className='fs-1'>Discover Amazing Deals</span>
      </div>
      
      <ServicesList items={SERVICES} />
      <h3 className='text-center fs-1 fw-7'>Popular Destinaions</h3>
      <DestinationsList items={DESTINATIONS} />
    </div>
  )
}
