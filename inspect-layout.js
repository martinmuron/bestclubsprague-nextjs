const { chromium } = require('playwright');

async function inspectLayout() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
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