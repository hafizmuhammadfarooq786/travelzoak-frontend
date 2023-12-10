import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact="true">Home</NavLink>
    </li>
    <li>
      <NavLink to="/Tours">Tours</NavLink>
    </li>
    <li>
      <NavLink to="/Destinations">Destinations</NavLink>
    </li>
    <li>
      <NavLink to="/AboutUs">About Us</NavLink>
    </li>
  </ul>
};

export default NavLinks;