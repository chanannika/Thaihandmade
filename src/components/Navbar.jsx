import React from 'react';
import '../nav_style.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-inside">
    <span className="brand">
        <NavLink to="/">Thai Handmade</NavLink>
    </span>
    <ul className="navbar-nav">
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
        <NavLink to="/contact">Contact</NavLink>
        </li>
        
    </ul>
    </div>
</nav>
  )
}

export default Navbar