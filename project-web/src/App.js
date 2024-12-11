import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ListingsPage from './components/Listings';
import Enlist from './components/Enlist';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path='/Enlist' element={<Enlist/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;