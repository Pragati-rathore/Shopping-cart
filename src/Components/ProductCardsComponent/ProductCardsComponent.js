import React from 'react';
import './ProductCardsComponent.css'; // Import your CSS file for styling


const products = [
    { name: 'CHI' , img:"https://media.istockphoto.com/id/500150453/photo/this-new-straightener-is-amazing.webp?b=1&s=170667a&w=0&k=20&c=HgrjkGko4eDQHDEe3rFIA1Vk3GwjSQ2SsaSNwrxJe8s=" },
    { name: 'BIOSILK' , img:"https://media.istockphoto.com/id/1354672509/photo/black-corded-hair-straightener-isolated-on-pink-background.webp?b=1&s=170667a&w=0&k=20&c=0kTGPsGMI6A4KVv29VhcO0EVbq3V232e2x3JJcaC2Es="
},
    { name: 'CHI BIOSIK' ,img:"https://media.istockphoto.com/id/1411656712/photo/mexican-young-woman-straightening-her-hair-with-an-iron.webp?b=1&s=170667a&w=0&k=20&c=DHRIupDbBFtAeEim28xyvKU9WnCSNVUAfQUt4SX3MyM="}
  ];


const ProductCardsComponent = () => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-heading"><span style={{color:"black"}}>SHOP OUR</span> BRANDS</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img  className="product-img"src={product.img} />
            <p className='para'>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardsComponent;
