import { useState } from 'react';
import Home from './Home.jsx';
import { ThemeContext } from './ThemeContext.jsx';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

function App() {
  let [darkmode, setDarkmode] = useState('light');

  function handleToggleDarkMode() {
    setDarkmode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  const theme = createTheme({
    palette: {
      mode: darkmode,
      background: {
        default: darkmode === 'dark' ? '#242424' : '#fafafa',
        paper: darkmode === 'dark' ? '#2f2f2f' : '#fff',
      },
      text: {
        primary: darkmode === 'dark' ? '#e0e0e0' : '#000',
      },
    },
  });

  return (
    <ThemeContext.Provider value={darkmode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home toggleDarkMode={handleToggleDarkMode} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
