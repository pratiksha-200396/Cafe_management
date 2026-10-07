import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1 className="display-5 fw-bold">
                Welcome to Foodies Cafe ☕
              </h1>

              <p className="lead">
                Delicious food, fresh coffee and a
                comfortable place to enjoy with your
                friends and family.
              </p>

              <Link
                to="/menu"
                className="btn btn-dark me-2"
              >
                View Menu
              </Link>

              <Link
                to="/order"
                className="btn btn-outline-dark"
              >
                Order Now
              </Link>

            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">

              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Cafe"
                className="img-fluid rounded"
              />

            </div>

          </div>

        </div>
      </div>

      {/* Our Specialties */}
      <div className="container py-5">

        <h2 className="text-center mb-4">
          Our Specialties
        </h2>

        <div className="row">

          {/* Coffee */}
          <div className="col-md-4 mb-4">

            <div className="card h-100 shadow-sm text-center">

              <div className="card-body">

                <h1>☕</h1>

                <h5 className="card-title">
                  Fresh Coffee
                </h5>

                <p className="card-text">
                  Enjoy freshly prepared hot and cold
                  coffee made with quality ingredients.
                </p>

              </div>

            </div>

          </div>

          {/* Food */}
          <div className="col-md-4 mb-4">

            <div className="card h-100 shadow-sm text-center">

              <div className="card-body">

                <h1>🍔</h1>

                <h5 className="card-title">
                  Delicious Food
                </h5>

                <p className="card-text">
                  Tasty snacks, burgers, sandwiches and
                  other delicious food options.
                </p>

              </div>

            </div>

          </div>

          {/* Desserts */}
          <div className="col-md-4 mb-4">

            <div className="card h-100 shadow-sm text-center">

              <div className="card-body">

                <h1>🍰</h1>

                <h5 className="card-title">
                  Sweet Desserts
                </h5>

                <p className="card-text">
                  Enjoy cakes, pastries and delicious
                  desserts after your meal.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Why Choose Foodies Cafe?
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-3">
              <h3>🍴</h3>
              <h6>Fresh Food</h6>
              <p>Freshly prepared food</p>
            </div>

            <div className="col-md-3 mb-3">
              <h3>☕</h3>
              <h6>Quality Coffee</h6>
              <p>Fresh and tasty coffee</p>
            </div>

            <div className="col-md-3 mb-3">
              <h3>💰</h3>
              <h6>Affordable Price</h6>
              <p>Great food at reasonable prices</p>
            </div>

            <div className="col-md-3 mb-3">
              <h3>😊</h3>
              <h6>Good Service</h6>
              <p>Friendly customer service</p>
            </div>

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="container py-5 text-center">

        <h2>Hungry?</h2>

        <p>
          Check our menu and place your order now.
        </p>

        <Link
          to="/order"
          className="btn btn-dark"
        >
          Order Now
        </Link>

      </div>

    </div>
  );
}

export default Home;