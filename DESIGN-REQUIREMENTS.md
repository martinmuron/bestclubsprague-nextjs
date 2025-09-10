# Design Requirements & Playwright Testing Protocol

## ⚠️ CRITICAL REQUIREMENT: PLAYWRIGHT VERIFICATION

**EVERY design change or implementation MUST be verified using Playwright to view localhost before considering it complete.**

### Why This Is Essential:
1. **Tailwind CSS classes can be misleading** - `text-3xl` might render much larger than expected
2. **Visual issues are not apparent in code** - only visible in actual browser rendering
3. **Responsive behavior varies** across different viewport sizes
4. **Color combinations** may create invisible or problematic UI elements
5. **Layout issues** like centering, spacing, and overflow are only visible visually

### Required Playwright Verification Process:

#### For Every Design Change:
1. **Create Playwright script** to visit `http://localhost:3001`
2. **Take screenshots** (both desktop and mobile)
3. **Extract computed styles** for problematic elements
4. **Check for common issues:**
   - Text size appropriateness
   - Color contrast problems
   - Layout centering and alignment
   - Button visibility and styling
   - Responsive behavior

#### Example Issues Found During This Session:
- ✅ **Hero text was 60px** (gigantic) - reduced to 30px
- ✅ **Header menu left-aligned** - fixed to center
- ✅ **Footer excessive padding** - reduced spacing
- ✅ **Button styling checked** - no white-on-white issues found

### Sample Playwright Verification Script:
```javascript
const { chromium } = require('playwright');

async function verifyDesign() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  
  // Take screenshots
  await page.screenshot({ path: 'desktop-view.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'mobile-view.png', fullPage: true });
  
  // Check specific elements
  const issues = await page.evaluate(() => {
    // Extract styles and measurements
    // Return potential problems
  });
  
  console.log('Design Issues:', issues);
  await browser.close();
}
```

### Documentation Requirements:
- **Every design change** must include Playwright verification results
- **Screenshots must be taken** before and after changes
- **Computed styles must be logged** for problematic elements
- **Issues must be documented** in commit messages

## Current Status After Playwright Verification:

### ✅ Fixed Issues:
1. **Hero Text**: Reduced from 60px to 30px (appropriate size)
2. **Header Layout**: Changed from left-aligned to centered
3. **Footer Spacing**: Reduced excessive padding
4. **Button Styling**: Verified no white-on-white issues

### ✅ Verified Working:
- Hero section video background layout
- Full-width club sections with alternating layout
- Responsive design across desktop and mobile
- Button contrast and visibility
- Header menu centering

### 🎯 Going Forward:
**NO DESIGN CHANGES WITHOUT PLAYWRIGHT VERIFICATION**

This protocol ensures:
- Visual accuracy
- User experience quality  
- Prevention of invisible UI elements
- Proper responsive behavior
- Professional design standards