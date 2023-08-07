import React from 'react';
import './RewardsProgram.css'; 

const RewardsProgram = () => {
  return (
    <div style={{background:"balck"}}>
        <div className="container">
      <div className="flex-row">
        <div className="content">
            <div className='hello'>  <h2 className="h1"style={{color:"white"}}><span style={{color:"red"}}>CHI</span> REWARDS <span>PROGRAM</span></h2>
          <div>
          <p style={{color:"white"}}> Join the program and earn points with every purchase on CHI.com. You get 1 point for every dollar spent.</p>
          </div>
          <button className='btn'>Sign Up & Save</button>
        </div>
        </div>
      </div>
      <div className="flex-row">
        <div className="content">
          <img src="https://thumbs.dreamstime.com/b/multi-ethnic-beauty-caucasian-african-different-ethnicity-women-black-background-beautiful-vogue-girls-multi-ethnic-beauty-171485418.jpg" alt="Image" />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default RewardsProgram ;
