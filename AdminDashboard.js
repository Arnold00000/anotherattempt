import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ users }) => {
    return (
        <div className="admin-dashboard">
            <header id="main-header">
                <h1>Admin Dashboard</h1>
            </header>
            <div id="main-content" className="container">
                <h2>Registered Users</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Device IMEI</th>
                            <th>Complaint</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.device_imei}</td>
                                <td>{user.complaint}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="button">Add New User</button>
            </div>
        </div>
    );
};

export default AdminDashboard;












// import React from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = ({ users }) => {
//     return (
//         <div className="admin-dashboard">
//             <h2>Admin Dashboard</h2>
//             <h3>Registered Users</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone Number</th>
//                         <th>Device IMEI</th>
//                         <th>Complaint</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.name}</td>
//                             <td>{user.phone_number}</td>
//                             <td>{user.device_imei}</td>
//                             <td>{user.complaint}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;





// import React, { useEffect, useState } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const response = await fetch('http://127.0.0.1:5000/api/users');
//             const data = await response.json();
//             setUsers(data);
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div className="admin-dashboard">
//             <h2>Admin Dashboard</h2>
//             <h3>Registered Users</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Phone Number</th>
//                         <th>Device IMEI</th>
//                         <th>Complaint</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.phone_number}</td>
//                             <td>{user.device_imei}</td>
//                             <td>{user.complaint}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;








// // import React, { useEffect, useState } from 'react';
// // import './AdminDashboard.css';

// // const AdminDashboard = () => {
// //     const [users, setUsers] = useState([]);

// //     useEffect(() => {
// //         fetchAdminData();
// //     }, []);

// //     const fetchAdminData = async () => {
// //         try {
// //             const response = await fetch('/api/admin/users');
// //             const data = await response.json();
// //             setUsers(data);
// //         } catch (error) {
// //             console.error('Error fetching admin data:', error);
// //         }
// //     };

// //     return (
// //         <div className="container">
// //             <header id="main-header">
// //                 <h1>Admin Dashboard</h1>
// //             </header>
// //             <main id="main-content">
// //                 <h2>Registered Users</h2>
// //                 <table className="table">
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>Phone Number</th>
// //                             <th>Device IMEI</th>
// //                             <th>Complaint</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {users.map((user) => (
// //                             <tr key={user.id}>
// //                                 <td>{user.name}</td>
// //                                 <td>{user.phone}</td>
// //                                 <td>{user.device_imei}</td>
// //                                 <td>{user.complaint}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </main>
// //         </div>
// //     );
// // };

// // export default AdminDashboard;




// // import React, { useEffect, useState } from 'react';
// // import { fetchAdminData, createAdminData } from './services/api';

// // const AdminDashboard = () => {
// //     const [admins, setAdmins] = useState([]);
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');

// //     useEffect(() => {
// //         fetchAdminData().then(data => setAdmins(data));
// //     }, []);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const newAdmin = { name, email };
// //         await createAdminData(newAdmin);
// //         fetchAdminData().then(data => setAdmins(data));
// //         setName('');
// //         setEmail('');
// //     };

// //     return (
// //         <div>
// //             <h1>Admin Dashboard</h1>
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                     type="text"
// //                     placeholder="Name"
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     required
// //                 />
// //                 <input
// //                     type="email"
// //                     placeholder="Email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                 />
// //                 <button type="submit">Add Admin</button>
// //             </form>
// //             <ul>
// //                 {admins.map(admin => (
// //                     <li key={admin.id}>
// //                         <p>Name: {admin.name}</p>
// //                         <p>Email: {admin.email}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default AdminDashboard;


