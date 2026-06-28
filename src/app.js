/* ===== SK Nursery — App Logic ===== */

// ---------- Data ----------
const PHONE = '918951191884';
const WA_BASE = `https://wa.me/${PHONE}?text=`;

const SERVICES = [
  { icon: '🌿', title: 'Garden Design', desc: 'Custom layouts tailored to your space and style.' },
  { icon: '🏡', title: 'Garden Landscaping', desc: 'Complete transformation of lawns and yards.' },
  { icon: '✨', title: 'Garden Decorating', desc: 'Statues, fountains, lighting and decor accents.' },
  { icon: '🪜', title: 'Garden Levelling', desc: 'Precise grading for an even, usable surface.' },
  { icon: '🌱', title: 'Landscaping Installation', desc: 'Turf, beds, pathways and plant installation.' },
  { icon: '🧰', title: 'Landscape Maintenance', desc: 'Regular upkeep to keep gardens thriving.' },
  { icon: '🌳', title: 'Tree Landscaping', desc: 'Tree plantation, shaping and placement.' },
  { icon: 'ke', title: 'Rock Landscaping', desc: 'Pebble beds, boulders and zen rock gardens.' },
  { icon: '📐', title: 'Grading & Resloping', desc: 'Drainage-friendly slope correction.' },
  { icon: '🌇', title: 'Balcony & Terrace Gardens', desc: 'Space-saving vertical and container gardens.' },
  { icon: '🏢', title: 'Commercial Landscaping', desc: 'Corporate, cafe, and showroom green spaces.' },
  { icon: '📋', title: 'Landscape Management', desc: 'End-to-end project planning and delivery.' },
];

const WHY_US = [
  { icon: '⭐', title: '4.9 Star Rating', desc: 'Loved by customers across Bengaluru.' },
  { icon: '💬', title: '68+ Reviews', desc: 'Real feedback from happy clients.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Premium work at honest rates.' },
  { icon: '👷', title: 'Experienced Team', desc: 'Skilled landscapers and gardeners.' },
  { icon: '⏱️', title: 'On-Time Delivery', desc: 'Projects finished as promised.' },
  { icon: '🔍', title: 'Free Site Inspection', desc: 'We visit and quote at no cost.' },
  { icon: '🪴', title: 'Premium Quality Plants', desc: 'Healthy nursery-grown greenery.' },
];

const TESTIMONIALS = [
  {
    name: "Ravi Kumar",
    role: "Homeowner, Indiranagar",
    text: "SK Nursery transformed our barren terrace into a beautiful green oasis. Their team was professional and finished ahead of schedule.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Villa Owner, Whitefield",
    text: "Amazing landscaping work! They understood my vision for a zen rock garden and executed it perfectly. Highly recommended.",
    rating: 5
  },
  {
    name: "Anand M.",
    role: "Property Manager, Koramangala",
    text: "We use SK Nursery for regular landscape maintenance. Our tech park has never looked better. Great service and reliable staff.",
    rating: 5
  }
];

const BEFORE_AFTER_ITEMS = [
  {
    title: 'Terrace Garden Transformation',
    before: 'images/Before-After/Before-1.jpg',
    after: 'images/Before-After/After-1.jpg',
    desc: 'Overgrown terrace lawn transformed into a manicured garden with pebble borders, ornamental plants, and ambient lighting.'
  },
  {
    title: 'EV Charging Zone Landscaping',
    before: 'images/Before-After/Before-2.jpg',
    after: 'images/Before-After/After-2.jpg',
    desc: 'Bare parking planter beds upgraded with a vibrant mix of seasonal flowers, cypress trees, and flowering shrubs around the EV charging zone.'
  },
  {
    title: 'Driveway Garden Makeover',
    before: 'images/Before-After/Before-3.jpg',
    after: 'images/Before-After/After-3.jpg',
    desc: 'Plain lawn with stepping stones elevated with lush turf, pebble edging, colourful potted plants, and warm garden lights.'
  },
  {
    title: 'Boundary Wall Planting',
    before: 'images/Before-After/Before-4.jpg',
    after: 'images/Before-After/After-4.jpg',
    desc: 'Bare mud patch along boundary wall turned into a multi-layered flower bed with cypress, crotons, lantana, and golden duranta.'
  },
  {
    title: 'Compound Garden & Fountain Setup',
    before: 'images/Before-After/Before-5.jpg',
    after: 'images/Before-After/After-5.jpg',
    desc: 'Unstructured compound greenery redesigned into a formal garden with a centrepiece fountain, shaped hedges, and ornamental shrubs.'
  },
  {
    title: 'Rooftop Terrace Lounge',
    before: 'images/Before-After/Before-6.jpg',
    after: 'images/Before-After/After-6.jpg',
    desc: 'Empty concrete rooftop converted into a luxurious lounge with artificial turf, pergola, waterfall feature, and ambient lighting.'
  },
  {
    title: 'Terrace Kitchen Garden',
    before: 'images/Before-After/Before-7.jpg',
    after: 'images/Before-After/After-7.jpg',
    desc: 'Cluttered terrace space cleared and redesigned with raised bed planters, turf patch, and a productive kitchen garden layout.'
  },
  {
    title: 'Villa Side Garden Revival',
    before: 'images/Before-After/Before-8.jpg',
    after: 'images/Before-After/After-8.jpg',
    desc: 'Neglected villa side yard with overgrown pots rejuvenated into a neat lawn with hedge borders and pergola seating area.'
  },
  {
    title: 'Matka Restaurant Vertical Garden',
    before: 'images/Before-After/Before-9.jpg',
    after: 'images/Before-After/After-9.jpg',
    desc: 'Sparse vertical planter wall around the Matka brand signage filled with lush tropical plants for a stunning green entrance.'
  }
];

