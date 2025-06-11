/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from '@emotion/react'

import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const styles = () => ({
    '.cardStyling': {
        padding: '10px',
        margin: '30px',
        border: '1px solid #ccc',
        borderRadius: '15px',
    },
    '.company_name': {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        padding: '5px'
    
    },
  
})

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4002/api/companies')
    .then( (response) => {
    setCompanies(response.data.companies);
    })
  .catch(function (error) {
    console.log(error);
  });
    }, []);

    return (
        <Grid css={styles()} container spacing={4}>
        {companies.map((company, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className='cardStyling'>
                    <CardActionArea href={company.url}>
                        <CardMedia
                            component="img"
                            image={company.logo}
                            alt={`${company.name} Logo`}
                            sx={{
                                height: 180, 
                                objectFit: 'contain', 
                              
                            }}
                        />
                        <CardContent>
                            <Typography className="company_name"  variant="h5" component="div">
                                {company.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ))}
    </Grid>
    );
}

export default Companies;
