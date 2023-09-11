

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this URL with your API endpoint
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="product-list">
         <header className="App-header">
        <BouncingHeading />
      </header>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const BouncingHeading = () => {
    const [isBouncing, setIsBouncing] = useState(false);
  
    useEffect(() => {
      setIsBouncing(true);
    }, []);
  
    return (
      <h1 className={isBouncing ? 'bounce' : ''}>
        Men Categories
      </h1>
    );
  };

export default Men;
