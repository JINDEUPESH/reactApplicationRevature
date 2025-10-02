
import styles from './Incident.module.css';

function Incident( {data, handleDelete}) {

  const {incident_id, priority, severity, status} = data;

  return (
    <>
          <div className={styles.incidentCard}>
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