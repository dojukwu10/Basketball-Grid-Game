import { createRoot } from 'react-dom'; // Import createRoot from 'react-dom'
import React from 'react';
import App from './App.jsx'; // Import your root component

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
