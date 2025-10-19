const fs = require('fs');
const path = require('path');

// Mapping of blog post slugs to their images
const blogPostImages = {
  'where-should-you-spend-your-prague-nye-2024-2025': '/images/blog/nye-2024.jpg',
  'where-should-you-party-in-prague-on-halloween': '/images/blog/halloween-2024.jpg',
  'prague-wednesday-party-ladies-night': '/images/blog/ladies-night.jpg',
  'best-restaurant-prague': '/images/blog/blog-1.jpg',
  'is-prague-the-best-stag-do-destination': '/images/blog/blog-2.jpg',
  'partying-in-prague-on-a-friday-night': '/images/blog/blog-3.jpg',
  'featured-spain-5-popular-nightclubs-in-spain': '/images/blog/blog-4.jpg',
  'it-s-official-m1-lounge-is-the-best-club-in-prague-for-2023': '/images/blog/blog-5.jpg',
  'our-top-pick-for-september-m1-lounge-s-20th-anniversary-bash': '/images/blog/blog-6.jpg',
  'monday-party-prague': '/images/blog/blog-7.jpg',
  'best-afterparty-in-prague-onyx': '/images/blog/blog-8.jpg',
  'prague-nightlife-in-2019': '/images/blog/blog-10.jpg',
  'clubs-in-prague': '/images/homepage/hero-background.jpg'
};

const postsDir = path.join(__dirname, '../src/app/post');

Object.entries(blogPostImages).forEach(([slug, imagePath]) => {
  const filePath = path.join(postsDir, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check if Image component is already imported
  if (content.includes('from "next/image"') || content.includes('Featured Image')) {
    console.log(`✅ ${slug} - Already updated, skipping`);
    return;
  }

  // Add import statement
  const hasImport = content.startsWith('import');
  const importStatement = hasImport ? '' : 'import Image from "next/image";\n\n';

  // Find the position after the first <div className="container
  const containerMatch = content.match(/<div className="container mx-auto px-4 py-8">/);

  if (!containerMatch) {
    console.log(`⚠️  Could not find container in ${slug}`);
    return;
  }

  const featuredImageBlock = `      {/* Featured Image */}
      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src="${imagePath}"
          alt="Featured Image"
          fill
          className="object-cover"
          priority
        />
      </div>

`;

  // Insert the import at the beginning if needed
  let updatedContent = content;
  if (!content.includes('import Image')) {
    updatedContent = `import Image from "next/image";\n` + content;
  }

  // Insert the featured image after the container opening tag
  const insertPosition = updatedContent.indexOf('<div className="container mx-auto px-4 py-8">') + '<div className="container mx-auto px-4 py-8">'.length;
  updatedContent = updatedContent.slice(0, insertPosition) + '\n' + featuredImageBlock + updatedContent.slice(insertPosition);

  fs.writeFileSync(filePath, updatedContent);
  console.log(`✅ Updated: ${slug}`);
});

console.log('\n🎉 Blog post update complete!');
