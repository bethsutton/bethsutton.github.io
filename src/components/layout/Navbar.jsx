import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar fixedTop navbar-expand-sm navbar-light bg-primary-new py-2">
      <div className="container-fluid">
        {/* LOGO */}
        <a href="#" className="navbar-brand"></a>
        {/* NAVBAR COLLAPSE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* COLLAPSIBLE NAVBAR */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active mx-3">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
