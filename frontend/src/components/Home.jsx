import React from 'react';
import { Typography, Button, TextField, Box,  } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddBoxIcon from '@mui/icons-material/AddBox'; 

import { useNavigate } from 'react-router-dom';


function Home() {
  let navigate = useNavigate(); 
  return (
    
    <Box sx={{ flexGrow: 1, padding: 2 }}>
     

      {/* Main Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" >
          Welcome to JobPortal
        </Typography>
        <Typography variant="h5" >
          "Your bridge to a brighter future. Find your dream job or discover the perfect candidate today."
        </Typography>

        {/* Search Bar */}
        <Box sx={{ my: 2 }}>
          <TextField fullWidth label="Search over 10,000 job listings"  />
        </Box>
   {/* Buttons */}
   <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', my: 5 }}>
              <Button variant="contained" color="primary" startIcon={<WorkIcon />}>
                I'm looking for a job
              </Button>
              <Button variant="outlined" color="primary" startIcon={<BusinessCenterIcon />}>
                I'm looking to hire
              </Button>
            </Box>
          </Box>

 

      {/* Testimonials */}
      <Typography variant="body1"  sx={{ my: 2 }}>
        "Thanks to JobPortal, I landed my dream job in just two weeks! - Alex P."
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
  "Finding the right candidate was a breeze with JobPortal. The quality of applicants was outstanding. - Jamie L."
</Typography>

<Typography variant="body1" sx={{ my: 2 }}>
  "JobPortal's intuitive design made job hunting less stressful and more productive. Highly recommend! - Samir A."
</Typography>

<Typography variant="body1" sx={{ my: 2 }}>
  "I never thought I could switch careers at 40, but JobPortal helped me find an entry-level position in a new field. - Christine B."
</Typography>

<Typography variant="body1" sx={{ my: 2 }}>
  "As a small business owner, finding the right talent is challenging. JobPortal connected me with incredible professionals. - Ella G."
</Typography>

<Typography variant="body1" sx={{ my: 2 }}>
  "JobPortal streamlined our hiring process, making it easy to manage applications and communicate with candidates. - Omar D."
</Typography>



  

    </Box>
  );
}

export default Home;
