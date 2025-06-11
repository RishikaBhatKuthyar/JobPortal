import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Container, Button, Typography, Box,
  Table, TableBody, TableCell, TableHead, TableRow
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AddBoxIcon from '@mui/icons-material/AddBox'; 

function Admin() {
  let navigate = useNavigate(); 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4002/user/getAll');
      setUsers(response.data.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      alert('Failed to fetch users');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
     
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddBoxIcon />}
          onClick={() => navigate('/add-job')}
        >
          Add Job
        </Button>
      </Box>
      <Table sx={{ marginTop: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Admin;
