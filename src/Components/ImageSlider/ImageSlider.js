// import React, { useState, useEffect } from 'react';
// import './ImageSlider.css'; // Import your CSS file for styling

// const ImageSlider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextImage, 5000); // Auto slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index}`}
//             className={`slider-image ${
//               index === currentImageIndex ? 'active' : ''
//             }`}
//           />
//         ))}
//       </div>
//       <div className="slider-arrows">
//         <span className="arrow left" onClick={prevImage}>
//           &lt;
//         </span>
//         <span className="arrow right" onClick={nextImage}>
//           &gt;
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css'; 

const ImageSlider = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000} 
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

