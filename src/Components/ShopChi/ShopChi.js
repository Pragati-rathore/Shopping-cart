import React ,{useState}from 'react';
import './ShopChi.css'; 
import {  FaTrash } from 'react-icons/fa';

const productImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE8TIG7DuWO2GU1nw5CKjH98-WLhXOlsz6VQOw-ezrQ&s",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbG4_AWGtfjn9TPDc5ptazoiio38fJj_zZlW6mlCiYA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhscP1TH1vZYXix3l2MsIEKmDY_iA-BqKu8HyF77LkQ&s',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE8TIG7DuWO2GU1nw5CKjH98-WLhXOlsz6VQOw-ezrQ&s"
  ];
  const products = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.99 },
    { name: 'Product 3', price: 20.49 },
    { name: 'Product 4', price: 8.75 }
  ];

const ShopChi = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 15.49 },
       
      ]);
    const togglePopup = () => {
        setShowPopup(!showPopup);
      };



      
  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
    return (
        <div className="shop-container">
          <h1 className="shop-heading"><span style={{color:"black"}}>SHOP</span> CHI </h1>
          <div className="cards-container">
            
            {products.map((product, index) => (
              <div key={index} className="card">
                <div>
                <button className="card-button">New</button>
                </div>
             
                <img
                  src={productImages[index]}
                  alt={`Product ${index + 1}`}
                  className="card-image"
                />
                <p className="product-name">{product.name}</p>
                <div className="price">${product.price.toFixed(2)}</div>
                <div className="quantity-container">
                 
                  <input
                  
                    type="number"
                    id={`quantity${index}`}
                    className="quantity-input"
                    placeholder='1'
                    
                  />
                </div>
                <button className="add-to-cart-button"  onClick={togglePopup}>Add to Cart</button>
                <button className="buy-now-button">Buy Now</button>
                {showPopup && (
        <div className="popup">
          <div className="popup-header">
          <div>
          <button style={{color:"black", float:"left" , marginLeft:"500px"}}className="close-button" onClick={togglePopup}>
              X
            </button>
            <h3>Your Cart</h3>
           
          
           </div>
          </div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="item-image">
                  {/* Product image */}
                </div>
                <div className="item-details">
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">${item.price.toFixed(2)}</p>
                </div>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
              </div>
            ))}
          </div>
        </div>
      );
 
};

export default ShopChi;
