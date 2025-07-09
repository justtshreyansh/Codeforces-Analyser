import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">Home</Link>
      </div>
      <div className="navbar-right">
        <Link to="/contest" className="nav-link">Contest</Link>
      </div>
    </nav>
  );
};

export default Navbar;
