/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography } from '@mui/material';

const styles = () => ({
  margin: '0 auto',
  maxWidth: '800px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  '.jobCard': {
    borderBottom: '1px solid #ccc',
    padding: '20px',
    borderRadius: '15px',
    marginBottom: '25px',
    '&:last-child': {
      border: 'none',
      paddingBottom: '0',
      marginBottom: '0',
    },
  },
  '.jobTitle': {
    fontSize: '24px',
    color: '#333',
    margin: '0 0 10px 0',
  },
  '.companyName': {
    fontSize: '20px', 
    color: '#333', 
    margin: '0 0 10px 0', 
  },
  
  '.jobDescription': {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 10px 0',
  },
  '.jobUpdated': {
    fontSize: '14px',
    color: '#999',
    margin: '0 0 10px 0',
  },
  '.applyLink': {
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function JobPostings() {
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:4002/get/jobs');
        setJobPosts(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the jobs: ", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-listings" css={styles()}>
      <Typography variant='h4'>Job Listings</Typography>
      <div>
        {jobPosts.map((jobPost) => (
          <Card key={jobPost._id} className='jobCard'> {/* Ensure key is unique, using jobPost._id */}
          <h2 className='companyName'>{jobPost.companyName}</h2>
            <h3 className='jobTitle'>{jobPost.title}</h3>
            <Typography className='jobDescription'>{jobPost.description}</Typography>
            <Typography className='jobUpdated'>{jobPost.lastUpdated}</Typography>
            <a href={jobPost.applyLink} className='applyLink'>Apply Here</a>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default JobPostings;
