import React, { createContext , useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }){
  const [isDarkMode, setIsDarkMode]= useState(false);

  const toggleDarkMode =() => setIsDarkMode(!isDarkMode);

    if (isDarkMode==true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

  return (
  <>
  <DarkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
    {children}
  </DarkModeContext.Provider>
  </>
  )
}

export default DarkModeContext;