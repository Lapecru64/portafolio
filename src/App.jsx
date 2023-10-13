import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import DarkModeWrapper from '../src/components/DarkModeWrapper';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';

function App() {
  return (
    <div className="container-principal">
      <Provider store={store}>
        <Header />
        <DarkModeWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<MySkills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </DarkModeWrapper>
      </Provider>
    </div>
  );
}

export default App;
