const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'images');
const outputFile = path.join(__dirname, 'src', 'gallery-data.js');

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
          .replace(/\.[^/.]+$/, "")
          .replace(/^sk-nursery-/i, "")
          .replace(/[-_]/g, " ");
          
        const alt = `SK Nursery ${tag} - ${prettyName}`;
        
        items.push({
          src: `images/${tag}/${file}`,
          alt: alt,
          tag: tag
        });
      }
    });
  }
});

const galleryTags = ['All', ...Array.from(tags)];

const jsContent = `// Auto-generated file by build.js
window.GALLERY_ITEMS = ${JSON.stringify(items, null, 2)};
window.GALLERY_TAGS = ${JSON.stringify(galleryTags, null, 2)};
`;

fs.writeFileSync(outputFile, jsContent, 'utf-8');
console.log('Generated src/gallery-data.js successfully.');
