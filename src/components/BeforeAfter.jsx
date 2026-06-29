import React, { useState } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/appData';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const [visibleCount, setVisibleCount] = useState(4);
  const toShow = BEFORE_AFTER_ITEMS.slice(0, visibleCount);
  const hasMore = BEFORE_AFTER_ITEMS.length > visibleCount;

  return (
    <section id="before-after" className="before-after section">
      <div className="container">
        <div className="section-header">
          <p className="label">See the Change</p>
          <h2>Before &amp; After Transformations</h2>
          <p>Drag the sliders to reveal the green transformations we bring to barren spaces.</p>
        </div>

        <div className="before-after__grid">
          {toShow.map((item, idx) => (
            <BeforeAfterItem key={idx} item={item} />
          ))}
        </div>

        {hasMore && (
          <div className="before-after__actions">
            <button className="btn btn--gold" onClick={() => setVisibleCount(v => v + 4)}>
              View More Transformations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function BeforeAfterItem({ item }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="before-after__item">
      <div className="ba-slider" style={{ '--pos': `${pos}%` }}>
        <img src={item.after} alt={`After: ${item.title}`} className="ba-slider__img-after" loading="lazy" />
        <span className="ba-slider__label ba-slider__label--after">After</span>

        <img src={item.before} alt={`Before: ${item.title}`} className="ba-slider__img-before" loading="lazy" />
        <span className="ba-slider__label ba-slider__label--before">Before</span>

        <div className="ba-slider__handle">
          <div className="ba-slider__btn">⇄</div>
        </div>
        <input 
          type="range" 
          min="0" max="100" 
          value={pos} 
          onChange={(e) => setPos(e.target.value)} 
          className="ba-slider__range" 
          aria-label="Drag to compare" 
        />
      </div>
      <p className="before-after__caption">{item.title}</p>
      <p className="before-after__desc">{item.desc}</p>
    </div>
  );
}
