import React from 'react';
import { TESTIMONIALS } from '../data/appData';
import './Reviews.css';

export default function Reviews() {
  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div className="section-header">
          <p className="label">What Clients Say</p>
          <h2>Loved by Homeowners Across Bengaluru</h2>
          <p>Read honest reviews from our residential garden clients.</p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-card__stars">{'⭐'.repeat(t.rating)}</div>
              <p className="testimonial-card__text">"{t.text}"</p>
              <div className="testimonial-card__author">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
