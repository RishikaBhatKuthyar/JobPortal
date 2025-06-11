


// /** @jsx jsx */
// /** @jsxRuntime classic */
// import { jsx } from '@emotion/react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// const styles = () => ({
//   padding: '20px',
//   backgroundColor: '#1DA1F2',
//   display: 'flex',
//   justifyContent: 'space-between',

//   '.nav__link': {
//     margin: '10px',
//     borderRadius: '5px',
//     textDecoration: 'none',
//     color: 'black',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     '&:hover': {
//       background: 'white',
//       color: 'white',
//       padding: '10px'
//     }
//   },

//   '.btn__logout': {
//     padding: '10px',
//     color: 'white',
//     backgroundColor: 'red',
//     borderRadius: '5px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     '&:hover': {
//       color: 'black',
//       background: 'white',
//     }
//   }
// });

// function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     setIsLoggedIn(() => false);
//     localStorage.setItem("isAuthenticated", "false");
//     navigate('/login');
//   }

//   const isAdminOrAddJobRoute = location.pathname === '/admin' || location.pathname === '/add-job';

//   return (
//     <nav css={styles()} className='navbar'>
//       {!isAdminOrAddJobRoute && (
//         <div>
//           <span className='nav__link'><Link to="/home">Home</Link></span>
//           <span className='nav__link'><Link to="/about">About</Link></span>
//           <span className='nav__link'><Link to="/contact">Contact</Link></span>
//           <span className='nav__link'><Link to="/joblistings">JobListings</Link></span>
//           <span className='nav__link'><Link to="/companies">Companies</Link></span>
//         </div>
//       )}
//       <span className='btn__logout' onClick={handleLogout}> Logout </span>
//     </nav>
//   );
// }

// export default Navbar;



/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from '@emotion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux//action'; 

const styles = () => ({
  padding: '20px',
  backgroundColor: '#1DA1F2',
  display: 'flex',
  justifyContent: 'space-between',

  '.nav__link': {
    margin: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      background: 'white',
      color: '#1DA1F2',
      padding: '10px'
    }
  },

  '.btn__logout': {
    padding: '10px',
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
      background: 'white',
    }
  }
});

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("isAuthenticated"); 
    navigate('/login');
  }

  const isAdminOrAddJobRoute = location.pathname === '/admin' || location.pathname === '/add-job';

  return (
    <nav css={styles()} className='navbar'>
      {!isAdminOrAddJobRoute && (
        <div>
          <span className='nav__link'><Link to="/home">Home</Link></span>
          <span className='nav__link'><Link to="/about">About</Link></span>
          <span className='nav__link'><Link to="/contact">Contact</Link></span>
          <span className='nav__link'><Link to="/joblistings">Job Listings</Link></span>
          <span className='nav__link'><Link to="/companies">Companies</Link></span>
        </div>
      )}
      <span className='btn__logout' onClick={handleLogout}> Logout </span>
    </nav>
  );
}

export default Navbar;
