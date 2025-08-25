export interface Club {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  address?: string;
  phone?: string;
  website?: string;
  openingHours?: string;
  priceRange?: string;
  category: ClubCategory;
  features: string[];
  images: string[];
  featured: boolean;
  rating?: number;
  reviews?: Review[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: string;
  tags: string[];
  featuredImage?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: Date;
}

export type ClubCategory = 
  | 'nightclub' 
  | 'cocktail-bar' 
  | 'strip-club' 
  | 'cabaret' 
  | 'shisha-lounge' 
  | 'boat-party' 
  | 'restaurant';

export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}