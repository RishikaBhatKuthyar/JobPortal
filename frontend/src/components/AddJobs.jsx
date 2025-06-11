import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';

function AddJob() {
    const [job, setJob] = useState({
        companyName: '',
        title: '',
        description: '',
        salary: 0,
        applyLink: '',
        lastUpdated: '',
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4002/create/job', job);
            console.log(response.data);
            alert('Job added successfully');
        } catch (error) {
            console.error("Error adding job:", error);
            alert('Failed to add job');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Add Job
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                name="companyName"
                                value={job.companyName}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Job Title"
                                name="title"
                                value={job.title}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Job Description"
                                name="description"
                                multiline
                                rows={4}
                                value={job.description}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Salary"
                                name="salary"
                                type="number"
                                value={job.salary}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Apply Link"
                                name="applyLink"
                                value={job.applyLink}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Last Updated"
                                name="lastUpdated"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={job.lastUpdated}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Add Job
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default AddJob;
