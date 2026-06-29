import React from 'react';
import { SERVICES } from '../data/appData';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <p className="label">What We Do</p>
          <h2>Landscaping Services</h2>
          <p>From design to maintenance — everything your garden needs.</p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
