import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© 2026 SK Nursery And Garden Work's · Bengaluru</span>
        <div className="footer__links">
          <a href="tel:+918951191884">📞 8951191884</a>
          <a href="https://wa.me/918951191884?text=Hi%20SK%20Nursery%2C%20I%20would%20like%20a%20free%20landscaping%20quote." target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
