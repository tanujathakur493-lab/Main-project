
import React from "react";
function Banner() {
  return (
    <section className="hero-banner">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-tag">
            NEW SEASON COLLECTION
          </span>

          <h1>
            Style Your World
            <span className="hero-highlight">
              with Lavender
            </span>
          </h1>

          <p className="hero-description">
            Discover the latest trends in fashion, designed
            to bring out the best in you. Fresh looks,
            timeless style.
          </p>

          <a href="/shop" className="hero-btn">
            Shop Now
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">
                <i className="fa-solid fa-truck-fast"></i>
              </span>
              <div>
                <h4>Free Shipping</h4>
                <p>On all orders</p>
              </div>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </span>
              <div>
                <h4>Secure Payment</h4>
                <p>100% safe</p>
              </div>
            </div>

            <div className="hero-feature">
              <span className="feature-icon">
                <i className="fa-solid fa-rotate-left"></i>
              </span>
              <div>
                <h4>Easy Returns</h4>
                <p>Hassle free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-visual">
          <div className="hero-image-bg"></div>

          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
            alt="Lavender fashion collection"
          />

          <div className="discount-badge">
            <span>UP TO</span>
            <strong>50%</strong>
            <span>OFF</span>
          </div>

          <div className="hero-sticker">
            New Style
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
