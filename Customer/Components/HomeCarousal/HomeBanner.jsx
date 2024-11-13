import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BannerData } from './BannerData';

const HomeBanner = () => {
  // Create the carousel items outside of the JSX
  const items = BannerData.map((item) => (
    <a target='_self' href='/'>
    <img className='cursor-pointer' role='presentation' src={item.image} width="100%" alt={item.path} key={item.path}/></a>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default HomeBanner;
