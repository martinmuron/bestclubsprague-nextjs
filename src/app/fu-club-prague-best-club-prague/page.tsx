import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FU Club Prague - Best Club Prague 2025 - Party Every Night Dlouha Street",
  description: "FU Club: Prague's hottest party destination on Dlouha Street. Daily parties, electrifying beats, light shows & non-stop entertainment. Best clubs Prague 2025.",
  keywords: "fu club prague, best club prague, dlouha street clubs, party prague, clubs prague, best clubs prague 2025, prague nightlife, daily parties prague",
  openGraph: {
    title: "FU Club Prague - Party Every Night on Dlouha Street",
    description: "Prague's newest party hotspot with daily events, top DJs & unforgettable nightlife on famous Dlouha Street",
    images: ["/images/clubs/fu-club-prague-best-club-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function FuClubPrague() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/fu-club-prague-best-club-prague-1.jpg"
          alt="FU Club Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4">THIS IS FU Club.</h1>
            <p className="text-xl md:text-2xl font-medium">Prague's Hottest Party Destination on Dlouha Street</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Located on Dlouha Street, FU Club is Prague's hottest party destination.</h2>

                <p className="text-lg mb-6 leading-relaxed">
                  As the newest addition to Best Clubs Prague, they are here to redefine the nightlife scene in the heart of Europe.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  At FU Club, they live by one rule: there's a party every single night. From heart-pounding beats to mesmerizing light shows, they deliver an unforgettable experience that will keep you dancing until the early hours.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  The spacious and stylish venue is designed to cater to your every party need. With top-notch service and a wide range of drinks at their bar, they ensure that every moment spent at FU Club is filled with excitement and enjoyment.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  Join them as they take Prague's club scene to a whole new level. Whether you're a local or a visitor, come and experience the electrifying energy that makes FU Club the ultimate party destination.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.fuclublounge.com" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-5 w-5" />
                      Visit Website
                    </a>
                  </Button>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Get ready to have the time of your life at FU Club, where the party never stops.</h3>
              </CardContent>
            </Card>
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
                  src={`/images/clubs/fu-club-prague-best-club-prague-${num}.jpg`}
                  alt={`FU Club Prague ${num}`}
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
