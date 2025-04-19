// src/pages/About.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/Dashboard';

export default function About() {
  const { state } = useContext(ThemeContext);

  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>About Us</h1>
      <p>This is the about page in {state.theme} mode.</p>
    </div>
  );
}