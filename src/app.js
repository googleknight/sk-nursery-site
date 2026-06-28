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
  { icon: '🪨', title: 'Rock Landscaping', desc: 'Pebble beds, boulders and zen rock gardens.' },
  { icon: '🧱', title: 'Stone Landscaping', desc: 'Natural stone walls, paving and accents.' },
  { icon: '📐', title: 'Grading & Resloping', desc: 'Drainage-friendly slope correction.' },
  { icon: '🍃', title: 'Green Landscaping', desc: 'Eco-friendly, low-water green designs.' },
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

const GALLERY_ITEMS = [
  { src: 'images/1.jpg', alt: 'Decorative terrace garden with Radha-Krishna statue', tag: 'Garden Designs' },
  { src: 'images/2.jpg', alt: 'Modern balcony garden with artificial grass', tag: 'Garden Designs' },
  { src: 'images/3.jpg', alt: 'Urban rooftop garden with plants in grow bags', tag: 'Tree Plantation' },
  { src: 'images/4.jpg', alt: 'Vibrant balcony layout with potted plants', tag: 'Garden Designs' },
  { src: 'images/5.jpg', alt: 'Simple balcony layout with single plant', tag: 'Garden Designs' },
  { src: 'images/6.jpg', alt: 'Wooden-decked balcony garden', tag: 'Garden Designs' },
  { src: 'images/7.jpg', alt: 'Garden walkway pathway with pergola', tag: 'Lawn Installations' },
  { src: 'images/8.jpg', alt: 'Balcony with wooden deck tiles', tag: 'Garden Designs' },
  { src: 'images/9.jpg', alt: 'Luxury rooftop terrace garden at night', tag: 'Garden Designs' },
  { src: 'images/10.jpg', alt: 'Balcony garden at night with fairy lights', tag: 'Garden Designs' },
  { src: 'images/11.jpg', alt: 'Lush green backyard lawn with picket fence', tag: 'Lawn Installations' },
  { src: 'images/12.png', alt: 'Modern rooftop terrace garden', tag: 'Garden Designs' },
  { src: 'images/13.jpg', alt: 'Zen garden with Buddha statue', tag: 'Rock Gardens' },
  { src: 'images/14.jpg', alt: 'Office commercial entrance with indoor plants', tag: 'Tree Plantation' },
  { src: 'images/15.jpg', alt: 'Terrace balcony garden with view of pool', tag: 'Garden Designs' },
  { src: 'images/16.jpg', alt: 'Narrow side yard walkway with artificial grass', tag: 'Lawn Installations' },
  { src: 'images/17.png', alt: 'Clean rectangular artificial turf lawn', tag: 'Lawn Installations' },
  { src: 'images/18.jpg', alt: 'Garden pathway at night with white gravel', tag: 'Rock Gardens' },
  { src: 'images/19.jpg', alt: 'Indoor vertical garden green wall', tag: 'Tree Plantation' },
  { src: 'images/20.jpg', alt: 'Landscaped sloped garden bed with topiary', tag: 'Tree Plantation' },
  { src: 'images/21.jpg', alt: 'Terrace garden with red and white flowers', tag: 'Garden Designs' }
];

const GALLERY_TAGS = ['All', 'Garden Designs', 'Lawn Installations', 'Tree Plantation', 'Rock Gardens'];

const PRICING = {
  design:      { min: 55, max: 75, label: 'garden design' },
  landscaping: { min: 86.7, max: 117.3, label: 'garden landscaping' },
  lawn:        { min: 30, max: 50, label: 'lawn / turf installation' },
  tree:        { min: 20, max: 40, label: 'tree plantation' },
  rock:        { min: 100, max: 140, label: 'rock / stone landscaping' },
  levelling:   { min: 25, max: 45, label: 'garden levelling & grading' },
  maintenance: { min: 5, max: 15, label: 'landscape maintenance' },
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

let currentGalleryItems = [];
let maxVisible = 6;

function renderGallery(filter = 'All', resetMax = true) {
  const masonry = document.getElementById('galleryMasonry');
  const actions = document.getElementById('galleryActions');
  
  if (resetMax) maxVisible = 6;
  
  currentGalleryItems = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.tag === filter);
  
  const toShow = currentGalleryItems.slice(0, maxVisible);
  
  masonry.innerHTML = toShow.map(g => `
    <figure class="gallery__item reveal">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
      <figcaption>${g.tag}</figcaption>
    </figure>
  `).join('');
  
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
  const captionText = document.getElementById('modalCaption');
  const closeBtn = document.getElementById('modalClose');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');

  function updateModalImage() {
    if (!currentGalleryItems.length) return;
    const item = currentGalleryItems[currentGalleryIndex];
    modalImg.src = item.src;
    captionText.innerHTML = item.alt;
  }

  document.getElementById('galleryMasonry').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const srcStr = e.target.getAttribute('src');
      currentGalleryIndex = currentGalleryItems.findIndex(g => g.src === srcStr);
      if (currentGalleryIndex === -1) currentGalleryIndex = 0;
      updateModalImage();
      modal.classList.add('open');
    }
  });

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

  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
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
});
