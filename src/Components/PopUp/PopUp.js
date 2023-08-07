import React, { useState } from 'react';
import { FaShoppingCart,  FaTrash } from 'react-icons/fa'; // Import icons
import './PopUp.css'; 

const Popup = () => {
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
    <div>
      <div className="shopping-cart-icon" onClick={togglePopup}>
        <FaShoppingCart />
      </div>
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
  );
};

export default Popup;
