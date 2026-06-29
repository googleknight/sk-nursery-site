import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const outputFile = path.join(__dirname, 'src', 'data', 'galleryData.json');

const items = [];
const tags = new Set();

const dirs = fs.readdirSync(imagesDir, { withFileTypes: true });

dirs.forEach(dirent => {
  if (dirent.isDirectory() && dirent.name !== 'raw' && dirent.name !== 'Before-After') {
    const tag = dirent.name;
    tags.add(tag);
    
    const tagDir = path.join(imagesDir, tag);
    const files = fs.readdirSync(tagDir);
    
    files.forEach(file => {
      if (file.match(/\.(jpg|jpeg|png|mp4|webm)$/i)) {
        // Create a beautiful SEO-friendly caption from the tag and filename
        const prettyName = file
          .replace(/\.[^/.]+$/, "")         // strip extension
          .replace(/^sk-nursery-/i, "")     // strip prefix
          .replace(/-\d+(-\d+)?$/, "")      // strip trailing number suffixes like -1-1 or -2
          .replace(/[-_]/g, " ")            // dashes/underscores → spaces
          .replace(/\b\w/g, c => c.toUpperCase()); // Title Case
          
        const alt = `SK Nursery ${tag} – ${prettyName}`;
        
        items.push({
          src: `/images/${tag}/${file}`,
          alt: alt,
          tag: tag
        });
      }
    });
  }
});

const galleryTags = ['All', ...Array.from(tags)];

const jsContent = JSON.stringify({ items, tags: galleryTags }, null, 2);

fs.writeFileSync(outputFile, jsContent, 'utf-8');
console.log('Generated src/data/galleryData.json successfully.');
