# SK Nursery & Garden Works

A fast, interactive, and beautifully designed Single Page Application (SPA) for a premium landscaping and garden maintenance service based in Bengaluru.

## Features

- **Modern SPA Architecture**: Built using clean, vanilla HTML, CSS, and JavaScript. No heavy frameworks, ensuring lightning-fast load times.
- **Dynamic Project Gallery**: Features categorized image filtering (Garden Designs, Lawn Installations, Tree Plantation, Rock Gardens), a "Load More" pagination system, and a sleek image modal for viewing high-res photos.
- **Interactive Quote Calculator**: A built-in tool that allows users to select a service type, slide to their garden size, and instantly receive an estimated cost range.
- **Performance Optimized**:
  - The hero image is preloaded (`<link rel="preload">`) to guarantee an instant above-the-fold render.
  - All gallery images utilize native browser lazy-loading (`loading="lazy"`), meaning they only download when the user scrolls near them. This saves bandwidth and ensures peak page speed without sacrificing image quality.
- **Responsive & Accessible**: A mobile-first CSS grid layout with dynamic styling that adapts beautifully to phones, tablets, and desktops.
- **Direct WhatsApp Integration**: Floating action buttons and quote submissions are tied directly to the business's WhatsApp number with pre-filled message text.

## Tech Stack

- **HTML5**: Semantic and accessible markup.
- **CSS3**: Custom design system built with CSS variables (`--clr-primary`, `--grad-leaf`, etc.) mimicking modern utility classes. Features CSS Grid and Flexbox for layout.
- **Vanilla JavaScript (ES6+)**: Handles all dynamic interactions—from scroll reveal animations to the image modal and quote calculator—without the bloat of external libraries.

## Local Development

To view the site locally, simply serve the `src` directory using any local web server. For example, using Python:

```bash
cd src
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

## Deployment

This project is configured out-of-the-box for seamless deployment on **Netlify**.

The included `netlify.toml` automatically points the publish directory to `src/` and sets up the necessary rewrite rules for the SPA. Simply link this repository to Netlify, and it will deploy instantly.
