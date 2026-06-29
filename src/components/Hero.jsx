import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/Commercial Landscaping/sk-nursery-nasi-and-mee-1-1.jpg" alt="Premium rooftop landscape garden in Bengaluru by SK Nursery" className="hero__bg" />
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1>We Turn Empty Spaces Into<br/><span className="hero__highlight">Beautiful Gardens</span></h1>
        <p className="hero__sub">
          Landscaping, garden design & maintenance across Bengaluru.<br/>
          Trusted by 68+ customers with a ⭐ 4.9/5 rating.
        </p>
        <div className="hero__actions">
          <a href="https://wa.me/918951191884?text=Hi%20SK%20Nursery%2C%20I%20would%20like%20a%20free%20landscaping%20quote."
            target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
            WhatsApp Us
          </a>
          <a href="tel:+918951191884" className="btn btn--outline btn--lg">
            📞 Call 8951191884
          </a>
        </div>
        <p className="hero__note">🚀 Free site visit · No obligation · Honest pricing</p>
      </div>
    </section>
  );
}
