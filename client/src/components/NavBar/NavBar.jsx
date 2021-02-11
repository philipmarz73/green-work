import React from 'react';
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">
      GreenWork
    </Link>
    
    <ul id="nav-mobile" className="right hide-on-med-and-down">

      <li>
          <NavLink to="/about" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          > 
              About
              </NavLink>
          </li>
      <li>
      <NavLink to="/contact" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Contact Us
              </NavLink>
          </li>
          <li>
      <NavLink to="/logIn" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Log In
              </NavLink>
          </li>
          <li>
      <NavLink to="/newPlants" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              New Plants
              </NavLink>
          </li>
    </ul>
  </div>
</nav>
    );
};

export default NavBar;