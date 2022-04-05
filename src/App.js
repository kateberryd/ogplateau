
import {  BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import SignUpAndSignUp from './pages/SignUpAndSignUp'
import UserDashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'


import './App.css';

function App() {
  return (
    <>
      <Router>      
        <Routes>
        <Route path="/" element={< HomePage/>} />

        <Route path="/auth" element={< SignUpAndSignUp/>} />

          <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
