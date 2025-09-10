# SEO Requirements - Best Clubs Prague Remake

## ⚠️ CRITICAL SEO PRESERVATION RULES

### 1. URL Structure - MUST REMAIN IDENTICAL
**These URLs must be preserved exactly as they exist on the current site:**

#### Main Pages
- `/` - Homepage
- `/blog-clubs-prague` - Blog main page
- `/nye` - New Year's Eve page
- `/best-party-prague` - Best Party page

#### Club/Venue Pages
- `/la-bodeguita-del-medio`
- `/80s-club-best-clubs-prague` 
- `/nebe-cocktail-bar-best-clubs-prague`
- `/pop-up-bar-best-club-prague`
- `/chapeau-rouge-best-club-prague`
- `/steampunk-best-club-prague`
- `/m1-lounge-best-club-prague`
- `/ku-club-bar-best-clubs-prague`
- `/fu-club-prague-best-club-prague`
- `/radost-fx-prague`

#### Category Pages
- `/best-cabaret-prague`
- `/best-strip-club-prague` 
- `/best-shisha-prague`
- `/boat-party-prague`

#### Blog Posts (12 total)
- `/post/where-should-you-party-in-prague-on-halloween`
- `/post/best-restaurant-prague`
- `/post/halloween-weekend-featuring-one-club`
- `/post/featured-spain-5-popular-nightclubs-in-spain`
- `/post/clubs-in-prague`
- `/post/best-thursday-party-in-prague-in-2022`
- `/post/where-should-you-spend-your-prague-nye-2024-2025`
- `/post/party-in-prague-on-sunday`
- `/post/best-afterparty-in-prague-onyx`
- `/post/where-can-you-get-the-best-breakfast-in-prague-after-a-long-night-out`
- `/post/partying-in-prague-on-a-friday-night`
- `/post/prague` (incomplete in sitemap - need to investigate)

### 2. Meta Data & SEO Elements
- Preserve exact title tags and meta descriptions from original site
- Maintain keyword density and targeting
- Keep structured data (JSON-LD) if it exists
- Preserve canonical URLs
- Maintain Open Graph and Twitter Card data

### 3. Content Requirements
- Scrape and preserve all original content from each page
- Maintain heading hierarchy (H1, H2, H3 structure)
- Keep internal linking structure
- Preserve image alt tags and descriptions
- Maintain blog post publication dates and authors

### 4. Technical SEO Requirements
- Generate XML sitemap matching original structure
- Implement proper 301 redirects if URLs change
- Maintain page loading speed (Core Web Vitals)
- Keep mobile-first responsive design
- Preserve robots.txt directives

## Current Project Status

### ✅ Completed
- Next.js 15 project structure
- Homepage with modern design
- Header/Footer components
- Tailwind CSS + shadcn/ui setup
- Basic club and blog routing structure

### 🔄 Next Steps Required
1. **Content Scraping**: Extract all content from original site pages
2. **URL Matching**: Ensure all 32+ pages have exact URL matches
3. **SEO Metadata**: Copy all meta tags, descriptions, and structured data
4. **Image Assets**: Download and optimize all images
5. **Internal Links**: Map and preserve all internal linking
6. **Blog Content**: Extract and format all 12 blog posts
7. **Club Data**: Extract detailed information for all venues

### 🎯 Design Improvements (While Maintaining SEO)
Based on original site analysis, we can enhance:
- Modern responsive grid layouts
- Improved mobile experience
- Better typography and spacing
- Enhanced visual hierarchy
- Faster loading performance
- Better accessibility features

### ⚠️ Development Rules
1. **NEVER** change URLs without proper redirects
2. **ALWAYS** preserve original page titles and meta descriptions initially
3. **TEST** all pages for 200 status codes before deployment
4. **VERIFY** Google Search Console data after deployment
5. **MONITOR** rankings for 2-4 weeks after launch

## Content Scraping Strategy
1. Use the existing scraper results in `comprehensive-scrape-results.json`
2. Extract metadata, content, and images for each page
3. Create content files in appropriate Next.js structure
4. Verify all internal links and references
5. Test each page renders correctly with original content

## Deployment Checklist
- [ ] All URLs returning 200 status codes
- [ ] XML sitemap generated and submitted  
- [ ] Google Search Console verified
- [ ] Core Web Vitals passing
- [ ] Mobile-friendly test passing
- [ ] All internal links working
- [ ] All images optimized and loading
- [ ] Meta tags and structured data preserved