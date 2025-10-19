import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Users, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epic Prague - Best Club Prague 2025 - EDM Electronic Dance Music",
  description: "Epic Prague: 2,500m² EDM club with world's #1 L-Acoustics sound system, 100m² LED screens & international DJs. Best electronic dance music club in Prague 2025.",
  keywords: "epic prague, best club prague, EDM prague, electronic music prague, house club prague, techno prague, best clubs prague 2025, clubs prague",
  openGraph: {
    title: "Epic Prague - Best EDM Club Prague 2025",
    description: "2,500m² of electronic music paradise with world's #1 L-Acoustics sound system & 100m² LED screens",
    images: ["/images/clubs/epic-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function EpicPrague() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/epic-prague-1.jpg"
          alt="Epic Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">THIS IS EPIC.</h1>
            <p className="text-xl md:text-2xl font-medium">Prague's most modern multi-genre music club</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">ABOUT EPIC</h2>

                <p className="text-lg mb-4 leading-relaxed">
                  Epic is Prague's most modern multi-genre music club with focus on electronic dance music. Twenty-five hundred square meters are spread over 3 underground floors.
                </p>

                <p className="text-lg mb-4 leading-relaxed">
                  Superstar DJs like Don Diablo, Oliver Heldens, Paul Van Dyk and many other world-famous DJs are playing at EPIC every weekend with the best resident DJs.
                </p>

                <p className="text-lg mb-4 leading-relaxed">
                  Guests can get their drinks at any of the 4 bars. Those with no fear of heights can view the main stage from the gallery upstairs, where the VIP zone is located. As expected, there is a separate VIP entrance. A world-class L-Acoustics K2 sound system, over 100 square metres of P3,9 LED screens, and state-of-the-art lighting all provide an incomparable acoustic and visual experience.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  EPIC belongs to one of the most famous clubs on the planet, and you definitely should not miss it!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <Music className="h-12 w-12 mb-4 text-purple-600" />
                    <h3 className="font-bold mb-2">World-Class Sound</h3>
                    <p className="text-sm text-gray-600">#1 L-Acoustics K2 System</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <Sparkles className="h-12 w-12 mb-4 text-purple-600" />
                    <h3 className="font-bold mb-2">100m² LED Screens</h3>
                    <p className="text-sm text-gray-600">Visual Spectacular</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                    <Users className="h-12 w-12 mb-4 text-purple-600" />
                    <h3 className="font-bold mb-2">2500m² Space</h3>
                    <p className="text-sm text-gray-600">3 Underground Floors</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.epicprague.com" target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href="http://www.instagram.com/epic_prague" target="_blank" rel="noopener noreferrer">
                      Follow on Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">THIS YOU DO NOT WANT TO MISS.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={`/images/clubs/epic-prague-${num}.jpg`}
                  alt={`Epic Prague ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
