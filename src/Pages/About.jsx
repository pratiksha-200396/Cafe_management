import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>

      {/* Page Header */}
      <div className="bg-dark text-white text-center py-5">
        <h1>About Foodies Cafe</h1>
        <p className="mb-0">
          Good food, good mood!
        </p>
      </div>

      {/* About Cafe */}
      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
              alt="Foodies Cafe"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6 mt-4 mt-md-0">

            <h2>Welcome to Foodies Cafe</h2>

            <p>
              Foodies Cafe is a comfortable place where
              customers can enjoy fresh food, delicious
              coffee and tasty desserts.
            </p>

            <p>
              We offer a variety of food and beverages
              prepared with quality ingredients and served
              with care.
            </p>

            <p>
              Our aim is to provide a pleasant dining
              experience with good food and friendly service.
            </p>

            <Link
              to="/menu"
              className="btn btn-dark"
            >
              Explore Our Menu
            </Link>

          </div>

        </div>

      </div>

      {/* Our Features */}
      <div className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            What We Offer
          </h2>

          <div className="row">

            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm text-center">

                <div className="card-body">

                  <h1>🍴</h1>

                  <h5>Fresh Food</h5>

                  <p>
                    Freshly prepared food with quality
                    ingredients.
                  </p>

                </div>

              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm text-center">

                <div className="card-body">

                  <h1>☕</h1>

                  <h5>Fresh Beverages</h5>

                  <p>
                    Delicious coffee, tea and other
                    refreshing beverages.
                  </p>

                </div>

              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm text-center">

                <div className="card-body">

                  <h1>😊</h1>

                  <h5>Friendly Service</h5>

                  <p>
                    We provide friendly and comfortable
                    customer service.
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="container py-5 text-center">

        <h2>Want to Try Our Food?</h2>

        <p>
          Explore our menu and place your order.
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

export default About;