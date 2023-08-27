import React, { useState, useEffect } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    // Display the GIF after 5 seconds
    const timer = setTimeout(() => {
      setShowGif(true);
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="content">
        <img src="/app-logo.png.jpeg" alt="App Logo" className="app-logo" />
        <h1 className="coming-soon-title">Launching <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#e53935' }}>soon</span>!</h1>
        <p className="description">
          Stay tuned as we add the final ingredients to MenuPro! Prepare to embark on a quest for the perfect dining spot–
          where taste meets memories and every bite tells a story.
        </p>
        {showGif && (
          <div className="gif-overlay">
            <img src="/your-gif.gif" alt="App GIF" className="full-page-gif" />
          </div>
        )}
        <img src="/rocket.png" alt="Rocket" className="rocket-image" />
      </div>
    </div>
  );
};

export default ComingSoon;
