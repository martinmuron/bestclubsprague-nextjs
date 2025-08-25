import { getClubBySlug, getAllClubs } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, MapPin, Phone, Globe, Clock, DollarSign } from 'lucide-react';
import { Metadata } from 'next';

interface ClubPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const clubs = await getAllClubs();
  return clubs.map((club) => ({
    slug: club.slug,
  }));
}

export async function generateMetadata({ params }: ClubPageProps): Promise<Metadata> {
  const club = await getClubBySlug(params.slug);
  
  if (!club) {
    return {
      title: 'Club Not Found | Best Clubs Prague',
      description: 'The club you are looking for could not be found.',
    };
  }

  return {
    title: club.meta_title || club.title,
    description: club.meta_description || club.description,
    keywords: `${club.name}, Prague ${club.category}, ${club.category} Prague, Prague nightlife, clubs Prague`,
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function ClubPage({ params }: ClubPageProps) {
  const club = await getClubBySlug(params.slug);

  if (!club) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/clubs" className="hover:text-foreground">Clubs</Link>
          <span>/</span>
          <span className="text-foreground">{club.name}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mb-8">
        <div className="aspect-[21/9] bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg relative overflow-hidden mb-6">
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{club.name}</h1>
              <p className="text-xl opacity-90">{club.description}</p>
            </div>
          </div>
          <div className="absolute top-6 left-6">
            <Badge className="capitalize text-base px-3 py-1">
              {club.category.replace('-', ' ')}
            </Badge>
          </div>
          {club.featured && (
            <Badge variant="secondary" className="absolute top-6 right-6 text-base px-3 py-1">
              Featured
            </Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Club Info */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{club.name}</CardTitle>
                {club.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold">{club.rating}</span>
                    <span className="text-muted-foreground">/5</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: club.content }}
              />
            </CardContent>
          </Card>

          {/* Features */}
          {club.features && club.features.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {club.features.map((feature, index) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Club Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {club.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{club.address}</p>
                  </div>
                </div>
              )}

              {club.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      <a href={`tel:${club.phone}`} className="hover:underline">
                        {club.phone}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {club.website && (
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-sm text-muted-foreground">
                      <a 
                        href={club.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                      >
                        Visit Website
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {club.opening_hours && (
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-sm text-muted-foreground">{club.opening_hours}</p>
                  </div>
                </div>
              )}

              {club.price_range && (
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Price Range</p>
                    <p className="text-sm text-muted-foreground">{club.price_range}</p>
                  </div>
                </div>
              )}

              <Separator />

              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/clubs">Browse More Clubs</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Clubs CTA */}
      <div className="mt-16">
        <Card className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Explore More Prague Nightlife</h2>
          <p className="text-muted-foreground mb-6">
            Discover other amazing clubs and venues in Prague&apos;s vibrant nightlife scene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={`/clubs?category=${club.category}`}>
                Similar {club.category.replace('-', ' ')}s
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/clubs">All Clubs</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}