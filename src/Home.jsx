import { useState, useReducer, useContext } from 'react';
import styles from './Home.module.css';
import IncidentList from './IncidentList.jsx';
import Welcome from './Welcome.jsx';
import data from './assets/incidents.json';
import { createContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

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

  const [homePageView, setHomePageView] = useState(true);
  const [incidentPageView, setIncidentPageView] = useState(false);
  const [incidents, dispatch] = useReducer(incidentReducer, data);


  function handleSetHomePageView() {
    setHomePageView(true);
    setIncidentPageView(false);
  }

  function handleSetIncidentPageView() {
    setHomePageView(false);
    setIncidentPageView(true);
  }

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
            <a href="#" onClick={handleSetHomePageView} className={styles.navLink}>Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#" onClick={handleSetIncidentPageView} className={styles.navLink}>Incidents</a>
          </li>
        </ul>
        <button onClick={toggleDarkMode} >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>


      {/* show page based on click */}
      {(!homePageView && incidentPageView) ? (<IncidentList incidents={incidents} onDelete={handleDelete} onAdd={handleOnAdd} />) : (<Welcome />)}

    </>
  );
}

export default Home;