const BRAND_PROJECTS = [
  {
    brand: 'Bombay Brasserie',
    title: 'Outdoor Garden Dining Area',
    desc: 'Lush boundary hedging and beautiful planter beds for an immersive green dining experience.',
    src: 'images/Commercial Landscaping/sk-nursery-bombay-brassere.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Cafe Noir',
    title: 'Cafe Courtyard Garden',
    desc: 'Stylish vertical planters and potted evergreen shrubs creating a cozy European cafe atmosphere.',
    src: 'images/Commercial Landscaping/sk-nursery-cafe-noir-1-1.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Cafe Noir',
    title: 'Terrace Cafe Landscaping',
    desc: 'Custom planter design and lighting integration for a high-end rooftop dining experience.',
    src: 'images/Commercial Landscaping/sk-nursery-cafe-noir-1-2.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Nasi And Mee',
    title: 'Asian Bistro Green Wall',
    desc: 'A dense, vibrant vertical garden accent wall blending modern dining with nature.',
    src: 'images/Commercial Landscaping/sk-nursery-nasi-and-mee-1-1.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Nasi And Mee',
    title: 'Exterior Entryway Planters',
    desc: 'Premium ornamental palms and neat gravel beds at the main entrance facade.',
    src: 'images/Commercial Landscaping/sk-nursery-nasi-and-mee-1-2.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Nasi And Mee',
    title: 'Balcony Dining Greens',
    desc: 'Hanging flower baskets and neat turf tiles on the balcony seating area.',
    src: 'images/Commercial Landscaping/sk-nursery-nasi-and-mee-2-1.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Nasi And Mee',
    title: 'Veranda Seating Greenery',
    desc: 'Ornamental leaf plants and custom wooden divider planters separating dining booths.',
    src: 'images/Commercial Landscaping/sk-nursery-nasi-and-mee-2-2.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Nasi And Mee',
    title: 'Indoor Dining Accent Plants',
    desc: 'A collection of air-purifying indoor plants placed strategically to enhance interior wellness.',
    src: 'images/Commercial Landscaping/sk-nursery-nasi-and-mee-2-3.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Topic Hotel',
    title: 'Hotel Entrance Landscaping',
    desc: 'Lush border hedge rows and ornamental planter landscaping welcoming guests.',
    src: 'images/Commercial Landscaping/sk-nursery-topic-hotel-1.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Topic Hotel (Matka)',
    title: 'Traditional Courtyard Green Wall',
    desc: 'A stunning vertical garden setup highlighting the Matka outdoor brand seating.',
    src: 'images/Commercial Landscaping/sk-nursery-topic-hotel-2.jpg',
    location: 'Bengaluru'
  },
  {
    brand: 'Commercial Office',
    title: 'Office Facade Greens',
    desc: 'Lush planters and elegant boundary greenery decorating the corporate office entry.',
    src: 'images/Commercial Landscaping/sk-nursery-office-entrance-greenery.jpg',
    location: 'Bengaluru'
  }
];

// GALLERY_ITEMS and GALLERY_TAGS are now loaded automatically from gallery-data.js

const PRICING = {
  design:      { min: 55, max: 75, label: 'garden design' },
  landscaping: { min: 86.7, max: 117.3, label: 'garden landscaping' },
  lawn:        { min: 30, max: 50, label: 'lawn / turf installation' },
  tree:        { min: 20, max: 40, label: 'tree plantation' },
  rock:        { min: 100, max: 140, label: 'rock / stone landscaping' },
  levelling:   { min: 25, max: 45, label: 'garden levelling & grading' },
  maintenance: { min: 5, max: 15, label: 'landscape maintenance' },
  balcony:     { min: 150, max: 250, label: 'balcony & terrace gardens' },
  commercial:  { min: 60, max: 90, label: 'commercial landscaping' },
};

