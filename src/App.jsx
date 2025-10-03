import { useState, useContext } from 'react';
import Home from './Home.jsx';
import {ThemeContext}  from './ThemeContext.jsx';


function App() {
  
  let [darkmode, setDarkmode] = useState('light');

  function handleToggleDarkMode() {
    if (darkmode === 'light') {
      setDarkmode('dark');
    } else {
      setDarkmode('light');
    }
  }

  return (
    <>
        <ThemeContext.Provider value={darkmode}>
          <Home toggleDarkMode={handleToggleDarkMode}></Home>
          </ThemeContext.Provider>
    </>
        
  )
}

export default App
