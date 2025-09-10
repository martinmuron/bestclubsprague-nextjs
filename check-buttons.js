const { chromium } = require('playwright');

async function checkButtons() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Check all button styling issues
    const buttonIssues = await page.evaluate(() => {
      const allButtons = document.querySelectorAll('button, .btn, [role="button"]');
      const allLinks = document.querySelectorAll('a');
      
      const checkElement = (element, type) => {
        const styles = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        
        const isWhiteBackground = styles.backgroundColor === 'rgb(255, 255, 255)' || 
                                 styles.backgroundColor === 'rgba(255, 255, 255, 1)' ||
                                 styles.backgroundColor === 'white';
        const isWhiteText = styles.color === 'rgb(255, 255, 255)' || 
                           styles.color === 'rgba(255, 255, 255, 1)' ||
                           styles.color === 'white';
        
        return {
          type,
          text: element.textContent?.trim() || '',
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          border: styles.border,
          display: styles.display,
          visibility: styles.visibility,
          isVisible: rect.width > 0 && rect.height > 0 && styles.visibility !== 'hidden',
          isWhiteOnWhite: isWhiteBackground && isWhiteText,
          className: element.className,
          tagName: element.tagName,
          parent: element.parentElement?.tagName || ''
        };
      };
      
      const buttonData = Array.from(allButtons).map(btn => checkElement(btn, 'button'));
      const linkData = Array.from(allLinks).map(link => checkElement(link, 'link'));
      
      return {
        buttons: buttonData.filter(btn => btn.isVisible && btn.text.length > 0),
        links: linkData.filter(link => link.isVisible && link.text.length > 0),
        problematicElements: [...buttonData, ...linkData].filter(el => 
          el.isVisible && el.text.length > 0 && 
          (el.isWhiteOnWhite || el.color === el.backgroundColor)
        )
      };
    });
    
    console.log('\n=== ALL BUTTONS ===');
    buttonIssues.buttons.forEach((btn, i) => {
      console.log(`${i + 1}. "${btn.text}" - bg: ${btn.backgroundColor}, color: ${btn.color}, border: ${btn.border}`);
    });
    
    console.log('\n=== PROBLEMATIC ELEMENTS ===');
    if (buttonIssues.problematicElements.length > 0) {
      buttonIssues.problematicElements.forEach((el, i) => {
        console.log(`${i + 1}. ${el.type.toUpperCase()} "${el.text}" - bg: ${el.backgroundColor}, color: ${el.color}`);
      });
    } else {
      console.log('No problematic white-on-white elements found!');
    }
    
    // Take a screenshot of the footer area specifically
    await page.screenshot({ 
      path: 'footer-area.png',
      clip: { x: 0, y: await page.evaluate(() => document.body.scrollHeight - 600), width: 1280, height: 600 }
    });
    console.log('\nFooter screenshot saved as footer-area.png');
    
  } catch (error) {
    console.error('Error checking buttons:', error);
  } finally {
    await browser.close();
  }
}

checkButtons();