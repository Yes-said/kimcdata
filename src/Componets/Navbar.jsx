import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  // State for managing the mobile menu visibility
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
      <div className="container">
        {/* Navbar items */}
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={Logo} alt="Logo" style={{ maxHeight: '50px' }} />
          </a>

          {/* Hamburger menu for mobile */}
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive ? 'true' : 'false'}
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* Navbar menu */}
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/about" className="navbar-item">
              About us
            </a>
            <a href="/services" className="navbar-item">
              Contact us
            </a>
            {/* Add more navbar items as needed */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
