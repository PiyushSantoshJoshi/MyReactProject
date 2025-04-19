// src/pages/Contact.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../pages/Dashboard';

export default function Contact() {
  const { state } = useContext(ThemeContext);

  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>Contact Us</h1>
      <p>This is the contact page in {state.theme} mode.</p>
      <p>Email: contact@example.com</p>
    </div>
  );
}