import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Only create real client if we have valid environment variables
const hasValidConfig = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-anon-key';

export const supabase = hasValidConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Types for our database tables
export interface Database {
  public: {
    Tables: {
      bcp_clubs: {
        Row: {
          id: string;
          name: string;
          slug: string;
          title: string;
          description: string;
          content: string;
          address: string | null;
          phone: string | null;
          website: string | null;
          opening_hours: string | null;
          price_range: string | null;
          category: string;
          features: string[];
          images: string[];
          featured: boolean;
          rating: number | null;
          meta_title: string;
          meta_description: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          title: string;
          description: string;
          content: string;
          address?: string | null;
          phone?: string | null;
          website?: string | null;
          opening_hours?: string | null;
          price_range?: string | null;
          category: string;
          features?: string[];
          images?: string[];
          featured?: boolean;
          rating?: number | null;
          meta_title: string;
          meta_description: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          title?: string;
          description?: string;
          content?: string;
          address?: string | null;
          phone?: string | null;
          website?: string | null;
          opening_hours?: string | null;
          price_range?: string | null;
          category?: string;
          features?: string[];
          images?: string[];
          featured?: boolean;
          rating?: number | null;
          meta_title?: string;
          meta_description?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      bcp_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          author: string;
          published_at: string;
          updated_at: string;
          category: string;
          tags: string[];
          featured_image: string | null;
          meta_title: string;
          meta_description: string;
          meta_keywords: string[];
          published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          author: string;
          published_at?: string;
          updated_at?: string;
          category: string;
          tags?: string[];
          featured_image?: string | null;
          meta_title: string;
          meta_description: string;
          meta_keywords?: string[];
          published?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          author?: string;
          published_at?: string;
          updated_at?: string;
          category?: string;
          tags?: string[];
          featured_image?: string | null;
          meta_title?: string;
          meta_description?: string;
          meta_keywords?: string[];
          published?: boolean;
          created_at?: string;
        };
      };
    };
  };
}