import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "My name is Laura Pérez Cruz and I'm a Full Stack developer";
  const textLength = fullText.length;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= textLength) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="img-home" style={{ backgroundImage: 'url(/imgs/code.jpg)' }}>
      <h1>{displayedText}</h1>
    </div>
  );
};

export default Home;

