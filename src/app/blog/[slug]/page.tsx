import { getPostBySlug, getAllPosts, getRecentPosts } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Best Clubs Prague Blog',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.meta_keywords?.join(', ') || `Prague nightlife, ${post.category}, Prague clubs`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  const recentPosts = await getRecentPosts(4);

  if (!post) {
    notFound();
  }

  // Filter out current post from recent posts
  const otherRecentPosts = recentPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-3">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge>{post.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-8 flex items-center justify-center text-white font-bold text-2xl">
              {post.title}
            </div>
          </div>

          {/* Post Content */}
          <div className="prose max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-8">
              <Separator className="mb-4" />
              <div className="flex items-center gap-2 mb-3">
                <Tag className="h-4 w-4" />
                <span className="font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Share & Navigation */}
          <div className="border-t pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Published by {post.author}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/blog">More Articles</Link>
                </Button>
                <Button asChild>
                  <Link href="/clubs">Explore Clubs</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Recent Posts */}
            {otherRecentPosts.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {otherRecentPosts.map((recentPost) => (
                    <div key={recentPost.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <Link 
                        href={`/blog/${recentPost.slug}`}
                        className="block hover:bg-muted/50 -m-2 p-2 rounded transition-colors"
                      >
                        <h3 className="font-medium line-clamp-2 mb-2">{recentPost.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Badge variant="outline" className="text-xs">
                            {recentPost.category}
                          </Badge>
                          <span>{new Date(recentPost.published_at).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {recentPost.excerpt}
                        </p>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" asChild className="w-full justify-start h-auto p-2">
                    <Link href="/blog">All Posts</Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full justify-start h-auto p-2">
                    <Link href="/blog?category=events">Events</Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full justify-start h-auto p-2">
                    <Link href="/blog?category=nightlife">Nightlife</Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full justify-start h-auto p-2">
                    <Link href="/blog?category=guides">Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Explore Prague Clubs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the best nightlife venues in Prague
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/clubs">Browse Clubs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}