import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './MainPagetwo'

export default function ToggleBtn() {

  const {state,dispatch} = useContext(ThemeContext);
  const isDarkMode = state.theme === 'light';
  

  return (
    <>
    <button className="btn btn-primary" type="button" onClick={()=>dispatch({type : "TOGGLE_THEME"})}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </>
  )
}
