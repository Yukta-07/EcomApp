// import React, { useState, useEffect } from "react";
// import './StackedCarousel.css'; // We'll write some custom CSS for the carousel

// const StackedCarousal = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // This will simulate the carousel transition by updating the index
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Transition every 3 seconds (adjustable)
    
//     return () => clearInterval(interval); // Cleanup the interval when the component unmounts
//   }, [slides.length]);

//   return (
//     <div className="stacked-carousel-wrapper">
//       <div className="stacked-carousel">
//         {slides.map((slide, index) => {
//           // Define the translateX, scale, and zIndex for each slide
//           const zIndex = index === currentIndex ? 5 : index === currentIndex - 1 || index === currentIndex + 1 ? 3 : 1;
//           const scale = index === currentIndex ? 1 : index === currentIndex - 1 || index === currentIndex + 1 ? 0.9 : 0.8;
//           const translateX = 200 * (index - currentIndex); // Adjust the distance between slides

//           return (
//             <div
//               key={index}
//               className="stacked-slide"
//               style={{
//                 zIndex: zIndex,
//                 transform: `translateX(${translateX}px) scale(${scale})`, // Apply translation and scaling
//                 opacity: zIndex === 1 ? 0 : 1, // Hide background slides completely
//                 transition: "transform 450ms, z-index 450ms, opacity 450ms",
//               }}
//             >
//               <img src={slide.imageSrc} alt={slide.imageAlt} className="slide-image" />
//               <div className="slide-content">
//                 <img src={slide.logoSrc} alt="brand logo" className="brand-logo" />
//                 <div className="offer-text">{slide.offer}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StackedCarousal;
