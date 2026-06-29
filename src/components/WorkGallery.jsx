import React, { useState, useEffect } from 'react';
import galleryData from '../data/galleryData.json';
import './WorkGallery.css';

export default function WorkGallery() {
  // Exclude Commercial Landscaping tag if it exists in the auto-generated tags
  const tags = galleryData.tags.filter(tag => tag !== 'Commercial Landscaping');
  
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
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

  // Filter gallery items (excluding Commercial Landscaping)
  const filtered = (activeTab === 'All' 
    ? galleryData.items.filter(item => item.tag !== 'Commercial Landscaping')
    : galleryData.items.filter(item => item.tag === activeTab)
  );

  const toShow = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const goPrev = () => setModalIndex(prev => (prev - 1 + filtered.length) % filtered.length);
  const goNext = () => setModalIndex(prev => (prev + 1) % filtered.length);

  return (
    <section id="work" className="work section">
      <div className="container">
        <div className="section-header">
          <p className="label">Our Portfolio</p>
          <h2>Beautiful Residential Gardens</h2>
          <p>Explore our recent garden layouts, lawns, and terrace designs across Bengaluru.</p>
        </div>

        <div className="work__tabs">
          {tags.map(tag => (
            <button 
              key={tag} 
              className={`work__tab ${activeTab === tag ? 'active' : ''}`}
              onClick={() => { setActiveTab(tag); setVisibleCount(6); }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="work__grid">
          {toShow.map((item, idx) => {
            const isVideo = item.src.match(/\.(mp4|webm)$/i);
            return (
              <figure key={idx} className="work__item" onClick={() => setModalIndex(idx)}>
                {isVideo ? (
                  <video src={item.src} autoPlay loop muted playsInline />
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}
                <figcaption>{item.tag}</figcaption>
              </figure>
            )
          })}
        </div>

        {hasMore && (
          <div className="work__actions">
            <button className="btn btn--gold" onClick={() => setVisibleCount(v => v + 6)}>
              View More Projects
            </button>
          </div>
        )}
      </div>

      {modalIndex !== null && (
        <div className="modal open" onClick={() => setModalIndex(null)}>
          <span className="modal__close">&times;</span>
          <span className="modal__nav modal__nav--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&#10094;</span>
          <span className="modal__nav modal__nav--next" onClick={(e) => { e.stopPropagation(); goNext(); }}>&#10095;</span>
          
          {filtered[modalIndex].src.match(/\.(mp4|webm)$/i) ? (
            <video src={filtered[modalIndex].src} className="modal__content" controls autoPlay onClick={e => e.stopPropagation()} />
          ) : (
            <img src={filtered[modalIndex].src} alt={filtered[modalIndex].alt} className="modal__content" onClick={e => e.stopPropagation()} />
          )}
          <div id="modalCaption">{filtered[modalIndex].alt}</div>
        </div>
      )}
    </section>
  );
}
