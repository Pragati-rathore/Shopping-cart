


import './men.css';

import React from 'react';
const ProductCard = ({ product }) => {
  return (
    // <div className="product-card">
    //   <img src={product.image} alt={product.name} />
    //   <h2>{product.name}</h2>
    //   <p>Created At: {new Date(product.creationAt).toLocaleString()}</p>
    //   <p>Updated At: {new Date(product.updatedAt).toLocaleString()}</p>
    // </div>
      <div className="box">
      {/* <header className="App-header">
        <BouncingHeading />
      </header> */}

      <div className="Categories-container">
        <div id="Categories-container">

          
              <h1 className='title'>{product.name}</h1>
              <img className="img"src={product.image} alt={product.name} />
              <div className='cat-para'>
              <p>Price :{new Date(product.creationAt).toLocaleString()}</p>
     <p>Sale: {new Date(product.updatedAt).toLocaleString()}</p>
    
              </div>
           

         
        </div>
      </div>


     
    </div>
  );
};


  
export default ProductCard;


