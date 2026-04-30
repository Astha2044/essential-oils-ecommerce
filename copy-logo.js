const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\1dd391a9-8de0-4600-901b-e671f5144882\\vs_brand_logo_1777526883811.png';
const destPath = path.join(__dirname, 'public', 'images', 'logo.png');

try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('✅ Success! The logo has been copied to public/images/logo.png');
  console.log('You can now refresh your browser.');
} catch (error) {
  console.error('❌ Error copying the file:', error.message);
}
