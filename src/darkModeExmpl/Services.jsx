import React from 'react'
import DarkModeContext from './DarkModeContext';
import { useContext } from 'react';

export default function Services() {
  const { isDarkMode } = useContext(DarkModeContext);

  const servicesStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"

  }

  const h4Style = {
    borderBottom: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"
  };

  return (
    <>
      <div className='rounded h-100' style={servicesStyle}>
            <h4 className='text-center p-2' style={h4Style}>Services</h4>
            <div className='p-2'>
              <p>Your Orders </p>
              <p>Returns and Refunds</p>
              <p>Manage Addresses</p>
              <p>Account Settings</p>
            </div>
          </div>
    </>
  )
}
