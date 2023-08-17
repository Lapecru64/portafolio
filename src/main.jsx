import React from 'react';
import { createRoot } from 'react-dom/client'; // Importar createRoot desde el lugar correcto
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

const rootElement = document.getElementById('root');

// Utiliza createRoot en lugar de ReactDOM.render
createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
