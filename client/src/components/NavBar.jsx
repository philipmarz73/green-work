import React from 'react';
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
  <nav>
  <div className="nav-wrapper">
    
    <a href="#" className="brand-logo">

    Logo
    </a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">

      <li>
          <NavLink to="/about" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}>
              
              About
              </NavLink>
          </li>
      <li>
          <a href="badges.html">Components</a>
          </li>
      <li>
          <a href="collapsible.html">JavaScript</a>
          </li>
    </ul>
  </div>
</nav>
    );
};

export default NavBar;