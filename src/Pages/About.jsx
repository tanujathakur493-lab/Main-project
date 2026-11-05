
import React from "react";

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">OUR STORY • LAVENDER</span>

          <h1>
            Fashion That Feels
            <span> Like You.</span>
          </h1>

          <p>
            We believe style is more than what you wear.
            It is how you express yourself, celebrate your
            individuality, and feel confident every day.
          </p>

          <a href="#our-story" className="about-btn">
            Discover Our Story
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
            alt="Fashion collection"
          />
          <div className="about-image-label">
            <span>YOUR STYLE</span>
            <strong>Your Story.</strong>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story" id="our-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
            alt="Fashion boutique interior"
          />
        </div>

        <div className="about-story-content">
          <span className="about-eyebrow">A LITTLE ABOUT US</span>
          <h2>Welcome to the World of Lavender</h2>

          <p>
            Lavender was created for people who love expressing
            themselves through fashion. Our collection brings
            together modern trends, timeless essentials, and
            everyday comfort.
          </p>

          <p>
            From clothing and shoes to bags and accessories,
            we make it easier to discover styles that feel
            personal, effortless, and uniquely yours.
          </p>

          <div className="about-signature">
            <span>With love,</span>
            <strong>The Lavender Team</strong>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-section-heading">
          <span className="about-eyebrow">WHAT MAKES US DIFFERENT</span>
          <h2>Style with a Purpose</h2>
          <p>
            Everything we do starts with making your fashion
            experience feel special.
          </p>
        </div>

        <div className="about-values-grid">
          <article className="about-value-card">
            <div className="about-value-icon">
              <i className="fa-regular fa-heart"></i>
            </div>
            <h3>Made for You</h3>
            <p>
              Styles that help you express your personality
              and feel confident in your own way.
            </p>
          </article>

          <article className="about-value-card">
            <div className="about-value-icon">
              <i className="fa-solid fa-gem"></i>
            </div>
            <h3>Timeless Style</h3>
            <p>
              A thoughtful mix of modern trends and everyday
              essentials for your wardrobe.
            </p>
          </article>

          <article className="about-value-card">
            <div className="about-value-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <h3>Everyday Comfort</h3>
            <p>
              Fashion should look good, feel comfortable,
              and fit naturally into your life.
            </p>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <span className="about-eyebrow">YOUR NEXT FAVOURITE LOOK AWAITS</span>
        <h2>Let's Find Your <span>Lavender Moment.</span></h2>
        <p>
          Explore our collection and discover styles
          that feel like you.
        </p>

        <a href="/shop" className="about-btn about-btn-light">
          Explore the Collection
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </main>
  );
}

export default About;
