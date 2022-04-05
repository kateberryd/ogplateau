
import {  BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import UserDashboard from './pages/Dashboard'
import LoginPage from './pages/Login'

import './App.css';

function App() {
  return (
    <>
      <Router>      
        <Routes>
        <Route path="/" element={<LoginPage />} />

          <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
