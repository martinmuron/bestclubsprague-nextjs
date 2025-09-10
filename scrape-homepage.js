const { chromium } = require('playwright');

async function scrapeHomepage() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.bestclubsprague.com', { waitUntil: 'networkidle' });
    
    // Wait for content to load
    await page.waitForTimeout(3000);
    
    // Extract content
    const content = await page.evaluate(() => {
      const result = {
        title: document.title || '',
        headings: {
          h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent?.trim() || ''),
          h2: Array.from(document.querySelectorAll('h2')).map(h => h.textContent?.trim() || ''),
          h3: Array.from(document.querySelectorAll('h3')).map(h => h.textContent?.trim() || ''),
        },
        paragraphs: Array.from(document.querySelectorAll('p')).map(p => p.textContent?.trim() || '').filter(text => text.length > 0),
        links: Array.from(document.querySelectorAll('a')).map(a => ({
          text: a.textContent?.trim() || '',
          href: a.href || ''
        })).filter(link => link.text.length > 0),
        images: Array.from(document.querySelectorAll('img')).map(img => ({
          alt: img.alt || '',
          src: img.src || ''
        })),
        lists: Array.from(document.querySelectorAll('ul, ol')).map(list => 
          Array.from(list.querySelectorAll('li')).map(li => li.textContent?.trim() || '')
        ).filter(list => list.length > 0),
        textContent: document.body.textContent?.replace(/\s+/g, ' ').trim() || ''
      };
      
      return result;
    });
    
    console.log(JSON.stringify(content, null, 2));
    
  } catch (error) {
    console.error('Error scraping homepage:', error);
  } finally {
    await browser.close();
  }
}

scrapeHomepage();