import React from 'react'
import DarkModeContext from './DarkModeContext';
import { useContext } from 'react';

export default function Contacts() {
  const { isDarkMode } = useContext(DarkModeContext);

  const contactsStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"

  }

  const h4Style = {
    borderBottom: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"
  };

  return (
    <>
      <div className='rounded h-100' style={contactsStyle}>
        <h4 className='text-center p-2' style={h4Style}>Contacts</h4>
        <div className='p-2'>
          <p>Phone-no : +(121) 222-067-9432 </p>
          <p>Mobile-no : +91 9552991434</p>
          <p>Email : pj7445045@gmail.com</p>
          <p>Instagram : _piyush_joshi_2003</p>
        </div>
      </div>
    </>
  )
}
