

import React from 'react';
import './ShopBiosilk.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const productImages = [
  'https://media.gettyimages.com/id/132044551/photo/shampoo-container.jpg?s=612x612&w=0&k=20&c=n7YR0Ww4bMRg64CuOCa1xorZQeXTybcwNovcuWfR7lI=',
  'https://media.gettyimages.com/id/171289147/photo/shampoo-cosmetics-bottle.jpg?s=612x612&w=0&k=20&c=2BzHHkweg30jjq91Xh6EX5kAUj_MaN15EPJEvpotzCs=',
  'https://media.gettyimages.com/id/93248129/photo/shampoo.jpg?s=612x612&w=0&k=20&c=_pDyAmZGMLLkY6lJCVo0DYkqN5rWbhbLILjA91fk1Ko=',
  'https://media.gettyimages.com/id/185080144/photo/blank-cosmetics-containers.jpg?s=612x612&w=0&k=20&c=xmTozIW5dFZT4iirNYF-O-kg-QwTOtAfukIJmdJFeaY=',
  'https://media.gettyimages.com/id/93248129/photo/shampoo.jpg?s=612x612&w=0&k=20&c=_pDyAmZGMLLkY6lJCVo0DYkqN5rWbhbLILjA91fk1Ko=',

];

const products = [
  { name: 'BioSilk Silk Therapy Original', price: 18.45 },
  { name: 'BioSilk Silk Therapy Irresistible Hair Fragrance', price: 9.25 },
  { name: 'BioSilk Silk Therapy Thermal Shield Protection Spray', price: 20.49 },
  { name: 'BioSilk Irresistible Trio Kit', price: 8.75 },
  { name: 'BioSilk Irresistible Trio Kit', price: 8.75 },
  { name: 'BioSilk Silk Therapy Original', price: 18.45 },
  { name: 'BioSilk Silk Therapy Irresistible Hair Fragrance', price: 9.25 },
  { name: 'BioSilk Silk Therapy Thermal Shield Protection Spray', price: 20.49 },

];

const ShopBiosilk = () => {
  return (
  
<Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false}>
  {products.map((product, index) => (
    
    index % 4 === 0 && (
      <div key={index} className="shop-container">
        <h1 className="shop-heading">
          <span style={{ color: 'black' }}>SHOP</span> BIOSIK
        </h1>
        <div className="cards-container">
          {products.slice(index, index + 4).map((product, innerIndex) => (
            <div key={innerIndex} className="card">
              <img src={productImages[index + innerIndex]} alt={`Product ${index + innerIndex + 1}`} className="card-image" />
              <p className="product-name">{product.name}</p>
              <div className="price">${product.price.toFixed(2)}</div>
             
              <button className="add-to-cart-button">Select Options</button>
     
            </div>
          ))}
        </div>
      </div>
    )
  ))}
</Carousel>


  );
};

export default ShopBiosilk;

