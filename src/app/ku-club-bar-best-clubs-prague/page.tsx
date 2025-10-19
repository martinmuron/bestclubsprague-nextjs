import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KU Club Bar Prague - Best Club Prague 2025 - Cocktails & Shisha Since 2007",
  description: "KU Club Bar: 17+ years of Prague nightlife excellence. Cocktail masterclasses, premium shisha by Tantum Pipes & daily events. Best clubs Prague 2025.",
  keywords: "ku club bar prague, best club prague, cocktail bar prague, shisha prague, best clubs prague 2025, clubs prague, prague nightlife, cocktail masterclass",
  openGraph: {
    title: "KU Club Bar Prague - 17+ Years of Nightlife Excellence",
    description: "Daily events, cocktail masterclasses & premium Tantum Pipes shisha in the center of Prague",
    images: ["/images/clubs/ku-club-bar-best-clubs-prague-1.jpg"],
    type: "website",
    locale: "en_US",
  },
};

export default function KuClubBar() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/clubs/ku-club-bar-best-clubs-prague-1.jpg"
          alt="KU Club & Bar Prague"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-4">KU CLUB & BAR</h1>
            <p className="text-xl md:text-2xl font-medium">Over 17 Years of Prague Nightlife Excellence</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About KU Bar & Lounge</h2>

                <p className="text-lg mb-6 leading-relaxed">
                  Ku Bar has a very long history in Prague. It has been open for over 17 years. Located in the center of Prague on Rytirska street, it is a favorite of locals as well as tourists. Ku Bar offers a large selection of great-tasting cocktails, as well as a trendy and cool atmosphere. KU Club & Bar is open every single day of the week with different DJs and different events.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  If you are looking for an experience, they offer a cocktail masterclass, a 60-90 minute interactive class with your own barman about cocktail making.
                </p>

                <p className="text-lg mb-6 leading-relaxed">
                  We have also placed KU on the list of the best Shisha places for many reasons. They have a new Shisha provider by the name of Tantum Pipes. This is a Czech company that uses some of the best materials to create a high-quality Shisha.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="http://www.kuclubbar.cz" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-5 w-5" />
                      Visit Website
                    </a>
                  </Button>
                </div>
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
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/clubs/ku-club-bar-best-clubs-prague-1.jpg"
                alt="KU Club Bar Interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/clubs/ku-club-bar-best-clubs-prague-2.webp"
                alt="KU Club Bar Atmosphere"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/clubs/ku-club-bar-best-clubs-prague-3.webp"
                alt="KU Club Bar Experience"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
