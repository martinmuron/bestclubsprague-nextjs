const { chromium } = require('playwright');

async function inspectLayout() {
  const targetUrl = process.env.PLAYWRIGHT_URL || 'http://127.0.0.1:3002/';
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(1000);

    const heroMediaStatus = await page.evaluate(() => {
      const result = {
        videoPresent: false,
        videoVisible: false,
        videoReadyState: null,
        videoPaused: null,
        imageFallbackVisible: false
      };

      const heroSection = document.querySelector('section.h-screen');
      if (!heroSection) return result;

      const video = heroSection.querySelector('video');
      if (video) {
        const videoRect = video.getBoundingClientRect();
        result.videoPresent = true;
        result.videoVisible = videoRect.width > 0 && videoRect.height > 0;
        result.videoReadyState = video.readyState;
        result.videoPaused = video.paused;
      }

      const fallbackImage = heroSection.querySelector('img');
      if (fallbackImage) {
        const pictureRect = fallbackImage.getBoundingClientRect();
        result.imageFallbackVisible = pictureRect.width > 0 && pictureRect.height > 0 && window.getComputedStyle(fallbackImage).display !== 'none';
      }

      return result;
    });

    const clubImageStatus = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('#club-list img'));
      const visibleImages = sections.filter((img) => {
        const rect = img.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && window.getComputedStyle(img).display !== 'none';
      });
      return {
        totalImages: sections.length,
        visibleImages: visibleImages.length
      };
    });

    const buttonStyles = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button')).slice(0, 10);
      return buttons.map((button) => {
        const styles = window.getComputedStyle(button);
        return {
          text: button.textContent.trim(),
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          borderColor: styles.borderColor
        };
      });
    });

    // Check header issues
    const headerInfo = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (!header) return { error: 'No header found' };
      
      const headerStyles = window.getComputedStyle(header);
      const headerRect = header.getBoundingClientRect();
      
      return {
        exists: true,
        width: headerRect.width,
        height: headerRect.height,
        position: headerStyles.position,
        display: headerStyles.display,
        textAlign: headerStyles.textAlign,
        justifyContent: headerStyles.justifyContent,
        alignItems: headerStyles.alignItems,
        padding: headerStyles.padding,
        margin: headerStyles.margin,
        className: header.className,
        innerHTML: header.innerHTML.substring(0, 200) + '...'
      };
    });
    
    // Check footer issues
    const footerInfo = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (!footer) return { error: 'No footer found' };
      
      const footerStyles = window.getComputedStyle(footer);
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      return {
        exists: true,
        width: footerRect.width,
        height: footerRect.height,
        bottom: footerRect.bottom,
        viewportHeight: viewportHeight,
        isOverflowing: footerRect.bottom > viewportHeight,
        position: footerStyles.position,
        padding: footerStyles.padding,
        margin: footerStyles.margin,
        className: footer.className,
        innerHTML: footer.innerHTML.substring(0, 200) + '...'
      };
    });
    
    // Check overall layout issues
    const layoutInfo = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;
      
      return {
        bodyWidth: body.scrollWidth,
        bodyHeight: body.scrollHeight,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        hasHorizontalScroll: body.scrollWidth > window.innerWidth,
        hasVerticalOverflow: body.scrollHeight > window.innerHeight
      };
    });
    
    console.log('=== HEADER INFO ===');
    console.log(JSON.stringify(headerInfo, null, 2));

    console.log('\n=== FOOTER INFO ===');
    console.log(JSON.stringify(footerInfo, null, 2));

    console.log('\n=== LAYOUT INFO ===');
    console.log(JSON.stringify(layoutInfo, null, 2));

    console.log('\n=== HERO MEDIA STATUS ===');
    console.log(JSON.stringify(heroMediaStatus, null, 2));

    console.log('\n=== CLUB IMAGE STATUS ===');
    console.log(JSON.stringify(clubImageStatus, null, 2));

    console.log('\n=== BUTTON STYLES (sample) ===');
    console.log(JSON.stringify(buttonStyles, null, 2));

    // Take a screenshot
    await page.screenshot({
      path: 'layout-debug.png',
      fullPage: true
    });
    console.log('\nScreenshot saved as layout-debug.png');

  } catch (error) {
    console.error('Error inspecting layout:', error);
  } finally {
    await browser.close();
  }
}

inspectLayout();
