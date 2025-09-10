import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Best Clubs Prague 2025",
  description: "Stay updated with Prague's nightlife scene. Find the best clubs, events, and party guides in Prague.",
  keywords: "Prague clubs blog, Prague nightlife, party guide Prague, club reviews Prague",
};

export default function BlogPage() {
  // Blog posts data (will be populated with actual content)
  const blogPosts = [
    {
      id: "1",
      title: "Where Should You Spend Your Prague NYE 2024-2025",
      slug: "where-should-you-spend-your-prague-nye-2024-2025",
      excerpt: "Discover the best New Year's Eve parties in Prague for an unforgettable celebration.",
      category: "Events",
      publishedAt: "2024-12-15",
      url: "/post/where-should-you-spend-your-prague-nye-2024-2025"
    },
    {
      id: "2",
      title: "Where Should You Party in Prague on Halloween",
      slug: "where-should-you-party-in-prague-on-halloween",
      excerpt: "The spookiest Halloween parties in Prague's best venues await you.",
      category: "Events",
      publishedAt: "2024-10-15",
      url: "/post/where-should-you-party-in-prague-on-halloween"
    },
    {
      id: "3",
      title: "Best Restaurant Prague",
      slug: "best-restaurant-prague",
      excerpt: "Discover the finest dining experiences in Prague after your night out.",
      category: "Dining",
      publishedAt: "2024-09-20",
      url: "/post/best-restaurant-prague"
    },
    {
      id: "4",
      title: "Halloween Weekend Featuring One Club",
      slug: "halloween-weekend-featuring-one-club",
      excerpt: "A special Halloween weekend celebration at one of Prague's premier venues.",
      category: "Events",
      publishedAt: "2024-10-20",
      url: "/post/halloween-weekend-featuring-one-club"
    },
    {
      id: "5",
      title: "Clubs in Prague",
      slug: "clubs-in-prague",
      excerpt: "Wait… there is how many clubs in Prague? The answer is way too many.",
      category: "Guide",
      publishedAt: "2024-08-15",
      url: "/post/clubs-in-prague"
    },
    {
      id: "6",
      title: "Best Thursday Party in Prague in 2022",
      slug: "best-thursday-party-in-prague-in-2022",
      excerpt: "Find the best Thursday night parties to kick off your weekend early.",
      category: "Nightlife",
      publishedAt: "2024-07-10",
      url: "/post/best-thursday-party-in-prague-in-2022"
    },
    {
      id: "7",
      title: "Party in Prague on Sunday",
      slug: "party-in-prague-on-sunday",
      excerpt: "Don't let Sunday stop the party - find the best Sunday night venues.",
      category: "Nightlife",
      publishedAt: "2024-06-20",
      url: "/post/party-in-prague-on-sunday"
    },
    {
      id: "8",
      title: "Best Afterparty in Prague Onyx",
      slug: "best-afterparty-in-prague-onyx",
      excerpt: "When the main party ends, the afterparty begins at Prague's hottest spots.",
      category: "Nightlife",
      publishedAt: "2024-05-25",
      url: "/post/best-afterparty-in-prague-onyx"
    },
    {
      id: "9",
      title: "Where Can You Get the Best Breakfast in Prague After a Long Night Out",
      slug: "where-can-you-get-the-best-breakfast-in-prague-after-a-long-night-out",
      excerpt: "The perfect spots to refuel after an epic night in Prague's club scene.",
      category: "Food",
      publishedAt: "2024-04-15",
      url: "/post/where-can-you-get-the-best-breakfast-in-prague-after-a-long-night-out"
    },
    {
      id: "10",
      title: "Partying in Prague on a Friday Night",
      slug: "partying-in-prague-on-a-friday-night",
      excerpt: "Friday night is party night - discover the best venues for your weekend kickoff.",
      category: "Nightlife",
      publishedAt: "2024-03-20",
      url: "/post/partying-in-prague-on-a-friday-night"
    },
    {
      id: "11",
      title: "Featured Spain: 5 Popular Nightclubs in Spain",
      slug: "featured-spain-5-popular-nightclubs-in-spain",
      excerpt: "A special feature exploring Spain's most popular nightlife destinations.",
      category: "International",
      publishedAt: "2024-02-28",
      url: "/post/featured-spain-5-popular-nightclubs-in-spain"
    },
    {
      id: "12",
      title: "Prague Wednesday Party - Ladies Night",
      slug: "prague-wednesday-party-ladies-night",
      excerpt: "The best Wednesday night parties for ladies in Prague's top venues.",
      category: "Events",
      publishedAt: "2024-01-15",
      url: "/post/prague"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best Clubs Prague Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with Prague's nightlife scene. Find the best clubs, events, and party guides in Prague.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.publishedAt}</span>
              </div>
              <CardTitle className="line-clamp-2 hover:text-primary">
                <Link href={post.url}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link href={post.url}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Experience Prague's Nightlife?
        </h2>
        <p className="mb-6">
          Discover the best clubs and venues in Prague
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
          <Link href="/clubs">Explore All Clubs</Link>
        </Button>
      </div>
    </div>
  );
}