
import styles from './Incident.module.css';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import { Card, CardContent, Typography, Button } from "@mui/material";

function Incident({ data, handleDelete, handleEdit }) {

  const theme = useContext(ThemeContext);
  const { incident_id, priority, severity, status } = data;

  return (
    <>
      <Card sx={{ minWidth: 250, maxWidth: 300, m: 1 }}>
      <CardContent>
        <Typography>ID: {incident_id}</Typography>
        <Typography>Priority: {priority}</Typography>
        <Typography>Severity: {severity}</Typography>
        <Typography>Status: {status}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ mt: 2 }}
        >
          Delete
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={handleEdit}
          sx={{ mt: 2, ml:2 }}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
    </>
  );
}

export default Incident;