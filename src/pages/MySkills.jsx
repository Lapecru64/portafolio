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
          <box-icon name='react' size="3.5rem"></box-icon>
          React
        </li>
        <li className="myskills-item">
          <box-icon name='html5' size="3.5rem"></box-icon>
          HTML
        </li>
        <li className="myskills-item">
        <box-icon name='css3' size="3.5rem"></box-icon>
          CSS
        </li>
        <li className="myskills-item">
          <box-icon name='nodejs' size="3.5rem"></box-icon>
          Node JS
        </li>
        <li className="myskills-item">
          <box-icon name='typescript' size="3.5rem"></box-icon>
          Type Script
        </li>
        <li className="myskills-item">
          <box-icon name='task' size="3.5rem"></box-icon>
          Multitask
        </li>
        <li className="myskills-item">
          <box-icon name='microsoft-teams' size="3.5rem"></box-icon>
          Teamwork
        </li>
      </ul>
    </div>
  );
};

export default MySkills;
