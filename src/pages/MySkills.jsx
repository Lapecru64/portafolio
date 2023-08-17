import React, { useState, useEffect } from 'react';
import '../styles/myskills.css';

const MySkills = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="myskills-container">
      <h1>My Skills</h1>
      <ul className={`myskills-list ${showSkills ? 'show' : ''}`}>
        <li className="myskills-item">
        <box-icon type='logo' name='react'></box-icon>
          React
        </li>
        <li className="myskills-item">
        <box-icon type='logo' name='html5'></box-icon>
          HTML
        </li>
        <li className="myskills-item">
        <box-icon type='logo' name='css3'></box-icon>
          CSS
        </li>
        <li className="myskills-item">
        <box-icon type='logo' name='nodejs'></box-icon>
          Node JS
        </li>
        <li className="myskills-item">
        <box-icon type='logo' name='typescript'></box-icon>
          Type Script
        </li>
        <li className="myskills-item">
        <box-icon name='task'></box-icon>
          Multitask
        </li>
        <li className="myskills-item">
        <box-icon type='logo' name='microsoft-teams'></box-icon>
          Teamwork
        </li>
      </ul>
    </div>
  );
};

export default MySkills;
