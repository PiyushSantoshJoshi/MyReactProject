import React from 'react';
import DarkModeContext from './DarkModeContext';
import { useContext } from 'react';

export default function Heading() {
    const{isDarkMode}= useContext(DarkModeContext);

    const HeadingStyle = {
        backgroundColor: isDarkMode ? "#000000" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000"
    }

  return (
    <>
    <div className='col-9 ' style={HeadingStyle}>
      <div className='mt-2 mb-3 '>
      <h1>Dark Mode Example.</h1>
      </div>
        
    </div>
    </>
  )
}
