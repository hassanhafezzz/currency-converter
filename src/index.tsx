import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';
import './styles/index.css';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000, {}, undefined);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
