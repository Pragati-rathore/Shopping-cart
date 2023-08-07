import React from 'react';
import './ChiFootWare.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const productImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90XRgP-lIGy7KLgFV4flYZUKfQj2oWDrQ4Pj9zYrF8gnGLO0Ld7QMH5mGbRrnu2b1mOc&usqp=CAU",
  "https://content3.jdmagicbox.com/comp/pune/g9/020pxx20.xx20.160812182946.z9g9/catalogue/a-one-footwear-rasta-peth-pune-shoe-dealers-t3zwa5xkc7.jpg",
  "https://content3.jdmagicbox.com/comp/pune/g9/020pxx20.xx20.160812182946.z9g9/catalogue/a-one-footwear-rasta-peth-pune-shoe-dealers-t3zwa5xkc7.jpg",
  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90XRgP-lIGy7KLgFV4flYZUKfQj2oWDrQ4Pj9zYrF8gnGLO0Ld7QMH5mGbRrnu2b1mOc&usqp=CAU",
  "https://content3.jdmagicbox.com/comp/pune/g9/020pxx20.xx20.160812182946.z9g9/catalogue/a-one-footwear-rasta-peth-pune-shoe-dealers-t3zwa5xkc7.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuEkgBNkm77tpwiabKoOdHIeF8mQjn8My3JscgZdhm5sb6IRrZK19OAelXO40ZKfPjO8&usqp=CAU",
  
];

const products = [
  { name: 'CHI Footwear Sand Sandal', price: 18.45 },
  { name: 'CHI Footwear Audrey Slipper', price: 9.25 },
  { name: 'CHI Footwear Dragonfly Mule', price: 20.49 },
  { name: 'CHI Footwear Classic Basic Avarca', price: 8.75 },
  { name: 'CHI Footwear Sand Sandal', price: 18.45 },
  { name: 'CHI Footwear Audrey Slipper', price: 9.25 },
  { name: 'CHI Footwear Dragonfly Mule', price: 20.49 },
  { name: 'CHI Footwear Classic Basic Avarca', price: 8.75 },
  
];

const ChiFootWare= () => {
  return (
    
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showIndicators={false} >
  {products.map((product, index) => (
    // Render every 4 products as a group
    index % 4 === 0 && (
      <div key={index} className="shop-container">
        <h1 className="shop-heading">
          <span style={{ color: 'black' }}>SHOP</span> CHI FOOTWARE
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

export default ChiFootWare;
