


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useState} from 'react';
// import { Typography, Box, TextField, Button, Container } from '@mui/material';


// function Login({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const [fullname, setFullname] = useState(''); 
//   const [password, setPassword] = useState(''); 

//   const onLogin = (e) => {
//     e.preventDefault();
//   axios.post('http://localhost:4002/login', { fullname, password })
//   .then(function (response) {
//     if(response.data.isSuccess) {
//       localStorage.setItem('token', response.data.token);
//       setIsLoggedIn(true); 
//       localStorage.setItem("isAuthenticated", "true");

      
//       if(response.data.userRole === 'admin') {
//         navigate('/admin'); 
//       } else {
//         navigate('/home'); 
//       }
//     } else {
//       alert(response.data.message); 
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//     alert('Login failed. Please try again.');
//   });
// };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           mt: 20,
//           display: 'flex',
//           fontFamily:'Arial, Helvetica, sans-serif;',
//           flexDirection: 'column',
//           alignItems: 'center',
//           p: 10,
//           backgroundColor: 'white',
//           borderRadius: 2,
//           boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
//         }}
//       >
//         <Typography component="h1" variant="h3" sx={{ mb: 2}}>
//          Job Portal
//         </Typography>
//         <Box component="form" sx={{mb:2,width:'100%'}} onSubmit={onLogin}>
      
//            <TextField label="Full Name" variant="outlined" required sx={{ mb:2, width:'100%' }} value={fullname} onChange={(e) => setFullname(e.target.value)} />
//           <TextField label="Password" type="password" variant="outlined" required sx={{ mb:2, width:'100%' }} value={password} onChange={(e) => setPassword(e.target.value)} />
//           <Button type="submit" variant="contained" fullWidth sx={{ mt: 1, mb: 2 }}>
//             Login
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/action'; 
import { Typography, Box, TextField, Button, Container } from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4002/login', { fullname, password })
      .then(function (response) {
        if (response.data.isSuccess) {
          localStorage.setItem('token', response.data.token);
          dispatch(loginAction());
          
          if (response.data.userRole === 'admin') {
            navigate('/admin');
          } else {
            navigate('/home');
          }
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('Login failed. Please try again.');
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 20,
          display: 'flex',
          fontFamily: 'Arial, Helvetica, sans-serif;',
          flexDirection: 'column',
          alignItems: 'center',
          p: 10,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
        }}
      >
        <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
          Job Portal
        </Typography>
        <Box component="form" sx={{ mb: 2, width: '100%' }} onSubmit={onLogin}>
          <TextField 
            label="Full Name" 
            variant="outlined" 
            required 
            sx={{ mb: 2, width: '100%' }} 
            value={fullname} 
            onChange={(e) => setFullname(e.target.value)} 
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            required 
            sx={{ mb: 2, width: '100%' }} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ mt: 1, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
