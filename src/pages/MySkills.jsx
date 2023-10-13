import React, { useEffect, useState } from 'react';
import '../styles/myskills.css';

const MySkills = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    // Agrega un retraso para mostrar los iconos después de un tiempo
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 1000); // Puedes ajustar el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="myskills-container">
      <h2>My Skills</h2>
      <ul className={`myskills-list ${showSkills ? 'show' : ''}`}>
        <li className="myskills-item">
          <box-icon size="75px" type='logo' name='react'></box-icon>
          React
        </li>
        <li className="myskills-item">
          <box-icon size="75px" type='logo' name='html5'></box-icon>
          HTML
        </li>
        <li className="myskills-item">
          <box-icon size="75px" type='logo' name='css3'></box-icon>
          CSS
        </li>
        <li className="myskills-item">
          <box-icon size="75px" type='logo' name='nodejs'></box-icon>
          Node JS
        </li>
        <li className="myskills-item">
          <box-icon size="75px" type='logo' name='typescript'></box-icon>
          Type Script
        </li>
        <li className="myskills-item">
          <box-icon size="75px" name='task'></box-icon>
          Multitask
        </li>
        <li className="myskills-item">
          <box-icon size="75px" type='logo' name='microsoft-teams'></box-icon>
          Teamwork
        </li>
      </ul>
    </div>
  );
};

export default MySkills;
