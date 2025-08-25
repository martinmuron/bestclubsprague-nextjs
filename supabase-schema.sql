-- Best Clubs Prague - Supabase Database Schema
-- All tables use 'bcp_' prefix for organization

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- BCP Clubs table
CREATE TABLE bcp_clubs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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

-- BCP Posts table
CREATE TABLE bcp_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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

-- Create indexes for better performance
CREATE INDEX idx_bcp_clubs_slug ON bcp_clubs(slug);
CREATE INDEX idx_bcp_clubs_category ON bcp_clubs(category);
CREATE INDEX idx_bcp_clubs_featured ON bcp_clubs(featured);
CREATE INDEX idx_bcp_posts_slug ON bcp_posts(slug);
CREATE INDEX idx_bcp_posts_category ON bcp_posts(category);
CREATE INDEX idx_bcp_posts_published ON bcp_posts(published);
CREATE INDEX idx_bcp_posts_published_at ON bcp_posts(published_at);

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bcp_clubs_updated_at BEFORE UPDATE ON bcp_clubs
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_bcp_posts_updated_at BEFORE UPDATE ON bcp_posts
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE bcp_clubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE bcp_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON bcp_clubs
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for published posts" ON bcp_posts
    FOR SELECT USING (published = true);

-- Insert sample data based on scraped content

-- Sample clubs data
INSERT INTO bcp_clubs (name, slug, title, description, content, category, featured, rating, meta_title, meta_description) VALUES
('M1 Lounge', 'm1-lounge', 'M1 Lounge | Best Clubs in Prague | 2025', 'Prague''s premier nightclub with 20+ years of excellence', '<h1>M1 Lounge - Prague''s Premier Nightclub</h1><p>M1 Lounge has been Prague''s leading nightclub destination for over 20 years. Located in the heart of the city, M1 Lounge offers an unparalleled nightlife experience with world-class DJs, premium drinks, and an atmosphere that defines Prague''s nightlife scene.</p><h2>What Makes M1 Lounge Special</h2><p>• Premium sound system and lighting</p><p>• VIP areas and bottle service</p><p>• Regular international DJ performances</p><p>• Elegant interior design</p><p>• Central Prague location</p>', 'nightclub', true, 4.8, 'M1 Lounge | Best Clubs in Prague | 2025', 'Experience Prague''s premier nightclub M1 Lounge. Over 20 years of excellence in nightlife entertainment. Book your table now!'),

('Epic Prague', 'epic-prague', 'Epic Prague | Best Clubs in Prague | 2025', 'Multi-level entertainment complex in the heart of Prague', '<h1>Epic Prague - Multi-Level Entertainment</h1><p>Epic Prague is a massive multi-level entertainment complex that offers something for everyone. From intimate cocktail areas to high-energy dance floors, Epic Prague is one of the largest and most diverse nightlife venues in Prague.</p><h2>Multiple Floors, Multiple Experiences</h2><p>• Ground floor cocktail lounge</p><p>• Main dance floor with international DJs</p><p>• VIP levels with exclusive access</p><p>• Outdoor terrace (seasonal)</p><p>• Full restaurant and dining options</p>', 'nightclub', true, 4.6, 'Epic Prague | Best Clubs in Prague | 2025', 'Epic Prague - Prague''s largest multi-level nightclub. Multiple floors of entertainment, dining, and dancing. Experience the epic nightlife!'),

('Moon Club', 'moon-club', 'Moon Club | Best Clubs in Prague | 2025', 'Intimate cocktail bar with stunning city views', '<h1>Moon Club - Elevated Nightlife Experience</h1><p>Moon Club offers an intimate and sophisticated nightlife experience with stunning views over Prague. This upscale cocktail bar combines premium drinks with an elegant atmosphere perfect for special occasions or refined evenings out.</p><h2>Premium Cocktail Experience</h2><p>• Craft cocktails by expert mixologists</p><p>• Panoramic city views</p><p>• Sophisticated interior design</p><p>• Premium spirits and wines</p><p>• Intimate seating areas</p>', 'cocktail-bar', true, 4.5, 'Moon Club | Best Clubs in Prague | 2025', 'Moon Club Prague - Premium cocktail bar with stunning city views. Craft cocktails, elegant atmosphere, and unforgettable nightlife.');

