# Image Implementation Guide

## Summary

All images and videos from your Wix site have been successfully extracted and downloaded to your Next.js project. This guide shows you what's been completed and provides patterns for updating all remaining pages.

## What's Been Completed

### ✅ Downloaded Images & Assets
- **Homepage Images**: 5 hero/background images
- **Club Images**: 27 images across 12 clubs (2-3 images per club)
- **Blog Images**: 14 blog post thumbnail images
- **Logos & Partners**: 5 logo images (Goldfingers, OMP, Warehouse, Medusa, site logo)

### ✅ Updated Pages
1. **Homepage** (`src/app/page.tsx`) - Fully updated with:
   - Hero background image
   - Club listing images
   - Blog post thumbnails with cards
   - Modern ShadCN UI components

2. **M1 Lounge** (`src/app/m1-lounge-best-club-prague/page.tsx`) - Hero image added

## Available Images by Page

### Club Pages
| Page | Images Available |
|------|-----------------|
| m1-lounge-best-club-prague | `m1-lounge-best-club-prague-1.jpg`, `-2.jpg` |
| epic-prague | `epic-prague-1.jpg`, `-2.jpg`, `-3.jpg` |
| moon-club-best-club-prague | `moon-club-best-club-prague-1.jpg`, `-2.jpg` |
| 80s-club-best-clubs-prague | `80s-club-best-clubs-prague-1.jpg`, `-2.jpg` |
| fu-club-prague-best-club-prague | `fu-club-prague-best-club-prague-1.jpg`, `-2.jpg`, `-3.jpg` |
| radost-fx-prague | `radost-fx-prague-1.jpg`, `-2.jpg` |
| chapeau-rouge-best-club-prague | `chapeau-rouge-best-club-prague-1.jpg`, `-2.png` |
| pop-up-bar-best-club-prague | `pop-up-bar-best-club-prague-1.jpg`, `-2.jpg` |
| steampunk-best-club-prague | `steampunk-best-club-prague-1.jpg`, `-2.jpg` |
| ku-club-bar-best-clubs-prague | `ku-club-bar-best-clubs-prague-1.jpg`, `-2.webp`, `-3.webp` |
| nebe-cocktail-bar-best-clubs-prague | `nebe-cocktail-bar-best-clubs-prague-1.jpg`, `-2.jpeg` |
| la-bodeguita-del-medio | `la-bodeguita-del-medio-1.jpg`, `-2.jpg` |

### Blog Post Images
| Post | Image |
|------|-------|
| where-should-you-spend-your-prague-nye-2024-2025 | `nye-2024.jpg` |
| halloween-in-prague-where-should-you-go | `halloween-2024.jpg` |
| prague-wednesday-party-ladies-night | `ladies-night.jpg` |
| Other posts | `blog-1.jpg` through `blog-11.jpg` |

### Category/Service Pages (Need generic images)
- best-shisha-prague
- best-party-prague
- best-strip-club-prague (use `goldfingers-logo.png`)
- best-cabaret-prague (use `medusa-logo.png`)

## Code Patterns

### Pattern 1: Hero Image Section (For Club Pages)

```tsx
import Image from "next/image";

<section className="relative h-[60vh] overflow-hidden">
  <Image
    src="/images/clubs/CLUB-SLUG-1.jpg"
    alt="Club Name"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
  <div className="relative h-full flex items-end">
    <div className="container mx-auto px-4 pb-12 text-white">
      <h1 className="text-5xl md:text-6xl font-black mb-4">CLUB NAME</h1>
      <p className="text-xl md:text-2xl">Tagline here</p>
    </div>
  </div>
</section>
```

### Pattern 2: Blog Post Featured Image

```tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

<article className="container mx-auto px-4 py-8">
  {/* Featured Image */}
  <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
    <Image
      src="/images/blog/POST-SLUG.jpg"
      alt="Post Title"
      fill
      className="object-cover"
    />
  </div>

  {/* Rest of content */}
  <div className="prose max-w-none">
    {/* Post content here */}
  </div>
</article>
```

