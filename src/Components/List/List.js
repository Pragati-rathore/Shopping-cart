import React from 'react';
import './List.css'; 

const List = () => {
  return (
    <div className="two-box-container">
      <div className="flex-box">
        <div className="box">
          <h2>Box 1</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="box">
          <h2>Box 2</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div className='div'>
      <div className="form-box">
        <h2>UNLOCK 10% OFF YOUR FIRST ORDER</h2>
        <p>
        Save on your first order and get email only offers when you join.
        </p>
        <form>
          
          <input type="email" id="email" placeholder='Email' />
          <button  id="submit"type="submit">Sign Up</button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default List;
