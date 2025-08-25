import { supabase, type Database } from './supabase';

type Club = Database['public']['Tables']['bcp_clubs']['Row'];
type Post = Database['public']['Tables']['bcp_posts']['Row'];

// Mock data for development when Supabase is not configured
const mockClubs: Club[] = [
  {
    id: '1',
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
    images: [],
    featured: true,
    rating: 4.8,
    meta_title: 'M1 Lounge | Best Clubs in Prague | 2025',
    meta_description: 'Experience Prague\'s premier nightclub M1 Lounge. Over 20 years of excellence in nightlife entertainment.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
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
    images: [],
    featured: true,
    rating: 4.6,
    meta_title: 'Epic Prague | Best Clubs in Prague | 2025',
    meta_description: 'Epic Prague - Prague\'s largest multi-level nightclub. Multiple floors of entertainment.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Moon Club',
    slug: 'moon-club',
    title: 'Moon Club | Best Clubs in Prague | 2025',
    description: 'Intimate cocktail bar with stunning city views',
    content: '<h1>Moon Club - Elevated Nightlife Experience</h1><p>Moon Club offers an intimate and sophisticated nightlife experience with stunning views over Prague. This upscale cocktail bar combines premium drinks with an elegant atmosphere perfect for special occasions or refined evenings out.</p><h2>Premium Cocktail Experience</h2><ul><li>Craft cocktails by expert mixologists</li><li>Panoramic city views</li><li>Sophisticated interior design</li><li>Premium spirits and wines</li><li>Intimate seating areas</li></ul>',
    address: 'Wenceslas Square 56, 110 00 Prague 1',
    phone: null,
    website: null,
    opening_hours: 'Daily: 18:00-02:00',
    price_range: '€€€',
    category: 'cocktail-bar',
    features: ['City Views', 'Craft Cocktails', 'Intimate Setting', 'Premium Spirits'],
    images: [],
    featured: true,
    rating: 4.5,
    meta_title: 'Moon Club | Best Clubs in Prague | 2025',
    meta_description: 'Moon Club Prague - Premium cocktail bar with stunning city views.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Where should you spend your Prague NYE 2024/2025?',
    slug: 'where-should-you-spend-your-prague-nye-2024-2025',
    excerpt: 'Discover the best New Year\'s Eve parties in Prague for an unforgettable celebration.',
    content: '<h1>Where should you spend your Prague NYE 2024/2025?</h1><p>New Year\'s Eve in Prague is a magical experience, and choosing the right venue can make all the difference. Here are the top destinations for celebrating NYE 2024/2025 in Prague\'s vibrant nightlife scene.</p><h2>Top NYE Venues in Prague</h2><p><strong>M1 Lounge</strong> - The premier choice for New Year\'s Eve with exclusive packages and world-class entertainment.</p><p><strong>Epic Prague</strong> - Multiple floors mean multiple parties - choose your vibe for the countdown.</p>',
    author: 'Best Clubs Prague',
    published_at: '2024-12-01T10:00:00Z',
    updated_at: '2024-12-01T10:00:00Z',
    category: 'Events',
    tags: ['NYE', 'New Years', 'Prague', 'Parties', '2025'],
    featured_image: null,
    meta_title: 'Where should you spend your Prague NYE 2024/2025?',
    meta_description: 'Discover the best New Year\'s Eve parties in Prague 2024/2025.',
    meta_keywords: ['Prague NYE', 'New Years Eve Prague', 'Prague parties', 'NYE 2025'],
    published: true,
    created_at: '2024-12-01T10:00:00Z'
  }
];

// Club functions
export async function getAllClubs(): Promise<Club[]> {
  if (!supabase) {
    return mockClubs;
  }
  
  const { data, error } = await supabase
    .from('bcp_clubs')
    .select('*')
    .order('name');
  
  if (error) {
    console.error('Error fetching clubs:', error);
    return mockClubs;
  }
  
  return data || mockClubs;
}

export async function getFeaturedClubs(): Promise<Club[]> {
  if (!supabase) {
    return mockClubs.filter(club => club.featured);
  }
  
  const { data, error } = await supabase
    .from('bcp_clubs')
    .select('*')
    .eq('featured', true)
    .order('rating', { ascending: false })
    .limit(6);
  
  if (error) {
    console.error('Error fetching featured clubs:', error);
    return mockClubs.filter(club => club.featured);
  }
  
  return data || [];
}

export async function getClubBySlug(slug: string): Promise<Club | null> {
  if (!supabase) {
    return mockClubs.find(club => club.slug === slug) || null;
  }
  
  const { data, error } = await supabase
    .from('bcp_clubs')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Error fetching club:', error);
    return mockClubs.find(club => club.slug === slug) || null;
  }
  
  return data;
}

export async function getClubsByCategory(category: string): Promise<Club[]> {
  if (!supabase) {
    return mockClubs.filter(club => club.category === category);
  }
  
  const { data, error } = await supabase
    .from('bcp_clubs')
    .select('*')
    .eq('category', category)
    .order('name');
  
  if (error) {
    console.error('Error fetching clubs by category:', error);
    return mockClubs.filter(club => club.category === category);
  }
  
  return data || [];
}

// Post functions
export async function getAllPosts(): Promise<Post[]> {
  if (!supabase) {
    return mockPosts;
  }
  
  const { data, error } = await supabase
    .from('bcp_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching posts:', error);
    return mockPosts;
  }
  
  return data || mockPosts;
}

export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
  if (!supabase) {
    return mockPosts.slice(0, limit);
  }
  
  const { data, error } = await supabase
    .from('bcp_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);
  
  if (error) {
    console.error('Error fetching recent posts:', error);
    return mockPosts.slice(0, limit);
  }
  
  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!supabase) {
    return mockPosts.find(post => post.slug === slug) || null;
  }
  
  const { data, error } = await supabase
    .from('bcp_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  
  if (error) {
    console.error('Error fetching post:', error);
    return mockPosts.find(post => post.slug === slug) || null;
  }
  
  return data;
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  if (!supabase) {
    return mockPosts.filter(post => post.category === category);
  }
  
  const { data, error } = await supabase
    .from('bcp_posts')
    .select('*')
    .eq('category', category)
    .eq('published', true)
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching posts by category:', error);
    return mockPosts.filter(post => post.category === category);
  }
  
  return data || [];
}

// Search functions
export async function searchClubs(query: string): Promise<Club[]> {
  if (!supabase) {
    return mockClubs.filter(club => 
      club.name.toLowerCase().includes(query.toLowerCase()) ||
      club.description.toLowerCase().includes(query.toLowerCase()) ||
      club.category.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  const { data, error } = await supabase
    .from('bcp_clubs')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
    .order('name');
  
  if (error) {
    console.error('Error searching clubs:', error);
    return [];
  }
  
  return data || [];
}

export async function searchPosts(query: string): Promise<Post[]> {
  if (!supabase) {
    return mockPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  const { data, error } = await supabase
    .from('bcp_posts')
    .select('*')
    .eq('published', true)
    .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('Error searching posts:', error);
    return [];
  }
  
  return data || [];
}