// ---------- Render Functions ----------
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card reveal reveal-delay-${i % 3}">
      <div class="service-card__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderWhyUs() {
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = WHY_US.map((w, i) => `
    <div class="why-card reveal reveal-delay-${i % 3}">
      <div class="why-card__icon">${w.icon}</div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if(!grid) return;
  grid.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card reveal reveal-delay-${i % 3}">
      <div class="testimonial-card__stars">
        ${'⭐'.repeat(t.rating)}
      </div>
      <p class="testimonial-card__text">"${t.text}"</p>
      <div class="testimonial-card__author">
        <h4>${t.name}</h4>
        <p>${t.role}</p>
      </div>
    </div>
  `).join('');
}

let currentGalleryItems = [];
let maxVisible = 6;

function renderGallery(filter = 'All', resetMax = true) {
  const masonry = document.getElementById('galleryMasonry');
  const actions = document.getElementById('galleryActions');
  
  if (resetMax) maxVisible = 6;
  
  currentGalleryItems = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.tag === filter);
  
  const toShow = currentGalleryItems.slice(0, maxVisible);
  
  masonry.innerHTML = toShow.map(g => {
    const isVideo = g.src.toLowerCase().endsWith('.mp4') || g.src.toLowerCase().endsWith('.webm');
    const media = isVideo 
      ? `<video src="${g.src}" autoplay loop muted playsinline></video>`
      : `<img src="${g.src}" alt="${g.alt}" loading="lazy">`;
    return `
      <figure class="gallery__item reveal">
        ${media}
        <figcaption>${g.tag}</figcaption>
      </figure>
    `;
  }).join('');
  
  if (currentGalleryItems.length > maxVisible) {
    actions.style.display = 'block';
  } else {
    actions.style.display = 'none';
  }
  
  observeReveal();
}

