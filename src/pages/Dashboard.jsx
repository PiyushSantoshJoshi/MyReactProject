// src/App.jsx
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import ThemeToggle from '../compo/ThemeToggle';

// Move theme reducer outside the component
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // Save to localStorage
      localStorage.setItem('theme', state.theme === 'light' ? 'dark' : 'light');
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

// Create context outside the component
export const ThemeContext = React.createContext();

function Dashboard() {
  // Initialize state from localStorage if available
  const [state, dispatch] = useReducer(themeReducer, { 
    theme: localStorage.getItem('theme') || 'light' 
  });

  const themeStyles = {
    light: {
      bg: '#ffffff',
      text: '#333333',
      navBg: '#f8f9fa'
    },
    dark: {
      bg: '#121212',
      text: '#ffffff',
      navBg: '#343a40'
    }
  };

  const currentTheme = themeStyles[state.theme];

  return (
    <ThemeContext.Provider value={{ state, dispatch, currentTheme }}>
      <div style={{
        minHeight: '100vh',
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
        transition: 'all 0.3s ease'
      }}>
        <Router>
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: currentTheme.navBg,
            marginBottom: '2rem'
          }}>
            <div>
              <a href="/" style={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none' }}>Dashboard</a>
              <a href="/about" style={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none' }}>About</a>
              <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
            </div>
            <ThemeToggle />
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default Dashboard;