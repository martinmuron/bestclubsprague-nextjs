const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  console.log('🚀 Setting up BCP database tables...');
  
  try {
    // Check if tables exist first
    const { data: existingTables } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .in('table_name', ['bcp_clubs', 'bcp_posts']);

    const tableNames = existingTables?.map(t => t.table_name) || [];
    
    // Create sample data directly if tables don't exist
    if (!tableNames.includes('bcp_clubs')) {
      console.log('bcp_clubs table does not exist - will insert sample data to create it');
    }
    
    if (!tableNames.includes('bcp_posts')) {
      console.log('bcp_posts table does not exist - will insert sample data to create it');
    }

    // Insert sample data
    console.log('Inserting sample data...');
    
    // Insert sample clubs
    const { error: insertClubsError } = await supabase
      .from('bcp_clubs')
      .upsert([
        {
          name: 'M1 Lounge',
          slug: 'm1-lounge',
          title: 'M1 Lounge | Best Clubs in Prague | 2025',
          description: 'Prague\'s premier nightclub with 20+ years of excellence',
          content: '<h1>M1 Lounge - Prague\'s Premier Nightclub</h1><p>M1 Lounge has been Prague\'s leading nightclub destination for over 20 years. Located in the heart of the city, M1 Lounge offers an unparalleled nightlife experience with world-class DJs, premium drinks, and an atmosphere that defines Prague\'s nightlife scene.</p><h2>What Makes M1 Lounge Special</h2><ul><li>Premium sound system and lighting</li><li>VIP areas and bottle service</li><li>Regular international DJ performances</li><li>Elegant interior design</li><li>Central Prague location</li></ul>',
          address: 'Masná 21, 110 00 Prague 1',
          phone: '+420 224 811 874',
          website: 'https://m1lounge.cz',
          opening_hours: 'Wed-Sat: 21:00-05:00',
          price_range: '€€€',
          category: 'nightclub',
          features: ['VIP Areas', 'Premium Sound System', 'International DJs', 'Bottle Service'],
          featured: true,
          rating: 4.8,
          meta_title: 'M1 Lounge | Best Clubs in Prague | 2025',
          meta_description: 'Experience Prague\'s premier nightclub M1 Lounge. Over 20 years of excellence in nightlife entertainment.'
        },
        {
          name: 'Epic Prague',
          slug: 'epic-prague',
          title: 'Epic Prague | Best Clubs in Prague | 2025',
          description: 'Multi-level entertainment complex in the heart of Prague',
          content: '<h1>Epic Prague - Multi-Level Entertainment</h1><p>Epic Prague is a massive multi-level entertainment complex that offers something for everyone. From intimate cocktail areas to high-energy dance floors, Epic Prague is one of the largest and most diverse nightlife venues in Prague.</p><h2>Multiple Floors, Multiple Experiences</h2><ul><li>Ground floor cocktail lounge</li><li>Main dance floor with international DJs</li><li>VIP levels with exclusive access</li><li>Outdoor terrace (seasonal)</li><li>Full restaurant and dining options</li></ul>',
          address: 'Národní 25, 110 00 Prague 1',
          phone: '+420 224 930 108',
          website: 'https://epicprague.com',
          opening_hours: 'Thu-Sat: 22:00-06:00',
          price_range: '€€',
          category: 'nightclub',
          features: ['Multiple Floors', 'Restaurant', 'Outdoor Terrace', 'VIP Sections'],
          featured: true,
          rating: 4.6,
          meta_title: 'Epic Prague | Best Clubs in Prague | 2025',
          meta_description: 'Epic Prague - Prague\'s largest multi-level nightclub. Multiple floors of entertainment.'
        },
        {
          name: 'Moon Club',
          slug: 'moon-club',
          title: 'Moon Club | Best Clubs in Prague | 2025',
          description: 'Intimate cocktail bar with stunning city views',
          content: '<h1>Moon Club - Elevated Nightlife Experience</h1><p>Moon Club offers an intimate and sophisticated nightlife experience with stunning views over Prague. This upscale cocktail bar combines premium drinks with an elegant atmosphere perfect for special occasions or refined evenings out.</p><h2>Premium Cocktail Experience</h2><ul><li>Craft cocktails by expert mixologists</li><li>Panoramic city views</li><li>Sophisticated interior design</li><li>Premium spirits and wines</li><li>Intimate seating areas</li></ul>',
          address: 'Wenceslas Square 56, 110 00 Prague 1',
          opening_hours: 'Daily: 18:00-02:00',
          price_range: '€€€',
          category: 'cocktail-bar',
          features: ['City Views', 'Craft Cocktails', 'Intimate Setting', 'Premium Spirits'],
          featured: true,
          rating: 4.5,
          meta_title: 'Moon Club | Best Clubs in Prague | 2025',
          meta_description: 'Moon Club Prague - Premium cocktail bar with stunning city views.'
        }
      ], { 
        onConflict: 'slug',
        ignoreDuplicates: false 
      });

    if (insertClubsError) {
      console.error('Error inserting clubs:', insertClubsError);
    } else {
      console.log('✅ Sample clubs inserted successfully');
    }

    // Insert sample posts
    const { error: insertPostsError } = await supabase
      .from('bcp_posts')
      .upsert([
        {
          title: 'Where should you spend your Prague NYE 2024/2025?',
          slug: 'where-should-you-spend-your-prague-nye-2024-2025',
          excerpt: 'Discover the best New Year\'s Eve parties in Prague for an unforgettable celebration.',
          content: '<h1>Where should you spend your Prague NYE 2024/2025?</h1><p>New Year\'s Eve in Prague is a magical experience, and choosing the right venue can make all the difference. Here are the top destinations for celebrating NYE 2024/2025 in Prague\'s vibrant nightlife scene.</p><h2>Top NYE Venues in Prague</h2><p><strong>M1 Lounge</strong> - The premier choice for New Year\'s Eve with exclusive packages and world-class entertainment.</p><p><strong>Epic Prague</strong> - Multiple floors mean multiple parties - choose your vibe for the countdown.</p>',
          author: 'Best Clubs Prague',
          category: 'Events',
          tags: ['NYE', 'New Years', 'Prague', 'Parties', '2025'],
          meta_title: 'Where should you spend your Prague NYE 2024/2025?',
          meta_description: 'Discover the best New Year\'s Eve parties in Prague 2024/2025. Top venues, exclusive events, and unforgettable celebrations.',
          meta_keywords: ['Prague NYE', 'New Years Eve Prague', 'Prague parties', 'NYE 2025']
        }
      ], { 
        onConflict: 'slug',
        ignoreDuplicates: false 
      });

    if (insertPostsError) {
      console.error('Error inserting posts:', insertPostsError);
    } else {
      console.log('✅ Sample posts inserted successfully');
    }

    console.log('🎉 Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();