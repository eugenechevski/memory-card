import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.querySelector('body')?.classList.add('h-[100vh]');
document.querySelector('#root')?.classList.add('w-full', 'h-full');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);