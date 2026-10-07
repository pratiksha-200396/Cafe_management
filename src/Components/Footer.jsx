import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-4">

        <div className="row">

          {/* Cafe Information */}
          <div className="col-md-4">
            <h5>☕ Foodies Cafe</h5>

            <p>
              Fresh food, delicious coffee and a
              comfortable place to enjoy your time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">

            <h5>Quick Links</h5>

            <p>
              <Link
                to="/"
                className="text-white text-decoration-none"
              >
                Home
              </Link>
            </p>

            <p>
              <Link
                to="/menu"
                className="text-white text-decoration-none"
              >
                Menu
              </Link>
            </p>

            <p>
              <Link
                to="/order"
                className="text-white text-decoration-none"
              >
                Order
              </Link>
            </p>

          </div>

          {/* Contact */}
          <div className="col-md-4">

            <h5>Contact Us</h5>

            <p>📍 Pune, Maharashtra</p>
            <p>📞 9876543210</p>
            <p>📧 foodiescafe@gmail.com</p>

          </div>

        </div>

        <hr />

        <div className="text-center">

          <p className="mb-0">
            © 2026 Foodies Cafe. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;