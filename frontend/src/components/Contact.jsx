import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid } from '@mui/material';

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = event => setContactForm({
  //  Keeps all the current information in the form as it is
    ...contactForm, 
    // but for the field I just typed in, update it with what I typed,
    // finds the name : data i typed
    [event.target.name]: event.target.value,
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactForm);
    alert('Message sent! We will get back to you as soon as possible.');
    // Reset form after submission
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      
      {/* Contact Information */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Our Address</Typography>
          <Typography variant="body1">1234 Work Street, Job City, JF 56789</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Call Us</Typography>
          <Typography variant="body1">+1 (555) 123-4567</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Email Us</Typography>
          <Typography variant="body1">support@jobportal.com</Typography>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              required
            />
          </Grid>
       
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={contactForm.message}
              multiline
              rows={5}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send 
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;
