import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Home() {
  // Featured clubs data (temporary - will come from Supabase later)
  const featuredClubs = [
    {
      id: "1",
      name: "M1 Lounge",
      slug: "m1-lounge",
      description: "Prague's premier nightclub with 20+ years of excellence",
      category: "nightclub",
      rating: 4.8,
      image: "/images/m1-lounge.jpg", // placeholder
      featured: true
    },
    {
      id: "2", 
      name: "Epic Prague",
      slug: "epic-prague",
      description: "Multi-level entertainment complex in the heart of Prague",
      category: "nightclub",
      rating: 4.6,
      image: "/images/epic-prague.jpg", // placeholder
      featured: true
    },
    {
      id: "3",
      name: "Moon Club",
      slug: "moon-club", 
      description: "Intimate cocktail bar with stunning city views",
      category: "cocktail-bar",
      rating: 4.5,
      image: "/images/moon-club.jpg", // placeholder
      featured: true
    }
  ];

  // Recent blog posts (temporary - will come from CMS later)
  const recentPosts = [
    {
      id: "1",
      title: "Where should you spend your Prague NYE 2024/2025?",
      slug: "where-should-you-spend-your-prague-nye-2024-2025",
      excerpt: "Discover the best New Year's Eve parties in Prague",
      category: "Events"
    },
    {
      id: "2", 
      title: "Halloween in Prague 2024. Where Should you Go!?",
      slug: "halloween-in-prague-where-should-you-go",
      excerpt: "The spookiest Halloween parties in Prague's best venues",
      category: "Events"
    },
    {
      id: "3",
      title: "Prague Wednesday Party - Ladies Night", 
      slug: "prague-wednesday-party-ladies-night",
      excerpt: "Best Wednesday night parties for ladies in Prague",
      category: "Nightlife"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Best Clubs Prague
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your ultimate guide to Prague&apos;s nightlife scene in 2025
            </p>
            <p className="text-lg mb-8 opacity-80">
              Find the best clubs in the city of Prague. Prague is full of exciting nightlife and with our list, you will always find the best club to enjoy your night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/clubs">Explore All Clubs</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Clubs
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover Prague&apos;s top-rated nightlife destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs.map((club) => (
              <Card key={club.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                    {club.name}
                  </div>
                  <Badge className="absolute top-4 left-4 capitalize">
                    {club.category.replace('-', ' ')}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{club.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{club.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{club.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/clubs/${club.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/clubs">View All Clubs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with Prague&apos;s nightlife scene
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Prague&apos;s Nightlife?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Discover the best clubs, bars, and entertainment venues in Prague
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
            <Link href="/clubs">Start Exploring</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}