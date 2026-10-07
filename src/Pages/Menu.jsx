import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>

      {/* Page Header */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Our Menu</h1>
        <p className="mb-0">
          Delicious food and beverages
        </p>
      </div>

      {/* Menu Items */}
      <div className="container py-5">

        <div className="row">

          {/* Coffee */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body text-center">

                <h1>☕</h1>

                <h4>Cappuccino</h4>

                <p>
                  Freshly prepared cappuccino with
                  rich coffee and milk.
                </p>

                <h5>₹120</h5>

                <Link
                  to="/order"
                  className="btn btn-dark mt-2"
                >
                  Order Now
                </Link>

              </div>

            </div>
          </div>

          {/* Burger */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body text-center">

                <h1>🍔</h1>

                <h4>Veg Burger</h4>

                <p>
                  Delicious vegetable burger with
                  fresh vegetables and sauces.
                </p>

                <h5>₹150</h5>

                <Link
                  to="/order"
                  className="btn btn-dark mt-2"
                >
                  Order Now
                </Link>

              </div>

            </div>
          </div>

          {/* Pizza */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body text-center">

                <h1>🍕</h1>

                <h4>Veg Pizza</h4>

                <p>
                  Tasty pizza topped with fresh vegetables
                  and melted cheese.
                </p>

                <h5>₹250</h5>

                <Link
                  to="/order"
                  className="btn btn-dark mt-2"
                >
                  Order Now
                </Link>

              </div>

            </div>
          </div>

          {/* Sandwich */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body text-center">

                <h1>🥪</h1>

                <h4>Veg Sandwich</h4>

                <p>
                  Fresh and crispy sandwich prepared
                  with vegetables and cheese.
                </p>

                <h5>₹100</h5>

                <Link
                  to="/order"
                  className="btn btn-dark mt-2"
                >
                  Order Now
                </Link>

              </div>

            </div>
          </div>

          {/* Pasta */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body text-center">

                <h1>🍝</h1>

                <h4>White Sauce Pasta</h4>

                <p>
                  Creamy white sauce pasta with
                  fresh vegetables.
                </p>

                <h5>₹180</h5>

                <Link
                  to="/order"
                  className="btn btn-dark mt-2"
                >
                  Order Now
                </Link>

              </div>

            </div>
          </div>

          {/* Cake */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              <div className="card-body text-center">

                <h1>🍰</h1>

                <h4>Chocolate Cake</h4>

                <p>
                  Soft and delicious chocolate cake
                  for dessert lovers.
                </p>

                <h5>₹140</h5>

                <Link
                  to="/order"
                  className="btn btn-dark mt-2"
                >
                  Order Now
                </Link>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom CTA */}
      <div className="bg-light text-center py-5">

        <h3>Ready to Order?</h3>

        <p>
          Choose your favourite food and place your order.
        </p>

        <Link
          to="/order"
          className="btn btn-dark"
        >
          Place Order
        </Link>

      </div>

    </div>
  );
}

export default Menu;