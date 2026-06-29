import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </span>
          <span className="navbar__logo-text">SK Nursery<span className="navbar__logo-sub">&amp; Garden Work's</span></span>
        </a>
        <div className="navbar__links">
          <a href="#work">Our Work</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#quote">Get Quote</a>
        </div>
        <div className="navbar__cta-wrap">
          <a href="tel:+918951191884" className="navbar__cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            Call Now
          </a>
        </div>
        <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="navbar__mobile-menu">
          <a href="#work" onClick={() => setIsOpen(false)}>Our Work</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#quote" onClick={() => setIsOpen(false)}>Get Quote</a>
          <a href="tel:+918951191884">📞 Call Now</a>
        </div>
      )}
    </nav>
  );
}