### Pattern 3: Image Gallery (For pages with multiple images)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {[1, 2, 3].map((num) => (
    <div key={num} className="relative h-64 rounded-lg overflow-hidden">
      <Image
        src={`/images/clubs/CLUB-SLUG-${num}.jpg`}
        alt={`Club image ${num}`}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>
```

### Pattern 4: Card with Image (For listings)

```tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

<Card className="overflow-hidden hover:shadow-xl transition-shadow">
  <div className="relative h-48">
    <Image
      src="/images/clubs/IMAGE.jpg"
      alt="Title"
      fill
      className="object-cover"
    />
  </div>
  <CardContent className="p-6">
    <h3 className="font-bold text-xl mb-2">Title</h3>
    <p className="text-gray-600">Description</p>
  </CardContent>
</Card>
```

## Implementation Checklist

### Remaining Club Pages to Update (11 pages)
- [ ] epic-prague/page.tsx
- [ ] moon-club-best-club-prague/page.tsx
- [ ] 80s-club-best-clubs-prague/page.tsx
- [ ] fu-club-prague-best-club-prague/page.tsx
- [ ] radost-fx-prague/page.tsx
- [ ] chapeau-rouge-best-club-prague/page.tsx
- [ ] pop-up-bar-best-club-prague/page.tsx
- [ ] steampunk-best-club-prague/page.tsx
- [ ] ku-club-bar-best-clubs-prague/page.tsx
- [ ] nebe-cocktail-bar-best-clubs-prague/page.tsx
- [ ] la-bodeguita-del-medio/page.tsx

### Category/Service Pages (4 pages)
- [ ] best-shisha-prague/page.tsx
- [ ] best-party-prague/page.tsx (use `warehouse-logo.jpg` and `omp-logo.png`)
- [ ] best-strip-club-prague/page.tsx (use `goldfingers-logo.png`)
- [ ] best-cabaret-prague/page.tsx (use `medusa-logo.png`)

### Event Pages (2 pages)
- [ ] boat-party-prague/page.tsx
- [ ] nye/page.tsx

### Blog Posts (16 pages)
All located in `src/app/post/*/page.tsx`:
- [ ] best-restaurant-prague
- [ ] is-prague-the-best-stag-do-destination
- [ ] partying-in-prague-on-a-friday-night
- [ ] featured-spain-5-popular-nightclubs-in-spain
- [ ] new-year-s-eve-in-prague
- [ ] it-s-official-m1-lounge-is-the-best-club-in-prague-for-2023
- [ ] our-top-pick-for-september-m1-lounge-s-20th-anniversary-bash
- [ ] monday-party-prague
- [ ] best-afterparty-in-prague-onyx
- [ ] epic-club-prague
- [ ] prague-wednesday-party-ladies-night
- [ ] halloween-in-prague-where-should-you-go
- [ ] where-should-you-spend-your-prague-nye-2024-2025
- [ ] where-should-you-party-in-prague-on-halloween
- [ ] prague-nightlife-in-2019

## Quick Implementation Steps

### For Club Pages:
1. Add `import Image from "next/image";` at top
2. Replace any gradient background sections with Image component
3. Use Pattern 1 for hero section
4. Use Pattern 3 if you want an image gallery

### For Blog Posts:
1. Add `import Image from "next/image";` at top
2. Add featured image section before content using Pattern 2
3. Map post slug to corresponding blog image from the table above

### For Category Pages:
1. Add relevant logo/image
2. Use Card components from ShadCN UI
3. Consider adding a background image or gradient

## Image Optimization Notes

- All images are using Next.js `<Image>` component for automatic optimization
- Images are lazy-loaded except where `priority` prop is used
- Responsive images are handled automatically by Next.js
- Images maintain aspect ratio with `object-cover`

## Next Steps

Would you like me to:
1. Continue updating all remaining pages automatically?
2. Show you examples of 2-3 more pages for different types?
3. Create a bulk update script to handle all pages at once?

All images are ready and properly organized in the `/public/images` directory!
