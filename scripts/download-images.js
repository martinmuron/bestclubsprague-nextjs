const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create directories
const dirs = [
  'public/images/clubs',
  'public/images/blog',
  'public/images/homepage',
  'public/videos'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to download file
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filepath);
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

// Extract base URL (without Wix resize parameters)
function getOriginalImageUrl(wixUrl) {
  // Remove /v1/fill/ and everything after it to get original image
  const match = wixUrl.match(/(https:\/\/static\.wixstatic\.com\/media\/[^\/]+\.(jpg|jpeg|png|gif|webp|mp4))/);
  return match ? match[1] : wixUrl;
}

// Homepage images - main carousel/hero images
const homepageImages = [
  { url: 'https://static.wixstatic.com/media/d8ab1d_ae65858f67574eb4b049b1a849cd463a~mv2.jpg', name: 'hero-1.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_f42d27cc201f4e68ad2063aad850e0eb~mv2.jpg', name: 'hero-2.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_02953396b62645fca666e521a90dfe3a~mv2.jpg', name: 'hero-3.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_efe6c586e39746a0aba966a2e72e9f4c~mv2_d_3980_2622_s_4_2.jpg', name: 'hero-background.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_c0f810862af3479b91ec53a6abb12513~mv2_d_4000_2555_s_4_2.jpg', name: 'cocktail-bg.jpg' },
];

// Blog post thumbnails
const blogImages = [
  { url: 'https://static.wixstatic.com/media/d8ab1d_70339c6d8c3e4f38bd1bd9089e20efc8f000.jpg', name: 'nye-2024.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_df8c4a7bad8240198847a9d3aaeb1823~mv2.jpg', name: 'halloween-2024.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_550ae6b278c2421995f96c2d2963ff35f000.jpg', name: 'ladies-night.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_07a71fa90b8f4c448652b676f4a38c64f000.jpg', name: 'blog-1.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_692ac648b9514c9db8bba2221c682a8ef000.jpg', name: 'blog-2.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_0522f1b53e434505b61058efbbe230c0f000.jpg', name: 'blog-3.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_2d6360f4e2224b2eb08897c51d1abad3f000.jpg', name: 'blog-4.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_4fd47003a7394515980107abf1c00de9~mv2.jpeg', name: 'blog-5.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_f76e7570c58f41848710b88a290f0bae~mv2.jpg', name: 'blog-6.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_299068938a7241dfbdb3cfd153cddfbd~mv2.jpg', name: 'blog-7.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_444a195e18374344846fdc883ddc984c~mv2.jpg', name: 'blog-8.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_b76c44f6a2494bfd9ea539f1731cd702~mv2.jpeg', name: 'blog-9.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_d63ba86083494366942b7fea20f91878~mv2.jpg', name: 'blog-10.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_1dc128bb194a4990baad2eb4304eaf6e~mv2_d_1880_1283_s_2.jpeg', name: 'blog-11.jpg' },
];

// Logos and partner images
const logoImages = [
  { url: 'https://static.wixstatic.com/media/d8ab1d_776754384e504a899f1647adf0d6f045~mv2.png', name: 'omp-logo.png' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_77d03e928ed8421ebb91e8624d476595~mv2.jpg', name: 'warehouse-logo.jpg' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_1e4c4dee0a71430f8de9b2a938646e74~mv2.png', name: 'goldfingers-logo.png' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_d45a7914251d46a5af1a2c57a6242391~mv2.png', name: 'medusa-logo.png' },
  { url: 'https://static.wixstatic.com/media/d8ab1d_3ae7cbe6a5cd44d58198bcbee9e275a7%7Emv2.jpg', name: 'site-logo.jpg' },
];

async function downloadAll() {
  console.log('Starting download of all images...\n');

  // Download homepage images
  console.log('Downloading homepage images...');
  for (const img of homepageImages) {
    try {
      await downloadFile(img.url, path.join('public/images/homepage', img.name));
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }

  // Download blog images
  console.log('\nDownloading blog images...');
  for (const img of blogImages) {
    try {
      await downloadFile(img.url, path.join('public/images/blog', img.name));
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }

  // Download logos
  console.log('\nDownloading logos...');
  for (const img of logoImages) {
    try {
      await downloadFile(img.url, path.join('public/images', img.name));
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }

  console.log('\n✅ Download complete!');
  console.log('\nNext steps:');
  console.log('1. Check the public/images directory for all downloaded files');
  console.log('2. Run the fetch-club-images.js script to download individual club images');
  console.log('3. Update your components to use these images');
}

downloadAll();
