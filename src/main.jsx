import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
import { DarkModeProvider } from './darkModeExmpl/DarkModeContext';

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <StrictMode>
      <App />
    </StrictMode>
  </React.StrictMode>
  
)
