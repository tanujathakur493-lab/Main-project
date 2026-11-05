
import React from "react";

function Checkout() {
  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h2 className="logo">lavender<span>.</span></h2>
        <p>Secure Checkout 🔒</p>
      </header>

      <main className="checkout-wrapper">
        <div className="checkout-form">
          <h1>Checkout</h1>
          <p className="subtitle">
            Complete your purchase with love.
          </p>

          <div className="form-card">
            <h3>01. Contact Information</h3>

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="form-card">
            <h3>02. Shipping Address</h3>

            <div className="input-row">
              <div>
                <label>First Name</label>
                <input placeholder="First name" />
              </div>
              <div>
                <label>Last Name</label>
                <input placeholder="Last name" />
              </div>
            </div>

            <label>Street Address</label>
            <input placeholder="House number and street name" />

            <div className="input-row">
              <div>
                <label>City</label>
                <input placeholder="City" />
              </div>
              <div>
                <label>PIN Code</label>
                <input placeholder="PIN code" />
              </div>
            </div>

            <label>State</label>
            <input placeholder="State" />
          </div>

          <div className="form-card">
            <h3>03. Payment Method</h3>

            <div className="payment-card">
              <span>💳</span>
              <div>
                <strong>Credit / Debit Card</strong>
                <p>Visa, Mastercard and more</p>
              </div>
            </div>

            <div className="payment-card">
              <span>📱</span>
              <div>
                <strong>UPI Payment</strong>
                <p>Google Pay, PhonePe, Paytm</p>
              </div>
            </div>

            <div className="payment-card">
              <span>💵</span>
              <div>
                <strong>Cash on Delivery</strong>
                <p>Pay when your order arrives</p>
              </div>
            </div>
          </div>

          <button className="order-btn">
            Place Your Order →
          </button>
        </div>

        <aside className="order-summary">
          <h2>Order Summary</h2>

          <div className="product-item">
            <img
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200"
              alt="Body lotion"
            />
            <div className="product-info">
              <h4>Lavender Body Lotion</h4>
              <p>Quantity: 1</p>
              <strong>₹499</strong>
            </div>
          </div>

          <div className="product-item">
            <img
              src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200"
              alt="Face cream"
            />
            <div className="product-info">
              <h4>Lavender Face Cream</h4>
              <p>Quantity: 1</p>
              <strong>₹699</strong>
            </div>
          </div>

          <div className="coupon-box">
            <input placeholder="Discount code" />
            <button>Apply</button>
          </div>

          <div className="price-row">
            <span>Subtotal</span>
            <span>₹1,198</span>
          </div>

          <div className="price-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>

          <div className="price-row total">
            <strong>Total</strong>
            <strong>₹1,198</strong>
          </div>

          <p className="secure-note">
            ♡ Carefully packed, lovingly delivered.
          </p>
        </aside>
      </main>
    </div>
  );
}

export default Checkout;