-- Sample blog posts data
INSERT INTO bcp_posts (title, slug, excerpt, content, category, tags, meta_title, meta_description, meta_keywords) VALUES
('Where should you spend your Prague NYE 2024/2025?', 'where-should-you-spend-your-prague-nye-2024-2025', 'Discover the best New Year''s Eve parties in Prague for an unforgettable celebration.', '<h1>Where should you spend your Prague NYE 2024/2025?</h1><p>New Year''s Eve in Prague is a magical experience, and choosing the right venue can make all the difference. Here are the top destinations for celebrating NYE 2024/2025 in Prague''s vibrant nightlife scene.</p><h2>Top NYE Venues in Prague</h2><p><strong>M1 Lounge</strong> - The premier choice for New Year''s Eve with exclusive packages and world-class entertainment.</p><p><strong>Epic Prague</strong> - Multiple floors mean multiple parties - choose your vibe for the countdown.</p><p><strong>Chapeau Rouge</strong> - Historic venue with special NYE events and live performances.</p><h2>What to Expect</h2><p>Prague''s New Year''s Eve celebrations typically include:</p><ul><li>Special countdown events</li><li>Premium champagne toasts</li><li>Live DJ performances</li><li>Fireworks views from rooftop venues</li><li>Exclusive NYE party packages</li></ul>', 'Events', '{NYE,New Years,Prague,Parties,2025}', 'Where should you spend your Prague NYE 2024/2025?', 'Discover the best New Year''s Eve parties in Prague 2024/2025. Top venues, exclusive events, and unforgettable celebrations.', '{Prague NYE, New Years Eve Prague, Prague parties, NYE 2025}'),

('Halloween in Prague 2024. Where Should you Go!?', 'halloween-in-prague-where-should-you-go', 'The spookiest Halloween parties in Prague''s best venues await you this October.', '<h1>Halloween in Prague 2024. Where Should you Go!?</h1><p>Halloween in Prague has become one of the city''s most exciting nightlife events. From spooky themed parties to costume contests, Prague''s clubs go all out for Halloween celebrations.</p><h2>Best Halloween Venues 2024</h2><p><strong>80s Club</strong> - Retro Halloween party with 80s costumes and classic horror themes.</p><p><strong>Steampunk Prague</strong> - Gothic atmosphere perfect for Halloween with themed decorations.</p><p><strong>Chapeau Rouge</strong> - Underground Halloween events with live performances.</p><h2>Halloween Party Tips</h2><ul><li>Book tickets in advance - Halloween parties sell out fast</li><li>Come in costume for discounts and contest entry</li><li>Check venue social media for special Halloween themes</li><li>Plan transportation as venues get busy</li></ul>', 'Events', '{Halloween,Prague,Parties,Costumes,2024}', 'Halloween in Prague 2024. Where Should you Go!?', 'Best Halloween parties in Prague 2024. Spooky venues, costume contests, and unforgettable Halloween nightlife experiences.', '{Halloween Prague, Prague Halloween parties, Halloween 2024, Prague nightlife}'),

('Prague Wednesday Party - Ladies Night', 'prague-wednesday-party-ladies-night', 'Best Wednesday night parties for ladies in Prague with special offers and events.', '<h1>Prague Wednesday Party - Ladies Night</h1><p>Wednesday nights in Prague are all about celebrating the ladies! Many of Prague''s top venues offer special ladies'' nights with exclusive deals, entertainment, and a vibrant atmosphere perfect for midweek fun.</p><h2>Top Ladies Night Venues</h2><p><strong>M1 Lounge</strong> - Wednesday Ladies Night with complimentary drinks and VIP treatment.</p><p><strong>Epic Prague</strong> - Special ladies night events with reduced entry and drink specials.</p><p><strong>NEBE Cocktail Bar</strong> - Sophisticated ladies night with premium cocktail offers.</p><h2>What to Expect</h2><ul><li>Complimentary drinks for ladies</li><li>Reduced or free entry</li><li>Special entertainment and music</li><li>VIP treatment and services</li><li>Great atmosphere for groups</li></ul><h2>Tips for Ladies Night</h2><p>• Arrive early for best deals</p><p>• Check dress codes</p><p>• Bring your girlfriends</p><p>• Follow venue social media for updates</p>', 'Nightlife', '{Ladies Night,Wednesday,Prague,Women,Parties}', 'Prague Wednesday Party - Ladies Night', 'Best Wednesday Ladies Night parties in Prague. Special offers, VIP treatment, and unforgettable midweek celebrations for women.', '{Prague ladies night, Wednesday parties Prague, women nightlife Prague}');

-- Comments for documentation
COMMENT ON TABLE bcp_clubs IS 'BCP: Stores information about nightlife venues and clubs in Prague';
COMMENT ON TABLE bcp_posts IS 'BCP: Stores blog posts and articles about Prague nightlife';

COMMENT ON COLUMN bcp_clubs.category IS 'Type of venue: nightclub, cocktail-bar, strip-club, cabaret, shisha-lounge, boat-party, restaurant';
COMMENT ON COLUMN bcp_clubs.features IS 'Array of venue features like VIP areas, outdoor seating, etc.';
COMMENT ON COLUMN bcp_clubs.images IS 'Array of image URLs for the venue';
COMMENT ON COLUMN bcp_posts.published IS 'Whether the post is published and visible to users';
COMMENT ON COLUMN bcp_posts.tags IS 'Array of tags for categorizing and filtering posts';