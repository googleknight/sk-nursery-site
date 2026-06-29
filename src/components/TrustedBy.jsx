import React, { useState, useEffect } from 'react';
import { BRAND_PROJECTS } from '../data/appData';
import './TrustedBy.css';

export default function TrustedBy() {
  const [modalIndex, setModalIndex] = useState(null);

  // Keyboard navigation for modal
  useEffect(() => {
    function handleKeyDown(e) {
      if (modalIndex === null) return;
      if (e.key === 'Escape') setModalIndex(null);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIndex]);

  const goPrev = () => setModalIndex(prev => (prev - 1 + BRAND_PROJECTS.length) % BRAND_PROJECTS.length);
  const goNext = () => setModalIndex(prev => (prev + 1) % BRAND_PROJECTS.length);

  return (
    <section id="trusted-by" className="trusted-by section">
      <div className="container">
        <div className="section-header">
          <p className="label">Our Clients</p>
          <h2>Trusted by Brands You Know</h2>
          <p>We deliver premium commercial landscaping for leading businesses across Bengaluru.</p>
        </div>

        {/* Brand marquee */}
        <div className="brands-marquee">
          <div className="brands-marquee__track">
            <span>Bombay Brasserie</span><span>Nasi And Mee</span><span>Matka</span>
            <span>Cafe Noir</span><span>Topic Hotel</span><span>BMW</span><span>Mini Cooper</span><span>Ahad</span>
            {/* Duplicate set for infinite scroll */}
            <span>Bombay Brasserie</span><span>Nasi And Mee</span><span>Matka</span>
            <span>Cafe Noir</span><span>Topic Hotel</span><span>BMW</span><span>Mini Cooper</span><span>Ahad</span>
          </div>
        </div>

        <div className="brand-projects__grid">
          {BRAND_PROJECTS.map((bp, idx) => (
            <div key={idx} className="brand-project-card" onClick={() => setModalIndex(idx)}>
              <div className="brand-project-card__img-wrap">
                <span className="brand-project-card__badge">{bp.brand}</span>
                <span className="brand-project-card__location">📍 {bp.location}</span>
                <img src={bp.src} alt={`${bp.brand} - ${bp.title}`} loading="lazy" />
              </div>
              <div className="brand-project-card__content">
                <h3>{bp.title}</h3>
                <p>{bp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalIndex !== null && (
        <div className="modal open" onClick={() => setModalIndex(null)}>
          <span className="modal__close">&times;</span>
          <span className="modal__nav modal__nav--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&#10094;</span>
          <span className="modal__nav modal__nav--next" onClick={(e) => { e.stopPropagation(); goNext(); }}>&#10095;</span>
          
          <img 
            src={BRAND_PROJECTS[modalIndex].src} 
            alt={`${BRAND_PROJECTS[modalIndex].brand} - ${BRAND_PROJECTS[modalIndex].title}`} 
            className="modal__content" 
            onClick={e => e.stopPropagation()} 
          />
          
          <div id="modalCaption">
            <strong>{BRAND_PROJECTS[modalIndex].brand}</strong> - {BRAND_PROJECTS[modalIndex].title}: {BRAND_PROJECTS[modalIndex].desc}
          </div>
        </div>
      )}
    </section>
  );
}
