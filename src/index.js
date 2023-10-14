import React from 'react';
import {createRoot} from 'react-dom/client';
import './sass/style.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppProvider } from './context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router
root.render(
  <AppProvider>
    
      <App />
    
  </AppProvider>
  
);