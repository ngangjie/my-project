import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [theme , setTheme]= useState('light')

    // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);
 
  useEffect(() => {
    themeFn()
  }, [theme]);

  // handle switch theme
  const toggleMode = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };


const themeFn = ()=>{
     // select html elem
     const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
}

  return (
    <ThemeContext.Provider value ={{theme, setTheme, toggleMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
