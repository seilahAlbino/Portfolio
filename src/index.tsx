import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from './Pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);