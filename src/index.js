import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Importa qui il tuo tema Bootstrap personalizzato
import './components/styles/bootstrap.min.css'; // Assicurati che il percorso sia corretto
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
