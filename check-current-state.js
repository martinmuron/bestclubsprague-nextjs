const { chromium } = require('playwright');

async function checkCurrentState() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
    // Take a full page screenshot
    await page.screenshot({ 
      path: 'current-homepage-state.png', 
      fullPage: true 
    });
    console.log('Screenshot saved as current-homepage-state.png');
    
    // Check specific design issues
    const designIssues = await page.evaluate(() => {
      const results = {};
      
      // Check hero text size
      const heroH1 = document.querySelector('section h1');
      if (heroH1) {
        const heroStyles = window.getComputedStyle(heroH1);
        results.heroText = {
          fontSize: heroStyles.fontSize,
          fontWeight: heroStyles.fontWeight,
          lineHeight: heroStyles.lineHeight,
          textAlign: heroStyles.textAlign,
          actualText: heroH1.textContent.substring(0, 100) + '...'
        };
      }
      
      // Check header layout
      const header = document.querySelector('header');
      const headerContainer = header?.querySelector('.container');
      if (header && headerContainer) {
        const headerStyles = window.getComputedStyle(headerContainer);
        results.header = {
          display: headerStyles.display,
          justifyContent: headerStyles.justifyContent,
          alignItems: headerStyles.alignItems,
          height: headerStyles.height,
          width: headerContainer.getBoundingClientRect().width,
          viewportWidth: window.innerWidth
        };
        
        // Check navigation position
        const nav = header.querySelector('div:first-child');
        if (nav) {
          const navRect = nav.getBoundingClientRect();
          results.navigation = {
            left: navRect.left,
            width: navRect.width,
            isLeftAligned: navRect.left < 100
          };
        }
      }
      
      // Check footer buttons
      const footerButtons = document.querySelectorAll('footer button');
      results.footerButtons = Array.from(footerButtons).map(btn => {
        const styles = window.getComputedStyle(btn);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: styles.border,
          text: btn.textContent,
          isWhiteOnWhite: styles.backgroundColor.includes('255, 255, 255') && styles.color.includes('255, 255, 255')
        };
      });
      
      // Check for any white on white elements
      const allButtons = document.querySelectorAll('button');
      results.allButtons = Array.from(allButtons).map((btn, index) => {
        const styles = window.getComputedStyle(btn);
        return {
          index,
          text: btn.textContent.trim(),
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: styles.border,
          isProblematic: (styles.backgroundColor.includes('255, 255, 255') || styles.backgroundColor === 'rgba(0, 0, 0, 0)') && 
                         (styles.color.includes('255, 255, 255') || styles.color === 'rgb(255, 255, 255)')
        };
      }).filter(btn => btn.isProblematic);
      
      return results;
    });
    
    console.log('\n=== DESIGN ISSUES ANALYSIS ===');
    console.log(JSON.stringify(designIssues, null, 2));
    
    // Check viewport and take mobile screenshot too
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'current-homepage-mobile.png', 
      fullPage: true 
    });
    console.log('Mobile screenshot saved as current-homepage-mobile.png');
    
  } catch (error) {
    console.error('Error checking current state:', error);
  } finally {
    await browser.close();
  }
}

checkCurrentState();