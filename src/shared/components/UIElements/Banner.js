// Banner.js
import React from 'react';

const Banner = ({ bannerUrl }) => {
  return (
    <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
      <img
        src={bannerUrl}
        alt="Banner"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Banner;
