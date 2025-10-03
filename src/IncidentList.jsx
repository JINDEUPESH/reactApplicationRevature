import Incident from './Incident.jsx';
import { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";

function IncidentList({ incidents, onDelete, onAdd }) {
  const [form, setForm] = useState({
    inc_id: "",
    priority: "low",
    severity: "4",
    status: "open"
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newIncident = {
      incident_id: form.inc_id,
      priority: form.priority,
      severity: form.severity,
      status: form.status
    };
    onAdd(newIncident);
    setForm({ inc_id: "", priority: "low", severity: "4", status: "open" });
    alert("Incident Created Successfully!");
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Create Incident Form */}
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          mx: "auto",
          p: 3,
          mb: 5,
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Create Incident
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Incident ID"
            name="inc_id"
            value={form.inc_id}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Severity</InputLabel>
            <Select
              name="severity"
              value={form.severity}
              onChange={handleChange}
            >
              <MenuItem value="1">1-Critical</MenuItem>
              <MenuItem value="2">2-High</MenuItem>
              <MenuItem value="3">3-Medium</MenuItem>
              <MenuItem value="4">4-Low</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="closed">Closed</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
          >
            Save
          </Button>
        </form>
      </Paper>

      {/* All Incidents List */}
      <Typography variant="h5" gutterBottom>
        All Incidents
      </Typography>

      <Grid container spacing={2}>
        {incidents.map((incident) => (
          <Grid item xs={12} sm={6} md={4} key={incident.incident_id}>
            <Incident
              data={incident}
              handleDelete={() => onDelete(incident.incident_id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default IncidentList;
