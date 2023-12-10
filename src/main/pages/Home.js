import React from 'react'

import Banner from '../../shared/components/UIElements/Banner'; 
import ServicesList from '../components/ServicesList';
import './Home.css';
import Card from '../../shared/components/UIElements/Card';

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

export default function Home() {

  const bannerUrl = 'https://max-themes.net/demos/traveltour/demo2/upload/bgtravel.jpg';
  return (
    <div>
      {/* Use the Banner component and pass the banner URL as a prop */}
      <Banner bannerUrl={bannerUrl} />
      <ServicesList items={SERVICES} />
      <h3 className='text-center fs-28 fw-7'>Popular Destinaions</h3>
    </div>
  )
}
