import Incident from './Incident.jsx';
import styles from './IncidentList.module.css';
import {useState} from 'react';

function IncidentList({ incidents, onDelete, onAdd }) {

    const[form, setForm] = useState({
        inc_id: "",
        priority: "low",
        severity: "4",
        status: "open"
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value})); // key names
        console.log(form);
    }

    function handleSubmit(e) {
        e.preventDefault(); // stops submitting the form and refreshing the page
        const newIncident = {
            incident_id: form.inc_id,
            priority: form.priority,
            severity: form.severity,
            status: form.status
        };
        onAdd(newIncident)
        console.log(incidents);
        alert("Incident Created Successfully!");
    }

    

  return (
    <>
      

         {/* create and save an incident */}
      <main className={styles.main}>
            <form>
                <span>
                    <label htmlFor="inc_id" className={styles.inputVal} >Incident ID:</label>
                    <input type="text" name='inc_id' id='inc_id' placeholder='INC-0000' onChange={handleChange}/>
                </span>

                <span>
                    <label htmlFor="priority" className={styles.inputVal}>Priority : </label>
                    <select name="priority" id="priority" onChange={handleChange}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </span>

                <span>
                    <label htmlFor="severity" className={styles.inputVal}>Severity : </label>
                    <select name="severity" id="severity" onChange={handleChange}>
                        <option value="1">1-Critical</option>
                        <option value="2">2-High</option>
                        <option value="3">3-medium</option>
                        <option value="4">4-Low</option>
                    </select>
                </span>

                <span>
                    <label htmlFor="status" className={styles.inputVal}>Status : </label>
                    <select name="status" id="status" onChange={handleChange}>
                        <option value="open">Open</option>
                        <option value="in-progress">In Progress</option>
                        <option value="closed">Closed</option>
                    </select>
                </span>

                <input type="submit" name="save" id="save" value="save" className={styles.inputVal} onClick={handleSubmit}/>
            </form>
      </main>

      <h1 className={styles.incidentListHeader}>All Incidents List</h1>
      <div className={styles.incidentList}>
        {incidents.map((incident) => (
          <Incident
            key={incident.incident_id}
            data={incident}
            handleDelete={() => onDelete(incident.incident_id)}
          />
        ))}
      </div>
    </>
  );
}

export default IncidentList;
