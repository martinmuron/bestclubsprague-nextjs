import { getAllClubs, getClubsByCategory } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Clubs in Prague | Best Clubs Prague 2025',
  description: 'Browse all the best clubs, bars, and nightlife venues in Prague. Find your perfect night out with our comprehensive guide to Prague nightlife.',
  keywords: 'Prague clubs, Prague nightlife, clubs in Prague, Prague bars, nightlife Prague, best clubs Prague',
};

export const revalidate = 3600; // Revalidate every hour

interface ClubsPageProps {
  searchParams: { category?: string };
}

export default async function ClubsPage({ searchParams }: ClubsPageProps) {
  const category = searchParams.category;
  
  // Fetch clubs based on category filter
  const clubs = category 
    ? await getClubsByCategory(category)
    : await getAllClubs();

  const categories = [
    { value: '', label: 'All Clubs' },
    { value: 'nightclub', label: 'Nightclubs' },
    { value: 'cocktail-bar', label: 'Cocktail Bars' },
    { value: 'strip-club', label: 'Strip Clubs' },
    { value: 'shisha-lounge', label: 'Shisha Lounges' },
    { value: 'cabaret', label: 'Cabaret' },
    { value: 'restaurant', label: 'Restaurants' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {category ? `${categories.find(c => c.value === category)?.label || 'Clubs'} in Prague` : 'All Clubs in Prague'}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover Prague&apos;s best nightlife venues and entertainment destinations
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={category === cat.value || (!category && cat.value === '') ? 'default' : 'outline'}
              asChild
              size="sm"
            >
              <Link href={cat.value ? `/clubs?category=${cat.value}` : '/clubs'}>
                {cat.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Clubs Grid */}
      {clubs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Club Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  {club.name}
                </div>
                <Badge className="absolute top-4 left-4 capitalize">
                  {club.category.replace('-', ' ')}
                </Badge>
                {club.featured && (
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{club.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {club.description}
                    </CardDescription>
                  </div>
                  {club.rating && (
                    <div className="flex items-center gap-1 ml-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{club.rating}</span>
                    </div>
                  )}
                </div>

                {club.address && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{club.address}</span>
                  </div>
                )}

                {club.features && club.features.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {club.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {club.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{club.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/clubs/${club.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl font-semibold mb-4">No clubs found</h3>
          <p className="text-muted-foreground mb-6">
            {category 
              ? `No clubs found in the ${categories.find(c => c.value === category)?.label || 'selected'} category.`
              : 'No clubs are currently available.'
            }
          </p>
          <Button asChild>
            <Link href="/clubs">View All Clubs</Link>
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our blog for the latest events, party guides, and nightlife tips in Prague.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}