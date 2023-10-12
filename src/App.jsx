import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './store/index';
import DarkModeWrapper from '../src/components/DarkModeWrapper';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.counter.darkMode);

  const toggleDark = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={`container-principal ${darkMode ? 'dark' : ''}`}>
      <Header />
      <button onClick={toggleDark} className="dark-mode-button">
        Toggle Dark Mode
      </button>
      <DarkModeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </DarkModeWrapper>
    </div>
  );
}

export default App;
