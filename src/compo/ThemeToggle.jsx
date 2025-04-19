// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/Dashboard';

export default function ThemeToggle() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button 
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      style={{
        padding: '8px 8px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: state.theme === 'light' ? '#333' : '#f5f5f5',
        color: state.theme === 'light' ? '#fff' : '#333',
        cursor: 'pointer'
      }}
    >
      {state.theme === 'light' ? ' Dark Mode' : 'Light Mode'}
    </button>
  );
}