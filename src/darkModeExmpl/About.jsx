import React from 'react'
import DarkModeContext from './DarkModeContext';
import { useContext } from 'react';

export default function About() {
  const { isDarkMode } = useContext(DarkModeContext);

  const aboutStyle = {
    backgroundColor: isDarkMode ? "#000000" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"


  }
  const h4style = {
    borderBottom: isDarkMode ? "1px solid #40c4f5" : "1px solid #000000"
    // textAlign: center
  }


  return (
    <>
      <div className=' rounded h-100' style={aboutStyle}>
        <h4 className='text-center p-2' style={h4style}>About</h4>
        <div className='p-2'>
          <p>What We Offer ?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio tempore id harum eaque repellat perferendis dicta incidunt error reiciendis culpa eveniet, nemo possimus explicabo esse cumque nulla, quaerat voluptatum! Deleniti.</p>
        </div>
      </div>
    </>
  )
}
