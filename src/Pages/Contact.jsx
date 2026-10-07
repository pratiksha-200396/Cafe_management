import React from "react";

function Contact() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Contact Us</h1>
        <p className="mb-0">We would love to hear from you</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-md-5">
            <h3 className="mb-4">Get In Touch</h3>

            <div className="mb-3">
              <h5>📍 Address</h5>
              <p className="text-muted">
                FC Road, Pune, Maharashtra
              </p>
            </div>

            <div className="mb-3">
              <h5>📞 Phone</h5>
              <p className="text-muted">
                +91 9876543210
              </p>
            </div>

            <div className="mb-3">
              <h5>📧 Email</h5>
              <p className="text-muted">
                foodiescafe@gmail.com
              </p>
            </div>

            <div className="mb-3">
              <h5>🕒 Opening Hours</h5>
              <p className="text-muted">
                Monday - Sunday: 10:00 AM - 10:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow-sm p-4">
              <h3 className="mb-4">Send Us a Message</h3>

              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your contact number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;