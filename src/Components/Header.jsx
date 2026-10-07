import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Cafe Name */}
        <Link className="navbar-brand fw-bold" to="/">
          ☕ Foodies Cafe
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#cafeNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="cafeNavbar"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/order">
                Order
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/order-details">
                Order Details
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;