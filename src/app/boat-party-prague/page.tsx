import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Wine, Sparkles } from "lucide-react";

export default function BoatPartyPrague() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/homepage/hero-background.jpg"
          alt="Boat Party Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <Badge className="mb-4 bg-blue-600">Special Event</Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-4">BOAT PARTY PRAGUE</h1>
            <p className="text-xl md:text-2xl font-medium">The Ultimate Floating Celebration on the Vltava River</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg mb-6 leading-relaxed">
                  Looking for an unforgettable night out on the Vltava River? Join us for the ultimate boat party in Prague! This isn't just any night out – it's a floating celebration featuring stunning views, fantastic music, and great company.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Music className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Top DJs</h3>
                      <p className="text-sm text-muted-foreground">Spinning the hottest beats across multiple decks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Dance Floors</h3>
                      <p className="text-sm text-muted-foreground">Spacious areas to dance under the stars</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Wine className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Full Bars</h3>
                      <p className="text-sm text-muted-foreground">Delicious cocktails and refreshing drinks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Sparkles className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Dress Code</h3>
                      <p className="text-sm text-muted-foreground">Dress to impress in your favorite party attire</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">TICKETS</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Secure your spot onboard now! Tickets are limited and selling fast, so don't miss out on this exclusive event.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://bit.ly/3KHV285" target="_blank" rel="noopener noreferrer">
                    Purchase Tickets
                  </a>
                </Button>
                <p className="text-lg mt-8 font-semibold">
                  Don't miss your chance to be a part of the most epic Boat Party in Prague! Gather your friends, grab your tickets, and prepare for a night of unparalleled excitement and unforgettable memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/homepage/hero-background.jpg"
                alt="Boat Party Atmosphere"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/homepage/cocktail-bg.jpg"
                alt="Party Vibes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
