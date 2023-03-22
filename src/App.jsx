
import './App.css'
import SearchBar from './component/SearchBar'
import Main from   './component/Main'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useEffect, useState } from 'react';

function App() {
  
  const [theme, setTheme] = useState('light')
  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  // handle switch theme
  const toggleMode = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <>
   <div className = "mx-auto  mt-8 w-[50rem] md:w-auto py-8 dark:bg-light">

    <div className="flex justify-between p-3 mx-auto  ">
      <h2 className ="text-white dark:text-dark">Devfinder</h2>
      <div className="flex justify-between text-white dark:text-dark">
      <p className='px-2'>LIGHT</p>
      <WbSunnyIcon onClick ={toggleMode} />
      </div>
    </div>
   
    <SearchBar  className ='dark:text-dark' />

    <Main  className ='dark:text-dark' />
   
</div>
    </>
  )
}

export default App
