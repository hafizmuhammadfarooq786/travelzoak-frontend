import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Home from './main/pages/Home';
import Tours from './tours/pages/Tours';
import Destinations from './destinations/pages/Destinations';
import AboutUs from './main/pages/AboutUs';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Destinations" element={<Destinations />} /> 
          <Route path="/AboutUs" element={<AboutUs />} /> 
        </Routes>
      </main>
    </Router>
  );
}

export default App;
