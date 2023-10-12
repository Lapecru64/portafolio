import React, { useState } from 'react';
import './contactme.css';

const ContactMe = () => {
  

  return (
    <div className="contactme-container">
      <h1>Contact Me</h1>
        <div>
          <h3>Social Networks</h3>
          <ul>
            <li>
              <a href="https://github.com/Lapecru64" target="_blank">
              <box-icon type='logo' name='github' size="100px"></box-icon>GITHUB
              </a>
            </li>
            <br/>
            <li>
              <a href="https://www.linkedin.com/in/laura-perez-45560523a/" target="_blank" className="footer__link">
              <box-icon type='logo' name='linkedin-square' size="100px"></box-icon>LINKEDIN
              </a>
            </li>
            <br/>
            <li>
              <a href="mailto:perlaura64@outlook.com" className="footer__link">
                <box-icon name='mail-send' size="100px"></box-icon>MAIL
              </a>
            </li>
            <br/>
            <li>
            <a href="/pdfs/CurriculumVitae.pdf" target="_blank" rel="noopener noreferrer" download>
            Descargar mi CV
            </a>
            </li>
            <li>
            <a href="/pdfs/CVATSLPC.pdf" target="_blank" rel="noopener noreferrer" download>
            Descargar ATS CV
            </a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default ContactMe;