function renderGalleryTabs() {
  const tabs = document.getElementById('galleryTabs');
  tabs.innerHTML = GALLERY_TAGS.map(tag =>
    `<button class="gallery__tab${tag === 'All' ? ' active' : ''}" data-tag="${tag}">${tag}</button>`
  ).join('');
  tabs.addEventListener('click', (e) => {
    if (!e.target.classList.contains('gallery__tab')) return;
    tabs.querySelectorAll('.gallery__tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    renderGallery(e.target.dataset.tag, true);
  });
}

// ---------- Render Brand Projects ----------
function renderBrandProjects() {
  const grid = document.getElementById('brandProjectsGrid');
  if (!grid) return;
  
  grid.innerHTML = BRAND_PROJECTS.map(bp => `
    <div class="brand-project-card reveal">
      <div class="brand-project-card__img-wrap">
        <span class="brand-project-card__badge">${bp.brand}</span>
        <span class="brand-project-card__location">📍 ${bp.location}</span>
        <img src="${bp.src}" alt="${bp.brand} - ${bp.title}" loading="lazy">
      </div>
      <div class="brand-project-card__content">
        <h3>${bp.title}</h3>
        <p>${bp.desc}</p>
      </div>
    </div>
  `).join('');
}

// ---------- Render Before & After ----------
let maxVisibleBA = 4;

function renderBeforeAfter(resetMax = true) {
  const grid = document.getElementById('beforeAfterGrid');
  const actions = document.getElementById('beforeAfterActions');
  if (!grid) return;
  
  if (resetMax) maxVisibleBA = 4;
  
  const toShow = BEFORE_AFTER_ITEMS.slice(0, maxVisibleBA);
  
  grid.innerHTML = toShow.map(item => `
    <div class="before-after__item reveal">
      <div class="ba-slider">
        <img src="${item.after}" alt="After: ${item.title}" class="ba-slider__img-after" loading="lazy">
        <span class="ba-slider__label ba-slider__label--after">After</span>

        <img src="${item.before}" alt="Before: ${item.title}" class="ba-slider__img-before" loading="lazy">
        <span class="ba-slider__label ba-slider__label--before">Before</span>

        <div class="ba-slider__handle">
          <div class="ba-slider__btn">⇄</div>
        </div>
        <input type="range" min="0" max="100" value="50" class="ba-slider__range" aria-label="Drag to compare">
      </div>
      <p class="before-after__caption">${item.title}</p>
      <p class="before-after__desc" style="text-align:center; font-size:0.875rem; color:rgba(247,250,242,.75); margin-top:-0.5rem; padding-inline:1rem;">${item.desc}</p>
    </div>
  `).join('');
  
  if (BEFORE_AFTER_ITEMS.length > maxVisibleBA) {
    if (actions) actions.style.display = 'block';
  } else {
    if (actions) actions.style.display = 'none';
  }
  
  initBeforeAfterSliders();
  observeReveal();
}

// ---------- Quote Calculator ----------
function initQuoteCalculator() {
  const serviceEl = document.getElementById('serviceType');
  const sizeEl = document.getElementById('gardenSize');
  const sizeValue = document.getElementById('sizeValue');
  const priceEl = document.getElementById('quotePrice');
  const noteEl = document.getElementById('quoteNote');
  const waLink = document.getElementById('quoteWhatsapp');

  function update() {
    const service = serviceEl.value;
    const size = parseInt(sizeEl.value);
    const p = PRICING[service];
    const min = Math.round(p.min * size);
    const max = Math.round(p.max * size);
    sizeValue.textContent = size + ' sq.ft';
    priceEl.textContent = `₹${min.toLocaleString('en-IN')} – ₹${max.toLocaleString('en-IN')}`;
    noteEl.textContent = `Indicative range for ${p.label}. Final price confirmed after a free site visit.`;
    const text = encodeURIComponent(
      `Hi SK Nursery, I would like a free landscaping quote.\n\nService: ${serviceEl.options[serviceEl.selectedIndex].text}\nGarden size: ${size} sq.ft\nEstimated range: Rs ${min.toLocaleString('en-IN')} - Rs ${max.toLocaleString('en-IN')}\n\nPlease confirm a free site visit.`
    );
    waLink.href = WA_BASE + text;
  }

  serviceEl.addEventListener('change', update);
  sizeEl.addEventListener('input', update);
  update();
}

// ---------- Mobile Menu ----------
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ---------- Image Modal ----------
let currentGalleryIndex = 0;

function initImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalVideo = document.getElementById('modalVideo');
  const captionText = document.getElementById('modalCaption');
  const closeBtn = document.getElementById('modalClose');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');

  function updateModalImage() {
    if (!currentGalleryItems.length) return;
    const item = currentGalleryItems[currentGalleryIndex];
    const isVideo = item.src.toLowerCase().endsWith('.mp4') || item.src.toLowerCase().endsWith('.webm');
    
    if (isVideo) {
      modalImg.style.display = 'none';
      modalVideo.src = item.src;
      modalVideo.style.display = 'block';
    } else {
      if (modalVideo) {
        modalVideo.style.display = 'none';
        modalVideo.pause();
      }
      modalImg.src = item.src;
      modalImg.style.display = 'block';
    }
    captionText.innerHTML = item.alt || item.tag;
  }

  function handleMediaClick(e, itemsList) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
      const srcStr = e.target.getAttribute('src');
      currentGalleryItems = itemsList;
      currentGalleryIndex = currentGalleryItems.findIndex(g => g.src === srcStr);
      if (currentGalleryIndex === -1) currentGalleryIndex = 0;
      updateModalImage();
      modal.classList.add('open');
    }
  }

  const galleryMasonry = document.getElementById('galleryMasonry');
  if (galleryMasonry) {
    galleryMasonry.addEventListener('click', (e) => {
      handleMediaClick(e, GALLERY_ITEMS); // Always navigate the full generated gallery
    });
  }

  const brandProjectsGrid = document.getElementById('brandProjectsGrid');
  if (brandProjectsGrid) {
    brandProjectsGrid.addEventListener('click', (e) => {
      const modalItems = BRAND_PROJECTS.map(bp => ({
        src: bp.src,
        alt: `${bp.brand} - ${bp.title}: ${bp.desc}`,
        tag: bp.brand
      }));
      handleMediaClick(e, modalItems);
    });
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    updateModalImage();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryItems.length;
    updateModalImage();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    if (modalVideo) modalVideo.pause();
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      if (modalVideo) modalVideo.pause();
    }
  });
}

// ---------- Before & After Slider ----------
function initBeforeAfterSliders() {
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const range = slider.querySelector('.ba-slider__range');
    if (range) {
      // Set initial position
      slider.style.setProperty('--pos', `${range.value}%`);
      range.addEventListener('input', (e) => {
        slider.style.setProperty('--pos', `${e.target.value}%`);
      });
    }
  });
}

// ---------- Scroll Reveal ----------
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderWhyUs();
  renderGalleryTabs();
  renderGallery();
  renderTestimonials();
  renderBrandProjects();
  renderBeforeAfter(true);

  initQuoteCalculator();
  initMobileMenu();
  initImageModal();
  observeReveal();
  
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      maxVisible += 6;
      const activeTab = document.querySelector('.gallery__tab.active');
      const tag = activeTab ? activeTab.dataset.tag : 'All';
      renderGallery(tag, false);
    });
  }

  const baLoadMoreBtn = document.getElementById('baLoadMoreBtn');
  if (baLoadMoreBtn) {
    baLoadMoreBtn.addEventListener('click', () => {
      maxVisibleBA += 4;
      renderBeforeAfter(false);
    });
  }
});
