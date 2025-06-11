import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* About Us Section */}
      <Typography variant="h2" >
        About JobPortal
      </Typography>

      {/* Our Story */}
      {/* sx- prop to add custom styles, my- margin y-axix */}
      <Typography variant="h5" sx={{ my: 2}}>
        Our Story
      </Typography>
      <Typography variant="body1" >
        Founded in 2020, JobPortal was born out of a desire to simplify the job search process and connect talented individuals with meaningful work opportunities. We've grown rapidly, thanks to our commitment to connecting job seekers with their dream jobs and companies with the best candidates.
      </Typography>

      {/* Mission and Vision */}
      <Typography variant="h5" sx={{ my: 2 }}>
        Our Mission and Vision
      </Typography>
      <Typography variant="body1" >
        Our mission is to empower job seekers and employers by making connections that matter. We envision a world where every job search begins and ends successfully on JobPortal, bridging the gap between talent and opportunity.
      </Typography>

      {/* Meet the Team */}
      <Typography variant="h5" sx={{ my: 2 }}>
        Meet the Team
      </Typography>
      <Grid container spacing={2}>
        {[
          { name: 'John Doe', role: 'CEO & Founder' },
          { name: 'Jane Smith', role: 'CTO & Co-Founder' },
          { name: 'Emily Johnson', role: 'Head of Marketing' },
        ].map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Success Stories */}
      <Typography variant="h5" sx={{ my: 2 }}>
        Success Stories
      </Typography>
      <Typography variant="body1" gutterBottom>
        "We've connected over 50,000 job seekers with their ideal jobs and helped 5,000 companies find top talent. Join our success story today." - Alex P., Product Manager at TechInnovate
      </Typography>
    </Box>
  );
}

export default About;
