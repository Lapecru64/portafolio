import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import { Provider } from 'react-redux'; // Importa Provider
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
