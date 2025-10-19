import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Shisha Prague 2025 | Top Hookah Lounges | Best Clubs Prague",
  description: "Discover the best shisha & hookah lounges in Prague 2025. Expert-tested venues including Moon Club & KU Bar. Complete guide to quality shisha in Prague.",
  keywords: "best shisha prague, hookah prague, shisha lounge prague, best hookah prague 2025, water pipe prague, best clubs prague, shisha bars prague",
  openGraph: {
    title: "Best Shisha Prague 2025 - Top Hookah Lounges Guide",
    description: "Expert-tested guide to Prague's best shisha & hookah lounges. Quality tobacco, perfect flow & great atmosphere.",
    images: ["/images/clubs/moon-club-best-club-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function BestShishaPrague() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Here you will find the best shisha / hookah lounges in prague.</h1>

        <h2 className="text-2xl font-semibold mb-8">we have tried and tasted various shisha places and come up with the list!</h2>

        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4">How did we create the list of the best shisha lounges in Prague for 2024?</h3>

            <p className="text-lg mb-6 leading-relaxed">
              Shisha....Hookah.... Water Pipe.... whatever you may call it. It is absolutely delicious when you get a perfect flow of flavors. The issue is, that a lot of time this just does not happen. Maybe the tobacco is burnt, maybe there is too much water or not enough water and so on. Unfortunately there are many places in Prague that look at Shisha as a high margin item and do not really care about the quality. No fear, we did all the homework for you. It took us about 3 months but we visited just about every Shisha / Hookah place in this beautiful city.
            </p>
          </CardContent>
        </Card>

        <h3 className="text-3xl font-bold mb-8">Shisha List</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/clubs/moon-club-best-club-prague-1.jpg"
                alt="Moon Club"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>MOON CLUB</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Dlouhá 709/26, 110 00 Staré Město</p>
              <p className="mb-4">
                Did you know Moon Club has Shisha? Some of the best Shisha actually! Moon is located right in the center of Prague and has an extraordinary view of the night sky through its glass roof. Not only great cocktails and a good party..... but a delicious well made Shisha as well.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/moon-club-best-club-prague">View Club Details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src="/images/clubs/ku-club-bar-best-clubs-prague-1.jpg"
                alt="KU Club & Bar"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>KU CLUB & BAR</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Rytířská 13, 110 00 Staré Město</p>
              <p className="mb-4">
                KU has recently started offering Shisha. We had to head out and give it a try! It was delicious and also the custom made pipes were extremely cool!
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/ku-club-bar-best-clubs-prague">View Club Details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-3">WHO ARE WE?</h3>
            <p className="text-lg leading-relaxed">
              We are not sure what you would call us. Party Enthusiasts? Drinkaholics? Partyaholics? We are people that like to go out to have a good time. We want the same for you and that is why we created the list of the best clubs in Prague.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
