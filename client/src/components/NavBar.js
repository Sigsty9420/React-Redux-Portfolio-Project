import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className="navbar navbar-default">
      <NavLink to="/" className="navbar-brand">Home</NavLink>
      <NavLink to="/about" className="navbar-brand">About</NavLink>
    </nav>
  );
}

export default NavBar;
