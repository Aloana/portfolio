import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App'; // Importa o componente principal

// Seleciona o elemento raiz do HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal (App) no DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
