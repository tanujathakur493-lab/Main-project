
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">L</span>
            <h2>LAVENDER</h2>
          </div>

          <p>
            Discover your style with our latest fashion
            collections. Everyday elegance, made for you.
          </p>

          <div className="footer-socials">
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://x.com" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
          <a href="/new-arrivals">New Arrivals</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Customer Service */}
        <div className="footer-links">
          <h3>Customer Care</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Help & Support</a>
          <a href="/shipping">Shipping Policy</a>
          <a href="/returns">Returns & Refunds</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay in Style</h3>
          <p>
            Subscribe to receive updates about new
            collections and exclusive offers.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 LAVENDER. All rights reserved.</p>

        <div className="footer-payment">
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-paypal"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
