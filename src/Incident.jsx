
import styles from './Incident.module.css';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

function Incident( {data, handleDelete}) {

  const theme = useContext(ThemeContext);
  const {incident_id, priority, severity, status} = data;

  return (
    <>
          <div className={`${styles.incidentCard} ${theme === 'dark' ? styles.dark : ''}`}>
              <p>INC Id : {incident_id}</p>
              <p>Priority : {priority}</p>
              <p>Severity: {severity}</p>
              <p>Status : {status}</p>
              <button onClick={handleDelete} >Delete</button>
          </div>
    </>
  );
}

export default Incident;