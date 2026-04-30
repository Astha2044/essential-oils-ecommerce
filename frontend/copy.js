const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\dc0a1ccd-2d6f-4841-95af-7e61e50044e0';
const destDir = path.join(__dirname, 'public', 'images');

const filesToCopy = [
  { src: 'peppermint_hero_1777457195576.png', dest: 'peppermint_hero.png' },
  { src: 'lavender_bottle_1777457214831.png', dest: 'lavender_bottle.png' },
  { src: 'eucalyptus_bottle_1777457232590.png', dest: 'eucalyptus_bottle.png' },
  { src: 'avatar_emily_1777457258722.png', dest: 'avatar_emily.png' }
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

filesToCopy.forEach(file => {
  const srcPath = path.join(srcDir, file.src);
  const destPath = path.join(destDir, file.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} to ${file.dest}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
