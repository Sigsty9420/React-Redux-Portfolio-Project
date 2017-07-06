import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav className="navbar navbar-default col-md-offset-4 col-md-4">
      <NavLink to="/" className="navbar-brand">Home</NavLink>
      <NavLink to="/favourite_city" className="navbar-brand">Favourite City</NavLink>
      <NavLink to="/about" className="navbar-brand">About</NavLink>
    </nav>
  );
}

export default NavBar;
