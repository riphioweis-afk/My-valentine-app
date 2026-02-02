import React, { useState } from 'react';
import './valentine.css';

export default function ValentineApp() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '60%', left: '35%' });

  const handleNoHover = () => {
    const newTop = Math.random() * 80 + '%';
    const newLeft = Math.random() * 80 + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const handleYes = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="container celebration-screen">
        <div className="floating-icons">
          <div className="icon icon-1">🐞</div>
          <div className="icon icon-2">❤️</div>
          <div className="icon icon-3">🐞</div>
          <div className="icon icon-4">❤️</div>
          <div className="icon icon-5">🐞</div>
          <div className="icon icon-6">❤️</div>
        </div>
        
        <h1 className="celebration-title">HELL YEA 🎉</h1>
        <p className="celebration-text">I knew you'd say yes! 👀</p>
        <p className="celebration-text">Can't wait to celebrate together Beautiful! 🥰</p>
        <img 
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGJ3aTZ2ZXQ3dWI4bXM5bmtuYjR6NjhscmlhanlkZnhxZ2d4NnN3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zXApxYCOfVm4ugfnYt/giphy.gif"
          alt="Celebration"
          className="celebration-gif"
        />
        <button onClick={() => setAnswered(false)} className="home-button">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container main-screen">
      <div className="floating-icons">
        <div className="icon icon-1">🐞</div>
        <div className="icon icon-2">❤️</div>
        <div className="icon icon-3">❤️</div>
        <div className="icon icon-4">🐞</div>
        <div className="icon icon-5">🐞</div>
        <div className="icon icon-6">❤️</div>
        <div className="icon icon-7">🐞</div>
        <div className="icon icon-8">❤️</div>
      </div>

      <div className="card">
        <div className="header">
          <span className="header-icon">🐞</span>
          <h1 className="title">Hey Nunu!</h1>
          <span className="header-icon">❤️</span>
        </div>
        <p className="question">Will you be my Valentine?</p>
        
        <div className="button-container">
          <button onClick={handleYes} className="yes-button">
            Yes! 💕
          </button>
          
          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            style={{
              position: 'absolute',
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              transform: 'translate(-50%, -50%)'
            }}
            className="no-button"
          >
            No 🐞
          </button>
        </div>
      </div>
    </div>
  );
}