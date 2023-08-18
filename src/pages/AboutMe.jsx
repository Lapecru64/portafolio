
import React, { useState, useEffect } from 'react';
import './aboutme.css';

const AboutMe = () => {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const paragraphs = [
    "My name is Laura Pérez Cruz. I am a person who is passionate about technology and enjoys tackling challenges. My goal is to assist others in solving their problems and meeting their technological needs.",
    "As a full-stack developer, I specialize in crafting websites that encompass both the customer experience design (front end) and the programming and maintenance of the site's internal architecture (back end).",
    "The front end involves designing a website, ranging from its structure to styles like colors, backgrounds, sizes, and animations.",
    "On the other hand, the backend processes the data that feeds the frontend. It represents the hidden technological logic that powers a web page.",
    "While I have a preference for backend development, I enjoy challenges, so any aspect of web development excites me."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(prevText => {
        if (prevText === paragraphs[paragraphIndex]) {
          if (paragraphIndex === paragraphs.length - 1) {
            setParagraphIndex(0);
          } else {
            setParagraphIndex(prevIndex => prevIndex + 1);
          }
          return '';
        }
        return prevText + paragraphs[paragraphIndex].charAt(prevText.length);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [paragraphIndex]);

  return (
    <div className="aboutme-container">
      <div className="aboutme-text">
        <h1>About Me</h1>
        <p>{displayedText}</p>
      </div>
    </div>
  );
};

export default AboutMe;
