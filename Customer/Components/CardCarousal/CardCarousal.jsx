import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCards from '../HomeCards/HomeCards';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const CardCarousal = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Create a reference for the AliceCarousel instance
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  // Sync the activeIndex with AliceCarousel
  const syncActiveIndex = ({ items }) => setActiveIndex(items);

  // Slide to the previous item
  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Use AliceCarousel's slidePrev method
    }
  };

  // Slide to the next item
  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Use AliceCarousel's slideNext method
    }
  };

  const items = data.map((product) => (
    <HomeCards key={product.id} product={product} />
  ));

  return (
    <div className='flex flex-col justify-center px-4 lg:px-8'>
         <h2>{sectionName}</h2>
      <div className="relative p-5 border"> 
        <AliceCarousel
          ref={carouselRef} // Attach the ref to AliceCarousel
          mouseTracking
          disableDotsControls
          items={items}
          responsive={responsive}
          disableButtonsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
         
        />
        <div>
          {/* Previous Button */}
         {activeIndex !== items.length - 1 && <Button
            variant="contained"
            className="z-50"
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '2rem',
              transform: 'translateX(50%) rotate(180deg)',
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon />
          </Button>
}
          {/* Next Button */}
          {activeIndex !== 0 &&<Button
            variant="contained"
            className="z-50"
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '-2rem',
              transform: 'translateX(50%)',
            }}
            aria-label="prev"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon />
          </Button>
}
        </div>
      </div>
    </div>
  );
};

export default CardCarousal;
