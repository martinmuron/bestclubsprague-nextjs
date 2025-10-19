# BestClubsPrague.com - URL Structure

This document contains all URLs from the existing site that must be preserved in the remake.

## Pages (20 URLs)

### Homepage
- `/` - Main homepage

### Individual Club Pages
- `/la-bodeguita-del-medio`
- `/radost-fx-prague`
- `/80s-club-best-clubs-prague`
- `/nebe-cocktail-bar-best-clubs-prague`
- `/epic-prague`
- `/ku-club-bar-best-clubs-prague`
- `/fu-club-prague-best-club-prague`
- `/chapeau-rouge-best-club-prague`
- `/pop-up-bar-best-club-prague`
- `/m1-lounge-best-club-prague`
- `/moon-club-best-club-prague`
- `/steampunk-best-club-prague`

### Category/Service Pages
- `/best-shisha-prague`
- `/best-party-prague`
- `/best-strip-club-prague`
- `/best-cabaret-prague`

### Event Pages
- `/boat-party-prague`
- `/nye` - New Year's Eve

### Blog
- `/blog-clubs-prague` - Blog listing/categories page

## Blog Posts (17+ URLs)

All blog posts use the `/post/` prefix:

- `/post/best-restaurant-prague`
- `/post/is-prague-the-best-stag-do-destination`
- `/post/partying-in-prague-on-a-friday-night`
- `/post/featured-spain-5-popular-nightclubs-in-spain`
- `/post/new-year-s-eve-in-prague`
- `/post/it-s-official-m1-lounge-is-the-best-club-in-prague-for-2023`
- `/post/best-thursday-party-in-prague-in-2022`
- `/post/our-top-pick-for-september-m1-lounge-s-20th-anniversary-bash`
- `/post/monday-party-prague`
- `/post/best-afterparty-in-prague-onyx`
- `/post/epic-club-prague`
- `/post/prague-wednesday-party-ladies-night`
- `/post/halloween-in-prague-where-should-you-go`
- `/post/where-should-you-spend-your-prague-nye-2024-2025`
- `/post/where-should-you-party-in-prague-on-halloween`
- `/post/prague-nightlife-in-2019`

Note: The blog posts sitemap may have been truncated in the fetch.

## URL Patterns to Implement in Next.js

### App Router Structure
```
app/
├── page.tsx                           → /
├── blog-clubs-prague/
│   └── page.tsx                       → /blog-clubs-prague
├── nye/
│   └── page.tsx                       → /nye
├── boat-party-prague/
│   └── page.tsx                       → /boat-party-prague
├── [club-slug]/
│   └── page.tsx                       → Dynamic club pages
├── post/
│   └── [slug]/
│       └── page.tsx                   → /post/[slug]
└── [category-slug]/
    └── page.tsx                       → Category pages (best-shisha, best-party, etc.)
```

### Route Groups
- **Club pages**: Individual venue pages (14 total)
- **Category pages**: Service/category landing pages (4 total)
- **Event pages**: Special events (2 total)
- **Blog posts**: All under `/post/` prefix (17+ total)
- **Blog category**: Main blog listing page

## Next Steps for Implementation

1. Set up dynamic routes for club pages `[club-slug]`
2. Set up blog post routes `/post/[slug]`
3. Create static pages for categories and events
4. Implement proper redirects and canonical URLs
5. Add 404 handling for non-existent slugs
6. Generate sitemap.xml programmatically
