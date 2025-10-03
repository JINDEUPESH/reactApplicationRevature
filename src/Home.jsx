import { useState, useReducer, useContext } from 'react';
import styles from './Home.module.css';
import IncidentList from './IncidentList.jsx';
import Welcome from './Welcome.jsx';
import data from './assets/incidents.json';
import { ThemeContext } from './ThemeContext.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";




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
  }

  function handleOnAdd(newIncident) {
    dispatch({ type: 'add', payload: newIncident });
  }

  return (
    <>
      <AppBar position="static" color={theme === "dark" ? "default" : "primary"}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Welcome {name} — {date.toLocaleString()}
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/incidents">Incidents</Button>
          <Button color="inherit" onClick={toggleDarkMode}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>


      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/incidents' element={<IncidentList incidents={incidents} onDelete={handleDelete} onAdd={handleOnAdd} />} />
      </Routes>



    </>
  );
}

export default Home;
