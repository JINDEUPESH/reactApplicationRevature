import { useState, useReducer, useContext } from 'react';
import styles from './Home.module.css';
import IncidentList from './IncidentList.jsx';
import Welcome from './Welcome.jsx';
import data from './assets/incidents.json';
import { ThemeContext } from './ThemeContext.jsx';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { Routes, Route, Link } from 'react-router-dom';





function incidentReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((incident) => incident.incident_id !== action.payload);
    default:
      return incidents;
  }
}

function Home({ toggleDarkMode }) {

  const name = "Upesh";
  const date = new Date();

  const theme = useContext(ThemeContext);

  const [incidents, dispatch] = useReducer(incidentReducer, data);



  function handleDelete(id) {
    dispatch({ type: 'delete', payload: id });
    // setIncidents((prev) =>prev.filter((incident) => incident.incident_id !== id));
  }

  function handleOnAdd(newIncident) {
    dispatch({ type: 'add', payload: newIncident });
    // setIncidents((prev) => [...prev, newIncident]);
  }

  return (
    <>
      <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
        <p>Welcome {name}</p>
        <p>
          Today's date is {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
        <ul className={styles.navbar}>
          <li className={styles.listItem}>
            {/* <a href="#" onClick={handleSetHomePageView} className={styles.navLink}>Home</a> */}
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.listItem}>
            {/* <a href="#" onClick={handleSetIncidentPageView} className={styles.navLink}>Incidents</a> */}
            <Link to="/incidents" className={styles.navLink}> Incidents</Link>
          </li>
        </ul>
        <button onClick={toggleDarkMode} >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/incidents' element={<IncidentList incidents={incidents} onDelete={handleDelete} onAdd={handleOnAdd} />} />
      </Routes>

      {/* show page based on click
      {(!homePageView && incidentPageView) ? (<IncidentList incidents={incidents} onDelete={handleDelete} onAdd={handleOnAdd} />) : (<Welcome />)} */}

    </>
  );
}

export default Home;
