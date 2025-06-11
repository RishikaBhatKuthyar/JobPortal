
//without redux
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About'; 
// import Navbar from './components/Navbar';
// import Contact from './components/Contact';
// import Companies from './components/Companies';
// import JobListings from './components/JobListings';
// import Login from './components/Login';
// import Footer from './components/Footer';
// import AddJob from './components/AddJobs';
// import Admin from './components/Admin'; 


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     return isAuthenticated === "true"; 
//   });

//   useEffect(() => {
//     localStorage.setItem("isAuthenticated", isLoggedIn.toString());
//   }, [isLoggedIn]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/" element={
//           isLoggedIn ? (
//             <Layout setIsLoggedIn={setIsLoggedIn}>
//               <Outlet />
//             </Layout>
//           ) : (
//             <Navigate replace to="/login" />
//           )
//         }>
//           <Route path="home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="joblistings" element={<JobListings />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="companies" element={<Companies />} />
//           <Route path="add-job" element={<AddJob />} />
//           <Route path="admin" element={<Admin />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// function Layout({ setIsLoggedIn, children }) {
//   return (
//     <div>
//       <Navbar setIsLoggedIn={setIsLoggedIn} />
//       {children}
//       <Footer />
//     </div>
//   );
// }

// export default App;

//redux
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction, logoutAction } from './redux/action';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Companies from './components/Companies';
import JobListings from './components/JobListings';
import Login from './components/Login';
import Footer from './components/Footer';
import AddJob from './components/AddJobs';
import Admin from './components/Admin';
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const setIsLoggedIn = (loggedIn) => {
    if (loggedIn) {
      dispatch(loginAction());
    } else {
      dispatch(logoutAction());
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={
          isLoggedIn ? (
            <Layout setIsLoggedIn={setIsLoggedIn}>
              <Outlet />
            </Layout>
          ) : (
            <Navigate replace to="/login" />
          )
        }>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="joblistings" element={<JobListings />} />
          <Route path="contact" element={<Contact />} />
          <Route path="companies" element={<Companies />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout({ setIsLoggedIn, children }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  );
}

export default App;

