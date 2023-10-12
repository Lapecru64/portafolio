import React from 'react';
import { useSelector } from 'react-redux';

function DarkModeWrapper({ children }) {
  const darkMode = useSelector((state) => state.counter.darkMode);

  return (
    <div className={`dark-mode-container ${darkMode ? 'dark' : ''}`}>
      {children}
    </div>
  );
}

export default DarkModeWrapper;
