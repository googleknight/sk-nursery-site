import React, { useState } from 'react';
import { PRICING } from '../data/appData';
import './QuoteCalculator.css';

export default function QuoteCalculator() {
  const [service, setService] = useState('landscaping');
  const [size, setSize] = useState(500);

  const p = PRICING[service];
  const min = Math.round(p.min * size);
  const max = Math.round(p.max * size);
  
  const waText = encodeURIComponent(
    `Hi SK Nursery, I would like a free landscaping quote.\n\nService: ${p.label}\nGarden size: ${size} sq.ft\nEstimated range: Rs ${min.toLocaleString('en-IN')} - Rs ${max.toLocaleString('en-IN')}\n\nPlease confirm a free site visit.`
  );

  return (
    <section id="quote" className="quote section">
      <div className="container">
        <div className="section-header">
          <p className="label">Let's Talk</p>
          <h2>Get Your Free Quote</h2>
          <p>Estimate your project cost in seconds, then reach out directly.</p>
        </div>
        <div className="quote__card">
          <div className="quote__form">
            <div>
              <label htmlFor="serviceType">Service Type</label>
              <select id="serviceType" value={service} onChange={(e) => setService(e.target.value)}>
                <option value="design">Garden Design</option>
                <option value="landscaping">Garden Landscaping</option>
                <option value="lawn">Lawn / Turf Installation</option>
                <option value="tree">Tree Plantation</option>
                <option value="rock">Rock / Stone Landscaping</option>
                <option value="levelling">Garden Levelling &amp; Grading</option>
                <option value="maintenance">Landscape Maintenance</option>
                <option value="balcony">Balcony &amp; Terrace Gardens</option>
                <option value="commercial">Commercial Landscaping</option>
              </select>
            </div>
            <div>
              <div className="quote__size-header">
                <label htmlFor="gardenSize">Garden Size</label>
                <span className="quote__size-value">{size} sq.ft</span>
              </div>
              <input type="range" id="gardenSize" min="50" max="5000" step="50" value={size} onChange={(e) => setSize(Number(e.target.value))} />
              <div className="quote__range-labels"><span>50</span><span>5000</span></div>
            </div>
          </div>
          <div className="quote__result">
            <div>
              <p className="quote__result-label">📐 Estimated cost</p>
              <p className="quote__result-price">₹{min.toLocaleString('en-IN')} – ₹{max.toLocaleString('en-IN')}</p>
              <p className="quote__result-note">Indicative range for {p.label}. Final price confirmed after a free site visit.</p>
            </div>
            <div className="quote__result-buttons">
              <a href={`https://wa.me/918951191884?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp-sm">
                Send on WhatsApp
              </a>
              <a href="tel:+918951191884" className="btn btn--outline">📞 Call Now</a>
            </div>
          </div>
        </div>

        <div className="contact-strip">
          <div className="contact-strip__item">📍 Bengaluru, Karnataka</div>
          <div className="contact-strip__item">🕐 All days · 8 AM – 11 PM</div>
          <div className="contact-strip__item">🚀 Free site visit</div>
        </div>
      </div>
    </section>
  );
}
