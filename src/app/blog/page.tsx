import { getAllPosts } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Best Clubs Prague 2025',
  description: 'Stay updated with Prague nightlife news, events, party guides, and insider tips. Your source for the latest in Prague club scene.',
  keywords: 'Prague nightlife blog, Prague events, Prague party guide, nightlife news Prague, club events Prague',
};

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function BlogPage() {
  const posts = await getAllPosts();

  // Group posts by category
  const postsByCategory = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  const categories = Object.keys(postsByCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Prague Nightlife Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your ultimate guide to Prague&apos;s nightlife scene, events, and insider tips
        </p>
      </div>

      {posts.length > 0 ? (
        <>
          {/* Featured Post */}
          {posts[0] && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                      Featured
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{posts[0].category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(posts[0].published_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{posts[0].author}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3">{posts[0].title}</CardTitle>
                      <CardDescription className="text-base line-clamp-3">
                        {posts[0].excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild size="lg">
                        <Link href={`/blog/${posts[0].slug}`}>Read Full Article</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Posts by Category */}
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postsByCategory[category].slice(0, 6).map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        Article
                      </div>
                      <Badge className="absolute top-4 left-4">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <Button variant="outline" asChild className="w-full">
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {postsByCategory[category].length > 6 && (
                <div className="text-center mt-6">
                  <Button variant="outline" asChild>
                    <Link href={`/blog?category=${category.toLowerCase()}`}>
                      View More {category} Posts
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl font-semibold mb-4">No blog posts available</h3>
          <p className="text-muted-foreground mb-6">
            We&apos;re working on bringing you the latest Prague nightlife content.
          </p>
          <Button asChild>
            <Link href="/clubs">Explore Clubs Instead</Link>
          </Button>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mt-16">
        <Card className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest Prague nightlife news, events, and exclusive club recommendations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button asChild size="lg">
              <Link href="/clubs">Explore Clubs</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}