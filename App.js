// import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import UserPage from './UserPage';
import AdminDashboard from './AdminDashboard';
import './App.css'; // Import your home page styles here

function HomePage() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <div className="home-container">
      <h1 className="main-title">UCC DEVICE TRACKER</h1>
      <p className="description">
        Track and manage device complaints efficiently and effectively with our
        system. Users can register their devices and complaints, while admins can
        manage the data and respond to issues.
      </p>
      <button className="user-button" onClick={handleUserClick}>
        Go to User Page
      </button>
      <div className="admin-form">
        <h2>Admin Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" onClick={handleAdminClick}>
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage addUser={addUser} />} />
          <Route path="/admin" element={<AdminDashboard users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// import UserPage from './UserPage';
// import AdminDashboard from './AdminDashboard';
// import './App.css'; // Import your home page styles here

// function HomePage() {
//   const navigate = useNavigate();

//   const handleUserClick = () => {
//     navigate('/user');
//   };

//   const handleAdminClick = () => {
//     navigate('/admin');
//   };

//   return (
//     <div className="home-container">
//       <h1 className="main-title">UCC DEVICE TRACKER</h1>
//       <p className="description">
//         Track and manage device complaints efficiently and effectively with our
//         system. Users can register their devices and complaints, while admins can
//         manage the data and respond to issues.
//       </p>
//       <button className="user-button" onClick={handleUserClick}>
//         Go to User Page
//       </button>
//       <div className="admin-form">
//         <h2>Admin Sign Up / Login</h2>
//         <form>
//           <input type="text" placeholder="Username" required />
//           <input type="password" placeholder="Password" required />
//           <button type="submit" onClick={handleAdminClick}>
//             Admin Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navigation */}
//         <nav className="navbar">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/user">User Page</Link>
//             </li>
//             <li>
//               <Link to="/admin">Admin Dashboard</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/user" element={<UserPage />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }



// export default App;





// // import logo from './logo.svg';
// // import './App.css';
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import UserPage from './UserPage';
// // import AdminDashboard from './AdminDashboard';
// // import { useNavigate } from 'react-router-dom';



// // // const HomePage = () => {
// // //   const navigate = useNavigate();


// // function App() {

// //   const navigate = useNavigate();

// //   const handleUserClick = () => {
// //     navigate('/user');
// //   };

// //   const handleAdminClick = () => {
// //     navigate('/admin');
// //   };

// //   return (
// //     <div className="home-container">
// //       <h1 className="main-title">UCC DEVICE TRACKER</h1>
// //       <p className="description">
// //         Track and manage device complaints efficiently and effectively with our
// //         system. Users can register their devices and complaints, while admins can
// //         manage the data and respond to issues.
// //       </p>
// //       <button className="user-button" onClick={handleUserClick}>
// //         Go to User Page
// //       </button>
// //       <div className="admin-form">
// //         <h2>Admin Sign Up / Login</h2>
// //         <form>
// //           <input type="text" placeholder="Username" required />
// //           <input type="password" placeholder="Password" required />
// //           <button type="submit" onClick={handleAdminClick}>
// //             Admin Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );

// // }


// // // function App() {

// // <Router>
// //   <div className="App">
// //     <Routes>
// //       <Route path="/user" element={<UserPage />} />
// //       <Route path="/admin" element={<AdminDashboard />} />
// //       <Route path="/" element />

// //     </Routes>
// //   </div>
// // </Router>



// // export default App;

// // ={
// //   <React.Fragment>
// //     <h1>Home Page</h1>
// //     <p>Welcome to the home page!</p>
// //   </React.Fragment>
// // } />






// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
