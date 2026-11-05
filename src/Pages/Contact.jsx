
import React from "react";

function Contact() {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <span className="contact-eyebrow">WE'RE HERE FOR YOU</span>
        <h1>Let's Start a <span>Conversation.</span></h1>
        <p>
          Have a question about your order, our collection, or anything else?
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h2>We'd Love to Hear From You</h2>
          <p className="contact-description">
            Your experience matters to us. Send us a message and
            we'll do our best to help.
          </p>

          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>hello@lavender.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday – Saturday</p>
              <p>10:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="contact-socials">
            <h3>Follow Our Journey</h3>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>Fill in the details below and let's talk.</p>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <select id="contact-subject" defaultValue="" required>
                <option value="" disabled>Select a subject</option>
                <option value="order">Order Enquiry</option>
                <option value="product">Product Information</option>
                <option value="return">Returns & Exchanges</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="contact-bottom">
        <div>
          <span className="contact-eyebrow">A LITTLE HELP GOES A LONG WAY</span>
          <h2>Your Questions, Our Care.</h2>
          <p>We're here to make your Lavender experience special.</p>
        </div>
        <i className="fa-regular fa-heart contact-bottom-heart"></i>
      </section>
    </main>
  );
}

export default Contact;
