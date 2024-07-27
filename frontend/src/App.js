import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
// import websocketpage from './components/websocket2';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import FetchUser from './components/FetchUser';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/fetchuser' element={<FetchUser />} />
            </Routes>
        </Router>
    );
}

export default App;
























// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [showAlert, setShowAlert] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const closeAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <div className="App">
//       {showAlert && (
//         <div className="alert-box">
//           <p>This is an alert message!</p>
//           <p>Current time: {currentTime}</p>
//           <button onClick={closeAlert}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;