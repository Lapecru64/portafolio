import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './shared/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MySkills from './pages/MySkills';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <div className="container-principal">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;

