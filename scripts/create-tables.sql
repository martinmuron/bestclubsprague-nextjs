-- Create bcp_clubs table
CREATE TABLE IF NOT EXISTS bcp_clubs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  website TEXT,
  opening_hours TEXT,
  price_range TEXT,
  category TEXT NOT NULL CHECK (category IN ('nightclub', 'cocktail-bar', 'strip-club', 'cabaret', 'shisha-lounge', 'boat-party', 'restaurant')),
  features TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  rating DECIMAL(3,1) CHECK (rating >= 0 AND rating <= 5),
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for bcp_clubs
CREATE INDEX IF NOT EXISTS idx_bcp_clubs_slug ON bcp_clubs(slug);
CREATE INDEX IF NOT EXISTS idx_bcp_clubs_category ON bcp_clubs(category);
CREATE INDEX IF NOT EXISTS idx_bcp_clubs_featured ON bcp_clubs(featured);

-- Create bcp_posts table
CREATE TABLE IF NOT EXISTS bcp_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Best Clubs Prague',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  featured_image TEXT,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  meta_keywords TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for bcp_posts
CREATE INDEX IF NOT EXISTS idx_bcp_posts_slug ON bcp_posts(slug);
CREATE INDEX IF NOT EXISTS idx_bcp_posts_category ON bcp_posts(category);
CREATE INDEX IF NOT EXISTS idx_bcp_posts_published ON bcp_posts(published);
CREATE INDEX IF NOT EXISTS idx_bcp_posts_published_at ON bcp_posts(published_at);