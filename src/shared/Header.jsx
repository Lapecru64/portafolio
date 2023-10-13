import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/index'; // Ajusta la importación

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.counter.darkMode);

  const toggleDark = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className={`header-container ${darkMode ? 'dark' : ''}`}>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <ul className="header-links">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skills">My Skills</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
      <button onClick={toggleDark} className="dark-mode-button">
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;

