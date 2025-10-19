const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create club images directory
const clubImagesDir = 'public/images/clubs';
if (!fs.existsSync(clubImagesDir)) {
  fs.mkdirSync(clubImagesDir, { recursive: true });
}

const clubs = [
  { slug: 'm1-lounge-best-club-prague', url: 'https://www.bestclubsprague.com/m1-lounge-best-club-prague' },
  { slug: 'epic-prague', url: 'https://www.bestclubsprague.com/epic-prague' },
  { slug: 'moon-club-best-club-prague', url: 'https://www.bestclubsprague.com/moon-club-best-club-prague' },
  { slug: '80s-club-best-clubs-prague', url: 'https://www.bestclubsprague.com/80s-club-best-clubs-prague' },
  { slug: 'fu-club-prague-best-club-prague', url: 'https://www.bestclubsprague.com/fu-club-prague-best-club-prague' },
  { slug: 'radost-fx-prague', url: 'https://www.bestclubsprague.com/radost-fx-prague' },
  { slug: 'chapeau-rouge-best-club-prague', url: 'https://www.bestclubsprague.com/chapeau-rouge-best-club-prague' },
  { slug: 'pop-up-bar-best-club-prague', url: 'https://www.bestclubsprague.com/pop-up-bar-best-club-prague' },
  { slug: 'steampunk-best-club-prague', url: 'https://www.bestclubsprague.com/steampunk-best-club-prague' },
  { slug: 'ku-club-bar-best-clubs-prague', url: 'https://www.bestclubsprague.com/ku-club-bar-best-clubs-prague' },
  { slug: 'nebe-cocktail-bar-best-clubs-prague', url: 'https://www.bestclubsprague.com/nebe-cocktail-bar-best-clubs-prague' },
  { slug: 'la-bodeguita-del-medio', url: 'https://www.bestclubsprague.com/la-bodeguita-del-medio' },
];

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        file.close();
        fs.unlinkSync(filepath);
        downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        reject(new Error(`Failed: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

function fetchPageImages(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Extract unique image URLs from static.wixstatic.com
        const imageRegex = /https:\/\/static\.wixstatic\.com\/media\/([^"'\s]+?)\.(jpg|jpeg|png|gif|webp)/g;
        const matches = [...data.matchAll(imageRegex)];
        const uniqueUrls = [...new Set(matches.map(m => m[0].split('/v1/')[0]))];

        // Filter out tiny thumbnails and icons
        const mainImages = uniqueUrls.filter(url => {
          const hasValidSize = !url.includes('w_32') && !url.includes('w_123') && !url.includes('blur_2');
          return hasValidSize;
        }).slice(0, 3); // Get first 3 main images

        resolve(mainImages);
      });
    }).on('error', reject);
  });
}

async function downloadClubImages() {
  console.log('Fetching club images from Wix site...\n');

  for (const club of clubs) {
    console.log(`\nProcessing: ${club.slug}`);
    try {
      const images = await fetchPageImages(club.url);

      if (images.length === 0) {
        console.log(`  No images found for ${club.slug}`);
        continue;
      }

      console.log(`  Found ${images.length} images`);

      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];
        const ext = path.extname(new URL(imageUrl).pathname) || '.jpg';
        const filename = `${club.slug}-${i + 1}${ext}`;
        const filepath = path.join(clubImagesDir, filename);

        try {
          await downloadFile(imageUrl, filepath);
        } catch (err) {
          console.error(`  ✗ Error downloading image ${i + 1}:`, err.message);
        }
      }
    } catch (err) {
      console.error(`  Error fetching ${club.slug}:`, err.message);
    }
  }

  console.log('\n✅ Club images download complete!');
}

downloadClubImages();
