import React, { useState } from 'react';
import './userPage.css';

const UserPage = ({ addUser }) => {
    const [name, setName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [device_imei, setDeviceImei] = useState('');
    const [complaint, setComplaint] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            phone_number,
            device_imei,
            complaint,
        };
        addUser(newUser);
        setName('');
        setPhoneNumber('');
        setDeviceImei('');
        setComplaint('');
    };

    return (
        <div className="user-page">
            <h2>Register Your Device</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Device IMEI"
                    value={device_imei}
                    onChange={(e) => setDeviceImei(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Complaint"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserPage;











// import React, { useState } from 'react';
// import './userPage.css';

// const UserPage = ({ addUser }) => {
//     const [name, setName] = useState('');
//     const [phone_number, setPhoneNumber] = useState('');
//     const [device_imei, setDeviceImei] = useState('');
//     const [complaint, setComplaint] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const response = await fetch('/api/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name,
//                 phone_number,
//                 device_imei,
//                 complaint,
//             }),
//         });

//         if (response.ok) {
//             alert('User registered successfully');
//             setName('');
//             setPhoneNumber('');
//             setDeviceImei('');
//             setComplaint('');
//         } else {
//             alert('Failed to register user');
//         }
//     };

//     return (
//         <div className="container">
//             <header id="main-header">
//                 <h1>Register Your Device</h1>
//             </header>
//             <div id="main-content">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             placeholder="Enter your name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone_number">Phone Number</label>
//                         <input
//                             type="text"
//                             id="phone_number"
//                             placeholder="Enter your phone number"
//                             value={phone_number}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="device_imei">Device IMEI</label>
//                         <input
//                             type="text"
//                             id="device_imei"
//                             placeholder="Enter your device IMEI"
//                             value={device_imei}
//                             onChange={(e) => setDeviceImei(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="complaint">Complaint</label>
//                         <textarea
//                             id="complaint"
//                             placeholder="Enter your complaint"
//                             value={complaint}
//                             onChange={(e) => setComplaint(e.target.value)}
//                             required
//                         ></textarea>
//                     </div>
//                     <button type="submit" className="button">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserPage;







// import React, { useState } from 'react';
// import './userPage.css';

// const UserPage = () => {
//     const [name, setName] = useState('');
//     const [phone_number, setPhoneNumber] = useState('');
//     const [device_imei, setDeviceImei] = useState('');
//     const [complaint, setComplaint] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://127.0.0.1:5000/api/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 name,
//                 phone_number: phone_number,
//                 device_imei: device_imei,
//                 complaint,
//             }),
//         });

//         if (response.ok) {
//             alert('User registered successfully');
//             setName('');
//             setPhoneNumber('');
//             setDeviceImei('');
//             setComplaint('');
//         } else {
//             alert('Failed to register user');
//         }
//     };

//     return (
//         <div className="user-page">
//             <h2>Register Your Device</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={phone_number}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Device IMEI"
//                     value={device_imei}
//                     onChange={(e) => setDeviceImei(e.target.value)}
//                     required
//                 />
//                 <textarea
//                     placeholder="Complaint"
//                     value={complaint}
//                     onChange={(e) => setComplaint(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default UserPage;







// // import React, { useState } from 'react';
// // import './userPage.css';

// // const UserPage = () => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         phone: '',
// //         device_imei: '',
// //         complaint: ''
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch('/api/user/register', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(formData)
// //             });
// //             if (response.ok) {
// //                 alert('User registered successfully!');
// //             } else {
// //                 alert('Failed to register user.');
// //             }
// //         } catch (error) {
// //             console.error('Error registering user:', error);
// //         }
// //     };

// //     return (
// //         <div className="container">
// //             <header id="main-header">
// //                 <h1>User Registration</h1>
// //             </header>
// //             <main id="main-content">
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="form-group">
// //                         <label htmlFor="name">Name</label>
// //                         <input
// //                             type="text"
// //                             id="name"
// //                             name="name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="phone">Phone Number</label>
// //                         <input
// //                             type="text"
// //                             id="phone"
// //                             name="phone"
// //                             value={formData.phone}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="device_imei">Device IMEI</label>
// //                         <input
// //                             type="text"
// //                             id="device_imei"
// //                             name="device_imei"
// //                             value={formData.device_imei}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="complaint">Complaint</label>
// //                         <textarea
// //                             id="complaint"
// //                             name="complaint"
// //                             value={formData.complaint}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     </div>
// //                     <button type="submit" className="button">Submit</button>
// //                 </form>
// //             </main>
// //         </div>
// //     );
// // };


// // export default UserPage;








// // import React, { useEffect, useState } from 'react';
// // import { fetchUserData, createUserData } from './services/api';


// // const UserPage = () => {
// //     const [users, setUsers] = useState(null);
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');

// //     useEffect(() => {
// //         fetchUserData().then(data => setUsers(data));
// //     }, []);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const newUser = { name, email };
// //         await createUserData(newUser);
// //         fetchUserData().then(data => setUsers(data));
// //         setName('');
// //         setEmail('');
// //     };



// //     return (
// //         <div>
// //             <h1>User Page</h1>
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
// //                 <button type="submit">Add User</button>
// //             </form>
// //             <ul>
// //                 {users.map(user => (
// //                     <li key={user.id}>
// //                         <p>Name: {user.name}</p>
// //                         <p>Email: {user.email}</p>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default UserPage;
